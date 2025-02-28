import { FieldValues, useFormContext } from "react-hook-form";
import Logo from "@/components/landing/ui/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import FormHeader from "../../ui/FormHeader";
import GoogleSignInButton from "../../ui/GoogleSignInBtn";
import { CustomLink } from "../../ui/CustomLink";
import AuthDivider from "../../ui/AuthDivider";

export default function SignUpForm({
  onNext,
}: {
  onNext: (data: FieldValues) => void;
}) {
  // Initialize form with react-hook-form & Zod
  const form = useFormContext();

  return (
    <section className="flex flex-1 flex-col justify-center md:mt-15 p-4 md:p-10">
      <Logo className="w-35 md:hidden my-7 mt-12" />
      <FormHeader title="Create an Account">
        Please enter your details to create your account
      </FormHeader>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onNext)} className="space-y-3 mt-8">
          {/* Email Field */}
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
                    type="email"
                    placeholder="Enter your email address"
                    className="py-6 md:py-5 rounded-sm border-[#00674B52] ring-[#00674B52]/30"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone Number Field */}
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
                    placeholder="Enter your phone number"
                    className="py-6 md:py-5 rounded-sm border-[#00674B52] ring-[#00674B52]/30"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button
            disabled={form.formState.isSubmitting}
            type="submit"
            className="text-base py-6 md:py-5 w-full secondary-grad-bg my-3 rounded-sm"
          >
            {form.formState.isSubmitting ? "processing" : "Continue"}
          </Button>

          {/* Divider */}
          <AuthDivider />

          {/* Google Sign-In */}
          <GoogleSignInButton />

          {/* Terms & Policy */}
          <p className="text-xs text-center md:max-w-[90%] mx-auto">
            By clicking “Sign Up,” you agree to YumDash{" "}
            <CustomLink>Terms of Service</CustomLink> and acknowledge that Ray’s
            resort <CustomLink>Privacy Policy</CustomLink> applies to you.
          </p>
        </form>
      </Form>
    </section>
  );
}
