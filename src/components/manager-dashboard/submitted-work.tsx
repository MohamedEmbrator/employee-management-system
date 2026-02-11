import { useTranslations } from "next-intl";

const SubmittedWork = () => {
  const t = useTranslations("managerDashboardPage");
  return (
    <div id="submitted-work" className="section">
      <div className="section-header">
        <h2>
          <i className="fas fa-paper-plane"></i>{" "}
          <span id="submittedWorkTitle">{t("submittedWorkTitle")}</span>
        </h2>
        <div className="filter-controls">
          {/* onchange="filterSubmissions()" */}
          <select id="submissionFilter" className="filter-select">
            <option value="all" id="filterAllSubmissions">
              {t("filterAllSubmissions")}
            </option>
            <option value="today" id="filterToday">
              {t("filterToday")}
            </option>
            <option value="week" id="filterWeek">
              {t("filterWeek")}
            </option>
            <option value="month" id="filterMonth">
              {t("filterMonth")}
            </option>
          </select>
        </div>
      </div>
      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              <th id="submissionTaskHeader">{t("submissionTaskHeader")}</th>
              <th id="submissionEmployeeHeader">{t("submissionEmployeeHeader")}</th>
              <th id="submissionToHeader">{t("submissionToHeader")}</th>
              <th id="submissionDateHeader">{t("submissionDateHeader")}</th>
              <th id="submissionFilesHeader">{t("submissionFilesHeader")}</th>
              {/* <!-- تم إزالة عمود التعليقات هنا --> */}
              <th id="submissionActionsHeader">{t("submissionActionsHeader")}</th>
            </tr>
          </thead>
          <tbody id="submittedWorkTable">
            {/* <!-- Submitted work will be populated by JavaScript --> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubmittedWork;
