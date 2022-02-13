import { Fragment, FC } from "react";
import { Outlet } from "react-router-dom";

// COMPONENTS
import {
  AppBar,
} from "../../components/navigation";

const DashboardLayout: FC = () => {
  return (
    <Fragment>
      <div>
        <AppBar />
          <Outlet />
        <h3>AppFooter</h3>
      </div>
    </Fragment>
  );
}

export default DashboardLayout;