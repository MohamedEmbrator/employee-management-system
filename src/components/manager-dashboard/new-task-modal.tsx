import { useTranslations } from "next-intl";

const NewTaskModal = () => {
  const t = useTranslations("managerDashboardPage");
  return (
    <div id="newTaskModal" className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2 id="newTaskTitle">{t("newTaskTitle")}</h2>
          {/* onclick="closeNewTaskModal()" */}
          <button className="close-modal">&times;</button>
        </div>
        <div className="modal-body">
          {/* onsubmit="return assignNewTask(event)" */}
          <form id="newTaskForm">
            <div className="form-group">
              <label htmlFor="newTaskName">
                <i className="fas fa-heading"></i>
                <span id="newTaskNameLabel">{t("newTaskNameLabel")}</span>
              </label>
              <input
                type="text"
                id="newTaskName"
                className="form-control"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="newTaskDescription">
                <i className="fas fa-align-left"></i>
                <span id="newTaskDescLabel">{t("newTaskDescLabel")}</span>
              </label>
              <textarea
                id="newTaskDescription"
                className="form-control"
                rows={4}
                required
              ></textarea>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="newTaskAssignTo">
                  <i className="fas fa-user"></i>
                  <span id="newTaskAssignToLabel">
                    {t("newTaskAssignToLabel")}
                  </span>
                </label>
                <select id="newTaskAssignTo" className="form-select" required>
                  {/* <!-- Users will be populated by JavaScript --> */}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="newTaskPriority">
                  <i className="fas fa-exclamation-circle"></i>
                  <span id="newTaskPriorityLabel">
                    {t("newTaskPriorityLabel")}
                  </span>
                </label>
                <select id="newTaskPriority" className="form-select">
                  <option value="low" id="newTaskPriorityLow">
                    {t("newTaskPriorityLow")}
                  </option>
                  <option value="medium" id="newTaskPriorityMedium">
                    {t("newTaskPriorityMedium")}
                  </option>
                  <option value="high" id="newTaskPriorityHigh">
                    {t("newTaskPriorityHigh")}
                  </option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="newTaskStartDate">
                  <i className="fas fa-calendar"></i>
                  <span id="newTaskStartDateLabel">
                    {t("newTaskStartDateLabel")}
                  </span>
                </label>
                <input
                  type="date"
                  id="newTaskStartDate"
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="newTaskEndDate">
                  <i className="fas fa-calendar-check"></i>
                  <span id="newTaskEndDateLabel">
                    {t("newTaskEndDateLabel")}
                  </span>
                </label>
                <input
                  type="date"
                  id="newTaskEndDate"
                  className="form-control"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="newTaskPrice">
                  <i className="fas fa-dollar-sign"></i>
                  <span id="newTaskPriceLabel">{t("newTaskPriceLabel")}</span>
                </label>
                <input
                  type="number"
                  id="newTaskPrice"
                  className="form-control"
                  placeholder="Optional"
                  min="0"
                  step="0.01"
                />
              </div>

              {/* <!-- حقل اختيار العملة الجديد --> */}
              <div className="form-group">
                <label htmlFor="newTaskCurrency">
                  <i className="fas fa-money-bill-wave"></i>
                  <span id="newTaskCurrencyLabel">
                    {t("newTaskCurrencyLabel")}
                  </span>
                </label>
                <select id="newTaskCurrency" className="form-control">
                  <option value="USD">🇺🇸 USD (Dollar)</option>
                  <option value="EUR">🇪🇺 EUR (Euro)</option>
                  <option value="EGP">🇪🇬 EGP (Egyptian Pound)</option>
                  <option value="AED">🇦🇪 AED (Dirham)</option>
                  <option value="SAR">🇸🇦 SAR (Riyal)</option>
                  <option value="GBP">🇬🇧 GBP (Pound)</option>
                </select>
              </div>
            </div>

            {/* <!-- File Upload Section --> */}
            <div className="file-upload-section">
              <div className="form-group">
                <label htmlFor="taskFiles">
                  <i className="fas fa-paperclip"></i>
                  <span id="taskFilesLabel">{t("taskFilesLabel")}</span>
                </label>
                {/* onclick="document.getElementById('taskFileInput').click()" */}
                <div className="file-upload-area">
                  <i className="fas fa-cloud-upload-alt"></i>
                  <p className="file-upload-text" id="uploadText">
                    {t("uploadText")}
                  </p>
                  <p className="file-upload-hint" id="uploadTypes">
                    {t("uploadTypes")}
                  </p>
                  {/* onchange="handleNewTaskFileUpload(this.files)" */}
                  <input
                    type="file"
                    id="taskFileInput"
                    multiple
                    style={{ display: "none" }}
                  />
                </div>

                <div className="file-uploaded-list" id="newTaskUploadedFiles">
                  {/* <!-- Uploaded files will appear here --> */}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              {/* onclick="closeNewTaskModal()" */}
              <button
                type="button"
                className="btn-secondary"
                id="cancelNewTaskBtn"
              >
                <i className="fas fa-times"></i>
                <span>{t("cancelNewTaskBtn")}</span>
              </button>
              <button
                type="submit"
                className="btn-primary"
                id="assignNewTaskBtn"
              >
                <i className="fas fa-paper-plane"></i>
                <span>{t("assignNewTaskBtn")}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewTaskModal;
