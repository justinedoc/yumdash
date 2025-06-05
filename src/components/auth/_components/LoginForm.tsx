import { useFormContext } from "react-hook-form";
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

import FormHeader from "../ui/FormHeader";
import GoogleSignInButton from "../ui/GoogleSignInBtn";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router";
import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { TVendorLogin } from "../vendor/page/Login";
import { TLogin } from "../customer/page/Login";

type TLoginFormFields = TVendorLogin | TLogin;

export default function LoginForm({
  onSubmit,
}: {
  onSubmit: (data: TLoginFormFields) => void;
}) {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const form = useFormContext<TLoginFormFields>();

  return (
    <section className="flex flex-1 flex-col justify-center p-4 md:mt-15 md:p-10">
      <Logo className="my-7 mt-12 w-35 md:hidden" />
      <FormHeader title="Welcome Back!">
        Please Enter Your Details To Start Ordering
      </FormHeader>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-3">
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

          {/* Password Number Field */}
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
            className="secondary-grad-bg my-3 w-full rounded-sm py-6 text-base md:py-5"
          >
            {form.formState.isSubmitting ? "Authenticating..." : "Login"}
          </Button>

          {/* Divider */}
          <div className="relative my-3">
            <div className="h-[0.1rem] bg-[#5799E333]" />
            <span className="absolute -top-3 left-1/2 h-fit w-1/3 -translate-x-1/2 bg-white text-center text-sm font-medium text-[#011933CC]">
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
