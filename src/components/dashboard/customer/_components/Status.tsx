import { cn } from "@/lib/utils";
import React from "react";

export type OrderStatus = "received" | "canceled" | "delivering" | string;

interface StatusProps {
  status: OrderStatus;
}

const Status: React.FC<StatusProps> = ({ status }) => {
  const statuses: Record<string, string> = {
    received: "bg-green-100 text-green-700",
    canceled: "bg-red-100 text-red-700",
    delivering: "bg-blue-100 text-blue-700",
    preparing: "bg-yellow-100 text-yellow-700",
  };

  const statusClass = statuses[status] || "bg-gray-100 text-gray-800";

  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-1 rounded-full text-xs font-extralight capitalize",
        statusClass
      )}
    >
      {status}
    </span>
  );
};

export default Status;
