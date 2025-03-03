import { TabsTrigger } from "@/components/dashboard/ui/TabsTrigger";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import All from "./tabs/All";
import Offer from "./tabs/Offer";
import Featured from "./tabs/Featured";
import SoftDrinks from "./tabs/SoftDrinks";
import CheckoutBox from "./CheckoutBox";

const TABS = [
  {
    value: "all",
    content: <All />,
  },
  {
    value: "Offer",
    content: <Offer />,
  },
  {
    value: "Featured",
    content: <Featured />,
  },
  {
    value: "soft-drinks",
    content: <SoftDrinks />,
  },
] as const;

function RestaurantTabs() {
  return (
    <Tabs defaultValue="all">
      <TabsList className="bg-transparent gap-3">
        {TABS.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="md:text-base text-sm capitalize px-3 font-medium text-[#A5A5A5]"
          >
            {tab.value.split("-").join(" ")}
          </TabsTrigger>
        ))}
      </TabsList>

      <div className="md:px-2 grid grid-cols-1 md:gap-0 gap-y-6 md:grid-cols-3">
        {TABS.map((tab) => (
          <TabsContent className="col-span-2 p-3 md:p-0" key={tab.value} value={tab.value}>
            {tab.content}
          </TabsContent>
        ))}

        <CheckoutBox />
      </div>
    </Tabs>
  );
}

export default RestaurantTabs;
