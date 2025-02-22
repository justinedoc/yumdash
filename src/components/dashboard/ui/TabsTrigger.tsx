import { cn } from "@/lib/utils";
import * as TabsPrimitive from "@radix-ui/react-tabs";

export function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "border border-transparent data-[state=active]:border-b-primary data-[state=active]:text-primary inline-flex items-center py-1 px-4 bg-transparent",
        className
      )}
      {...props}
    />
  );
}
