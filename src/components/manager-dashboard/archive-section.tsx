import { useTranslations } from "next-intl";

const ArchiveSection = () => {
  const t = useTranslations("managerDashboardPage");
  return (
    <div id="archive" className="section">
      <div className="section-header">
        <h2>
          <i className="fas fa-archive"></i>{" "}
          <span id="archiveTitle">{t("archiveTitle")}</span>
        </h2>
        <div className="filter-controls">
          {/* onchange="filterArchive()" */}
          <select id="archiveFilter" className="filter-select">
            <option value="all" id="filterAllArchive">
              {t("filterAllArchive")}
            </option>
            <option value="today" id="filterTodayArchive">
              {t("filterTodayArchive")}
            </option>
            <option value="week" id="filterWeekArchive">
              {t("filterWeekArchive")}
            </option>
            <option value="month" id="filterMonthArchive">
              {t("filterMonthArchive")}
            </option>
          </select>
        </div>
      </div>
      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              <th id="archiveTaskNameHeader">{t("archiveTaskNameHeader")}</th>
              <th id="archiveEmployeeHeader">{t("archiveEmployeeHeader")}</th>
              <th id="archiveArchivedByHeader">
                {t("archiveArchivedByHeader")}
              </th>
              <th id="archiveDateHeader">{t("archiveDateHeader")}</th>
              <th id="archiveStatusHeader">{t("archiveStatusHeader")}</th>
              <th id="archiveActionsHeader">{t("archiveActionsHeader")}</th>
            </tr>
          </thead>
          <tbody id="archiveTable">
            {/* <!-- Archived tasks will be populated by JavaScript --> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ArchiveSection;
