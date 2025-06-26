import Image from "next/image";
import FormLogin from "./components/login/form";
import "../styles/login/layout.scss";

export default function Login() {
  return (
    <>
      <div className="containers">
        <div className="rows">
          <div className="cols">
            <Image
              src={"/layout/images/logo-bsi-green.png"}
              className="logo"
              alt="Bank Syariah Indonesia"
              width={100}
              height={60}
            />
          </div>
        </div>
        <div className="rows">
          <div className="cols col1">
            <FormLogin />
          </div>
          <div className="cols col2 bottom">
            {/* <Info /> */}
            <div className="appsName">
              <h4>Branch New EXA Transformation V.1</h4>
              <p>
                &copy; 2024 PT Bank Syariah Indonesia Tbk. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <NoSupport /> */}
    </>
  );
}
