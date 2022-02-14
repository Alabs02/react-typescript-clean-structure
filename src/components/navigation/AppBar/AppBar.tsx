import { FC, Fragment } from "react";
import { IoChevronDown } from "react-icons/io5";
import "./AppBar.scss";

const AppBar: FC = () => {
  return (
    <Fragment>
      <div className="appbar">
        <div className="appbar-brand">
          <img src="/static/logo.svg" alt="brand-logo" />
        </div>

        <div className="appbar-navigation">
          <button className="text-btn">
            <div className="text-btn-icon">
              <img src="/static/icon-help.svg" alt="" />
            </div>
            <div className="text-btn-title">Help</div>
          </button>

          <button className="dropdown-btn">
            <div className="dropdown-btn__avatar fw-medium msr-8">
              TA
            </div>
            <div className="fw-medium dropdown-btn__copy msr-12">Hello, <span className="fw-semi-bold">Tobiloba</span></div>
            <IoChevronDown />
          </button>
        </div>
      </div>
    </Fragment>
  )
}

export default AppBar;