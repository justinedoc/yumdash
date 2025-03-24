import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type UserPersonalIntegrationsProps = {
  label: string;
  icon: React.ComponentType;
  onClick?: () => void;
};

export default function UserPersonalIntegrations(
  item: UserPersonalIntegrationsProps
) {
  return (
    <>
      <div className="flex justify-between items-center py-3">
        <h3 className="text-sm font-medium flex items-center gap-2 text-[#666666] mb-2">
          <item.icon />
          {item.label.charAt(0).toUpperCase() + item.label.slice(1)}
        </h3>

        <Button
          onClick={item.onClick}
          variant="ghost"
          className="rounded-sm text-secondary font-semibold"
        >
          linked
        </Button>
      </div>
      <Separator />
    </>
  );
}
