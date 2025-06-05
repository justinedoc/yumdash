import { useNavigate } from "react-router";
import VerifyOtp, { StateType } from "../../_components/VerifyOtp";
import { useLoadingContext } from "../../hooks/useLoadingContext";
import { sleep } from "../../utils/sleep";

function VendorVerifyOtp() {
  const { handleLoading } = useLoadingContext();
  const navigate = useNavigate();

  async function onSubmit(value: string, state: StateType) {
    console.log(value, state);
    try {
      handleLoading("start");
      // Simulate API call to verify OTP
      await sleep(2000);
      navigate("/vendor/dashboard", { replace: true });
    } catch (err) {
      console.error("Failed to verify OTP", err);
    } finally {
      handleLoading("end");
    }
  }
  return <VerifyOtp onSubmit={onSubmit} onErrorPath="vendor/signup" />;
}

export default VendorVerifyOtp;
