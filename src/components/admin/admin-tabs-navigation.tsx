const AdminTabsNavigation = () => {
  return (
    <div className="tabs">
      {/* onclick="showTab('all-tasks')" */}
      <button className="tab-btn active" data-tab="all-tasks">
        <i className="fas fa-tasks"></i>
        <span id="tabAllTasks">All Tasks</span>
      </button>
      {/* onclick="showTab('submitted-work')" */}
      <button className="tab-btn" data-tab="submitted-work">
        <i className="fas fa-paper-plane"></i>
        <span id="tabSubmittedWork">Submitted Work</span>
      </button>
      {/* onclick="showTab('users')" */}
      <button className="tab-btn" data-tab="users">
        <i className="fas fa-users"></i>
        <span id="tabUsers">All Users</span>
      </button>
      {/* onclick="showTab('archive')" */}
      <button className="tab-btn" data-tab="archive">
        <i className="fas fa-archive"></i>
        <span id="tabArchive">Archive</span>
      </button>
    </div>
  );
};

export default AdminTabsNavigation;
