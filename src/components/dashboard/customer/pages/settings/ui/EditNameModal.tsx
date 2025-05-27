import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import EditNameForm from "../_components/EditNameForm";
import { useEditModal } from "../hooks/useEditModal";

function EditName() {
  const { isOpen, setIsOpen } = useEditModal();
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Fullname</DialogTitle>
          <DialogDescription>
            <b className="font-medium text-black/80">Who can see your name?</b>
            <span className="block text-xs">
              help ensure a smooth order process. Your name will only be visible
              to restaurants and delivery partners to
            </span>
          </DialogDescription>
        </DialogHeader>

        <EditNameForm />
      </DialogContent>
    </Dialog>
  );
}

export default EditName;
