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
    <section className="flex flex-1 flex-col justify-center p-4 md:mt-15 md:p-10">
      <Logo className="my-7 mt-12 w-35 md:hidden" />
      <FormHeader title="Let's Know More About You">
        Secure Your Account
      </FormHeader>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-4">
          {/* First & Last Name Fields */}
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
            type="submit"
            className="secondary-grad-bg my-3 w-full rounded-sm py-6 text-base md:py-5"
          >
            Signup
          </Button>

          {/* Terms & Policy */}
          <p className="mx-auto text-center text-xs text-gray-700 md:max-w-[90%]">
            By clicking “Sign Up,” you agree to YumDash{" "}
            <CustomLink>Terms of Service</CustomLink> and acknowledge that Ray’s
            resort <CustomLink>Privacy Policy</CustomLink> applies to you.
          </p>
        </form>
      </Form>
    </section>
  );
}
