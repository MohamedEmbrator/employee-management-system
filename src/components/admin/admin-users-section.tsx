const AdminUsersSection = () => {
  return (
    <div id="users" className="section">
      <div className="section-header">
        <h2>
          <i className="fas fa-users"></i>{" "}
          <span id="usersTitle">All System Users</span>
        </h2>
        <div className="filter-controls">
          {/* onchange="filterUsers()" */}
          <select id="userTypeFilter" className="filter-select">
            <option value="all" id="filterAllTypes">
              All Types
            </option>
            <option value="manager" id="filterManagers">
              Managers
            </option>
            <option value="employee" id="filterEmployees">
              Employees
            </option>
            <option value="admin" id="filterAdmins">
              Admins
            </option>
          </select>
        </div>
      </div>
      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              <th id="userNameHeader">Name</th>
              <th id="userEmailHeader">Email</th>
              <th id="userTypeHeader">User Type</th>
              <th id="userLastLoginHeader">Last Login</th>
            </tr>
          </thead>
          <tbody id="usersTable">
            {/* <!-- Users will be populated by JavaScript --> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUsersSection;
