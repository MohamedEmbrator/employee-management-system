import { useTranslations } from "next-intl";

const TaskDetailsModal = () => {
  const t = useTranslations("managerDashboardPage");
  return (
    <div id="taskModal" className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2 id="modalTaskTitle">{t("modalTaskTitle")}</h2>
          {/* onclick="closeTaskModal()" */}
          <button className="close-modal">&times;</button>
        </div>
        <div className="modal-body">
          <div className="details-grid">
            <div className="detail-item">
              <strong id="detailManager">{t("detailManager")}</strong>
              <span id="modalTaskManager">--</span>
            </div>
            <div className="detail-item">
              <strong id="detailEmployee">{t("detailEmployee")}</strong>
              <span id="modalTaskEmployee">--</span>
            </div>
            <div className="detail-item">
              <strong id="detailStartDate">{t("detailStartDate")}</strong>
              <span id="modalTaskStartDate">--</span>
            </div>
            <div className="detail-item">
              <strong id="detailEndDate">{t("detailEndDate")}</strong>
              <span id="modalTaskEndDate">--</span>
            </div>
            <div className="detail-item">
              <strong id="detailPriority">{t("detailPriority")}</strong>
              <span id="modalTaskPriority">--</span>
            </div>
            <div className="detail-item">
              <strong id="detailStatus">{t("detailStatus")}</strong>
              <span id="modalTaskStatus">--</span>
            </div>
            <div className="detail-item">
              <strong id="detailProgress">{t("detailProgress")}</strong>
              <span id="modalTaskProgress">0%</span>
            </div>
            <div className="detail-item">
              <strong id="detailPrice">{t("detailPrice")}</strong>
              <span id="modalTaskPrice">--</span>
            </div>
          </div>

          <h3 id="descriptionTitle">{t("descriptionTitle")}</h3>
          <p id="modalTaskDescription"></p>

          {/* <!-- ✅ قسم العمل المُسلم من الموظف --> */}
          <div className="employee-work-section" id="employeeWorkSection">
            <h4>
              <i className="fas fa-user-check"></i>{" "}
              <span id="employeeSubmittedWorkTitle">
                {t("employeeSubmittedWorkTitle")}
              </span>
            </h4>
            <div id="employeeWorkContent">
              {/* <!-- Employee work will be populated by JavaScript --> */}
            </div>
            {/* onclick="openAllEmployeeFiles()" */}
            <button className="auto-open-btn">
              <i className="fas fa-external-link-alt"></i>{" "}
              <span id="openAllEmployeeFilesBtn">
                {t("openAllEmployeeFilesBtn")}
              </span>
            </button>
          </div>

          {/* <!-- Auto Open Button for Files --> */}
          {/* onclick="autoOpenAllFiles()" */}
          <button className="auto-open-btn">
            <i className="fas fa-external-link-alt"></i>
            <span id="autoOpenBtn">{t("autoOpenBtn")}</span>
          </button>

          {/* <!-- Status Update Buttons --> */}
          <div className="status-update-buttons" id="statusUpdateButtons">
            {/* <!-- Status buttons will be populated by JavaScript --> */}
          </div>
        </div>
        <div className="modal-footer">
          {/* onclick="closeTaskModal()" */}
          <button type="button" className="btn-secondary" id="cancelBtn">
            <i className="fas fa-times"></i>
            <span>{t("cancelBtn")}</span>
          </button>
          {/* <!-- تم إزالة زر Reassign Task هنا --> */}
        </div>
      </div>
    </div>
  );
};

export default TaskDetailsModal;
