import { cn } from "@/lib/utils";
import { OrderDetails, OrderEvent } from "@/types/foodOrderTypes";
import { format } from "date-fns";
import { MapPin, Store } from "lucide-react";
import { formatAddress } from "../../utils/formatAddress";
import { Button } from "@/components/ui/button";
import mapImage from "@/assets/images/map-img.png";

type TimelineProps = {
  order: OrderDetails;
};

type OrderEventStatusType = OrderEvent["status"];

export function Timeline({ order }: TimelineProps) {
  const { events } = order;

  function eventStatus(status: OrderEventStatusType) {
    return (event: OrderEvent) =>
      (event.status as OrderEventStatusType) === status;
  }

  const isCompleted = eventStatus("completed");
  const isInProgress = eventStatus("in_progress");

  return (
    <div className="md:max-w-3xl w-full">
      <Button variant="ghost" className="mb-6 text-gray-600">
        <Store />
        Collect at store
      </Button>

      {/* Timeline events */}
      <div>
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
                  "w-4 h-4 rounded-full border-2 shrink-0 mx-auto",
                  (isCompleted(event) || isInProgress(event)) &&
                    "bg-secondary w-6 h-6 border-transparent"
                )}
              />
              {/* Connecting line */}
              {index < events.length - 1 && (
                <div
                  className={cn(
                    "rounded-full w-1 h-full min-h-24 bg-gray-200 my-1",
                    isCompleted(event) && "bg-secondary/80"
                  )}
                />
              )}
            </div>

            {/* Right side - Content */}
            <div className="flex-1">
              <div className="space-y-1 text-sm">
                <h3
                  className={cn(
                    "text-gray-600 text-base",
                    (isCompleted(event) || isInProgress(event)) &&
                      "text-lg font-semibold text-black"
                  )}
                >
                  {event.title}
                </h3>
                {(isCompleted(event) || isInProgress(event)) && (
                  <p className="text-gray-600">{event.description}</p>
                )}
                {event.timestamp && isCompleted(event) && (
                  <p className="text-gray-900 mt-5 text-base font-medium">
                    {format(new Date(event.timestamp), "PPPp")}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Location details & Map Placeholder */}
      <div className="mt-8">
        <div className="mb-4 text-sm text-gray-600">{formatAddress(order)}</div>
        <div
          style={{ backgroundImage: `url(${mapImage})` }}
          className="relative h-48 w-full rounded-xl bg-no-repeat bg-cover"
        >
          <div className="absolute inset-0 flex items-center justify-center backdrop-blur-xs">
            <Button className="secondary-grad-bg text-white px-4 py-2 rounded-md flex items-center gap-2">
              <MapPin size={16} />
              View Rider
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
