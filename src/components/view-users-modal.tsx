import { useTranslations } from "next-intl";


const ViewUsersModal = () => {
  const t = useTranslations();
  return (
      <div id="viewUsersModal" className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h2>{t("registeredUsers")}</h2>
            {/* onClick="closeViewUsersModal()" */}
            <button className="close-modal">&times;</button>
          </div>
          <div className="modal-body">
            <div className="user-list" id="usersList"></div>
          </div>
          <div className="modal-footer">
            {/* onClick="closeViewUsersModal()" */}
            <button type="button" className="btn-secondary">
              {t("close")}
            </button>
          </div>
        </div>
      </div>
  );
}

export default ViewUsersModal;
