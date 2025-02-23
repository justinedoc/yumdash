import { Fragment } from "react";
import { cn } from "@/lib/utils";

export type EventType = {
  action: string;
  note: string;
  date?: string;
  completed?: boolean;
};

type TimeLineProps = {
  events: EventType[];
};

export function TimeLine({ events }: TimeLineProps) {
  return (
    <div className="space-y-3">
      {events.map((event, index) => (
        <div key={index} className="flex items-start">
          {/* Timeline indicator */}
          <div className="flex flex-col items-center">
            <TimeLineCircle isActive={!!event.completed} />
            {index < events.length - 1 && (
              <TimeLinePillar isActive={!!event.completed} />
            )}
          </div>
          {/* Event details */}
          <div className="ml-4">
            <TimeLineEventCard {...event} />
          </div>
        </div>
      ))}
    </div>
  );
}

function TimeLineEventCard({ action, note, date }: EventType) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-sm">
      <h1 className="text-xl font-semibold text-gray-800">{action}</h1>
      <p className="mt-1 text-sm text-gray-600">{note}</p>
      {date && <h3 className="mt-2 text-lg text-gray-700">{date}</h3>}
    </div>
  );
}

function TimeLineCircle({ isActive = false }: { isActive?: boolean }) {
  const sizeClasses = isActive ? "w-6 h-6" : "w-4 h-4";
  const bgColor = isActive ? "bg-blue-500" : "bg-white";
  const borderColor = isActive ? "border-blue-500" : "border-gray-400";
  return (
    <div
      className={cn(sizeClasses, "rounded-full border-2", bgColor, borderColor)}
    ></div>
  );
}

function TimeLinePillar({ isActive = false }: { isActive?: boolean }) {
  const bgColor = isActive ? "bg-blue-500" : "bg-gray-400";
  return <div className={cn("w-1 h-8", bgColor)} />;
}
