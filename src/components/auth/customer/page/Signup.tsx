import AuthPromptBanner from "../../ui/AuthPromptBanner";
import AuthContainer from "../_components/AuthContainer";
import SignupForm from "../_components/SignupForm";

function Login() {
  return (
    <AuthContainer>
      <AuthPromptBanner className="absolute top-3 right-3 text-xs" to="login">
        Already on Yumdash?
      </AuthPromptBanner>
      <SignupForm />
    </AuthContainer>
  );
}

export default Login;
