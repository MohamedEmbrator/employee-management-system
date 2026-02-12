import { getAllUsersData } from "@/redux/API/usersAPI";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

interface Props {
  showReAssignTask: boolean;
  setShowReAssignTask: React.Dispatch<React.SetStateAction<boolean>>;
}

const ReassignTaskModal = ({
  setShowReAssignTask,
  showReAssignTask,
}: Props) => {
  const t = useTranslations("managerDashboardPage");
  const { users } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();
  const [reason, setReason] = useState("");
  const [selectedUserId, setSelectedUserId] = useState("");
  useEffect(() => {
    dispatch(getAllUsersData());
  }, [dispatch]);
  return (
    showReAssignTask && (
      <div id="reassignModal" className={`modal ${showReAssignTask && "show"}`}>
        <div className="modal-content">
          <div className="modal-header">
            <h2 id="reassignTitle">{t("reassignTitle")}</h2>
            <button
              className="close-modal"
              onClick={() => setShowReAssignTask(false)}
            >
              &times;
            </button>
          </div>
          <div className="modal-body">
            <div className="reassign-form">
              <div className="form-group">
                <label htmlFor="reassignToUser" id="reassignToLabel">
                  {t("reassignToLabel")}
                </label>
                <select
                  id="reassignToUser"
                  className="form-select"
                  value={selectedUserId}
                  onChange={(e) => setSelectedUserId(e.target.value)}
                >
                  <option value=""></option>
                  {users && users.map((user) => (
                    <option key={user.id} value={user.id}>{user.name}</option>
                  ))}
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
            <button
              type="button"
              className="btn-primary"
              id="confirmReassignBtn"
            >
              <i className="fas fa-check"></i>
              <span>{t("confirmReassignBtn")}</span>
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default ReassignTaskModal;
