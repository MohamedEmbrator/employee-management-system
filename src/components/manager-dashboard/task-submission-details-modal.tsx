import { useTranslations } from "next-intl";

const TaskSubmissionDetailsModal = () => {
  const t = useTranslations("managerDashboardPage");
  return (
    <div id="taskSubmissionModal" className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2 id="modalTaskSubmissionTitle">{t("modalTaskSubmissionTitle")}</h2>
          {/* onclick="closeTaskSubmissionModal()" */}
          <button className="close-modal">&times;</button>
        </div>
        <div className="modal-body">
          <div className="details-grid">
            <div className="detail-item">
              <strong id="submissionDetailManager">{t("submissionDetailManager")}</strong>
              <span id="modalSubmissionTaskManager">--</span>
            </div>
            <div className="detail-item">
              <strong id="submissionDetailEmployee">{t("submissionDetailEmployee")}</strong>
              <span id="modalSubmissionTaskEmployee">--</span>
            </div>
            <div className="detail-item">
              <strong id="submissionDetailStartDate">{t("submissionDetailStartDate")}</strong>
              <span id="modalSubmissionTaskStartDate">--</span>
            </div>
            <div className="detail-item">
              <strong id="submissionDetailEndDate">{t("submissionDetailEndDate")}</strong>
              <span id="modalSubmissionTaskEndDate">--</span>
            </div>
            <div className="detail-item">
              <strong id="submissionDetailPriority">{t("submissionDetailPriority")}</strong>
              <span id="modalSubmissionTaskPriority">--</span>
            </div>
            <div className="detail-item">
              <strong id="submissionDetailStatus">{t("submissionDetailStatus")}</strong>
              <span id="modalSubmissionTaskStatus">--</span>
            </div>
            <div className="detail-item">
              <strong id="submissionDetailProgress">{t("submissionDetailProgress")}</strong>
              <span id="modalSubmissionTaskProgress">0%</span>
            </div>
            <div className="detail-item">
              <strong id="submissionDetailPrice">{t("submissionDetailPrice")}</strong>
              <span id="modalSubmissionTaskPrice">--</span>
            </div>
          </div>

          <h3 id="submissionDescriptionTitle">{t("submissionDescriptionTitle")}</h3>
          <p id="modalSubmissionTaskDescription"></p>

          {/* <!-- ✅ قسم العمل المُسلم من الموظف --> */}
          <div
            className="employee-work-section"
            id="submissionEmployeeWorkSection"
          >
            <h4>
              <i className="fas fa-user-check"></i>{" "}
              <span id="submissionEmployeeSubmittedWorkTitle">
                {t("submissionEmployeeSubmittedWorkTitle")}
              </span>
            </h4>
            <div id="submissionEmployeeWorkContent">
              {/* <!-- Employee work will be populated by JavaScript --> */}
            </div>
            {/* onclick="openAllEmployeeFilesSubmission()" */}
            <button className="auto-open-btn">
              <i className="fas fa-external-link-alt"></i>{" "}
              <span id="openAllEmployeeFilesSubmissionBtn">
                {t("openAllEmployeeFilesSubmissionBtn")}
              </span>
            </button>
          </div>

          {/* <!-- Auto Open Button for Files --> */}
          {/* onclick="autoOpenAllFilesSubmission()" */}
          <button className="auto-open-btn">
            <i className="fas fa-external-link-alt"></i>
            <span id="autoOpenSubmissionTaskBtn">{t("autoOpenSubmissionTaskBtn")}</span>
          </button>

          {/* <!-- Status Update Buttons --> */}
          <div
            className="status-update-buttons"
            id="submissionStatusUpdateButtons"
          >
            {/* <!-- Status buttons will be populated by JavaScript --> */}
          </div>
        </div>
        <div className="modal-footer">
          {/* onclick="closeTaskSubmissionModal()" */}
          <button
            type="button"
            className="btn-secondary"
            id="cancelSubmissionBtn"
          >
            <i className="fas fa-times"></i>
            <span>{t("cancelSubmissionBtn")}</span>
          </button>
          {/* <!-- تم إزالة زر Reassign Task هنا --> */}
        </div>
      </div>
    </div>
  );
};

export default TaskSubmissionDetailsModal;
