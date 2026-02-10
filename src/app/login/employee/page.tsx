"use client";
import BackToHomeButton from "@/components/back-to-home-button";
import { User } from "lucide-react";
import { useTranslations } from "next-intl";


const EmployeeLogin = () => {
  const t = useTranslations();
  return (
      <div id="employeeLoginPage" className="container">
        <div className="login-container">
          <div className="login-card">
            <div className="login-header">
                <BackToHomeButton />
              <div
                className="logo-icon"
                style={{ fontSize: "32px", color: "#f5576c" }}
              >
                <User />
              </div>
            </div>

            <div className="logo-section" style={{ marginBottom: "20px" }}>
              <h1>{t("employeeLogin")}</h1>
              <p className="subtitle">{t("enterYourCredentials")}</p>
            </div>

            <form id="employeeLoginForm" className="login-form">
              <div className="form-group">
                <label htmlFor="employeeEmail">
                  <i className="fas fa-envelope"></i>
                  <span>{t("emailAddress")}</span>
                </label>
                <input
                  type="email"
                  id="employeeEmail"
                  className="form-control"
                  placeholder={t("enterYourEmail")}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="employeePassword">
                  <i className="fas fa-lock"></i>
                  <span>{t("password")}</span>
                </label>
                <input
                  type="password"
                  id="employeePassword"
                  className="form-control"
                  placeholder={t("enterYourPassword")}
                  required
                />
              </div>

              <button
                type="submit"
                className="login-btn employee"
                id="employeeLoginBtn"
              >
                <i className="fas fa-sign-in-alt"></i>
                <span>{t("loginAsEmployee")}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
  );
}

export default EmployeeLogin;
