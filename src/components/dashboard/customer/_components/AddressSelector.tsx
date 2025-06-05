import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  useActiveAddress,
  useAddresses,
  useSetActiveAddress,
  useRemoveAddress,
  useEditAddress,
} from "@/stores/LocationStore";
import { ClassValue } from "clsx";
import { Edit, Trash2, Check, X } from "lucide-react";
import { truncateChar } from "@/lib/truncateChar";

function AddressSelector() {
  const activeAddress = useActiveAddress();
  const setActiveAddress = useSetActiveAddress();
  const addresses = useAddresses();
  const removeAddress = useRemoveAddress();
  const editAddress = useEditAddress();

  const [editingIdx, setEditingIdx] = useState<number | null>(null);
  const [draft, setDraft] = useState("");

  const startEditing = (idx: number, addr: string) => {
    setEditingIdx(idx);
    setDraft(addr);
  };

  const cancelEditing = () => {
    setEditingIdx(null);
    setDraft("");
  };

  const saveEdit = (oldAddr: string) => {
    if (draft.trim() && draft !== oldAddr) {
      editAddress(oldAddr, draft.trim());
    }
    cancelEditing();
  };

  const handleDelete = (addr: string) => {
    removeAddress(addr);
    if (activeAddress === addr) {
      // active will auto-fallback in store logic
    }
    if (editingIdx !== null && addresses[editingIdx] === addr) {
      cancelEditing();
    }
  };

  return (
    <div className="w-full">
      {addresses.map((address, idx) => {
        const isEditing = idx === editingIdx;

        return (
          <div
            key={idx}
            className="flex items-center justify-between border-b border-gray-200 py-3"
          >
            {/* Radio + text or edit input */}
            <div className="flex items-center gap-2">
              <Input
                type="radio"
                name="address"
                value={address}
                checked={activeAddress === address}
                onChange={(e) => setActiveAddress(e.target.value)}
                className="accent-secondary h-5 w-5"
              />

              {isEditing ? (
                <Input
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  className="w-full max-w-xs"
                />
              ) : (
                <span className="text-sm text-gray-700">
                  {truncateChar(address, 40)}
                </span>
              )}
            </div>

            {/* Action buttons */}
            <div className="flex gap-2">
              {isEditing ? (
                <>
                  <IconBtn
                    onClick={() => saveEdit(address)}
                    className="text-secondary hover:bg-secondary/50 bg-green-100 hover:text-white"
                  >
                    <Check size={16} />
                  </IconBtn>
                  <IconBtn
                    onClick={cancelEditing}
                    className="bg-gray-100 text-gray-600 hover:bg-gray-600 hover:text-white"
                  >
                    <X size={16} />
                  </IconBtn>
                </>
              ) : (
                <>
                  <IconBtn
                    onClick={() => startEditing(idx, address)}
                    className="bg-secondary/30 text-secondary hover:bg-secondary transition-all"
                  >
                    <Edit size={16} />
                  </IconBtn>
                  <IconBtn onClick={() => handleDelete(address)}>
                    <Trash2 size={16} />
                  </IconBtn>
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

interface IconBtnProps {
  children: React.ReactNode;
  className?: ClassValue;
  onClick?: () => void;
}

function IconBtn({ children, className, onClick }: IconBtnProps) {
  return (
    <Button
      size="icon"
      onClick={onClick}
      className={cn(
        "rounded-full bg-[#FF3B3029] text-red-500 transition-all hover:bg-red-500 hover:text-white",
        className,
      )}
    >
      {children}
    </Button>
  );
}

export default AddressSelector;
