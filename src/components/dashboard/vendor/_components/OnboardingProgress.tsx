import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

function OnboardingProgress() {
  return (
    <div className="space-y-3 rounded-md border border-[#A5A5A552] p-5 shadow-2xs">
      <div>
        <h2 className="text-xl font-semibold">Complete your onboarding</h2>
        <p className="text-sm text-gray-600">
          Complete your onboarding to get approved and start selling on YumDash
        </p>
      </div>

      <Progress className="bg-[#00674B29]" value={2} />

      <Button
        variant="secondary"
        className="rounded-sm text-sm font-medium text-white"
      >
        Next Step: Complete KYC
      </Button>
    </div>
  );
}

export default OnboardingProgress;
