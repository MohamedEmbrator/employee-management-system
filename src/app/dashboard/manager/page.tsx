"use client";
import CreateAccountModal from "@/components/create-account-modal";
import LogoutButton from "@/components/logout-button";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";

const ManagerDashboard = () => {
  const t = useTranslations();
  const [modalTitle, setModalTitle] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = (title: string) => {
    setModalTitle(title);
    setIsOpen(true);
  }

  return (
    <div id="managerDashboard" className="container">
      <div className="dashboard-container">
        <div className="dashboard-card">
          <div className="login-header">
            <LogoutButton />
            <div className="logo-icon" style={{ fontSize: "32px" }}>
              <i className="fas fa-user-tie"></i>
            </div>
          </div>

          <div className="logo-section" style={{ marginBottom: "20px" }}>
            <h1>{t("managerDashboard")}</h1>
            <p className="subtitle" id="managerWelcome">
              {t("welcomeBackManager")}
            </p>
          </div>

          <div className="dashboard-options">
            <div className="dashboard-option" onClick={() => handleOpenModal("employee")}>
              <div className="option-icon">
                <i className="fas fa-user-plus"></i>
              </div>
              <div className="option-title">{t("createEmployeeAccount")}</div>
              <div className="option-desc">{t("registerNewEmployee")}</div>
            </div>
            
            <div className="dashboard-option" onClick={() => handleOpenModal("admin")}>
              <div className="option-icon">
                <i className="fas fa-user-shield"></i>
              </div>
              <div className="option-title">{t("createAdminAccount")}</div>
              <div className="option-desc">{t("registerNewAdmin")}</div>
            </div>
            {/* onClick="viewAllUsers()" */}
            <div className="dashboard-option">
              <div className="option-icon">
                <i className="fas fa-users"></i>
              </div>
              <div className="option-title">{t("viewAllUsers")}</div>
              <div className="option-desc">{t("seeRegisteredUsers")}</div>
            </div>

            <Link
              href="/manager-dashboard"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="dashboard-option">
                <div className="option-icon">
                  <i className="fas fa-tasks"></i>
                </div>
                <div className="option-title">{t("enterSystem")}</div>
                <div className="option-desc">{t("accessMainSystem")}</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <CreateAccountModal isOpen={isOpen} setIsOpen={setIsOpen} title={modalTitle} />
    </div>
  );
};

export default ManagerDashboard;
