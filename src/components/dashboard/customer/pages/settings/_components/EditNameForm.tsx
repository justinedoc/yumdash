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
import { DialogTrigger } from "@/components/ui/dialog";

const EditNameFormSchema = z.object({
  firstname: z.string().min(2, "firstname must be more than 2 characters"),
  lastname: z.string().min(2, "lastname must be more than 2 characters"),
});

function EditNameForm() {
  const form = useForm({
    resolver: zodResolver(EditNameFormSchema),
  });

  function onSubmit(data: FieldValues) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="firstname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Firstname</FormLabel>
              <FormControl>
                <Input
                  className="rounded-sm"
                  placeholder="Enter your firstname..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Lastname</FormLabel>
              <FormControl>
                <Input
                  className="rounded-sm"
                  placeholder="Enter your lastname..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full">
          <DialogTrigger asChild>
            <Button
              variant={"secondary"}
              className="secondary-grad-bg ml-auto block text-white"
              type="submit"
            >
              Save
            </Button>
          </DialogTrigger>
        </div>
      </form>
    </Form>
  );
}

export default EditNameForm;
