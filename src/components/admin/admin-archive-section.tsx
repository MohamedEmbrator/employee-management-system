const AdminArchiveSection = () => {
  return (
    <div id="archive" className="section">
      <div className="section-header">
        <h2>
          <i className="fas fa-archive"></i>{" "}
          <span id="archiveTitle">Archive</span>
        </h2>
        <div className="filter-controls">
          {/* onchange="filterArchive()" */}
          <select id="archiveFilter" className="filter-select">
            <option value="all" id="filterArchiveAll">
              All Archived Tasks
            </option>
            <option value="pending" id="filterArchivePending">
              Pending
            </option>
            <option value="completed" id="filterArchiveCompleted">
              Completed
            </option>
          </select>
        </div>
      </div>
      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              <th id="archiveTaskNameHeader">Task Name</th>
              <th id="archiveAssignedByHeader">Assigned By</th>
              <th id="archiveAssignedToHeader">Assigned To</th>
              <th id="archiveStartDateHeader">Start Date</th>
              <th id="archiveEndDateHeader">End Date</th>
              <th id="archivePriorityHeader">Priority</th>
              <th id="archiveStatusHeader">Status</th>
              <th id="archiveActionsHeader">Actions</th>
            </tr>
          </thead>
          <tbody id="archiveTable">
            {/* <!-- Archived tasks will be populated by JavaScript --> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminArchiveSection;
