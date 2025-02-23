import { useMemo } from "react";
import { useParams } from "react-router";
import { orders } from "../data/orders";
import Status from "./Status";
import { format } from "date-fns";

function SelectedFoodOrder() {
  const { id } = useParams();

  const selectedOrder = useMemo(
    () => orders.find((order) => order.id === id),
    [orders]
  );

  if (!selectedOrder) return " Order not found";

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold mb-2">Order Information</h3>
          <div className="space-y-1 text-sm">
            <p>Order Code: {selectedOrder.orderCode}</p>
            <p>Date: {format(new Date(selectedOrder.orderDate), "PPP")}</p>
            <p>
              Status: <Status status={selectedOrder.status} />
            </p>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Customer Details</h3>
          <div className="space-y-1 text-sm">
            <p>Name: {selectedOrder.customer.name}</p>
            <p>Phone: {selectedOrder.customer.phone}</p>
            <p>Address: {selectedOrder.customer.address}</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Order Items</h3>
        <div className="space-y-2">
          {selectedOrder.items.map((item, index) => (
            <div key={index} className="flex justify-between text-sm">
              <span>
                {item.quantity}x {item.name}
              </span>
              <span>${item.price.toFixed(2)}</span>
            </div>
          ))}
          <div className="border-t pt-2 mt-2">
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>${selectedOrder.amount.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Payment Information</h3>
        <div className="space-y-1 text-sm">
          <p>Method: {selectedOrder.payment.method}</p>
          <p>Status: {selectedOrder.payment.status}</p>
          {selectedOrder.payment.transactionId && (
            <p>Transaction ID: {selectedOrder.payment.transactionId}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SelectedFoodOrder;
