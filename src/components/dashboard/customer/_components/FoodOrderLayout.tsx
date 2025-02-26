import { Outlet } from "react-router";

function FoodOrderLayout() {
  return (
    <div className="bg-[#fafafa]">
      <Outlet />
    </div>
  );
}

export default FoodOrderLayout;
