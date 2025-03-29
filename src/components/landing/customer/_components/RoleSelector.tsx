import { cn } from "@/lib/utils";
import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";

type Role = "Customer" | "Vendor";

interface RoleSelectorProps {
  onSelect?: (role: Role) => void;
}

const RoleSelector: React.FC<RoleSelectorProps> = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentRole, setCurrentRole] = useState<Role>("Customer");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("/vendor")) {
      setCurrentRole("Vendor");
    } else if (location.pathname.includes("/")) {
      setCurrentRole("Customer");
    }
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleSelectRole(role: Role) {
    setCurrentRole(role);
    onSelect?.(role);
    setIsOpen(false);

    if (role === "Customer") {
      navigate("/");
    } else if (role === "Vendor") {
      navigate("/vendor");
    }
  }

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={cn(
          "hover:bg-opacity-90 inline-flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 text-base transition-colors duration-200",
          currentRole === "Vendor"
            ? "bg-[#00674B] text-white"
            : "bg-[#EFFFFB] text-black",
        )}
      >
        <span>{currentRole}</span>
        <svg
          className={`h-4 w-4 transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="ring-opacity-5 font-meduim absolute left-0 z-10 mt-2 w-40 rounded-md bg-transparent">
          <ul className="space-y-2 bg-transparent py-2 text-black">
            <li
              className={cn({
                hidden: currentRole === "Customer",
              })}
            >
              <button
                onClick={() => handleSelectRole("Customer")}
                className="w-fit cursor-pointer rounded-lg bg-[#EFFFFB] px-4 py-2 text-left transition-colors hover:bg-emerald-50"
              >
                Customer
              </button>
            </li>
            <li
              className={cn({
                hidden: currentRole === "Vendor",
              })}
            >
              <button
                onClick={() => handleSelectRole("Vendor")}
                className="w-fit cursor-pointer rounded-lg bg-[#EFFFFB] px-4 py-2 text-left transition-colors hover:bg-emerald-50"
              >
                Vendor
              </button>
            </li>
            <li className="flex w-fit cursor-not-allowed items-baseline justify-between gap-2 rounded-lg bg-[#EFFFFB]/90 px-4 py-2 text-gray-600">
              <span>Rider</span>
              <span className="text-xs text-orange-500">Coming soon</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default RoleSelector;
