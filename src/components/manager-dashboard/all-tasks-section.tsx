import { useTranslations } from "next-intl";

const AllTasksSection = () => {
  const t = useTranslations("managerDashboardPage");
  return (
    <div id="all-tasks" className="section active">
      <div className="section-header">
        <h2>
          <i className="fas fa-tasks"></i>{" "}
          <span id="allTasksTitle">{t("allTasksTitle")}</span>
        </h2>
        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <div className="filter-controls">
            {/* onchange="filterAllTasks()" */}
            <select id="taskFilter" className="filter-select">
              <option value="all" id="filterAll">
                {t("filterAll")}
              </option>
              <option value="pending" id="filterPending">
                {t("filterPending")}
              </option>
              <option value="in-progress" id="filterInProgress">
                {t("filterInProgress")}
              </option>
              <option value="completed" id="filterCompleted">
                {t("filterCompleted")}
              </option>
              <option value="under-review" id="filterReview">
                {t("filterReview")}
              </option>
            </select>
            {/* onchange="filterAllTasks()" */}
            <select id="userFilter" className="filter-select">
              <option value="all" id="filterAllUsers">
                {t("filterAllUsers")}
              </option>
            </select>
          </div>
          {/* onclick="openNewTaskModal()" */}
          <button className="new-task-btn">
            <i className="fas fa-plus"></i>
            <span id="newTaskBtn">{t("newTaskBtn")}</span>
          </button>
        </div>
      </div>
      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              <th id="taskNameHeader">{t("taskNameHeader")}</th>
              <th id="assignedByHeader">{t("assignedByHeader")}</th>
              <th id="assignedToHeader">{t("assignedToHeader")}</th>
              <th id="startDateHeader">{t("startDateHeader")}</th>
              <th id="endDateHeader">{t("endDateHeader")}</th>
              <th id="priorityHeader">{t("priorityHeader")}</th>
              <th id="statusHeader">{t("statusHeader")}</th>
              <th id="actionsHeader">{t("actionsHeader")}</th>
            </tr>
          </thead>
          <tbody id="allTasksTable">
            {/* <!-- Tasks will be populated by JavaScript --> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTasksSection;
