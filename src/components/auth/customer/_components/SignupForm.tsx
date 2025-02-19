import FormHeader from "../../ui/FormHeader";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Logo from "@/components/landing/ui/Logo";
import { CustomLink } from "../../ui/CustomLink";
import GoogleSignInButton from "../../ui/GoogleSignInBtn";

const formSchema = z.object({
  email: z.string().email({
    message: "Input a valid email address",
  }),
  phoneNumber: z.string().min(11, "Please enter a valid phone number"),
});

function SignupForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      phoneNumber: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <section className="flex flex-1 flex-col justify-center p-4 md:p-10">
      <Logo className=" w-35 md:hidden my-8" />
      <FormHeader title="Create an Account">
        Please Input Your Details To Create Your Account
      </FormHeader>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 mt-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#2D2D2D] text-sm font-light">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Input email address"
                    className="py-6 md:py-5 rounded-sm border-[#00674B52] ring-[#00674B52]/30"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#2D2D2D] text-sm font-light">
                  Phone
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Input phone number"
                    className="py-6 md:py-5 rounded-sm border-[#00674B52] ring-[#00674B52]/30"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="py-6 md:py-5 w-full secondary-grad-bg my-3 rounded-sm"
          >
            Continue
          </Button>

          <div className="relative my-3">
            <div className="h-[0.1rem] bg-[#5799E333]"></div>
            <span className="absolute top-0 left-1/2 -translate-1/2 bg-white w-1/3 font-medium text-center text-sm text-[#011933CC]">
              OR
            </span>
          </div>

          <GoogleSignInButton />

          <p className="text-xs text-center md:max-w-[70%] mx-auto">
            By clicking on “Sign Up” you have agreed to YumDash{" "}
            <CustomLink>Terms of service</CustomLink> and acknowledge that Ray’s
            resort <CustomLink>Privacy Policy</CustomLink> applies to you
          </p>
        </form>
      </Form>
    </section>
  );
}

export default SignupForm;
