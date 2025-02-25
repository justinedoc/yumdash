import { useMemo } from "react";
import { useNavigate, useParams } from "react-router";
import { orders } from "../data/temp/orders";
import { format } from "date-fns";
import { ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Timeline from "../_components/TimeLine";

function SelectedFoodOrder() {
  const { id } = useParams();
  const navigate = useNavigate();

  const selectedOrder = useMemo(
    () => orders.find((order) => order.id === id),
    [id]
  );

  if (!selectedOrder)
    return (
      <div className="flex flex-col items-center justify-center h-84 text-gray-500">
        <Search className="w-12 h-12 mb-4" />
        <p className="text-lg font-medium">No orders found</p>
        <p className="text-sm">This order may have been deleted by you</p>
      </div>
    );

  return (
    <section className="p-4 md:p-6 bg-[#fafafa]">
      <header className="space-y-5">
        <Button
          onClick={() => navigate(-1)}
          variant={"outline"}
          size={"sm"}
          className="rounded-sm"
        >
          <ArrowLeft /> Back
        </Button>

        <h1 className="text-xl font-medium">
          {format(new Date(selectedOrder.createdAt), "PPPp")}
        </h1>
      </header>
      <Timeline order={selectedOrder} />
    </section>
  );
}

export default SelectedFoodOrder;
