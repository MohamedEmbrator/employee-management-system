import { useTranslations } from "next-intl";


const CreateAccountModal = () => {
  const t = useTranslations();
  return (
      <div id="createAccountModal" className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h2 id="modalTitle">{t("createNewAccount")}</h2>
            {/* onClick="closeCreateAccountModal()" */}
            <button className="close-modal">&times;</button>
          </div>
          <form id="createAccountForm">
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="createUserName">{t("fullName")}</label>
                <input
                  type="text"
                  id="createUserName"
                  className="form-control"
                  placeholder={t("enterFullName")}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="createUserEmail">{t("emailAddress")}</label>
                <input
                  type="email"
                  id="createUserEmail"
                  className="form-control"
                  placeholder={t("enterEmailAddress")}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="createUserPassword">{t("password")}</label>
                  <input
                    type="password"
                    id="createUserPassword"
                    className="form-control"
                    placeholder={t("enterPassword")}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="confirmUserPassword">
                    {t("confirmPassword")}
                  </label>
                  <input
                    type="password"
                    id="confirmUserPassword"
                    className="form-control"
                    placeholder={t("confirmYourPassword")}
                    required
                  />
                </div>
              </div>

              <input type="hidden" id="createUserType" value="" />
            </div>
            {/* onClick="closeCreateAccountModal()" */}
            <div className="modal-footer">
              <button type="button" className="btn-secondary">
                {t("cancel")}
              </button>
              <button type="submit" className="btn-primary">
                {t("createAccount")}
              </button>
            </div>
          </form>
        </div>
      </div>
  );
}

export default CreateAccountModal;
