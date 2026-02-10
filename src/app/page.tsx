"use client";
import LanguageSwitcher from "@/components/language-switcher";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { LoginRule } from "@/utils/types";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();
  const t = useTranslations();
  const [selectedRole, setSelectedRole] = useState<LoginRule | "">("");
  const handleNavigate = () => router.push(`/login/${selectedRole}`);
  return (
    <div className="home">
      <LanguageSwitcher />
      <div id="roleSelectionPage" className="container active">
        <div className="role-selection-container">
          <div className="role-selection-card">
            <div className="logo-section">
              <div className="logo-icon">
                <i className="fas fa-user-tie"></i>
              </div>
              <h1>{t("appTitle")}</h1>
              <p className="subtitle">{t("selectRole")}</p>
            </div>

            <div className="role-options">
              <div
                className={`role-card ${selectedRole === "manager" && "selected"}`}
                onClick={() => setSelectedRole("manager")}
              >
                <div className="role-icon">
                  <i className="fas fa-user-tie"></i>
                </div>
                <div className="role-title">{t("manager")}</div>
                <div className="role-desc">{t("managerDesc")}</div>
              </div>

              <div
                className={`role-card ${selectedRole === "employee" && "selected"}`}
                onClick={() => setSelectedRole("employee")}
              >
                <div className="role-icon">
                  <i className="fas fa-user"></i>
                </div>
                <div className="role-title">{t("employee")}</div>
                <div className="role-desc">{t("employeeDesc")}</div>
              </div>

              <div
                className={`role-card ${selectedRole === "admin" && "selected"}`}
                onClick={() => setSelectedRole("admin")}
              >
                <div className="role-icon">
                  <i className="fas fa-user-shield"></i>
                </div>
                <div className="role-title">{t("admin")}</div>
                <div className="role-desc">{t("adminDesc")}</div>
              </div>
            </div>

            <button
              className="continue-btn"
              id="continueBtn"
              disabled={!selectedRole}
              onClick={handleNavigate}
            >
              <i className="fas fa-arrow-right"></i>
              <span>{t("continue")}</span>
            </button>
          </div>
        </div>
      </div>


      {/* <!-- Manager Dashboard --> */}
      <div id="managerDashboard" className="container">
        <div className="dashboard-container">
          <div className="dashboard-card">
            <div className="login-header">
              {/* onClick="logout()" */}
              <button className="back-btn">
                <i className="fas fa-sign-out-alt"></i>
                <span>{t("logout")}</span>
              </button>
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
              {/* onClick="openCreateAccountModal('employee')" */}
              <div className="dashboard-option">
                <div className="option-icon">
                  <i className="fas fa-user-plus"></i>
                </div>
                <div className="option-title">{t("createEmployeeAccount")}</div>
                <div className="option-desc">{t("registerNewEmployee")}</div>
              </div>
              {/* onClick="openCreateAccountModal('admin')" */}
              <div className="dashboard-option">
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

              <a
                href="manager-dashboard.html"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {/* onClick="enterSystem()" */}
                <div className="dashboard-option">
                  <div className="option-icon">
                    <i className="fas fa-tasks"></i>
                  </div>
                  <div className="option-title">{t("enterSystem")}</div>
                  <div className="option-desc">{t("accessMainSystem")}</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Employee Dashboard --> */}
      <div id="employeeDashboard" className="container">
        <div className="user-dashboard-container">
          <div className="user-dashboard-card">
            <div className="login-header">
              {/* onClick="logout()" */}
              <button className="back-btn">
                <i className="fas fa-sign-out-alt"></i>
                <span>{t("logout")}</span>
              </button>
              <div
                className="logo-icon"
                style={{ fontSize: "32px", color: "#f5576c" }}
              >
                <i className="fas fa-user"></i>
              </div>
            </div>

            <div className="user-info">
              <div className="user-avatar" id="employeeAvatar">
                E
              </div>
              <h1 id="employeeName">{t("employeeDashboard")}</h1>
              <p className="subtitle" id="employeeWelcome">
                {t("welcomeBack")}
              </p>
            </div>

            <div className="user-details">
              <div className="detail-item">
                <span className="detail-label">{t("email")}</span>
                <span className="detail-value" id="employeeEmailDetail">
                  example@email.com
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">{t("userType")}</span>
                <span className="detail-value">{t("employeeType")}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">{t("accountCreated")}</span>
                <span className="detail-value" id="employeeCreatedDate">
                  2024-01-01
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">{t("createdBy")}</span>
                <span className="detail-value" id="employeeCreatedBy">
                  Manager
                </span>
              </div>
            </div>
            <a href="employee.html">
              {/* onClick="enterSystem()" */}
              <button
                className="login-btn employee"
                style={{ marginTop: "30px" }}
              >
                <i className="fas fa-tasks"></i>
                <span>{t("accessWorkPanel")}</span>
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* <!-- Admin Dashboard --> */}
      <div id="adminDashboard" className="container">
        <div className="user-dashboard-container">
          <div className="user-dashboard-card">
            <div className="login-header">
              {/* onClick="logout()" */}
              <button className="back-btn">
                <i className="fas fa-sign-out-alt"></i>
                <span>{t("logout")}</span>
              </button>
              <div
                className="logo-icon"
                style={{ fontSize: "32px", color: "#10b981" }}
              >
                <i className="fas fa-user-shield"></i>
              </div>
            </div>

            <div className="user-info">
              <div className="user-avatar" id="adminAvatar">
                A
              </div>
              <h1 id="adminName">{t("adminDashboard")}</h1>
              <p className="subtitle" id="adminWelcome">
                {t("welcomeBackAdmin")}
              </p>
            </div>

            <div className="user-details">
              <div className="detail-item">
                <span className="detail-label">{t("email")}</span>
                <span className="detail-value" id="adminEmailDetail">
                  admin@promanage.com
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">{t("userType")}</span>
                <span className="detail-value">{t("administratorType")}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">{t("accountCreated")}</span>
                <span className="detail-value" id="adminCreatedDate">
                  2024-01-01
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">{t("createdBy")}</span>
                <span className="detail-value" id="adminCreatedBy">
                  System
                </span>
              </div>
            </div>

            <a href="admin.html">
              {/* onClick="enterSystem()" */}
              <button className="login-btn admin" style={{ marginTop: "30px" }}>
                <i className="fas fa-cogs"></i>
                <span>{t("accessControlPanel")}</span>
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* <!-- Create Account Modal --> */}
      <div id="createAccountModal" className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h2 id="modalTitle">{t("createNewAccount")}</h2>
            {/* onClick="closeCreateAccountModal()" */}
            <button className="close-modal">&times;</button>
          </div>
          <form id="createAccountForm">
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="createUserName">{t("fullName")}</label>
                <input
                  type="text"
                  id="createUserName"
                  className="form-control"
                  placeholder={t("enterFullName")}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="createUserEmail">{t("emailAddress")}</label>
                <input
                  type="email"
                  id="createUserEmail"
                  className="form-control"
                  placeholder={t("enterEmailAddress")}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="createUserPassword">{t("password")}</label>
                  <input
                    type="password"
                    id="createUserPassword"
                    className="form-control"
                    placeholder={t("enterPassword")}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="confirmUserPassword">
                    {t("confirmPassword")}
                  </label>
                  <input
                    type="password"
                    id="confirmUserPassword"
                    className="form-control"
                    placeholder={t("confirmYourPassword")}
                    required
                  />
                </div>
              </div>

              <input type="hidden" id="createUserType" value="" />
            </div>
            {/* onClick="closeCreateAccountModal()" */}
            <div className="modal-footer">
              <button type="button" className="btn-secondary">
                {t("cancel")}
              </button>
              <button type="submit" className="btn-primary">
                {t("createAccount")}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* <!-- View Users Modal --> */}
      <div id="viewUsersModal" className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h2>{t("registeredUsers")}</h2>
            {/* onClick="closeViewUsersModal()" */}
            <button className="close-modal">&times;</button>
          </div>
          <div className="modal-body">
            <div className="user-list" id="usersList"></div>
          </div>
          <div className="modal-footer">
            {/* onClick="closeViewUsersModal()" */}
            <button type="button" className="btn-secondary">
              {t("close")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
