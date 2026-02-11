"use client";
import LogoutButton from "@/components/logout-button";
import { useAppSelector } from "@/redux/hooks";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";

const EmployeeDashboard = () => {
  const t = useTranslations();
  const router = useRouter();
  const { loggedInUser } = useAppSelector((state) => state.auth);
  if (!loggedInUser) return router.replace("/");
  return (
    <div id="employeeDashboard" className="container">
      <div className="user-dashboard-container">
        <div className="user-dashboard-card">
          <div className="login-header">
            <LogoutButton />
            <div
              className="logo-icon"
              style={{ fontSize: "32px", color: "#f5576c" }}
            >
              <i className="fas fa-user"></i>
            </div>
          </div>

          <div className="user-info">
            <div className="user-avatar" id="employeeAvatar">
              {loggedInUser.name.slice(0, 1)}
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
                {loggedInUser.email}
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
          <Link href="/employee">
            <button
              className="login-btn employee"
              style={{ marginTop: "30px" }}
            >
              <i className="fas fa-tasks"></i>
              <span>{t("accessWorkPanel")}</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
