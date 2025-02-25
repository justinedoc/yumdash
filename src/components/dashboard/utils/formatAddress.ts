import { OrderDetails } from "@/types/foodOrderTypes";

export const formatAddress = (order: OrderDetails) => {
    const address =
      order.fulfillmentType === "delivery"
        ? order.customer.deliveryAddress
        : order.customer.pickupLocation;

    return address
      ? `${address.street}, ${address.city}`
      : "Address not available";
  };