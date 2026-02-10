"use client";
import BackToHomeButton from "@/components/back-to-home-button";
import { User } from "lucide-react";
import { useTranslations } from "next-intl";

const AdminLogin = () => {
  const t = useTranslations();
  return (
    <div id="adminLoginPage" className="container">
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <BackToHomeButton />
            <div
              className="logo-icon"
              style={{ fontSize: "32px", color: "#10b981" }}
            >
              <User />
            </div>
          </div>

          <div className="logo-section" style={{ marginBottom: "20px" }}>
            <h1>{t("adminLogin")}</h1>
            <p className="subtitle">{t("systemAdminAccess")}</p>
          </div>

          <form id="adminLoginForm" className="login-form">
            <div className="form-group">
              <label htmlFor="adminEmail">
                <i className="fas fa-envelope"></i>
                <span>{t("emailAddress")}</span>
              </label>
              <input
                type="email"
                id="adminEmail"
                className="form-control"
                placeholder={t("enterAdminEmail")}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="adminPassword">
                <i className="fas fa-lock"></i>
                <span>{t("password")}</span>
              </label>
              <input
                type="password"
                id="adminPassword"
                className="form-control"
                placeholder={t("enterPassword")}
                required
              />
            </div>

            <button
              type="submit"
              className="login-btn admin"
              id="adminLoginBtn"
            >
              <i className="fas fa-sign-in-alt"></i>
              <span>{t("loginAsAdmin")}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
