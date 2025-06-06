import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ClassValue } from "clsx";
import { cn } from "@/lib/utils";

import Logo from "@/components/landing/ui/Logo";
import SocialLinksForm from "../_components/SocialLinksForm";

import { useLoadingContext } from "../../hooks/useLoadingContext";
import { sleep } from "../../utils/sleep";
import { activeLocations as nigerianCities } from "../data/state-cities";

import AddLogoIcon from "@/assets/icons/add-logo.svg?react";
import { validateFile } from "@/lib/validateFile";
import { toast } from "sonner";
import { truncateChar } from "@/lib/truncateChar";
import { useNavigate } from "react-router";

const BusinessInformationSchema = z.object({
  restaurantName: z.string().min(1, { message: "Restaurant name is required" }),
  about: z.string().min(1, { message: "Tell us about your resturant" }),
  city: z.string({ message: "Please select a city" }),
  state: z.string({ message: "Please select a state" }),
  businessAddress: z.string({ message: "Please enter your business address" }),
});

type TBusinessInfo = z.infer<typeof BusinessInformationSchema>;

function VendorBusinessInformation() {
  const [addedLinks, setAddedLinks] = useState<{ [key: string]: string }>({});
  const [logoImgFile, setLogoImgFile] = useState<File>();
  const [logoImg, setLogoImg] = useState("");
  const { handleLoading } = useLoadingContext();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const navigate = useNavigate();

  const form = useForm<TBusinessInfo>({
    resolver: zodResolver(BusinessInformationSchema),
  });

  function handleUpdateAddedLinks(fullUrl: string, platform: string) {
    setAddedLinks((p) => ({ ...p, [platform]: fullUrl }));
  }

  async function onSubmit(data: TBusinessInfo) {
    if (!logoImg) {
      toast.error("Please upload your logo image");
      return;
    }
    try {
      handleLoading("start");
      console.log({ ...data, links: addedLinks, logoImg });
      await sleep(2000);
      navigate("/vendor/dashboard", { replace: true });
    } catch (err) {
      console.error("Failed to verify OTP", err);
    } finally {
      handleLoading("end");
    }
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    const { valid, error } = validateFile(file, "image");

    if (!valid || !file) {
      toast.error(error);
      return;
    }

    setLogoImgFile(file);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setLogoImg(reader.result as string);
    };
  }

  const selectedState = form.watch("state");

  return (
    <section className="flex flex-1 flex-col justify-center p-4 md:p-10 md:py-2">
      <div className="overflow-y-scroll rounded-md p-1 md:h-[35rem] md:border md:border-[#0F5D8F29] md:p-5">
        <Logo className="mb-8 w-35 md:hidden" />

        <SectionHeaders>Basic Business Information</SectionHeaders>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-4 space-y-3"
          >
            {/* Basic info Field */}
            <FormField
              control={form.control}
              name="restaurantName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-light">
                    Restaurant name
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter your restaurant's name..."
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
              name="about"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-light">About us</FormLabel>
                  <FormControl>
                    <Textarea
                      className="rounded-sm border-[#00674B52] focus-visible:border-[#00674B52] focus-visible:ring-[#00674B52]/30"
                      placeholder="What can you say about your restaurant?"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <input
              onChange={handleFileChange}
              ref={inputRef}
              type="file"
              accept="image/*"
              className="hidden"
            />

            <Button
              variant="ghost"
              type="button"
              className="border-secondary/30 text-secondary hover:text-secondary rounded-full border text-sm"
              onClick={() => {
                inputRef.current?.click();
              }}
            >
              <span>
                {logoImgFile
                  ? truncateChar(logoImgFile.name, 15)
                  : "Upload Business Logo"}
              </span>
              <AddLogoIcon />
            </Button>

            {/* Address info fields */}

            <SectionHeaders>Address details</SectionHeaders>

            <div className="grid w-full grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem className="col-span-1">
                    <FormLabel className="text-sm font-light">State</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="rounded-sm border-[#00674B52] py-6 ring-[#00674B52]/30 md:py-5">
                          <SelectValue placeholder="Select State" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Array.from(nigerianCities.keys()).map((state) => (
                          <SelectItem key={state} value={state}>
                            {state}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem className="col-span-1">
                    <FormLabel className="text-sm font-light">City</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="rounded-sm border-[#00674B52] py-6 ring-[#00674B52]/30 md:py-5">
                          <SelectValue placeholder="Select City" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Array.from(nigerianCities.entries()).map(
                          ([state, cities]) =>
                            selectedState === state &&
                            cities.map((c) => (
                              <SelectItem key={c} value={c}>
                                {c}
                              </SelectItem>
                            )),
                        )}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="businessAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-light">
                    Business Address
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter your business address"
                      className="rounded-sm border-[#00674B52] py-6 ring-[#00674B52]/30 md:py-5"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div>
              <div className="flex items-baseline justify-between">
                <SectionHeaders className="my-1 text-xl font-medium">
                  Social media handle
                </SectionHeaders>
                <span className="text-primary text-sm">Optional</span>
              </div>
              <p className="text-xs text-gray-600">
                Enter your username to add these social accounts to your profile
              </p>

              <SocialLinksForm
                handleUpdateAddedLinks={handleUpdateAddedLinks}
                addedLinks={addedLinks}
              />
            </div>

            {/* Submit Button */}
            <Button
              disabled={form.formState.isSubmitting}
              type="submit"
              className="secondary-grad-bg my-3 w-full rounded-sm py-6 text-base md:py-5"
            >
              {form.formState.isSubmitting ? "creating..." : "Create Website"}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}

interface SectionHeadersProps {
  className?: ClassValue;
  children: React.ReactNode;
}

function SectionHeaders({ className, children }: SectionHeadersProps) {
  return (
    <h1 className={cn("my-3 text-lg font-semibold", className)}>{children} </h1>
  );
}

export default VendorBusinessInformation;
