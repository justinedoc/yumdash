import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "@/components/ui/dialog";
import EditEmailForm from "../_components/EditEmailForm";
import { useEditModal } from "../hooks/useEditModal";
import { useState } from "react";
import VerifyOTPInput from "@/lib/VerifyOTPInput";

function EditEmailModal() {
  const { isOpen, setIsOpen } = useEditModal();
  const [verificationOpen, setVerificationOpen] = useState(false);
  const [pendingEmail, setPendingEmail] = useState("");

  const [value, setValue] = useState("");

  // Handle submit from child form
  function handleFormSubmit(email: string) {
    // close parent dialog
    setIsOpen(false);
    // store email and open next dialog
    setPendingEmail(email);
    setTimeout(() => setVerificationOpen(true), 100);
  }

  // Send verification code
  async function handleSendVerification() {
    console.log("Sending verification code to:", pendingEmail);
    // ... add your sending logic here
  }

  return (
    <>
      {/* Parent Change Email dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Change Email</DialogTitle>
            <DialogDescription className="text-xs">
              Please provide the new email address that you would like to link
              to your account. Ensure that this email is currently active and
              accessible, as we will send a confirmation link to this address to
              verify the change. If you do not receive the confirmation email,
              please check your spam or junk folder.
            </DialogDescription>
          </DialogHeader>

          {/* Form for entering new email */}
          <EditEmailForm onSubmit={handleFormSubmit} />
        </DialogContent>
      </Dialog>

      {/* Separate verification dialog, not nested */}
      <Dialog open={verificationOpen} onOpenChange={setVerificationOpen}>
        <DialogPortal>
          <DialogOverlay>
            <div className="flex h-full w-full flex-col items-center justify-center">
              <VerifyOTPInput
                isModal
                setValue={setValue}
                value={value}
                verifyOtp={handleSendVerification}
              />
            </div>
          </DialogOverlay>
        </DialogPortal>
      </Dialog>
    </>
  );
}

export default EditEmailModal;
