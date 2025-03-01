import { TabsTrigger } from "@/components/dashboard/ui/TabsTrigger";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";

const TABS = [
  {
    value: "all",
    content: "All tabs",
  },
  {
    value: "Offer",
    content: "Offers",
  },
  {
    value: "Featured",
    content: "features",
  },
  {
    value: "soft-drinks",
    content: "soft drinks",
  },
] as const;

function RestaurantTabs() {
  return (
    <Tabs defaultValue="all" className="w-[400px]">
      <TabsList className="bg-transparent gap-3">
        {TABS.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="capitalize px-3 font-medium text-[#A5A5A5]"
          >
            {tab.value.split("-").join(" ")}
          </TabsTrigger>
        ))}
      </TabsList>
      {TABS.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
}

export default RestaurantTabs;
