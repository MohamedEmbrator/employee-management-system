const AdminSubmittedWorkSection = () => {
  return (
    <div id="submitted-work" className="section">
      <div className="section-header">
        <h2>
          <i className="fas fa-paper-plane"></i>{" "}
          <span id="submittedWorkTitle">Submitted Work</span>
        </h2>
        <div className="filter-controls">
          {/* onchange="filterSubmissions()" */}
          <select id="submissionFilter" className="filter-select">
            <option value="all" id="filterAllSubmissions">
              All Submissions
            </option>
            <option value="today" id="filterToday">
              Today
            </option>
            <option value="week" id="filterWeek">
              This Week
            </option>
            <option value="month" id="filterMonth">
              This Month
            </option>
          </select>
        </div>
      </div>
      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              <th id="submissionTaskHeader">Task</th>
              <th id="submissionEmployeeHeader">From Employee</th>
              <th id="submissionToHeader">To</th>
              <th id="submissionDateHeader">Submitted Date</th>
              <th id="submissionFilesHeader">Files</th>
              <th id="submissionCommentsHeader">Comments</th>
            </tr>
          </thead>
          <tbody id="submittedWorkTable">
            {/* <!-- Submitted work will be populated by JavaScript --> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminSubmittedWorkSection;
