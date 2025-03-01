import { Search } from "lucide-react";

function SearchBar() {
  return (
    <section
      id="search"
      className="relative border border-[#0F5D8F29] w-full rounded-sm"
    >
      <input
        type="text"
        placeholder="Search for anything..."
        title="Press Enter to search"
        aria-label="Search for anything"
        className="w-full px-4 py-2.5 pl-10 text-sm bg-transparent focus:outline-none rounded-sm placeholder:text-[#2D2D2D]/60"
      />
      <Search
        size={18}
        className="absolute top-1/2 left-3 -translate-y-1/2 text-[#2D2D2D]"
        aria-hidden="true"
      />
    </section>
  );
}

export default SearchBar;
