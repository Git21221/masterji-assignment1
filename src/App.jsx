import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Chaiaurcodetext from "./components/Chaiaurcodetext";
import Chaicodelogo from "./components/Chaicodelogo";

function App() {
  const params = useLocation();
  return (
    <div
      className={`${
        params.pathname === "/otp-form"
          ? "bg-[#3F72AF]"
          : params.pathname === "/batches"
          ? "bg-[#D2E3C8]"
          : "bg-[#E2BBE9]"
      } h-screen w-screen`}
    >
      <Chaiaurcodetext className={"text-white"} />
        <Outlet />
      <Chaicodelogo />
    </div>
  );
}

export default App;
