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
          className={`flex items-center gap-3 ${
            isChecked ? "text-green-500" : "text-red-500"
          }`}
        >
          {isChecked ? <FaCheck /> : <FaXmark />}
          <span>{message}</span>
        </div>
      ))}
    </div>
  );
}
