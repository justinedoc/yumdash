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
    } else if (location.pathname.includes("/customer")) {
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
      navigate("/customer");
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
          "text-base py-2 px-4 rounded-lg hover:bg-opacity-90 transition-colors duration-200 inline-flex items-center gap-2 cursor-pointer",
          currentRole === "Vendor" 
            ? "bg-[#00674B] text-white" 
            : "bg-[#EFFFFB] text-black"
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
        <div className="absolute left-0 mt-2 w-40 rounded-md bg-transparent ring-opacity-5 z-10 font-meduim">
          <ul className="py-2 bg-transparent text-black space-y-2">
            <li
              className={cn({
                hidden: currentRole === "Customer",
              })}
            >
              <button
                onClick={() => handleSelectRole("Customer")}
                className="w-fit text-left px-4 py-2 bg-[#EFFFFB] hover:bg-emerald-50 transition-colors rounded-lg cursor-pointer"
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
                className="w-fit text-left px-4 py-2 bg-[#EFFFFB] hover:bg-emerald-50 transition-colors rounded-lg cursor-pointer"
              >
                Vendor
              </button>
            </li>
            <li className="w-fit px-4 py-2 text-gray-600 flex gap-2 items-baseline justify-between cursor-not-allowed bg-[#EFFFFB]/90 rounded-lg">
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