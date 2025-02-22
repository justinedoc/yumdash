import { TabsTrigger } from "./TabsTrigger";

type CustomTabsTriggerProps = {
  value: string;
  label: string;
  labelNum: number;
  icon: React.ReactElement;
};

function CustomTabsTrigger({
  value,
  label,
  labelNum,
  icon,
}: CustomTabsTriggerProps) {
  return (
    <TabsTrigger
      value={value}
      className="flex flex-col items-start gap-2 px-4 py-2 rounded-md font-medium hover:opacity-90 focus:outline-none border border-[#0F5D8F29] data-[state=active]:primary-grad data-[state=active]:text-white data-[state=active]:border-transparent cursor-pointer"
    >
      <span className="flex gap-2">
        {label}
        <span className="secondary-grad-bg text-white size-6 px-2 py-0.5 rounded-full text-xs text-center flex items-center justify-center font-medium">
          {labelNum}
        </span>
      </span>
      {icon}
    </TabsTrigger>
  );
}

export default CustomTabsTrigger;
