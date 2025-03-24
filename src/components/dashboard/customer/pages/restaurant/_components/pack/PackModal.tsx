import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import PackForm from "./PackForm";

function PackModal() {
  return (
    <DialogContent className="sm:max-w-4xl">
      <DialogHeader>
        <DialogTitle>Pack 2</DialogTitle>
        <DialogDescription>
          Build your pack by selecting items from the list below.
        </DialogDescription>
      </DialogHeader>

      <div className="grid md:grid-cols-3">
        <div className="col-span-2">
          <PackForm />
        </div>
      </div>
    </DialogContent>
  );
}

export default PackModal;
