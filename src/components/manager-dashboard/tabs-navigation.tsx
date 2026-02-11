import { useTranslations } from "next-intl";

const TabsNavigation = () => {
  const t = useTranslations("managerDashboardPage");
  return (
    <div className="tabs">
      {/* onclick="showTab('all-tasks')" */}
      <button className="tab-btn active" data-tab="all-tasks">
        <i className="fas fa-tasks"></i>
        <span id="tabAllTasks">{t("tabAllTasks")}</span>
      </button>
      {/* onclick="showTab('submitted-work')" */}
      <button className="tab-btn" data-tab="submitted-work">
        <i className="fas fa-paper-plane"></i>
        <span id="tabSubmittedWork">{t("tabSubmittedWork")}</span>
      </button>
      {/* onclick="showTab('users')" */}
      <button className="tab-btn" data-tab="users">
        <i className="fas fa-users"></i>
        <span id="tabUsers">{t("tabUsers")}</span>
      </button>
      {/* onclick="showTab('archive')" */}
      <button className="tab-btn" data-tab="archive">
        <i className="fas fa-archive"></i>
        <span id="tabArchive">{t("tabArchive")}</span>
      </button>
    </div>
  );
};

export default TabsNavigation;
