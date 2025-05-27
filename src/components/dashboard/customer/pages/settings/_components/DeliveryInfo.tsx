import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { AddressToMap } from "./AddressToMap";
import { ArrowLeft } from "lucide-react";
import ScrollToTop from "@/lib/ScrollToTop";
import { Input } from "@/components/ui/input";

interface DeliveryInfoState {
  address: string;
  address2?: string;
}

const DeliveryInfo: React.FC = () => {
  const navigate = useNavigate();
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(
    null,
  );
  const [status, setStatus] = useState<string>("");
  const [data, setData] = useState<DeliveryInfoState>({
    address: "",
  });
  const [saving, setSaving] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setSaving(true);
    try {
      // TODO: call API with data and coords
      console.log(coords, status);
    } catch {
      toast.error("Failed to save delivery info");
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <ScrollToTop />
      <section className="mx-auto my-15 bg-gray-50 p-6 md:max-w-[65%]">
        <Button
          variant="ghost"
          className="absolute top-4 left-4"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft />
        </Button>

        <h1 className="mb-4 text-xl font-semibold">Delivery Information</h1>

        <AddressToMap
          className="mb-6"
          onCoordinatesChange={setCoords!}
          onStatusChange={setStatus}
        >
          <Input
            type="text"
            placeholder="Search address..."
            className="w-full rounded-sm border p-4 bg-transparent"
          />
        </AddressToMap>

        <div className="space-y-4">
          <div>
            <label htmlFor="address" className="block font-medium">
              Address Line 1
            </label>
            <input
              id="address"
              name="address"
              value={data.address}
              onChange={handleChange}
              className="w-full border p-2"
            />
          </div>

          <Button
            onClick={handleSubmit}
            disabled={saving}
            className="mt-4 w-full"
          >
            {saving ? "Saving..." : "Save"}
          </Button>
        </div>
      </section>
    </>
  );
};

export default DeliveryInfo;
