import { Route, Routes } from "react-router";
import Customer from "./components/landing/customer";
import Signup from "./components/auth/customer/page/Signup";
import { AnimateLoad } from "./components/auth/customer/_components/AnimateLoad";
import VerifyOtp from "./components/auth/customer/page/VerifyOtp";
import Login from "./components/auth/customer/page/Login";
import DashboardLayout from "./components/dashboard/customer/_components/DashboardLayout";
import Home from "./components/dashboard/customer/pages/Home";
import FoodOrder from "./components/dashboard/customer/pages/FoodOrder";
import SelectedFoodOrder from "./components/dashboard/customer/pages/SelectedFoodOrder";
import Favourites from "./components/dashboard/customer/pages/Favourites";
import FoodOrderLayout from "./components/dashboard/customer/_components/FoodOrderLayout";
import Restaurant from "./components/dashboard/customer/pages/restaurant/_components/Restaurant";
import AuthContainer from "./components/auth/customer/_components/AuthContainer";

function App() {
  return (
    <Routes>
      {/* Landing page route */}
      <Route path="/" element={<Customer />} />

      <Route path="/" element={<DashboardLayout isLoggedIn />}>
        <Route path=":id" element={<Restaurant />} />
      </Route>

      {/* Auth routes */}
      <Route path="/" element={<AuthContainer />}>
        <Route path="signup">
          <Route
            index
            element={
              <AnimateLoad>
                <Signup />
              </AnimateLoad>
            }
          />
          <Route
            path="verify-otp"
            element={
              <AnimateLoad>
                <VerifyOtp />
              </AnimateLoad>
            }
          />
        </Route>
        <Route
          path="login"
          element={
            <AnimateLoad>
              <Login />
            </AnimateLoad>
          }
        />
      </Route>

      {/* Dashboard routes */}
      <Route path="/dashboard" element={<DashboardLayout isLoggedIn />}>
        <Route path="home" element={<Home />} />
        <Route path="food-order" element={<FoodOrderLayout />}>
          <Route index element={<FoodOrder />} />
          <Route path=":id" element={<SelectedFoodOrder />} />
        </Route>
        <Route path="order-history" element={<h1>Order history here</h1>} />
        <Route path="favourites" element={<Favourites />} />
        <Route path="messages" element={<h1>Messages here</h1>} />
        <Route path="payment-details" element={<h1>Payment details here</h1>} />
      </Route>

      <Route path="/restaurants" element={<DashboardLayout />}>
        <Route index element={<Home />} />
      </Route>

      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
}

export default App;
