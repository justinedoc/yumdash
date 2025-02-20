import { Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";
import Customer from "./components/landing/customer/pages/Customer";
import Signup from "./components/auth/customer/page/Signup";
import { AnimateLoad } from "./components/auth/utils/LoadingSetUp";
import VerifyOtp from "./components/auth/customer/page/VerifyOtp";
import Login from "./components/auth/customer/page/Login";

function App() {
  return (
    <>
      <ToastContainer
        autoClose={2500}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={true}
        closeButton={false}
      />
      <Routes>
        <Route path="/" element={<Customer />} />
        <Route path="/signup">
          <Route index element={<AnimateLoad element={<Signup />} />} />
          <Route
            path="verify-otp"
            element={<AnimateLoad element={<VerifyOtp />} />}
          />
        </Route>
        <Route path="/login" element={<AnimateLoad element={<Login />} />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
