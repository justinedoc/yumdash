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
import Status, { OrderStatus } from "./Status";
import {
  SortField,
  type OrderDetails,
  type TableHeaderType,
} from "@/types/foodOrderTypes";
import { useNavigate } from "react-router";

const TABLE_HEADERS: TableHeaderType[] = [
  { label: "Order Code", width: "w-[120px]" },
  { label: "Food", width: "w-[200px]" },
  { label: "Restaurant", width: "w-[150px]" },
  { label: "Address", width: "w-[200px]" },
  {
    label: "Order Date",
    field: "orderDate",
    sortable: true,
    width: "w-[150px]",
  },
  { label: "Status", field: "status", sortable: true, width: "w-[120px]" },
  {
    label: "Amount",
    field: "amount",
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

  const [sortConfig, setSortConfig] = useState<{
    field: SortField;
    direction: "asc" | "desc";
  } | null>(null);

  const handleSort = (field: SortField) => {
    setSortConfig((currentSort) => ({
      field,
      direction:
        currentSort?.field === field && currentSort.direction === "asc"
          ? "desc"
          : "asc",
    }));
  };

  const sortedOrders = React.useMemo(() => {
    if (!sortConfig) return orders;

    return [...orders].sort((a, b) => {
      if (sortConfig.field === "orderDate") {
        const dateA = new Date(a[sortConfig.field]).getTime();
        const dateB = new Date(b[sortConfig.field]).getTime();
        return sortConfig.direction === "asc" ? dateA - dateB : dateB - dateA;
      }

      if (a[sortConfig.field] < b[sortConfig.field]) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (a[sortConfig.field] > b[sortConfig.field]) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
      return 0;
    });
  }, [orders, sortConfig]);

  const handleViewDetails = (order: OrderDetails) => {
    navigate(order.id);
  };

  return (
    <Table className="rounded-md border">
      <TableHeader>
        <TableRow className="bg-gray-50 text-nowrap">
          {TABLE_HEADERS.map((header, index) => (
            <TableHead
              key={index}
              className={cn(
                "",
                header.width,
                header.align === "right" && "text-right",
                "py-4 px-4 font-semibold text-gray-700"
              )}
            >
              <div className="flex items-center justify-between">
                {header.label}
                {header.sortable && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="ml-2 h-8 w-8 p-0"
                    onClick={() => header.field && handleSort(header.field)}
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
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900"></div>
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
              <TableCell className="py-4 px-4 min-w-[8rem]">
                {order.food}
              </TableCell>
              <TableCell className="py-4 px-4 min-w-[12rem]">
                <div className="flex items-center gap-2">
                  <img
                    src={order.restaurantImg}
                    alt={order.restaurantName}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span>{order.restaurantName}</span>
                </div>
              </TableCell>
              <TableCell className="py-4 px-4 min-w-[12rem]">
                {order.address}
              </TableCell>
              <TableCell className="py-4 px-4">
                {format(new Date(order.orderDate), "MMM dd, yyyy")}
              </TableCell>
              <TableCell className="py-4 px-4">
                <Status status={order.status} />
              </TableCell>
              <TableCell className="text-right py-4 px-4">
                ${order.amount.toFixed(2)}
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
