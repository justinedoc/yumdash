import { useMemo } from "react";
import { PackItem } from "./DeliveryTab";
import { ClassValue } from "clsx";
import { cn } from "@/lib/utils";
import { formatMoney } from "@/lib/formatMoney";

type DeliveryItemsSummaryProps = {
  items: PackItem[];
};

function DeliveryItemsSummary({ items }: DeliveryItemsSummaryProps) {
  const subTotal = useMemo(
    () => items.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [items]
  );

  // dummy data
  const deliveryFee = 200;
  const serviceFee = 100;

  const totalPrice = useMemo(
    () => subTotal + deliveryFee + serviceFee,
    [subTotal, deliveryFee, serviceFee]
  );

  return (
    <div className="space-y-4 font-medium text-sm my-3">
      <Summary label={`Sub total (${items.length} items)`} price={subTotal} />
      <Summary label="Delivery fee" price={deliveryFee} />
      <Summary label="Service fee" price={serviceFee} />
      <Summary label="Total" className="font-bold" price={totalPrice} />
    </div>
  );
}

type SummaryProps = {
  label: string;
  price: number;
  className?: ClassValue;
};

function Summary({ label, price, className }: SummaryProps) {
  return (
    <div className="flex justify-between items-center">
      <h2 className={cn(className)}>{label}</h2>
      <span>{formatMoney(price, { decimals: 0 })}</span>
    </div>
  );
}

export default DeliveryItemsSummary;
