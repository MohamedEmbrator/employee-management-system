import { useTranslations } from "next-intl";

const NewManagerAccountModal = () => {
  const t = useTranslations("managerDashboardPage");
  return (
      <div id="newManagerModal" className="modal">
        <div className="modal-content">
          <div className="modal-header">
          <h2 id="newManagerTitle">{t("newManagerTitle")}</h2>
            {/* onclick="closeNewManagerModal()" */}
            <button className="close-modal">&times;</button>
          </div>
          {/* onsubmit="return createNewManager(event)" */}
          <form id="newManagerForm">
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="newManagerName">
                  <i className="fas fa-user"></i>
                <span id="newManagerNameLabel">{t("newManagerNameLabel")}</span>
                </label>
                <input
                  type="text"
                  id="newManagerName"
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="newManagerEmail">
                  <i className="fas fa-envelope"></i>
                  <span id="newManagerEmailLabel">{t("newManagerEmailLabel")}</span>
                </label>
                <input
                  type="email"
                  id="newManagerEmail"
                  className="form-control"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="newManagerPassword">
                    <i className="fas fa-lock"></i>
                    <span id="newManagerPasswordLabel">{t("newManagerPasswordLabel")}</span>
                  </label>
                  <input
                    type="password"
                    id="newManagerPassword"
                    className="form-control"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="confirmManagerPassword">
                    <i className="fas fa-lock"></i>
                    <span id="confirmManagerPasswordLabel">
                      {t("confirmManagerPasswordLabel")}
                    </span>
                  </label>
                  <input
                    type="password"
                    id="confirmManagerPassword"
                    className="form-control"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              {/* onclick="closeNewManagerModal()" */}
              <button
                type="button"
                className="btn-secondary"
                id="cancelNewManagerBtn"
              >
                <i className="fas fa-times"></i>
                <span>{t("cancelNewManagerBtn")}</span>
              </button>
              <button
                type="submit"
                className="btn-primary"
                id="createManagerBtn"
              >
                <i className="fas fa-user-plus"></i>
              <span>{t("createManagerBtn")}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
  );
}

export default NewManagerAccountModal;
