"use client";
import "./manager.css";
import LanguageSwitcher from "@/components/language-switcher";
import LogoutButton from "./logout-button";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import TaskNotification from "@/components/manager-dashboard/task-notification";
import ManagerDashboardHeader from "@/components/manager-dashboard/manager-dashboard-header";
import TabsNavigation from "@/components/manager-dashboard/tabs-navigation";
import AllTasksSection from "@/components/manager-dashboard/all-tasks-section";
import SubmittedWork from "@/components/manager-dashboard/submitted-work";
import UsersSection from "@/components/manager-dashboard/users-section";
import ArchiveSection from "@/components/manager-dashboard/archive-section";
import TaskDetailsModal from "@/components/manager-dashboard/task-details-modal";
import NewTaskModal from "@/components/manager-dashboard/new-task-modal";
import ChangePasswordModal from "@/components/manager-dashboard/change-password-modal";
import NewManagerAccountModal from "@/components/manager-dashboard/new-manager-account-modal";
import ReassignTaskModal from "@/components/manager-dashboard/reassign-task-modal";
import SubmissionDetailsModal from "@/components/manager-dashboard/submission-details-modal";
import TaskSubmissionDetailsModal from "@/components/manager-dashboard/task-submission-details-modal";
import AddCommentsModal from "@/components/manager-dashboard/add-comments-modal";
import EditUserModal from "@/components/manager-dashboard/edit-user-modal";

const ManagerDashboardPage = () => {
  const router = useRouter();
  const { loggedInUser } = useAppSelector((state) => state.auth);
  if (!loggedInUser) return router.replace("/");
  if (loggedInUser.role !== "MANAGER")
    return router.replace(`/dashboard/${loggedInUser.role.toLowerCase()}`);
  return (
    <>
      <LanguageSwitcher />
      <TaskNotification />
      <div className="container">
        <ManagerDashboardHeader />
        <TabsNavigation />
        <AllTasksSection />
        <SubmittedWork />
        <UsersSection />
        <ArchiveSection />
      </div>
      <TaskDetailsModal />
      <NewTaskModal />
      <ChangePasswordModal />
      <NewManagerAccountModal />
      <ReassignTaskModal />
      <SubmissionDetailsModal />
      {/* <!-- Task Submission Details Modal (معدل) --> */}
      <TaskSubmissionDetailsModal />
      <AddCommentsModal />
      <EditUserModal />
      <LogoutButton />
    </>
  );
};

export default ManagerDashboardPage;
