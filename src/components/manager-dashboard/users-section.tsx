import { useTranslations } from "next-intl";

const UsersSection = () => {
  const t = useTranslations("managerDashboardPage");
  return (
    <div id="users" className="section">
      <div className="section-header">
        <h2>
          <i className="fas fa-users"></i>{" "}
          <span id="usersTitle">{t("usersTitle")}</span>
        </h2>
        <div className="filter-controls">
          {/* onchange="filterUsers()" */}
          <select id="userTypeFilter" className="filter-select">
            <option value="all" id="filterAllTypes">
              {t("filterAllTypes")}
            </option>
            <option value="manager" id="filterManagers">
              {t("filterManagers")}
            </option>
            <option value="employee" id="filterEmployees">
              {t("filterEmployees")}
            </option>
            <option value="admin" id="filterAdmins">
              {t("filterAdmins")}
            </option>
          </select>
        </div>
      </div>
      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              <th id="userNameHeader">{t("userNameHeader")}</th>
              <th id="userEmailHeader">{t("userEmailHeader")}</th>
              <th id="userTypeHeader">{t("userTypeHeader")}</th>
              <th id="userLastLoginHeader">{t("userLastLoginHeader")}</th>
              <th id="userActionsHeader">{t("userActionsHeader")}</th>
            </tr>
          </thead>
          <tbody id="usersTable">
            {/* <!-- Users will be populated by JavaScript --> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersSection;
