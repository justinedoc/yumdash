import useLocationContext from "../hooks/useLocationContext";
import { Input } from "@/components/ui/input";

type AddressSelectorProps = {
  selectedAddress: string;
  handleSelectAddress: (addr: string) => void;
};

function AddressSelector({
  selectedAddress,
  handleSelectAddress,
}: AddressSelectorProps) {
  const { addresses } = useLocationContext();

  return (
    <div className="w-full">
      {addresses.map((address, idx) => (
        <label
          key={idx}
          className="flex items-center justify-between py-3 border-b border-gray-200"
        >
          {/* Address text */}
          <span className="text-gray-700">{address}</span>

          {/* Radio input */}
          <Input
            type="radio"
            name="address"
            value={address}
            checked={selectedAddress === address}
            onChange={(e) => handleSelectAddress(e.target.value)}
            className="accent-secondary h-5 w-5"
          />
        </label>
      ))}
    </div>
  );
}

export default AddressSelector;
