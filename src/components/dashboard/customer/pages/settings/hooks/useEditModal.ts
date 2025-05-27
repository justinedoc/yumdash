import { use } from "react";
import { EditModalContext } from "../contexts/EditModalContexts";

export function useEditModal() {
  const context = use(EditModalContext);
  if (!context) {
    throw new Error(
      "EditModal can only be used in an EditModalContextProvider!",
    );
  }

  return context;
}
