import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

function NavSearchbar() {
  return (
    <section
      id="search"
      className="relative w-full max-w-xl rounded-md bg-[#ECECEC]"
    >
      <Input
        type="text"
        placeholder="Search for anything..."
        title="Press Enter to search"
        aria-label="Search for anything"
        className="w-full rounded-md bg-transparent px-4 py-5 pl-10 text-sm focus:outline-none xl:min-w-[31rem]"
      />
      <Search
        size={18}
        className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500 dark:text-blue-300/40"
        aria-hidden="true"
      />
    </section>
  );
}

export default NavSearchbar;
