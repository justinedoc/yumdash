import { cn } from "@/lib/utils";
import { OrderDetails, OrderEvent } from "@/types/foodOrderTypes";
import { format } from "date-fns";
import { MapPin } from "lucide-react";
import { formatAddress } from "../../utils/formatAddress";

type TimelineProps = {
  // events: OrderEvent[];
  // user: OrderDetails["customer"]
  order: OrderDetails;
};

type OrderEventStatusType = OrderEvent["status"];

export function Timeline({ order }: TimelineProps) {
  const { customer: user, events } = order;

  function eventStatus(status: OrderEventStatusType) {
    return (event: OrderEvent) =>
      (event.status as OrderEventStatusType) === status;
  }

  const isCompleted = eventStatus("completed");
  const isInProgress = eventStatus("in_progress");

  return (
    <div className="max-w-2xl my-7">
      {events.map((event, index) => (
        <div key={index} className="relative flex items-start gap-6">
          {/* Left side - Timeline indicator */}
          <div
            className={cn(
              "flex flex-col items-center justify-center",
              !isCompleted(event) && "ml-1",
              isInProgress(event) && "ml-0"
            )}
          >
            <div
              className={cn(
                "size-4 rounded-full border-2 shrink-0 mx-auto",
                (isCompleted(event) || isInProgress(event)) &&
                  "bg-secondary size-6 border-transparent"
              )}
            />
            {/* Connecting line */}
            {index < events.length - 1 && (
              <div
                className={cn(
                  "rounded-t-full rounded-b-full w-1 h-full min-h-24 bg-gray-200 my-1",
                  isCompleted(event) && "bg-secondary/80"
                )}
              />
            )}
          </div>

          {/* Right side - Content */}
          <div>
            {/* Main content */}
            <div className="space-y-1">
              <h3
                className={cn(
                  "text-gray-600 text-base",
                  (isCompleted(event) || isInProgress(event)) &&
                    "text-xl font-semibold text-black"
                )}
              >
                {event.title}
              </h3>
              {(isCompleted(event) || isInProgress(event)) && (
                <p className="text-gray-600">{event.description}</p>
              )}
              {event.timestamp && isCompleted(event) && (
                <p className="text-gray-900 mt-5 text-lg font-medium">
                  {format(new Date(event.timestamp), "PPPp")}
                </p>
              )}
            </div>

            {/* Location details */}
            {index === events.length -1 && (
              <div className="mt-4 space-y-1">
                {formatAddress(order)}
                {/* Map placeholder and View Rider button */}
                <div className="mt-4 w-full relative">
                  <div className="h-48 bg-gray-100 rounded-lg" />
                  <button
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                    bg-emerald-600 text-white px-4 py-2 rounded-md flex items-center gap-2"
                  >
                    <MapPin size={16} />
                    View Rider
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Timeline;
