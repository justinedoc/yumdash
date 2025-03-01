import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import DeliveryTab from "./DeliveryTab";

function CheckoutBox() {
  const tabsTriggerStyle =
    "data-[state=active]:bg-secondary data-[state=active]:text-white rounded-sm";

  return (
    <div className="mx-auto md:col-span-1 px-3">
      <Tabs
        defaultValue="delivery"
        className="border border-[#0F5D8F29] p-2 rounded-sm"
      >
        <TabsList className="mx-auto bg-white border rounded-sm">
          <TabsTrigger className={cn(tabsTriggerStyle)} value="delivery">
            Delivery
          </TabsTrigger>
          <TabsTrigger className={cn(tabsTriggerStyle)} value="eat-in/pick-up">
            Eat In/Pick Up
          </TabsTrigger>
        </TabsList>
        <TabsContent value="delivery">
          <DeliveryTab />
        </TabsContent>
        <TabsContent value="eat-in/pick-up">
          Change your password here.
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default CheckoutBox;
