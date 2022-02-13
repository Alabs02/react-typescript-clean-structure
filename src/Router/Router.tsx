import {
  BrowserRouter,
  Routes,
} from "react-router-dom";
import ShipmentRoutes from "./ShipmentRoutes";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {ShipmentRoutes()} {/* SHIPMENT ROUTES*/}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;