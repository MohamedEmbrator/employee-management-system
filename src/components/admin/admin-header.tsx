const AdminHeader = () => {
  return (
    <div className="header">
      <div className="admin-info">
        <div className="admin-avatar" id="adminAvatar">
          A
        </div>
        <div className="admin-details">
          <h1 id="adminName">Admin Dashboard</h1>
          <p id="adminEmail">Loading...</p>
        </div>
      </div>
      <div className="stats-overview">
        <h3 id="totalTasksTitle">Total Tasks</h3>
        <div className="stats-count" id="totalTasksCount">
          0
        </div>
        <div className="stats-label" id="tasksInProgress">
          0 In Progress
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
