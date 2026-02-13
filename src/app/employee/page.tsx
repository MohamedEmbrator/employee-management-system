"use client";
import LanguageSwitcher from "@/components/language-switcher";
import LogoutButton from "../manager-dashboard/logout-button";
import { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchTasks, getTasksCount } from "@/redux/API/tasksAPI";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { formatPriceWithCurrency } from "@/utils/formatters";
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
  useEffect(() => {
    dispatch(fetchTasks());
    dispatch(getTasksCount());
  }, [dispatch]);
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
                          {t("detailManager")} {task.assignedBy}
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
                      <td>${task.endDate}</td>
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
                        {/* onclick="viewTask('${task.id}')" */}
                        <button className="action-btn view">
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
      <div id="taskModal" className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h2 id="modalTaskTitle">تفاصيل المهمة</h2>
            {/* onclick="closeTaskModal()" */}
            <button className="close-modal">&times;</button>
          </div>
          <div className="task-details">
            <div className="details-grid">
              <div className="detail-item">
                <strong id="detailManager">تم التعيين بواسطة:</strong>
                <span id="modalTaskManager">اسم المدير</span>
              </div>
              <div className="detail-item">
                <strong id="detailStartDate">تاريخ البدء:</strong>
                <span id="modalTaskStartDate">--</span>
              </div>
              <div className="detail-item">
                <strong id="detailEndDate">تاريخ الانتهاء:</strong>
                <span id="modalTaskEndDate">--</span>
              </div>
              <div className="detail-item">
                <strong id="detailPriority">الأولوية:</strong>
                <span id="modalTaskPriority">--</span>
              </div>
              <div className="detail-item">
                <strong id="detailStatus">الحالة:</strong>
                <span id="modalTaskStatus">--</span>
              </div>
              <div className="detail-item">
                <strong id="detailProgress">التقدم:</strong>
                <span id="modalTaskProgress">0%</span>
              </div>
              {/* <!-- ✅ إضافة خانة السعر هنا --> */}
              <div className="detail-item">
                <strong id="detailPrice">السعر / الميزانية:</strong>
                <span id="modalTaskPrice">غير محدد</span>
              </div>
            </div>

            <h3 id="descriptionTitle">الوصف</h3>
            <p id="modalTaskDescription"></p>

            <h3 id="attachmentsTitle">المرفقات من المدير</h3>
            <div className="attachments-grid" id="modalAttachments">
              {/* <!-- Attachments will be populated by JavaScript --> */}
            </div>

            {/* <!-- Manager Comments --> */}
            <div id="managerCommentsSection" className="manager-comments">
              {/* <!-- Manager comments will be populated here --> */}
            </div>

            {/* <!-- Status Update Section --> */}
            <div className="work-submission">
              <h3 id="updateStatusTitle">تحديث حالة المهمة</h3>
              <div className="status-update-buttons" id="statusUpdateButtons">
                {/* <!-- Status buttons will be populated by JavaScript --> */}
              </div>
            </div>

            <div className="work-submission">
              <h3 id="submissionTitle">تسليم عملك</h3>
              {/* onclick="document.getElementById('fileUpload').click()" */}
              <div className="file-upload">
                <i className="fas fa-cloud-upload-alt"></i>
                <p id="uploadText">انقر لرفع الملفات أو اسحب وأفلت</p>
                <p style={{ fontSize: "12px", color: "#666" }} id="uploadTypes">
                  PDF, DOC, DOCX, JPG, PNG, ZIP (الحد الأقصى 10MB لكل ملف)
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
                  ملاحظات إضافية:
                </label>
                <textarea
                  id="workComments"
                  placeholder="أضف أي ملاحظات حول عملك..."
                ></textarea>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            {/* onclick="closeTaskModal()" */}
            <button type="button" className="btn-secondary" id="cancelBtn">
              إلغاء
            </button>
            {/* onclick="sendWorkToManager()" */}
            <button type="button" className="btn-primary" id="sendBtn">
              إرسال للمدير
            </button>
          </div>
        </div>
      </div>
      <LogoutButton />
    </>
  );
};

export default EmployeePage;
