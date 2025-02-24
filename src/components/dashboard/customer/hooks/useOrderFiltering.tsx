import { OrderDetails, OrderFilters } from "@/types/foodOrderTypes";
import { useMemo } from "react";
import { includesIgnoreCase } from "../../utils/includesIgnoreCase";
import { dateInRange } from "../../utils/dateInRange";

export const useOrderFiltering = (
  initialOrders: OrderDetails[],
  filters: OrderFilters
) => {
  return useMemo(() => {
    return initialOrders.filter((order) => {
      // Base status filter
      if (filters.status !== "all" && order.status !== filters.status) {
        return false;
      }

      // Restaurant name search
      if (
        filters.restaurant &&
        !includesIgnoreCase(order.restaurant.name, filters.restaurant)
      ) {
        return false;
      }

      // General search term (searches across multiple fields)
      if (filters.searchTerm) {
        const searchableContent = [
          order.orderCode,
          order.restaurant.name,
          order.customer.name,
          ...order.items.map((item) => item.name),
        ].join(" ");

        if (!includesIgnoreCase(searchableContent, filters.searchTerm)) {
          return false;
        }
      }

      // Date range filter
      if (!dateInRange(order.createdAt, filters.dateFrom, filters.dateTo)) {
        return false;
      }

      // Fulfillment type filter
      if (
        filters.fulfillmentType &&
        filters.fulfillmentType !== "all" &&
        order.fulfillmentType !== filters.fulfillmentType
      ) {
        return false;
      }

      // Payment status filter
      if (
        filters.paymentStatus &&
        filters.paymentStatus !== "all" &&
        order.payment.status !== filters.paymentStatus
      ) {
        return false;
      }

      return true;
    });
  }, [initialOrders, filters]);
};
