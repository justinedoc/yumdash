import { Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";
import Customer from "./landing/customer/pages/Customer";

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
      </Routes>
    </>
  );
}

export default App;
