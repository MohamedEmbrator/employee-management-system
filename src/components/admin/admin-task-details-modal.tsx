

const AdminTaskDetailsModal = () => {
  return (
    <div id="taskModal" className="modal">
        <div className="modal-content">
            <div className="modal-header">
          <h2 id="modalTaskTitle">Task Details</h2>
           {/* onclick="closeTaskModal()" */}
                <button className="close-modal">&times;</button>
            </div>
            <div className="modal-body">
                <div className="details-grid">
                    <div className="detail-item">
                        <strong id="detailManager">Assigned By:</strong>
                        <span id="modalTaskManager">--</span>
                    </div>
                    <div className="detail-item">
                        <strong id="detailEmployee">Assigned To:</strong>
                        <span id="modalTaskEmployee">--</span>
                    </div>
                    <div className="detail-item">
                        <strong id="detailStartDate">Start Date:</strong>
                        <span id="modalTaskStartDate">--</span>
                    </div>
                    <div className="detail-item">
                        <strong id="detailEndDate">End Date:</strong>
                        <span id="modalTaskEndDate">--</span>
                    </div>
                    <div className="detail-item">
                        <strong id="detailPriority">Priority:</strong>
                        <span id="modalTaskPriority">--</span>
                    </div>
                    <div className="detail-item">
                        <strong id="detailStatus">Status:</strong>
                        <span id="modalTaskStatus">--</span>
                    </div>
                    <div className="detail-item">
                        <strong id="detailProgress">Progress:</strong>
                        <span id="modalTaskProgress">0%</span>
                    </div>
                    <div className="detail-item">
                        <strong id="detailBudget">Budget:</strong>
                        <span id="modalTaskBudget">--</span>
                    </div>
                </div>

                <h3 id="descriptionTitle">Description</h3>
                <p id="modalTaskDescription"></p>

                <h3 id="attachmentsTitle">Attachments</h3>
                <div className="attachments-grid" id="modalAttachments">
                    {/* <!-- Attachments will be populated by JavaScript --> */}
                </div>

                {/* <!-- Status Update Buttons --> */}
                <div className="status-update-buttons" id="statusUpdateButtons">
                    {/* <!-- Status buttons will be populated by JavaScript --> */}
                </div>
            </div>
        <div className="modal-footer">
          {/* onclick="closeTaskModal()" */}
                <button type="button" className="btn-secondary"  id="cancelBtn">
                    <i className="fas fa-times"></i>
                    <span>Close</span>
          </button>
          {/* onclick="openReassignModal()" */}
                <button type="button" className="btn-primary"  id="reassignBtn">
                    <i className="fas fa-exchange-alt"></i>
                    <span>Reassign Task</span>
          </button>
          {/* onclick="archiveTask()" */}
                <button type="button" className="archive-btn"  id="archiveTaskBtn">
                    <i className="fas fa-archive"></i>
                    <span>Archive Task</span>
                </button>
            </div>
        </div>
    </div>

  );
}

export default AdminTaskDetailsModal;
