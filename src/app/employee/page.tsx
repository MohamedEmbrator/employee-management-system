import LanguageSwitcher from "@/components/language-switcher";
import LogoutButton from "../manager-dashboard/logout-button";
import "./employee.css";

const EmployeePage = () => {
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
              ج
            </div>
            <div className="employee-details">
              <h1 id="employeeName">جاري التحميل...</h1>
              <p id="employeeEmail">جاري التحميل...</p>
            </div>
          </div>
          <div className="tasks-overview">
            <h3 id="totalTasksTitle">إجمالي المهام</h3>
            <div className="tasks-count" id="totalTasksCount">
              0
            </div>
            <div className="tasks-label" id="tasksInProgress">
              0 مكتملة
            </div>
          </div>
        </div>

        {/* <!-- Tasks Section --> */}
        <div className="section">
          <div className="section-header">
            <h2>
              <i className="fas fa-tasks"></i>{" "}
              <span id="tasksTitle">مهامي</span>
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
              >
                <option value="all" id="filterAll">
                  جميع المهام
                </option>
                <option value="pending" id="filterPending">
                  قيد الانتظار
                </option>
                <option value="in-progress" id="filterInProgress">
                  قيد التنفيذ
                </option>
                <option value="completed" id="filterCompleted">
                  مكتمل
                </option>
                <option value="under-review" id="filterReview">
                  قيد المراجعة
                </option>
              </select>
            </div>
          </div>
          <div className="table-responsive">
            <table>
              <thead>
                <tr>
                  <th id="taskNameHeader">اسم المهمة</th>
                  <th id="startDateHeader">تاريخ البدء</th>
                  <th id="endDateHeader">تاريخ الانتهاء</th>
                  <th id="priorityHeader">الأولوية</th>
                  <th id="statusHeader">الحالة</th>
                  <th id="actionsHeader">الإجراءات</th>
                </tr>
              </thead>
              <tbody id="tasksTable">
                {/* <!-- Tasks will be populated by JavaScript --> */}
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
