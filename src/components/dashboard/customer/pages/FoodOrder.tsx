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
} from "lucide-react";
import FoodOrderTable from "../_components/FoodOrderTable";
import { OrderStatus } from "../_components/Status";
import { OrderDetails } from "@/types/foodOrderTypes";
import { orders } from "../data/orders";

interface FilterState {
  status: OrderStatus | "all";
  restaurant: string;
  food: string;
  dateFrom: string;
  dateTo: string;
}

interface FoodOrderProps {
  initialOrders?: OrderDetails[];
  isLoading?: boolean;
  onOrderStatusChange?: (
    orderId: string,
    newStatus: OrderStatus
  ) => Promise<void>;
}

const ORDER_STATUSES: { value: OrderStatus | "all"; label: string }[] = [
  { value: "all", label: "All Orders" },
  { value: "received", label: "Received" },
  { value: "delivering", label: "In Delivery" },
  { value: "completed", label: "Completed" },
  { value: "canceled", label: "Canceled" },
];

const initialFilters: FilterState = {
  status: "all",
  restaurant: "",
  food: "",
  dateFrom: "",
  dateTo: "",
};

const initialOrders = orders;

function FoodOrder({ isLoading = false, onOrderStatusChange }: FoodOrderProps) {
  const [isPending, startTransition] = useTransition();
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [tempFilters, setTempFilters] = useState<FilterState>(filters);

  // Memoized filtered orders
  const filteredOrders = useMemo(() => {
    return initialOrders.filter((order) => {
      const dateFrom = filters.dateFrom ? new Date(filters.dateFrom) : null;
      const dateTo = filters.dateTo ? new Date(filters.dateTo) : null;

      return (
        (filters.status === "all" || order.status === filters.status) &&
        (!filters.restaurant ||
          order.restaurantName
            .toLowerCase()
            .includes(filters.restaurant.toLowerCase())) &&
        (!filters.food ||
          order.food.toLowerCase().includes(filters.food.toLowerCase())) &&
        (!dateFrom || new Date(order.orderDate) >= dateFrom) &&
        (!dateTo || new Date(order.orderDate) <= dateTo)
      );
    });
  }, [initialOrders, filters]);

  const handleFilterChange = useCallback(
    <K extends keyof FilterState>(key: K, value: FilterState[K]) => {
      setTempFilters((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const handleApplyFilters = useCallback(() => {
    startTransition(() => {
      setFilters(tempFilters);
      setFilterOpen(false);
    });
  }, [tempFilters]);

  const clearFilters = useCallback(() => {
    startTransition(() => {
      setFilters(initialFilters);
      setTempFilters(initialFilters);
    });
  }, []);

  const hasActiveFilters = useMemo(() => {
    return Object.entries(filters).some(([key, value]) => {
      if (key === "status") return value !== "all";
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
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Store className="w-4 h-4" />
                Status
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
                    <SelectItem value={status.value}>{status.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

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

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Pizza className="w-4 h-4" />
                Food Item
              </label>
              <Input
                value={tempFilters.food}
                onChange={(e) => handleFilterChange("food", e.target.value)}
                placeholder="Search food items..."
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Date Range
              </label>
              <div className="flex gap-2">
                <Input
                  type="date"
                  value={tempFilters.dateFrom}
                  onChange={(e) =>
                    handleFilterChange("dateFrom", e.target.value)
                  }
                  className="w-full"
                />
                <Input
                  type="date"
                  value={tempFilters.dateTo}
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
            onStatusChange={onOrderStatusChange}
          />
        )}
      </div>
    </section>
  );
}

export default FoodOrder;
