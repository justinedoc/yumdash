import BreifCaseImg from "@/assets/images/brief-case.png";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router";
import { Task } from "../page/GettingStarted";

interface TaskCardProps {
  task: Task;
  to: string;
  colorClass: string;
}

export default function OnboardingTaskCard({
  task,
  colorClass,
  to,
}: TaskCardProps) {
  const navigate = useNavigate();
  return (
    <div
      className="flex cursor-pointer items-center justify-between rounded-sm p-4 transition-shadow hover:shadow-lg"
      style={{ backgroundColor: colorClass }}
      role="button"
      tabIndex={0}
      aria-label={`Start task: ${task.name}`}
      onClick={() => navigate(to)}
    >
      <div className="flex items-center gap-2">
        <div className="flex size-16 items-center justify-center overflow-hidden rounded-full bg-white">
          <img src={BreifCaseImg} width={39} alt="briefcase image" />
        </div>

        <div className="w-64">
          <h2 className="text-xl font-light text-white">{task.name}</h2>
          <p className="text-xs text-gray-400">{task.desc}</p>
        </div>
      </div>

      <ChevronRight className="h-6 w-6 flex-shrink-0 text-white" />
    </div>
  );
}
