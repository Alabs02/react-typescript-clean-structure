import { Fragment, FC } from "react";
import { Outlet } from "react-router-dom";

// @TYPES
import { DrawerRoute } from "../../@types";

// COMPONENTS
import {
  AppBar,
  MiniAppBar,
  AppFooter,
  AppDrawer,
} from "../../components/navigation";
import {
  FaBox,
  FaReceipt,
  FaFileInvoice,
} from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { IoSettingsSharp } from "react-icons/io5";

const DashboardLayout: FC = () => {
  const drawerRoutes: DrawerRoute[] = [
    {
      to: "/shipments",
      title: "Shipments",
      icon: FaBox,
    },

    {
      to: "/recipients",
      title: "Recipients",
      icon: HiUserGroup,
    },

    {
      to: "/quotes",
      title: "Quotes",
      icon: FaFileInvoice,
    },

    {
      to: "/invoices",
      title: "Invoices",
      icon: FaReceipt,
    },

    {
      to: "/settings",
      title: "Settings",
      icon: IoSettingsSharp,
    },
  ];

  return (
    <Fragment>
      <div className="grid w-full h-full">
        <AppBar />
          <div className="dashboard-layout w-full h-full">

            <div className="dashboard-layout__drawer h-full">
              <AppDrawer routes={drawerRoutes} />
            </div>

            <div className="dashboard-layout__content position-relative w-full h-full">
              <MiniAppBar />
              <Outlet />
            </div>
          </div>
        <AppFooter />
      </div>
    </Fragment>
  );
}

export default DashboardLayout;