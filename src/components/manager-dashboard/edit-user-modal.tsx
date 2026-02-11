const EditUserModal = () => {
  return (
    <div id="editUserModal" className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2 id="editUserTitle">Edit User</h2>
          {/* onclick="closeEditUserModal()" */}
          <button className="close-modal">&times;</button>
        </div>
        {/* onsubmit="return saveUserChanges(event)" */}
        <form id="editUserForm">
          <div className="modal-body">
            <input type="hidden" id="editUserId" />
            <input type="hidden" id="editUserEmail" />

            <div className="form-group">
              <label htmlFor="editUserName">Full Name</label>
              <input
                type="text"
                id="editUserName"
                className="form-control"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="editUserType">User Type</label>
              <select id="editUserType" className="form-control" required>
                <option value="employee">Employee</option>
                <option value="admin">Admin</option>
                <option value="manager">Manager</option>
              </select>
            </div>

            <div id="passwordFields">
              <div className="form-group">
                <label htmlFor="editUserPassword">
                  New Password (leave empty to keep current)
                </label>
                <input
                  type="password"
                  id="editUserPassword"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmEditPassword">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  id="confirmEditPassword"
                  className="form-control"
                />
              </div>
            </div>

            <div className="modal-footer">
              {/* onclick="closeEditUserModal()" */}
              <button type="button" className="btn-secondary">
                <i className="fas fa-times"></i>
                <span>Cancel</span>
              </button>
              <button type="submit" className="btn-primary">
                <i className="fas fa-save"></i>
                <span>Save Changes</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUserModal;
