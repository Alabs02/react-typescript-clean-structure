import { Fragment, FC } from "react";
import { Outlet } from "react-router-dom";

// COMPONENTS
import {
  AppBar,
  MiniAppBar,
  AppFooter,
} from "../../components/navigation";

const DashboardLayout: FC = () => {
  return (
    <Fragment>
      <div>
        <AppBar />
          <div className="psx-20 w-full h-full">
            <MiniAppBar />
            <Outlet />
            <h3>AppFooter</h3>
          </div>
        <AppFooter />
      </div>
    </Fragment>
  );
}

export default DashboardLayout;