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
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router";
import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";

export default function LoginForm({
  onSubmit,
}: {
  onSubmit: (data: FieldValues) => void;
}) {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  // Initialize form with react-hook-form & Zod
  const form = useFormContext();

  return (
    <section className="flex flex-1 flex-col justify-center md:mt-15 p-4 md:p-10">
      <Logo className="w-35 md:hidden my-7 mt-12" />
      <FormHeader title="Welcome Back!">
        Please Enter Your Details To Start Ordering
      </FormHeader>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 mt-8">
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

          {/* Password Number Field */}
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

                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center justify-between">
            <FormField
              control={form.control}
              name="rememberMe"
              render={({ field }) => (
                <FormItem className="flex items-center">
                  <FormControl>
                    <Checkbox
                      id="terms1"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <label htmlFor="terms1">Remember me</label>
                </FormItem>
              )}
            />

            <Link to={"/forgot-password"} className="text-primary">
              Forgot Password?
            </Link>
          </div>

          {/* Submit Button */}
          <Button
            disabled={form.formState.isSubmitting}
            type="submit"
            className="text-base py-6 md:py-5 w-full secondary-grad-bg my-3 rounded-sm"
          >
            {form.formState.isSubmitting ? "Authenticating..." : "Login"}
          </Button>

          {/* Divider */}
          <div className="relative my-3">
            <div className="h-[0.1rem] bg-[#5799E333]" />
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white w-1/3 font-medium text-center text-sm text-[#011933CC] h-fit">
              OR
            </span>
          </div>

          {/* Google Sign-In */}
          <GoogleSignInButton />
        </form>
      </Form>
    </section>
  );
}
