import { Route, Routes } from "react-router";
import Customer from "./components/landing/customer";
import Signup from "./components/auth/customer/page/Signup";
import VendorSignup from "./components/auth/vendor/page/Signup";
import { AnimateLoad } from "./components/auth/_components/AnimateLoad";
import Login from "./components/auth/customer/page/Login";
import VendorLogin from "./components/auth/vendor/page/Login";
import DashboardLayout from "./components/dashboard/customer/Layout";
import Home from "./components/dashboard/customer/pages/Home";
import FoodOrder from "./components/dashboard/customer/pages/FoodOrder";
import SelectedFoodOrder from "./components/dashboard/customer/pages/SelectedFoodOrder";
import Favourites from "./components/dashboard/customer/pages/Favourites";
import FoodOrderLayout from "./components/dashboard/customer/_components/FoodOrderLayout";
import Restaurant from "./components/dashboard/customer/pages/restaurant/_components/Restaurant";
import AuthContainer from "./components/auth/ui/AuthContainer";
import Vendor from "./components/landing/vendor";
import Settings from "./components/dashboard/customer/pages/settings/Index";
import DeliveryInfo from "./components/dashboard/customer/pages/settings/_components/DeliveryInfo";
import UserVerifyOtp from "./components/auth/customer/page/UserVerifyOtp";
import VendorVerifyOtp from "./components/auth/vendor/page/VendorVerifyOtp";
import VendorDashboardLayout from "./components/dashboard/vendor/Layout";
import GettingStarted from "./components/dashboard/vendor/page/GettingStarted";
import VendorHome from "./components/dashboard/vendor/page/Home";
import VendorInformation from "./components/auth/vendor/page/VendorBusinessInformation";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Customer />} />
      <Route path="/vendor">
        <Route index element={<Vendor />} />
        <Route path="dashboard" element={<VendorDashboardLayout />}>
          <Route index element={<GettingStarted />} />
          <Route path="home" element={<VendorHome />} />
          <Route path="menu" element={<h1>Menu here</h1>} />
          <Route path="order" element={<h1>order here</h1>} />
          <Route path="customers" element={<h1>customers here</h1>} />
          <Route path="payment-method" element={<h1>payment method here</h1>} />
          <Route path="transactions" element={<h1>transactions here</h1>} />

          <Route path="settings">
            <Route index element={<h1>vendor settings</h1>} />
            <Route path="business" element={<h1>Business settings here</h1>} />
          </Route>
        </Route>
      </Route>

      {/* Auth routes */}
      <Route path="/" element={<AuthContainer />}>
        {/* Customer auth routes */}
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
                <UserVerifyOtp />
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

        {/* Vendor auth routes */}
        <Route path="vendor">
          <Route path="signup">
            <Route
              index
              element={
                <AnimateLoad>
                  <VendorSignup />
                </AnimateLoad>
              }
            />
            <Route
              path="verify-otp"
              element={
                <AnimateLoad>
                  <VendorVerifyOtp />
                </AnimateLoad>
              }
            />
            <Route
              path="business-info"
              element={
                <AnimateLoad>
                  <VendorInformation />
                </AnimateLoad>
              }
            />
          </Route>
          <Route
            path="login"
            element={
              <AnimateLoad>
                <VendorLogin />
              </AnimateLoad>
            }
          />
        </Route>
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
        <Route path="settings">
          <Route index element={<Settings />} />
          <Route path="delivery-info" element={<DeliveryInfo />} />
        </Route>
      </Route>

      <Route path="/restaurants" element={<DashboardLayout />}>
        <Route index element={<Home />} />
      </Route>

      <Route path="/" element={<DashboardLayout isLoggedIn />}>
        <Route path=":id" element={<Restaurant />} />
      </Route>

      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
}

export default App;
