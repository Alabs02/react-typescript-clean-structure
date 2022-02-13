// STYLES
import "./AppFooter.scss";

import { Fragment } from "react";
import { AppFooterLink as IAppFooterLink } from "../../../interfaces";
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import { NavLink } from "react-router-dom";


const AppFooter = () => {
  const companyList: IAppFooterLink[] = [
    {
      title: "Home",
      to: "/",
    },
    {
      title: "About Us",
      to: "/",
    },
    {
      title: "Contact Us",
      to: "/",
    },
    {
      title: "Privacy and Policy",
      to: "/",
    },
    {
      title: "Terms and Conditions",
      to: "/",
    },
  ];

  const serviceList: IAppFooterLink[] = [
    {
      title: "Air Freight Shipping",
      to: "/",
    },
    {
      title: "Road Delivery Service",
      to: "/",
    },
    {
      title: "Procurement Service",
      to: "/",
    },
  ];

  const renderLinks = (list: IAppFooterLink[]) => {
    return (
      <Fragment>
        {list.map((link, i) => (
          <li key={i} className="app-footer__list-item">
            <NavLink to={link.to} className="app-footer__link ft-14 fw-normal msb-8">
              {link.title}
            </NavLink>
          </li>
        ))}
      </Fragment>
    );
  }

  return (
    <Fragment>
      <div className="app-footer w-full pst-48">
        <div className="app-footer__body w-full psx-48">
          <div className="app-footer__content w-full">
            <div className="row">
              <div className="col-sm-12 col-md-5">
                <h6 className="app-footer__heading app-footer__heading--lg ft-23 fw-medium msb-8">SSAF Logistics</h6>

                <div className="app-footer__heading text-uppercase ft-14 fw-medium msb-4">Lagos Office</div>
                <p className="m-0 app-footer__text ft-14 fw-normal lh-20 msb-8">Suite D213, ogba Multipurpose Shopping Complex, Ikeja, Lagos.</p>

                <div className="app-footer__heading text-uppercase ft-14 fw-medium msb-4">Minnesota Office</div>
                <p className="m-0 app-footer__text ft-14 fw-normal lh-20 msb-8">3300 Country Road 10 Brooklyn Center MN55429</p>

                <p className="m-0 app-footer__text ft-14 fw-normal lh-20">Tel: +(234)0913245 7112, +1(832)-970-2740</p>
                <p className="m-0 app-footer__text ft-14 fw-normal lh-20">info@ssafllc.com</p>
              </div>

              <div className="col-md-3 col-sm-12">
                <h6 className="app-footer__heading ft-16 fw-medium msb-4">Company</h6>
                <ul className="app-footer__list">
                  {renderLinks(companyList)}
                </ul>
              </div>

              <div className="col-md-4 col-sm-12">
                <h6 className="app-footer__heading">Services</h6>
                <ul className="app-footer__list">
                  {renderLinks(serviceList)}
                </ul>
              </div>
            </div>
          </div>

          <div className="app-footer__location">
            <p className="m-0 ft-16 lh-24 fw-normal msb-5">Find us here</p>
            <div className="app-footer__media">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7927.131392538702!2d3.361514825976664!3d6.576364139238405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9271ea07192b%3A0xeb61868a07fcf71c!2sMaryland%20101233%2C%20Ikeja!5e0!3m2!1sen!2sng!4v1644763422710!5m2!1sen!2sng" width={'100%'} height={199} style={{border: 0}} allowFullScreen loading="lazy" />
            </div>
            <p className="ft-12 lh-16 fw-medium mst-4">Powered by
              <span className="msl-4 google-spacing text-uppercase ft-12 fw-medium">
                <span className="google-blue">G</span>
                <span className="google-red">O</span>
                <span className="google-yellow">O</span>
                <span className="google-blue">G</span>
                <span className="google-green">L</span>
                <span className="google-red">E</span>
              </span>
            </p>
          </div>
        </div>

        <div className="app-footer__social d-flex justify-content-center psx-48 w-full msb-10">
          <div className="app-footer__icons d-flex justify-content-between align-items-center">
            <BsFacebook className="pointer app-footer__icon" size={22} />
            <BsTwitter className="pointer app-footer__icon" size={22} />
            <BsLinkedin className="pointer app-footer__icon" size={22} />
          </div>
        </div>

        <div className="app-footer__copy ft-12 lh-16 fw-medium psy-12 psx-48">
          Copyright { new Date().getFullYear() }. SSAF Logistics. All Rights Reserved
        </div>
      </div>
    </Fragment>
  );
}

export default AppFooter;