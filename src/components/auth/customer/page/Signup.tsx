import { useState } from "react";
import AuthPromptBanner from "../../ui/AuthPromptBanner";
import AuthContainer from "../_components/AuthContainer";
import SignUpDetailsForm from "../_components/SignupDetailsForm";
import SignUpForm from "../_components/SignupForm";
import { ArrowLeft } from "lucide-react";

import { useForm, FormProvider, FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoadingContext } from "../../hooks/useLoadingContext";
import { useNavigate } from "react-router";
import { sleep } from "../../utils/sleep";

// Schema for step 1
const firstStepSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  phoneNumber: z.string().min(11, "Please enter a valid phone number"),
});

// Schema for step 2
const secondStepSchema = z.object({
  firstName: z.string().min(2, { message: "First name is required" }),
  lastName: z.string().min(2, { message: "Last name is required" }),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

function Signup() {
  const [step, setStep] = useState(1);
  const [firstStepData, setFirstStepData] = useState({});
  const { handleLoading } = useLoadingContext();
  const navigate = useNavigate();

  const firstStepMethods = useForm<z.infer<typeof firstStepSchema>>({
    resolver: zodResolver(firstStepSchema),
    defaultValues: {
      email: "",
      phoneNumber: "",
    },
  });

  const secondStepMethods = useForm<z.infer<typeof secondStepSchema>>({
    resolver: zodResolver(secondStepSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      password: "",
    },
  });

  const nextStep = (data: FieldValues) => {
    setFirstStepData(data);
    setStep((cur) => cur + 1);
  };

  const prevStep = () => setStep((cur) => (cur > 1 ? cur - 1 : cur));

  const onSubmitSecondStep = async (data: FieldValues): Promise<void> => {
    const finalData = { ...firstStepData, ...data };

    try {
      handleLoading("start");
      await sleep(2000);
      console.log("Final Data:", finalData);
      navigate("/signup/verify-otp", {
        state: finalData,
      });
      // TODO: Add api call here
    } catch (error) {
      console.error("Error during submission:", error);
    } finally {
      handleLoading("end");
    }
  };

  return (
    <AuthContainer>
      <AuthPromptBanner to="login">
        Already on Yumdash?
      </AuthPromptBanner>
      {step > 1 && (
        <button
          onClick={prevStep}
          className="text-xs absolute md:left-[37%] left-3 top-3 flex items-center gap-1 cursor-pointer"
        >
          <ArrowLeft />
        </button>
      )}

      {step === 1 && (
        <FormProvider {...firstStepMethods}>
          <SignUpForm onNext={nextStep} />
        </FormProvider>
      )}
      {step === 2 && (
        <FormProvider {...secondStepMethods}>
          <SignUpDetailsForm onSubmit={onSubmitSecondStep} />
        </FormProvider>
      )}
    </AuthContainer>
  );
}

export default Signup;
