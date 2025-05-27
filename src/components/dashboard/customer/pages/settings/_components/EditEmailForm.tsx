import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
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

const EditEmailFormSchema = z.object({
  email: z
    .string({ message: "Email is required" })
    .email("Please input a valid email"),
});

interface EditEmailFormProps {
  onSubmit: (email: string) => void;
}

function EditEmailForm({ onSubmit }: EditEmailFormProps) {
  const form = useForm({ resolver: zodResolver(EditEmailFormSchema) });

  function submitHandler(data: FieldValues) {
    onSubmit(data.email as string);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submitHandler)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your email..."
                  className="rounded-sm"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex w-full justify-end">
          <Button type="submit" variant="secondary" className="text-white">
            Save
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default EditEmailForm;
