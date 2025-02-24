import { cn } from "@/lib/utils";
import { TimelineEvent } from "@/types/EventTypes";
import { MapPin } from "lucide-react";

type TimelineProps = {
  events: TimelineEvent[];
};

export function Timeline({ events }: TimelineProps) {
  return (
    <div className="max-w-2xl my-7">
      {events.map((event, index) => (
        <div key={index} className="relative flex items-start gap-6">
          {/* Left side - Timeline indicator */}
          <div
            className={cn(
              "flex flex-col items-center justify-center",
              !event.isCompleted && "ml-1"
            )}
          >
            <div
              className={cn(
                "size-4 rounded-full border-2 shrink-0 mx-auto",
                event.isCompleted && "bg-secondary size-6 border-transparent"
              )}
            />
            {/* Connecting line */}
            {index < events.length - 1 && (
              <div
                className={cn(
                  "rounded-t-full rounded-b-full w-1 h-full min-h-24 bg-gray-200 my-1",
                  event.isCompleted && "bg-secondary/80"
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
                  event.isCompleted && "text-xl font-semibold text-black",
                  event.isLocation && "hidden"
                )}
              >
                {event.title}
              </h3>
              {event.description && event.isCompleted && (
                <p className="text-gray-600">{event.description}</p>
              )}
              {event.time && event.isCompleted && (
                <p className="text-gray-900 mt-5 text-lg font-medium">
                  {event.time}
                </p>
              )}
            </div>

            {/* Location details */}
            {event.isLocation && event.address && (
              <div className="mt-4 space-y-1">
                <p className="font-medium text-gray-900">
                  {event.address.name}
                </p>
                <p className="text-gray-600">{event.address.street}</p>
                <p className="text-gray-600">{event.address.city}</p>

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
