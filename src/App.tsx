import { Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";
import Customer from "./components/landing/customer/pages/Customer";
import Signup from "./components/auth/customer/page/Signup";
import { AnimateLoad } from "./components/auth/utils/LoadingSetUp";
import VerifyOtp from "./components/auth/customer/page/VerifyOtp";
import Login from "./components/auth/customer/page/Login";
import DashboardLayout from "./components/dashboard/customer/_components/DashboardLayout";
import Home from "./components/dashboard/customer/pages/Home";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        {/* Landing page route */}
        <Route path="/" element={<Customer />} />

        {/* Auth routes */}
        <Route path="/signup">
          <Route index element={<AnimateLoad element={<Signup />} />} />
          <Route
            path="verify-otp"
            element={<AnimateLoad element={<VerifyOtp />} />}
          />
        </Route>
        <Route path="/login" element={<AnimateLoad element={<Login />} />} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Home />} />
          <Route path="food-order" element={<Home />} />
          <Route path="order-history" element={<Home />} />
          <Route path="favourites" element={<Home />} />
          <Route path="messages" element={<Home />} />
          <Route path="payment-details" element={<Home />} />
        </Route>

        {/* Default route for non-existing paths */}
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
