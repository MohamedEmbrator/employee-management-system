import LanguageSwitcher from "@/components/language-switcher";
import AdminHeader from "@/components/admin/admin-header";
import AdminTabsNavigation from "@/components/admin/admin-tabs-navigation";
import AdminAllTasks from "@/components/admin/admin-all-tasks";
import AdminUsersSection from "@/components/admin/admin-users-section";
import AdminArchiveSection from "@/components/admin/admin-archive-section";
import LogoutButton from "../manager-dashboard/logout-button";
import AdminTaskDetailsModal from "@/components/admin/admin-task-details-modal";
import AdminNewTaskModal from "@/components/admin/admin-new-task-modal";
import AdminReassignTaskModal from "@/components/admin/admin-reassign-task-modal";
import AdminSubmessionDetailsModal from "@/components/admin/admin-submession-details-modal";
import "./admin.css";

const AdminPage = () => {
  return (
    <>
      <LanguageSwitcher />
      <div className="container">
        <AdminHeader />
        <AdminTabsNavigation />
        <AdminAllTasks />
        <AdminUsersSection />
        <AdminArchiveSection />
      </div>
      <AdminTaskDetailsModal />
      <AdminNewTaskModal />
      <AdminReassignTaskModal />
      <AdminSubmessionDetailsModal />
      <LogoutButton />
    </>
  );
};

export default AdminPage;
