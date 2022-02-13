import { Route } from "react-router-dom";
import { DashboardLayout } from "../../layouts";
import {
  Shipments,
  Details,
} from "../../pages/shipments";

const ShipmentRoutes = () => {
  return (
    <Route path="shipments" element={<DashboardLayout />}>
      <Route path="" element={<Shipments />}></Route>
      <Route path="details" element={<Details />}></Route>
    </Route>
  );
};

export default ShipmentRoutes;