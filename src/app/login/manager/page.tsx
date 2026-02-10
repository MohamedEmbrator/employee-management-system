"use client";
import BackToHomeButton from "@/components/back-to-home-button";
import { User } from "lucide-react";
import { useTranslations } from "next-intl";

const ManagerLogin = () => {
  const t = useTranslations();
  return (
    <div id="managerLoginPage" className="container">
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <BackToHomeButton />
            <div className="logo-icon" style={{ fontSize: "32px" }}>
              <User />
            </div>
          </div>

          <div className="logo-section" style={{ marginBottom: "20px" }}>
            <h1>{t("managerLogin")}</h1>
            <p className="subtitle">{t("usePresetCredentials")}</p>
          </div>

          <form id="managerLoginForm" className="login-form">
            <div className="form-group">
              <label htmlFor="managerEmail">
                <i className="fas fa-envelope"></i>
                <span>{t("emailAddress")}</span>
              </label>
              <input
                type="email"
                id="managerEmail"
                className="form-control"
                placeholder={t("enterManagerEmail")}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="managerPassword">
                <i className="fas fa-lock"></i>
                <span>{t("password")}</span>
              </label>
              <input
                type="password"
                id="managerPassword"
                className="form-control"
                placeholder={t("enterPassword")}
                required
              />
            </div>

            <button type="submit" className="login-btn" id="managerLoginBtn">
              <i className="fas fa-sign-in-alt"></i>
              <span>{t("loginAsManager")}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ManagerLogin;
