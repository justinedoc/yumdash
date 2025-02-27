import { useState, useMemo, useCallback, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  SlidersHorizontal,
  Loader2,
  Search,
  Calendar,
  Store,
  Pizza,
  CreditCard,
  Truck,
} from "lucide-react";
import FoodOrderTable from "../_components/FoodOrderTable";
import { OrderStatus } from "../_components/Status";
import { orders } from "../data/temp/orders";
import { OrderDetails, OrderFilters } from "@/types/foodOrderTypes";
import { useOrderFiltering } from "../hooks/useOrderFiltering";

// Define the complete set of order statuses based on our updated types
const ORDER_STATUSES: { value: OrderStatus | "all"; label: string }[] = [
  { value: "all", label: "All Orders" },
  { value: "created", label: "Created" },
  { value: "confirmed", label: "Confirmed" },
  { value: "preparing", label: "Preparing" },
  { value: "ready_for_pickup", label: "Ready for Pickup" },
  { value: "out_for_delivery", label: "Out for Delivery" },
  { value: "delivered", label: "Delivered" },
  { value: "cancelled", label: "Cancelled" },
  { value: "refunded", label: "Refunded" },
];

// Define delivery types with proper typing
const FULFILLMENT_TYPES = [
  { value: "all", label: "All Types" },
  { value: "delivery", label: "Delivery" },
  { value: "pickup", label: "Pickup" },
] as const;

// Define payment statuses with proper typing
const PAYMENT_STATUSES = [
  { value: "all", label: "All Statuses" },
  { value: "pending", label: "Pending" },
  { value: "processing", label: "Processing" },
  { value: "paid", label: "Paid" },
  { value: "failed", label: "Failed" },
  { value: "refunded", label: "Refunded" },
] as const;

// Initial filter state matching our updated OrderFilters type
const initialFilters: OrderFilters = {
  status: "all",
  restaurant: "",
  dateFrom: "",
  dateTo: "",
  searchTerm: "",
  fulfillmentType: "all",
  paymentStatus: "all",
};

interface FoodOrderProps {
  initialOrders?: OrderDetails[];
  isLoading?: boolean;
}

function FoodOrder({ isLoading = false }: FoodOrderProps) {
  const [isPending, startTransition] = useTransition();
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState<OrderFilters>(initialFilters);
  const [tempFilters, setTempFilters] = useState<OrderFilters>(filters);

  // Use our enhanced filtering hook
  const filteredOrders = useOrderFiltering(orders, filters);

  // Type-safe filter change handler
  const handleFilterChange = useCallback(
    <K extends keyof OrderFilters>(key: K, value: string) => {
      setTempFilters((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  // Filter application handler with transition
  const handleApplyFilters = useCallback(() => {
    startTransition(() => {
      setFilters(tempFilters);
      setFilterOpen(false);
    });
  }, [tempFilters]);

  // Filter clearing handler
  const clearFilters = useCallback(() => {
    startTransition(() => {
      setFilters(initialFilters);
      setTempFilters(initialFilters);
    });
  }, []);

  // Enhanced active filters check
  const hasActiveFilters = useMemo(() => {
    return Object.entries(filters).some(([key, value]) => {
      if (
        key === "status" ||
        key === "fulfillmentType" ||
        key === "paymentStatus"
      ) {
        return value !== "all";
      }
      if (key === "dateFrom" || key === "dateTo") {
        return value !== null;
      }
      return Boolean(value);
    });
  }, [filters]);

  return (
    <section className="p-4 md:p-6 bg-[#fafafa] w-full space-y-7">
      <header className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div>
          <h1 className="font-medium text-2xl text-gray-900">Food Orders</h1>
          <p className="text-gray-500 mt-1">
            Manage and track all your food orders
          </p>
        </div>

        <div className="flex gap-4 items-center mt-4 justify-end md:mt-0">
          <Button
            variant="outline"
            className="rounded-md text-secondary flex items-center gap-2"
            onClick={() => setFilterOpen(true)}
            disabled={isLoading}
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filter Orders
          </Button>

          {hasActiveFilters && (
            <Button
              variant="ghost"
              onClick={clearFilters}
              className="rounded-md text-secondary"
              disabled={isPending || isLoading}
            >
              {isPending ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : null}
              Clear Filters
            </Button>
          )}
        </div>
      </header>

      <Dialog open={isFilterOpen} onOpenChange={setFilterOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Filter Orders</DialogTitle>
          </DialogHeader>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-4">
            {/* Order Status Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Store className="w-4 h-4" />
                Order Status
              </label>
              <Select
                value={tempFilters.status}
                onValueChange={(value: OrderStatus | "all") =>
                  handleFilterChange("status", value)
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Status" />
                </SelectTrigger>
                <SelectContent>
                  {ORDER_STATUSES.map((status) => (
                    <SelectItem key={status.value} value={status.value}>
                      {status.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Fulfillment Type Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Truck className="w-4 h-4" />
                Delivery Type
              </label>
              <Select
                value={tempFilters.fulfillmentType}
                onValueChange={(value) =>
                  handleFilterChange("fulfillmentType", value)
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Type" />
                </SelectTrigger>
                <SelectContent>
                  {FULFILLMENT_TYPES.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Payment Status Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <CreditCard className="w-4 h-4" />
                Payment Status
              </label>
              <Select
                value={tempFilters.paymentStatus}
                onValueChange={(value) =>
                  handleFilterChange("paymentStatus", value)
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Payment Status" />
                </SelectTrigger>
                <SelectContent>
                  {PAYMENT_STATUSES.map((status) => (
                    <SelectItem key={status.value} value={status.value}>
                      {status.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Restaurant Search */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Store className="w-4 h-4" />
                Restaurant
              </label>
              <Input
                value={tempFilters.restaurant}
                onChange={(e) =>
                  handleFilterChange("restaurant", e.target.value)
                }
                placeholder="Search restaurants..."
                className="w-full"
              />
            </div>

            {/* General Search Term */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Pizza className="w-4 h-4" />
                Search Items
              </label>
              <Input
                value={tempFilters.searchTerm}
                onChange={(e) =>
                  handleFilterChange("searchTerm", e.target.value)
                }
                placeholder="Search food items..."
                className="w-full"
              />
            </div>

            {/* Date Range */}
            <div className="space-y-2 sm:col-span-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Date Range
              </label>
              <div className="flex gap-2">
                <Input
                  type="date"
                  value={tempFilters.dateFrom || ""}
                  onChange={(e) =>
                    handleFilterChange("dateFrom", e.target.value)
                  }
                  className="w-full"
                />
                <Input
                  type="date"
                  value={tempFilters.dateTo || ""}
                  onChange={(e) => handleFilterChange("dateTo", e.target.value)}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setFilterOpen(false)}
              className="rounded-md"
            >
              Cancel
            </Button>
            <Button
              variant="default"
              onClick={handleApplyFilters}
              className="rounded-md"
              disabled={isPending}
            >
              {isPending ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : null}
              Apply Filters
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="bg-white rounded-lg shadow">
        {isLoading ? (
          <div className="flex items-center justify-center h-64">
            <Loader2 className="w-8 h-8 animate-spin text-secondary" />
          </div>
        ) : filteredOrders.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-gray-500">
            <Search className="w-12 h-12 mb-4" />
            <p className="text-lg font-medium">No orders found</p>
            <p className="text-sm">Try adjusting your filters</p>
          </div>
        ) : (
          <FoodOrderTable
            orders={filteredOrders}
            isLoading={isPending}
          />
        )}
      </div>
    </section>
  );
}

export default FoodOrder;
