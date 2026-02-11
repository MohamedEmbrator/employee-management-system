"use client";
import { useAppSelector } from "@/redux/hooks";
import { useTranslations } from "next-intl";
import { redirect } from "next/navigation";

const ManagerDashboardHeader = () => {
  const t = useTranslations("managerDashboardPage");
  const { loggedInUser } = useAppSelector((state) => state.auth);
  if (!loggedInUser) return redirect("/");
  return (
    <div className="header">
      <div className="manager-info">
        <div className="manager-avatar" id="managerAvatar">
          {loggedInUser.name.slice(0, 1).toUpperCase()}
        </div>
        <div className="manager-details">
          <h1 id="managerName">{t("managerName")}</h1>
        </div>
      </div>
      <div className="header-actions">
        {/* onclick="openChangePasswordModal()" */}
        <button className="header-btn change-password-btn">
          <i className="fas fa-key"></i>
          <span id="">{t("changePasswordBtn")}</span>
        </button>
        {/* onclick="openNewManagerModal()" */}
        <button className="header-btn new-manager-btn">
          <i className="fas fa-user-plus"></i>
          <span id="newManagerBtn">{t("newManagerBtn")}</span>
        </button>
      </div>

      <div className="stats-overview">
        <h3 id="totalTasksTitle">{t("totalTasksTitle")}</h3>
        <div className="stats-count" id="totalTasksCount">
          0
        </div>
        {/* <!-- التعديل هنا: بدل tasksInProgress أصبح tasksCompleted --> */}
        <div className="stats-label" id="tasksCompleted">
          0 {t("tasksCompleted")}
        </div>
      </div>
    </div>
  );
};

export default ManagerDashboardHeader;
