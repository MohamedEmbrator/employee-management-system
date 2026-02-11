import { useTranslations } from "next-intl";

interface Props {
  title: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateAccountModal = ({ title, isOpen, setIsOpen }: Props) => {
  const t = useTranslations();
  return isOpen && (
    <div id="createAccountModal" className={`modal ${isOpen && "show"}`}>
      <div className="modal-content">
        <div className="modal-header">
          <h2 id="modalTitle">{t("createNewAccount")} - {t(title)}</h2>
          <button className="close-modal" onClick={() => setIsOpen(false)}>&times;</button>
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
          <div className="modal-footer">
            <button type="button" className="btn-secondary" onClick={() => setIsOpen(false)}>
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
};

export default CreateAccountModal;
