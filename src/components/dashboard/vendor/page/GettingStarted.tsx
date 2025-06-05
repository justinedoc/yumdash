import { Button } from "@/components/ui/button";
import OnboardingProgress from "../_components/OnboardingProgress";
import OnboardingTaskCard from "../_components/OnboardingTask";

import customerCareImg from "@/assets/images/customer-care.png";
import AgentSvg from "@/assets/icons/agent.svg?react";

export interface Task {
  name: string;
  desc: string;
  to: string;
}

const onboardingTasks: Task[] = [
  {
    name: "General Settings",
    desc: "Set store preferences",
    to: "settings",
  },
  {
    name: "Pickup & Delivery",
    desc: "Select your preferred method and we'll take care of the rest",
    to: "settings/business",
  },
  {
    name: "Menus",
    desc: "Create and manage your food menus",
    to: "menu",
  },
  {
    name: "Business Hours",
    desc: "Schedule your store's open and close times",
    to: "settings",
  },
];

const taskColors = ["#30668A", "#003666", "#FF3465", "#613EC8"];

export default function GettingStarted() {
  return (
    <section className="space-y-6">
      <OnboardingProgress />

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 items-center">
        <div className="space-y-4 md:col-span-2">
          <h3 className="text-xl font-semibold text-gray-900">
            Ready, set, sell! Complete these steps to begin
          </h3>

          {onboardingTasks.map((task, i) => (
            <OnboardingTaskCard
              key={task.name}
              task={task}
              colorClass={taskColors[i]}
              to={task.to}
            />
          ))}
        </div>

        <aside className="flex h-fit flex-col items-center rounded-lg bg-[#FEF5D7] p-5 shadow-sm md:col-span-1">
          <img src={customerCareImg} alt="Customer care image" />

          <div className="text-center">
            <h2 className="mb-2 font-semibold text-gray-800">
              Do you Need Assistance With Setting Up Your Website ?
            </h2>

            <p className="text-xs text-gray-600">
              Our customer care service are 24/7 available to attend to all your
              needs and assitance.
            </p>
          </div>

          <Button className="bg-secondary hover:bg-secondary-dark focus:ring-secondary/50 mt-4 rounded px-4 py-2 text-white focus:ring-2 focus:outline-none">
            <AgentSvg width={60} />
            <span>Chat with customer care</span>
          </Button>
        </aside>
      </div>
    </section>
  );
}
