import { useMemo } from "react";
import { useNavigate, useParams } from "react-router";
import { orders } from "../data/temp/orders";
import { format } from "date-fns";
import { ArrowLeft, ChevronRight, MapPin, Search, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import Timeline from "../_components/TimeLine";
import { restaurants } from "../data/temp/restaurants";
import { formatAddress } from "../../utils/formatAddress";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import ManageOrder from "../_components/ManageOrder";

function SelectedFoodOrder() {
  const { id } = useParams();
  const navigate = useNavigate();

  const selectedOrder = useMemo(
    () => orders.find((order) => order.id === id),
    [id]
  );

  if (!selectedOrder) {
    return (
      <div className="flex flex-col items-center justify-center h-84 text-gray-500">
        <Search className="w-12 h-12 mb-4" />
        <p className="text-lg font-medium">No orders found</p>
        <p className="text-sm">This order may have been deleted by you</p>
      </div>
    );
  }

  const restaurant = restaurants.find(
    (restaurant) => restaurant.id === selectedOrder.restaurant.id
  );

  if (!restaurant) {
    return (
      <div className="flex flex-col items-center justify-center h-84 text-gray-500">
        <Search className="w-12 h-12 mb-4" />
        <p className="text-lg font-medium">No orders found</p>
        <p className="text-sm">Resturant not avaliables</p>
      </div>
    );
  }

  return (
    <section className="p-4 md:p-6 bg-[#fafafa] md:max-w-5xl mx-auto">
      <header className="space-y-5">
        <Button
          onClick={() => navigate(-1)}
          variant={"outline"}
          size={"sm"}
          className="rounded-sm bg-transparent shadow-none"
        >
          <ArrowLeft /> Back
        </Button>

        <h1 className="text-xl font-medium">
          {format(new Date(selectedOrder.createdAt), "PPPp")}
        </h1>
      </header>
      <main className="mt-7 md:mt-12">
        <div className="flex md:gap-0 gap-7 flex-col md:flex-row justify-between">
          <p className="flex gap-1 items-center">
            <span className="underline">Tracking ID</span>
            <ChevronRight size={18} />
            <span className="text-sm font-medium text-gray-500">
              #{selectedOrder.orderCode}
            </span>
          </p>

          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-1.5">
              <Store />
              <div className="text-sm text-gray-500 leading-3.5 font-medium">
                {restaurant.hours.closingTime ? (
                  <p>Open until {restaurant.hours.closingTime} </p>
                ) : (
                  <p>Open 24/7</p>
                )}
                <p className="text-base text-black">{restaurant.name}</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin />
              <div className="text-sm text-gray-500 leading-3.5 font-medium">
                <p>Deliver to</p>
                <HoverCard>
                  <HoverCardTrigger className="text-base text-black cursor-pointer">
                    {formatAddress(selectedOrder).slice(0, 10) + "..."}
                  </HoverCardTrigger>
                  <HoverCardContent>
                    {formatAddress(selectedOrder)}
                  </HoverCardContent>
                </HoverCard>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between mt-5 md:mt-9">
          <Timeline order={selectedOrder} />
          <ManageOrder />
        </div>
      </main>
    </section>
  );
}

export default SelectedFoodOrder;
