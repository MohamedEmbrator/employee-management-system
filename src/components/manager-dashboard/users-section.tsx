"use client";
import { getAllUsersData } from "@/redux/API/usersAPI";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { TabsNavigationTypes } from "@/utils/types";
import { useTranslations } from "next-intl";
import { useEffect, useMemo, useState } from "react";

interface Props {
  currentTab: TabsNavigationTypes;
}

const UsersSection = ({ currentTab }: Props) => {
  const t = useTranslations("managerDashboardPage");
  const { users } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();
  const [roleFilter, setRoleFilter] = useState("all");
  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      return roleFilter === "all" || user.role === roleFilter;
    });
  }, [roleFilter, users]);
  useEffect(() => {
    dispatch(getAllUsersData());
  }, [dispatch]);
  return (
    currentTab === "users" && (
      <div
        id="users"
        className={`section ${currentTab === "users" && "active"}`}
      >
        <div className="section-header">
          <h2>
            <i className="fas fa-users"></i>{" "}
            <span id="usersTitle">{t("usersTitle")}</span>
          </h2>
          <div className="filter-controls">
            {/* onchange="filterUsers()" */}
            <select id="userTypeFilter" className="filter-select">
              <option value="all" id="filterAllTypes">
                {t("filterAllTypes")}
              </option>
              <option value="MANAGER" id="filterManagers">
                {t("filterManagers")}
              </option>
              <option value="EMPLOYEE" id="filterEmployees">
                {t("filterEmployees")}
              </option>
              <option value="ADMIN" id="filterAdmins">
                {t("filterAdmins")}
              </option>
            </select>
          </div>
        </div>
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th id="userNameHeader">{t("userNameHeader")}</th>
                <th id="userEmailHeader">{t("userEmailHeader")}</th>
                <th id="userTypeHeader">{t("userTypeHeader")}</th>
                <th id="userActionsHeader">{t("userActionsHeader")}</th>
              </tr>
            </thead>
            <tbody id="usersTable">
              {(users.length < 1 || filteredUsers.length < 1) && (
                <tr>
                  <td colSpan={5}>
                    <div className="empty-state">
                      <i className="fas fa-users"></i>
                      <h3>{t("noUsersFound")}</h3>
                      <p>
                        {users.length === 0
                          ? "No users found in the system. Start by creating a new manager account."
                          : "No users match your filters."}
                      </p>
                    </div>
                  </td>
                </tr>
              )}
              {filteredUsers.length > 0 &&
                filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td style={{ fontWeight: "600", color: "#1e293b" }}>
                      {user.name}
                    </td>
                    <td style={{ color: "#475569" }}>{user.email}</td>
                    <td>
                      <span
                        className={`badge badge-${user.role?.toLowerCase()}`}
                      >
                        {t(
                          `userType${user.role?.toLowerCase().charAt(0).toUpperCase() + user.role?.toLowerCase().slice(1)}`,
                        )}
                      </span>
                    </td>
                    <td>
                      <div
                        className="action-buttons"
                        style={{ flexDirection: "row", minWidth: "auto" }}
                      >
                        {/* onclick="editUser('${user.id}')" */}
                        <button
                          className="action-btn edit"
                          title="${t.actionEdit}"
                        >
                          <i className="fas fa-edit"></i>
                        </button>
                        {/* onclick="deleteUser('${user.id}')" */}
                        <button
                          className="action-btn delete"
                          title="${t.actionDelete}"
                          disabled={user.email === "manager@email.com"}
                          style={{
                            opacity:
                              user.email === "manager@email.com" ? 0.5 : 1,
                            cursor:
                              user.email === "manager@email.com"
                                ? "not-allowed"
                                : "auto",
                          }}
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  );
};

export default UsersSection;
