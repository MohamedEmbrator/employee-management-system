"use client";
import LanguageSwitcher from "@/components/language-switcher";
import LogoutButton from "../manager-dashboard/logout-button";
import { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  fetchTasks,
  getTasksCount,
  updateTaskStatus,
} from "@/redux/API/tasksAPI";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { formatPriceWithCurrency } from "@/utils/formatters";
import { Task } from "@/utils/types";
import "./employee.css";

const EmployeePage = () => {
  const { loggedInUser } = useAppSelector((state) => state.auth);
  const { tasks, tasksCount } = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();
  const t = useTranslations("employeePage");
  const completedTasks = tasks.filter(
    (task) => task.status === "COMPLETED",
  ).length;
  const router = useRouter();
  const [taskStatusFilter, setTaskStatusFilter] = useState("all");
  const filteredTasks = useMemo(() => {
    return tasks
      .filter((task) => !task.archived)
      .filter((task) => {
        return taskStatusFilter === "all" || task.status === taskStatusFilter;
      });
  }, [taskStatusFilter, tasks]);
  const [viewTaskDetails, setViewTaskDetails] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  useEffect(() => {
    dispatch(fetchTasks());
    dispatch(getTasksCount());
  }, [dispatch]);

  const handleViewTask = (task: Task) => {
    setSelectedTask(task);
    setViewTaskDetails(true);
  };

  if (!loggedInUser) return router.replace("/");
  if (loggedInUser.role !== "EMPLOYEE")
    return router.replace(`/${loggedInUser?.role?.toLowerCase()}`);
  return (
    <>
      {/* <!-- File Preview Modal --> */}
      <div id="filePreviewModal" className="file-preview-modal">
        <div className="file-preview-content" id="filePreviewContent">
          <div className="preview-header">
            <span id="previewFileName">معاينة الملف</span>
            {/* onclick="closeFilePreview()" */}
            <button className="preview-close">&times;</button>
          </div>
        </div>
      </div>
      <div className="container">
        {/* <!-- Header --> */}
        <div className="header">
          <div className="employee-info">
            <div className="employee-avatar" id="employeeAvatar">
              {loggedInUser?.name[0]}
            </div>
            <div className="employee-details">
              <h1 id="employeeName">{loggedInUser?.name}</h1>
              <p id="employeeEmail">{loggedInUser?.email}</p>
            </div>
          </div>
          <div className="tasks-overview">
            <h3 id="totalTasksTitle">{t("totalTasksTitle")}</h3>
            <div className="tasks-count" id="totalTasksCount">
              {tasksCount}
            </div>
            <div className="tasks-label" id="tasksInProgress" dir="auto">
              {completedTasks} {t("tasksCompleted")}
            </div>
          </div>
        </div>

        {/* <!-- Tasks Section --> */}
        <div className="section">
          <div className="section-header">
            <h2>
              <i className="fas fa-tasks"></i>{" "}
              <span id="tasksTitle">{t("tasksTitle")}</span>
            </h2>
            <div>
              {/* onchange="filterTasks()" */}
              <select
                id="taskFilter"
                style={{
                  padding: "8px 15px",
                  borderRadius: "8px",
                  border: "2px solid #e1e5ee",
                  fontFamily: "Poppins",
                }}
                value={taskStatusFilter}
                onChange={(e) => setTaskStatusFilter(e.target.value)}
              >
                <option value="all" id="filterAll">
                  {t("filterAll")}
                </option>
                <option value="PENDING" id="filterPending">
                  {t("filterPending")}
                </option>
                <option value="IN_PROGRESS" id="filterInProgress">
                  {t("filterInProgress")}
                </option>
                <option value="COMPLETED" id="filterCompleted">
                  {t("filterCompleted")}
                </option>
                <option value="UNDER_REVIEW" id="filterReview">
                  {t("filterReview")}
                </option>
              </select>
            </div>
          </div>
          <div className="table-responsive">
            <table>
              <thead>
                <tr>
                  <th id="taskNameHeader">{t("taskNameHeader")}</th>
                  <th id="startDateHeader">{t("startDateHeader")}</th>
                  <th id="endDateHeader">{t("endDateHeader")}</th>
                  <th id="priorityHeader">{t("priorityHeader")}</th>
                  <th id="statusHeader">{t("statusHeader")}</th>
                  <th id="actionsHeader">{t("actionsHeader")}</th>
                </tr>
              </thead>
              <tbody id="tasksTable">
                {filteredTasks.length < 1 && (
                  <tr>
                    <td
                      colSpan={6}
                      style={{
                        textAlign: "center",
                        padding: "40px",
                        color: "#666",
                      }}
                    >
                      <i
                        className="fas fa-tasks"
                        style={{
                          fontSize: "48px",
                          marginBottom: "20px",
                          color: "#e1e5ee",
                        }}
                      ></i>
                      <h3 style={{ marginBottom: "10px" }}>
                        {t("noTasksAssigned")}
                      </h3>
                      <p>سيقوم مديرك بتعيين مهام لك قريباً.</p>
                    </td>
                  </tr>
                )}
                {filteredTasks &&
                  filteredTasks.map((task) => (
                    <tr key={task.id}>
                      <td>
                        <strong>{task.title}</strong>
                        <br />
                        <small style={{ color: "#666" }}>
                          {t("detailManager")} {task?.assignedBy}
                        </small>
                        <div className="task-description">
                          {task.description
                            ? task.description.substring(0, 100) + "..."
                            : "لا يوجد وصف"}
                        </div>
                        {task.price && (
                          <div className="price-badge">
                            {formatPriceWithCurrency(task.price, task.currency)}
                          </div>
                        )}
                      </td>
                      <td>{task.startDate}</td>
                      <td>{task.endDate}</td>
                      <td>
                        <span
                          className={`badge badge-${task.priority?.toLowerCase()}`}
                        >
                          {t(
                            `priority${task.priority?.toLowerCase().charAt(0).toUpperCase() + task.priority?.toLowerCase().slice(1)}`,
                          )}
                        </span>
                      </td>
                      <td>
                        <span
                          className={`badge badge-${task.status?.toLowerCase()}`}
                        >
                          {t(
                            `status${(task.status.toLowerCase() || "pending")
                              .split("-")
                              .map(
                                (word) =>
                                  word.charAt(0).toUpperCase() + word.slice(1),
                              )
                              .join("")}`,
                          )}
                        </span>
                        {task.status === "IN_PROGRESS" && (
                          <div className="progress-container">
                            <div className="progress-bar">
                              <div
                                className="progress-fill"
                                style={{ width: `${task.progress}%` }}
                              ></div>
                            </div>
                            <span style={{ fontSize: "12px", color: "#666" }}>
                              {task.progress || 0}%
                            </span>
                          </div>
                        )}
                      </td>
                      <td>
                        <button
                          className="action-btn view"
                          onClick={() => handleViewTask(task)}
                        >
                          <i className="fas fa-eye"></i> {t("actionView")}
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <LanguageSwitcher />
      {/* <!-- Task Details Modal --> */}
      {viewTaskDetails && selectedTask && (
        <div id="taskModal" className={`modal ${viewTaskDetails && "show"}`}>
          <div className="modal-content">
            <div className="modal-header">
              <h2 id="modalTaskTitle">{selectedTask?.title}</h2>
              <button
                className="close-modal"
                onClick={() => setViewTaskDetails(false)}
              >
                &times;
              </button>
            </div>
            <div className="task-details">
              <div className="details-grid">
                <div className="detail-item">
                  <strong id="detailManager" dir="auto">
                    {t("detailManager")}
                  </strong>
                  <span id="modalTaskManager">
                    {selectedTask?.assignedBy[0]?.toUpperCase()}
                    {selectedTask?.assignedBy?.toLowerCase().slice(1)}
                  </span>
                </div>
                <div className="detail-item">
                  <strong id="detailStartDate" dir="auto">
                    {t("detailStartDate")}
                  </strong>
                  <span id="modalTaskStartDate">{selectedTask?.startDate}</span>
                </div>
                <div className="detail-item">
                  <strong id="detailEndDate" dir="auto">
                    {t("detailEndDate")}
                  </strong>
                  <span id="modalTaskEndDate">{selectedTask?.endDate}</span>
                </div>
                <div className="detail-item">
                  <strong id="detailPriority" dir="auto">
                    {t("detailPriority")}
                  </strong>
                  <span id="modalTaskPriority">
                    {selectedTask?.priority[0].toUpperCase()}
                    {selectedTask?.priority?.toLowerCase().slice(1)}
                  </span>
                </div>
                <div className="detail-item">
                  <strong id="detailStatus" dir="auto">
                    {t("detailStatus")}
                  </strong>
                  <span id="modalTaskStatus">
                    {selectedTask.status[0]}
                    {selectedTask.status
                      .replace("_", " ")
                      .toLowerCase()
                      .slice(1)}
                  </span>
                </div>
                <div className="detail-item">
                  <strong id="detailProgress" dir="auto">
                    {t("detailProgress")}
                  </strong>
                  <span id="modalTaskProgress">{selectedTask?.progress}%</span>
                </div>
                {/* <!-- ✅ إضافة خانة السعر هنا --> */}
                <div className="detail-item">
                  <strong id="detailPrice" dir="auto">
                    {t("detailPrice")}
                  </strong>
                  <span id="modalTaskPrice">
                    {formatPriceWithCurrency(
                      +selectedTask!.price,
                      selectedTask!.currency,
                    )}
                  </span>
                </div>
              </div>

              <h3 id="descriptionTitle" dir="auto">
                {t("descriptionTitle")}
              </h3>
              <p id="modalTaskDescription"></p>

              <h3 id="attachmentsTitle" dir="auto">
                {t("attachmentsTitle")}
              </h3>
              <div className="attachments-grid" id="modalAttachments">
                {/* <!-- Attachments will be populated by JavaScript --> */}
              </div>

              {/* <!-- Manager Comments --> */}
              <div id="managerCommentsSection" className="manager-comments">
                {selectedTask.comment ? (
                  <>
                    <h4>
                      <i className="fas fa-comment"></i> {t("managerComments")}
                    </h4>
                    <p>{selectedTask.comment}</p>
                    {/* <div className="comment-date">
                      {t("commentedOn")}:
                      {new Date(latestComment.date).toLocaleString()}
                    </div> */}
                  </>
                ) : (
                  <>
                    <h4>
                      <i className="fas fa-comment"></i> {t("managerComments")}
                    </h4>
                    <p>{t("noComments")}</p>
                  </>
                )}
              </div>

              {/* <!-- Status Update Section --> */}
              <div className="work-submission">
                <h3 id="updateStatusTitle" dir="auto">
                  {t("updateStatusTitle")}
                </h3>
                <div className="status-update-buttons" id="statusUpdateButtons">
                  <button
                    className="status-btn pending"
                    onClick={() => dispatch(updateTaskStatus(selectedTask.id, "PENDING", t("statusUpdatePending")))}
                  >
                    <i className="fas fa-clock"></i> {t("statusPending")}
                  </button>
                  <button
                    className="status-btn in-progress"
                    onClick={() => dispatch(updateTaskStatus(selectedTask.id, "IN_PROGRESS", t("statusUpdateInProgress")))}
                  >
                    <i className="fas fa-spinner"></i> {t("statusInProgress")}
                  </button>
                  <button
                    className="status-btn completed"
                    onClick={() => dispatch(updateTaskStatus(selectedTask.id, "COMPLETED", t("statusUpdateCompleted")))}
                  >
                    <i className="fas fa-check"></i> {t("statusCompleted")}
                  </button>
                  <button
                    className="status-btn under-review"
                    onClick={() => dispatch(updateTaskStatus(selectedTask.id, "UNDER_REVIEW", t("statusUpdateUnderReview")))}
                  >
                    <i className="fas fa-search"></i> {t("statusUnderReview")}
                  </button>
                </div>
              </div>

              <div className="work-submission">
                <h3 id="submissionTitle">{t("submissionTitle")}</h3>
                {/* onclick="document.getElementById('fileUpload').click()" */}
                <div className="file-upload">
                  <i className="fas fa-cloud-upload-alt"></i>
                  <p id="uploadText">{t("uploadText")}</p>
                  <p
                    style={{ fontSize: "12px", color: "#666" }}
                    id="uploadTypes"
                  >
                    {t("uploadTypes")}
                  </p>
                  {/* onchange="handleFileUpload(this.files)" */}
                  <input
                    type="file"
                    id="fileUpload"
                    multiple
                    style={{ display: "none" }}
                  />
                </div>

                <div className="uploaded-files" id="uploadedFiles">
                  {/* <!-- Uploaded files will appear here --> */}
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "10px",
                      fontWeight: "500",
                    }}
                    id="commentsLabel"
                  >
                    {t("commentsLabel")}
                  </label>
                  <textarea
                    id="workComments"
                    placeholder="أضف أي ملاحظات حول عملك..."
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn-secondary"
                id="cancelBtn"
                onClick={() => setViewTaskDetails(false)}
              >
                {t("cancelBtn")}
              </button>
              {/* onclick="sendWorkToManager()" */}
              <button type="button" className="btn-primary" id="sendBtn">
                {t("sendBtn")}
              </button>
            </div>
          </div>
        </div>
      )}
      <LogoutButton />
    </>
  );
};

export default EmployeePage;
