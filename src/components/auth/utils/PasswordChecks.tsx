import { cn } from "@/lib/utils";
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

interface PasswordType {
  message: string;
  isChecked: boolean;
}
interface PasswordChecksType {
  password: string;
  checks: (password: string) => PasswordType[];
}

export function PasswordChecks({ password, checks }: PasswordChecksType) {
  return (
    <div className="space-y-2 mt-4">
      {checks(password).map(({ message, isChecked }) => (
        <div
          key={message}
          className={cn("flex items-center gap-3", {
            "text-green-500": isChecked,
            "text-red-500": !isChecked,
          })}
        >
          {isChecked ? <FaCheck /> : <FaXmark />}
          <span>{message}</span>
        </div>
      ))}
    </div>
  );
}
