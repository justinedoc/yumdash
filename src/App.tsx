import { Route, Routes } from "react-router";
import Customer from "./components/landing/customer/pages/Customer";
import Signup from "./components/auth/customer/page/Signup";
import { AnimateLoad } from "./components/auth/utils/LoadingSetUp";
import VerifyOtp from "./components/auth/customer/page/VerifyOtp";
import Login from "./components/auth/customer/page/Login";
import DashboardLayout from "./components/dashboard/customer/_components/DashboardLayout";
import Home from "./components/dashboard/customer/pages/Home";
import FoodOrder from "./components/dashboard/customer/pages/FoodOrder";
import SelectedFoodOrder from "./components/dashboard/customer/pages/SelectedFoodOrder";
import Favourites from "./components/dashboard/customer/pages/Favourites";
import FoodOrderLayout from "./components/dashboard/customer/_components/FoodOrderLayout";
import Restaurant from "./components/dashboard/customer/pages/restaurant/_components/Restaurant";

function App() {
  return (
    <Routes>
      {/* Landing page route */}
      <Route path="/" element={<Customer />} />

      <Route path="/" element={<DashboardLayout isLoggedIn />}>
        <Route path=":id" element={<Restaurant />} />
      </Route>
      {/* Auth routes */}
      <Route path="/signup">
        <Route index element={<AnimateLoad element={<Signup />} />} />
        <Route
          path="verify-otp"
          element={<AnimateLoad element={<VerifyOtp />} />}
        />
      </Route>
      <Route path="/login" element={<AnimateLoad element={<Login />} />} />

      {/* Dashboard routes */}
      <Route path="/dashboard" element={<DashboardLayout isLoggedIn />}>
        <Route path="home" element={<Home />} />
        <Route path="food-order" element={<FoodOrderLayout />}>
          <Route index element={<FoodOrder />} />
          <Route path=":id" element={<SelectedFoodOrder />} />
        </Route>
        <Route path="order-history" element={<Home />} />
        <Route path="favourites" element={<Favourites />} />
        <Route path="messages" element={<Home />} />
        <Route path="payment-details" element={<Home />} />
      </Route>

      <Route path="/restaurants" element={<DashboardLayout />}>
        <Route index element={<Home />} />
      </Route>

      {/* non-existing paths */}
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
}

export default App;
