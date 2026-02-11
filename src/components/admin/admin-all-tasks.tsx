const AdminAllTasks = () => {
  return (
    <div id="all-tasks" className="section active">
      <div className="section-header">
        <h2>
          <i className="fas fa-tasks"></i>{" "}
          <span id="allTasksTitle">All System Tasks</span>
        </h2>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <div className="filter-controls">
            {/* onchange="filterAllTasks()" */}
            <select id="taskFilter" className="filter-select">
              <option value="all" id="filterAll">
                All Tasks
              </option>
              <option value="pending" id="filterPending">
                Pending
              </option>
              <option value="in-progress" id="filterInProgress">
                In Progress
              </option>
              <option value="completed" id="filterCompleted">
                Completed
              </option>
              <option value="under-review" id="filterReview">
                Under Review
              </option>
            </select>
            {/* onchange="filterAllTasks()" */}
            <select id="userFilter" className="filter-select">
              <option value="all" id="filterAllUsers">
                All Users
              </option>
            </select>
          </div>
          {/* onclick="openNewTaskModal()" */}
          <button className="new-task-btn">
            <i className="fas fa-plus"></i>
            <span id="newTaskBtn">New Task</span>
          </button>
        </div>
      </div>
      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              <th id="taskNameHeader">Task Name</th>
              <th id="assignedByHeader">Assigned By</th>
              <th id="assignedToHeader">Assigned To</th>
              <th id="startDateHeader">Start Date</th>
              <th id="endDateHeader">End Date</th>
              <th id="priorityHeader">Priority</th>
              <th id="statusHeader">Status</th>
              <th id="actionsHeader">Actions</th>
            </tr>
          </thead>
          <tbody id="allTasksTable">
            {/* <!-- Tasks will be populated by JavaScript --> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminAllTasks;
