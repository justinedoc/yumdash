import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Edit } from "lucide-react";

type UserProfileDetailsProps = {
  label: string;
  value: string;
  onClick?: () => void;
};

export default function UserProfileDetails({
  label,
  value,
  onClick,
}: UserProfileDetailsProps) {
  return (
    <>
      <div className="flex items-center py-3">
        <label
          htmlFor={label}
          className="text-sm font-medium text-[#666666] mb-2"
        >
          {label.charAt(0).toUpperCase() + label.slice(1)}
        </label>

        <div className="ml-auto flex items-center space-x-3">
          <input
            type="text"
            name={label}
            id={label}
            disabled
            value={value}
            className="border border-[#00674B29] rounded-sm p-2 text-sm"
          />

          <Button
            onClick={onClick}
            variant="outline"
            className="rounded-sm text-secondary"
          >
            <Edit />
          </Button>
        </div>
      </div>

      <Separator />
    </>
  );
}
