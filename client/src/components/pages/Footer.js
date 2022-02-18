import React from "react";

const Footer = () => (
  <footer
    className="page-footer font-small blue pt-4"
    style={{ background: "#02305a" }}
  >
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <h5 className="text-uppercase" style={{ color: "white" }}>
            LEGAL REGISTER CENTRE{" "}
          </h5>
          <p style={{ color: "white" }}>footer content.</p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-3 mb-md-0 mb-3" style={{ color: "white" }}>
          <h5 className="text-uppercase"> Links</h5>
        </div>
      </div>
    </div>

    <div
      className="footer-copyright text-center py-3"
      style={{ color: "white" }}
    >
      © 2022 Copyright:
      <a href=""> OIKEUSREKISERIKESKUS</a>
    </div>
  </footer>
);

export default Footer;
