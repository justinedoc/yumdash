import React, { useState } from "react";
import { format } from "date-fns";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpDown } from "lucide-react";
import Status from "./Status";
import { useNavigate } from "react-router";
import { OrderDetails, OrderStatus, SortConfig, SortField } from "@/types/foodOrderTypes";

// Enhanced table header type with more precise typing
interface TableHeaderType {
  label: string;
  field?: SortField;
  sortable?: boolean;
  width?: string;
  align?: "left" | "right" | "center";
}

// Updated table headers to match our new data structure
const TABLE_HEADERS: TableHeaderType[] = [
  {
    label: "Order Code",
    field: "orderCode",
    sortable: true,
    width: "w-[120px]",
  },
  { label: "Items", width: "w-[200px]" },
  { label: "Restaurant", width: "w-[150px]" },
  { label: "Delivery Address", width: "w-[200px]" },
  {
    label: "Order Date",
    field: "createdAt", // Updated from orderDate
    sortable: true,
    width: "w-[150px]",
  },
  { label: "Status", field: "status", sortable: true, width: "w-[120px]" },
  {
    label: "Total",
    field: "totalAmount", // Updated from amount
    sortable: true,
    align: "right",
    width: "w-[120px]",
  },
  { label: "Actions", width: "w-[100px]", align: "right" },
];

interface FoodOrderTableProps {
  orders: OrderDetails[];
  onStatusChange?: (orderId: string, newStatus: OrderStatus) => Promise<void>;
  isLoading?: boolean;
}

function FoodOrderTable({
  orders,
  onStatusChange,
  isLoading = false,
}: FoodOrderTableProps) {
  const navigate = useNavigate();
  const [sortConfig, setSortConfig] = useState<SortConfig | null>(null);

  // Enhanced sorting handler with type safety
  const handleSort = (field: SortField) => {
    setSortConfig((currentSort) => ({
      field,
      direction:
        currentSort?.field === field && currentSort.direction === "asc"
          ? "desc"
          : "asc",
    }));
  };

  // Improved sorting logic with type safety and proper comparisons
  const sortedOrders = React.useMemo(() => {
    if (!sortConfig) return orders;

    return [...orders].sort((a, b) => {
      const { field, direction } = sortConfig;
      const multiplier = direction === "asc" ? 1 : -1;

      // Handle date fields
      if (
        field === "createdAt" ||
        field === "updatedAt" ||
        field === "scheduledFor"
      ) {
        const dateA = new Date(a[field] || 0).getTime();
        const dateB = new Date(b[field] || 0).getTime();
        return (dateA - dateB) * multiplier;
      }

      // Handle numeric fields
      if (field === "totalAmount") {
        return (a[field] - b[field]) * multiplier;
      }

      // Handle string fields
      return String(a[field]).localeCompare(String(b[field])) * multiplier;
    });
  }, [orders, sortConfig]);

  // Navigation handler with type safety
  const handleViewDetails = (order: OrderDetails) => {
    navigate(order.id);
  };

  // Helper function to format order items
  const formatOrderItems = (items: OrderDetails["items"]) => {
    return items.map((item) => `${item.name} (${item.quantity})`).join(", ");
  };

  // Helper function to format address
  const formatAddress = (order: OrderDetails) => {
    const address =
      order.fulfillmentType === "delivery"
        ? order.deliveryAddress
        : order.pickupLocation;

    return address
      ? `${address.street}, ${address.city}`
      : "Address not available";
  };

  return (
    <Table className="rounded-md border">
      <TableHeader>
        <TableRow className="bg-gray-50 text-nowrap">
          {TABLE_HEADERS.map((header, index) => (
            <TableHead
              key={index}
              className={cn(
                header.width,
                header.align === "right" && "text-right",
                "py-4 px-4 font-semibold text-gray-700"
              )}
            >
              <div className="flex items-center justify-between">
                {header.label}
                {header.sortable && header.field && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="ml-2 h-8 w-8 p-0"
                    onClick={() => handleSort(header.field as SortField)}
                  >
                    <ArrowUpDown className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {isLoading ? (
          <TableRow>
            <TableCell
              colSpan={TABLE_HEADERS.length}
              className="h-24 text-center"
            >
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900" />
              </div>
            </TableCell>
          </TableRow>
        ) : sortedOrders.length === 0 ? (
          <TableRow>
            <TableCell
              colSpan={TABLE_HEADERS.length}
              className="h-24 text-center"
            >
              No orders found
            </TableCell>
          </TableRow>
        ) : (
          sortedOrders.map((order) => (
            <TableRow
              key={order.id}
              className="hover:bg-gray-50 transition-colors"
            >
              <TableCell className="font-medium py-4 px-4">
                {order.orderCode}
              </TableCell>
              <TableCell className="py-4 px-4 min-w-[12rem]">
                {formatOrderItems(order.items)}
              </TableCell>
              <TableCell className="py-4 px-4 min-w-[12rem]">
                <div className="flex items-center gap-2">
                  <img
                    src={order.restaurant.imageUrl}
                    alt={order.restaurant.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span>{order.restaurant.name}</span>
                </div>
              </TableCell>
              <TableCell className="py-4 px-4 min-w-[12rem]">
                {formatAddress(order)}
              </TableCell>
              <TableCell className="py-4 px-4">
                {format(new Date(order.createdAt), "MMM dd, yyyy")}
              </TableCell>
              <TableCell className="py-4 px-4">
                <Status status={order.status} />
              </TableCell>
              <TableCell className="text-right py-4 px-4">
                ${order.totalAmount.toFixed(2)}
              </TableCell>
              <TableCell className="py-4 px-6">
                <Button
                  variant="secondary"
                  size="sm"
                  className="text-white"
                  onClick={() => handleViewDetails(order)}
                >
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
}

export default FoodOrderTable;
