import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const PackFormSchema = z.object({
  combo: z.string().nonempty(),
  drink: z.number().int().positive(),
});

function PackForm() {
  const form = useForm({
    resolver: zodResolver(PackFormSchema),
  });

  function onSubmit(data: FieldValues) {
    console.log(data);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="combo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Citizen Chips Combo</FormLabel>
              <FormDescription>Choose one </FormDescription>
              <FormControl>
                <Input placeholder="Citizen Chips Combo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

export default PackForm;
