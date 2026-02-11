import { useTranslations } from "next-intl";

const ChangePasswordModal = () => {
  const t = useTranslations("managerDashboardPage");
  return (
      <div id="changePasswordModal" className="modal">
        <div className="modal-content">
          <div className="modal-header">
          <h2 id="changePasswordTitle">{t("changePasswordTitle")}</h2>
            {/* onclick="closeChangePasswordModal()" */}
            <button className="close-modal">&times;</button>
          </div>
          {/* onsubmit="return changePassword(event)" */}
          <form id="changePasswordForm">
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="currentPassword">
                  <i className="fas fa-lock"></i>
                <span id="currentPasswordLabel">{t("currentPasswordLabel")}</span>
                </label>
                <input
                  type="password"
                  id="currentPassword"
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="newPassword">
                  <i className="fas fa-key"></i>
                <span id="newPasswordLabel">{t("newPasswordLabel")}</span>
                </label>
                <input
                  type="password"
                  id="newPassword"
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmNewPassword">
                  <i className="fas fa-key"></i>
                <span id="confirmNewPasswordLabel">{t("confirmNewPasswordLabel")}</span>
                </label>
                <input
                  type="password"
                  id="confirmNewPassword"
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="modal-footer">
              {/* onclick="closeChangePasswordModal()" */}
              <button
                type="button"
                className="btn-secondary"
                id="cancelChangePasswordBtn"
              >
                <i className="fas fa-times"></i>
              <span>{t("cancelChangePasswordBtn")}</span>
              </button>
              <button
                type="submit"
                className="btn-primary"
                id="savePasswordBtn"
              >
                <i className="fas fa-save"></i>
              <span>{t("savePasswordBtn")}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
  );
}

export default ChangePasswordModal;
