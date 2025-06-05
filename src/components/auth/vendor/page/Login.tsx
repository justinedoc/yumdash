import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthPromptBanner from "../../ui/AuthPromptBanner";
import { sleep } from "../../utils/sleep";
import { useLoadingContext } from "../../hooks/useLoadingContext";
import { useNavigate } from "react-router";
import LoginForm from "../../_components/LoginForm";
import { toast } from "sonner";

const LoginFormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters long",
  }),
  rememberMe: z.boolean().optional(),
});

export type TVendorLogin = z.infer<typeof LoginFormSchema>;

function Login() {
  const { handleLoading } = useLoadingContext();
  const navigate = useNavigate();
  const methods = useForm<TVendorLogin>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (data: TVendorLogin): Promise<void> => {
    try {
      handleLoading("start");
      await sleep(2000);
      console.log("Final Data:", data);
      toast.success("Login successful");
      navigate("/vendor/dashboard", {
        replace: true,
      });
      // TODO: Add api call here
    } catch (error) {
      console.error("Error during submission:", error);
    } finally {
      handleLoading("end");
    }
  };
  return (
    <>
      <AuthPromptBanner to="vendor/signup">
        Don’t have an account?
      </AuthPromptBanner>
      <FormProvider {...methods}>
        <LoginForm onSubmit={onSubmit} />
      </FormProvider>
    </>
  );
}

export default Login;
