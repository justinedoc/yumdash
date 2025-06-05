import { Button } from "@/components/ui/button";
import FormHeader from "../../ui/FormHeader";
import Logo from "@/components/landing/ui/Logo";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import AuthDivider from "../../ui/AuthDivider";
import { CustomLink } from "../../ui/CustomLink";
import GoogleSignInButton from "../../ui/GoogleSignInBtn";

import { PasswordChecks } from "../../utils/PasswordChecks";
import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { validatePassword } from "../../utils/validatePassword";
import { useFormContext } from "react-hook-form";
import { TVendorSignup } from "../page/Signup";

function SignupForm({
  onSubmit,
}: {
  onSubmit: (data: TVendorSignup) => Promise<void>;
}) {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const form = useFormContext<TVendorSignup>();

  const passwordValue = form.watch("password");

  return (
    <section className="flex flex-1 flex-col justify-center p-4 md:mt-15 md:p-10">
      <Logo className="my-7 mt-12 w-35 md:hidden" />
      <FormHeader title="Create an Account">
        Please enter your details to create your account
      </FormHeader>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-3">
          <div className="flex w-full flex-col gap-3 md:flex-row">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-sm font-light text-[#2D2D2D]">
                    First Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your first name"
                      className="rounded-sm border-[#00674B52] py-6 ring-[#00674B52]/30 md:py-5"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-sm font-light text-[#2D2D2D]">
                    Last Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your last name"
                      className="rounded-sm border-[#00674B52] py-6 ring-[#00674B52]/30 md:py-5"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-light text-[#2D2D2D]">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    className="rounded-sm border-[#00674B52] py-6 ring-[#00674B52]/30 md:py-5"
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
                <FormLabel className="text-sm font-light text-[#2D2D2D]">
                  Phone
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your phone number"
                    type="tel"
                    className="rounded-sm border-[#00674B52] py-6 ring-[#00674B52]/30 md:py-5"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password Field */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel className="text-sm font-light text-[#2D2D2D]">
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    type={isPasswordHidden ? "password" : "text"}
                    placeholder="Enter your password"
                    className="rounded-sm border-[#00674B52] py-6 ring-[#00674B52]/30 md:py-5"
                    {...field}
                  />
                </FormControl>

                {/* Toggle Password Visibility */}
                <aside
                  className="text-md absolute top-0 right-0 flex cursor-pointer items-center gap-2"
                  onClick={() => setIsPasswordHidden((prev) => !prev)}
                >
                  <span className="font-semibold text-gray-500">
                    {isPasswordHidden ? "Show" : "Hide"}
                  </span>
                  {isPasswordHidden ? <IoEye /> : <IoEyeOff />}
                </aside>

                {/* Password Checks */}
                {passwordValue && (
                  <PasswordChecks
                    password={passwordValue}
                    checks={validatePassword}
                  />
                )}

                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button
            disabled={form.formState.isSubmitting}
            type="submit"
            className="secondary-grad-bg my-3 w-full rounded-sm py-6 text-base md:py-5"
          >
            {form.formState.isSubmitting ? "processing" : "Continue"}
          </Button>

          {/* Divider */}
          <AuthDivider />

          {/* Google Sign-In */}
          <GoogleSignInButton />

          {/* Terms & Policy */}
          <p className="mx-auto text-center text-xs md:max-w-[90%]">
            By clicking “Sign Up,” you agree to YumDash{" "}
            <CustomLink>Terms of Service</CustomLink> and acknowledge that Ray’s
            resort <CustomLink>Privacy Policy</CustomLink> applies to you.
          </p>
        </form>
      </Form>
    </section>
  );
}

export default SignupForm;
