import { useState } from "react";
import { FieldValues, useFormContext } from "react-hook-form";
import { IoEye, IoEyeOff } from "react-icons/io5";

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
import { CustomLink } from "../../ui/CustomLink";
import { PasswordChecks } from "../../utils/PasswordChecks";

// function for password checks
function validatePassword(password: string) {
  return [
    {
      message: "One letter",
      isChecked: /[a-zA-Z]/.test(password),
    },
    {
      message: "One number",
      isChecked: /[0-9]/.test(password),
    },
    {
      message: "One special character",
      isChecked: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    },
    {
      message: "6 or more characters",
      isChecked: password.length >= 6,
    },
  ];
}

export default function SignUpDetailsForm({
  onSubmit,
}: {
  onSubmit: (data: FieldValues) => void;
}) {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  // Initializing form with react-hook-form and Zod
  const form = useFormContext();

  const passwordValue = form.watch("password");

  return (
    <section className="flex flex-1 flex-col justify-center md:mt-15 p-4 md:p-10">
      <Logo className="w-35 md:hidden my-7 mt-12" />
      <FormHeader title="Let's Know More About You">
        Secure Your Account
      </FormHeader>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-8">
          {/* First & Last Name Fields */}
          <div className="w-full flex flex-col md:flex-row gap-3">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-[#2D2D2D] text-sm font-light">
                    First Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your first name"
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
              name="lastName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-[#2D2D2D] text-sm font-light">
                    Last Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your last name"
                      className="py-6 md:py-5 rounded-sm border-[#00674B52] ring-[#00674B52]/30"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Password Field */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel className="text-[#2D2D2D] text-sm font-light">
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    type={isPasswordHidden ? "password" : "text"}
                    placeholder="Enter your password"
                    className="py-6 md:py-5 rounded-sm border-[#00674B52] ring-[#00674B52]/30"
                    {...field}
                  />
                </FormControl>

                {/* Toggle Password Visibility */}
                <aside
                  className="absolute top-0 right-0 cursor-pointer flex items-center gap-2 text-md"
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
            type="submit"
            className="py-6 md:py-5 w-full secondary-grad-bg my-3 rounded-sm text-base"
          >
            Signup
          </Button>

          {/* Terms & Policy */}
          <p className="text-xs text-center md:max-w-[90%] mx-auto text-gray-700">
            By clicking “Sign Up,” you agree to YumDash{" "}
            <CustomLink>Terms of Service</CustomLink> and acknowledge that Ray’s
            resort <CustomLink>Privacy Policy</CustomLink> applies to you.
          </p>
        </form>
      </Form>
    </section>
  );
}
