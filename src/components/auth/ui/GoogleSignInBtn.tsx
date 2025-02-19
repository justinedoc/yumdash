import { Button } from "@/components/ui/button";

export default function GoogleSignInButton() {
  return (
    <Button
      type="button"
      className="inline-flex items-center justify-center gap-2 w-full bg-white border border-[#5799E333] rounded-sm py-6 text-black hover:bg-gray-50 shadow-sm"
    >
      <img
        src="/src/assets/icons/google.svg"
        alt="Google"
        className="w-5 h-5"
      />
      <span className="font-medium">Continue with Google</span>
    </Button>
  );
}
