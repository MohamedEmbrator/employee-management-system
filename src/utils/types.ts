export type LoginRule = "admin" | "employee" | "manager";
export type TaskPriority = "LOW" | "MEDIUM" | "HIGH";
export type Currency = "USD" | "EUR" | "EGP" | "AED" | "SAR" | "GBP";
export type UserRole = "MANAGER" | "ADMIN" | "EMPLOYEE";
export type TaskStatus = "PENDING" | "IN_PROGRESS" | "COMPLETED" | "UNDER_REVIEW";

export interface RegisterUser {
  name: string;
  email: string;
  password: string;
  role: UserRole;
}

export interface LoginUser {
  email: string;
  password: string;
}

export interface User {
  id: string;
  name: string;
  role: UserRole;
  email: string;
  password: string;
  tasks: Task[];
  createdAt: string;
  updatedAt: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  assignedBy: string;
  userId: string;
  assignedTo: User;
  startDate: string;
  endDate: string;
  priority: TaskPriority;
  price: number;
  currency: Currency;
  attachments: { public_id: string; url: string }[];
  status: TaskStatus;
  archived: boolean;
  createdAt: string;
  updatedAt: string;
}

export type JWTPayload = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
};
