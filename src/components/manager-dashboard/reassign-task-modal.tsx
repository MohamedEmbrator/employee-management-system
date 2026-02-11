import { useTranslations } from "next-intl";

const ReassignTaskModal = () => {
  const t = useTranslations("managerDashboardPage");
  return (
    <div id="reassignModal" className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2 id="reassignTitle">{t("reassignTitle")}</h2>
          {/* onclick="closeReassignModal()" */}
          <button className="close-modal">&times;</button>
        </div>
        <div className="modal-body">
          <div className="reassign-form">
            <div className="form-group">
              <label htmlFor="reassignToUser" id="reassignToLabel">
                {t("reassignToLabel")}
              </label>
              <select id="reassignToUser" className="form-select">
                {/* <!-- Users will be populated by JavaScript --> */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="reassignReason" id="reassignReasonLabel">
                {t("reassignReasonLabel")}
              </label>
              <textarea
                id="reassignReason"
                rows={4}
                placeholder="Optional reason for reassignment..."
              ></textarea>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          {/* onclick="closeReassignModal()" */}
          <button
            type="button"
            className="btn-secondary"
            id="cancelReassignBtn"
          >
            <i className="fas fa-times"></i>
            <span>{t("cancelReassignBtn")}</span>
          </button>
          {/* onclick="confirmReassignment()" */}
          <button type="button" className="btn-primary" id="confirmReassignBtn">
            <i className="fas fa-check"></i>
            <span>{t("confirmReassignBtn")}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReassignTaskModal;
