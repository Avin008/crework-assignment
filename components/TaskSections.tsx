import Image from "next/image";
import TaskCard from "./TaskCard";
import AddTaskButton from "./AddTaskButton";
import CategoryColumn from "./CategoryColumn";

export type Task = {
  id: string;
  title: string;
  description: string;
  priority: "High" | "Medium" | "Low";
  timestamp: string;
};

export type Category = {
  id: string;
  category: string;
  tasks: Task[];
};

const categories: Category[] = [
  {
    id: "1",
    category: "To do",
    tasks: [
      {
        id: "task1-1",
        title: "Implement User Authentication",
        description:
          "Develop and integrate user authentication using email and password.",
        priority: "High",
        timestamp: "2024-08-15T01:00:00Z",
      },
      {
        id: "task1-2",
        title: "Fix Login Bug",
        description: "Resolve the issue with the login redirect loop.",
        priority: "Medium",
        timestamp: "2024-08-15T02:00:00Z",
      },
      {
        id: "task1-3",
        title: "Update Password Policy",
        description: "Enhance password policy to include special characters.",
        priority: "Low",
        timestamp: "2024-08-15T03:00:00Z",
      },
      {
        id: "task1-4",
        title: "Add Forgot Password Feature",
        description:
          "Implement a feature to allow users to reset their passwords.",
        priority: "High",
        timestamp: "2024-08-15T04:00:00Z",
      },
      {
        id: "task1-5",
        title: "Integrate OAuth",
        description: "Integrate Google and Facebook OAuth for user login.",
        priority: "Medium",
        timestamp: "2024-08-15T05:00:00Z",
      },
    ],
  },
  {
    id: "2",
    category: "In progress",
    tasks: [
      {
        id: "task2-1",
        title: "Optimize Authentication",
        description: "Improve the performance of the authentication process.",
        priority: "Low",
        timestamp: "2024-08-16T01:00:00Z",
      },
      {
        id: "task2-2",
        title: "Security Audit",
        description: "Perform a security audit on the authentication system.",
        priority: "High",
        timestamp: "2024-08-16T02:00:00Z",
      },
      {
        id: "task2-3",
        title: "User Session Management",
        description:
          "Implement proper session management to handle user sessions.",
        priority: "Medium",
        timestamp: "2024-08-16T03:00:00Z",
      },
      {
        id: "task2-4",
        title: "Update Login UI",
        description: "Redesign the login page for a better user experience.",
        priority: "Low",
        timestamp: "2024-08-16T04:00:00Z",
      },
      {
        id: "task2-5",
        title: "Two-Factor Authentication",
        description: "Add two-factor authentication for additional security.",
        priority: "High",
        timestamp: "2024-08-16T05:00:00Z",
      },
    ],
  },
  {
    id: "3",
    category: "Under review",
    tasks: [
      {
        id: "task3-1",
        title: "Database Cleanup",
        description: "Remove unused user accounts from the database.",
        priority: "Low",
        timestamp: "2024-08-17T01:00:00Z",
      },
      {
        id: "task3-2",
        title: "Login Rate Limiting",
        description: "Implement rate limiting to prevent brute force attacks.",
        priority: "High",
        timestamp: "2024-08-17T02:00:00Z",
      },
      {
        id: "task3-3",
        title: "Monitor Failed Logins",
        description: "Set up monitoring for failed login attempts.",
        priority: "Medium",
        timestamp: "2024-08-17T03:00:00Z",
      },
      {
        id: "task3-4",
        title: "Session Timeout",
        description: "Implement session timeout for inactive users.",
        priority: "Low",
        timestamp: "2024-08-17T04:00:00Z",
      },
      {
        id: "task3-5",
        title: "User Account Lockout",
        description: "Lock user accounts after multiple failed login attempts.",
        priority: "High",
        timestamp: "2024-08-17T05:00:00Z",
      },
    ],
  },
  {
    id: "4",
    category: "Finished",
    tasks: [
      {
        id: "task4-1",
        title: "Implement Captcha",
        description: "Add captcha to the login page to prevent bots.",
        priority: "Medium",
        timestamp: "2024-08-18T01:00:00Z",
      },
      {
        id: "task4-2",
        title: "Update Authentication Docs",
        description: "Update the documentation for the authentication system.",
        priority: "Low",
        timestamp: "2024-08-18T02:00:00Z",
      },
      {
        id: "task4-3",
        title: "Email Verification",
        description: "Implement email verification for new user registrations.",
        priority: "High",
        timestamp: "2024-08-18T03:00:00Z",
      },
      {
        id: "task4-4",
        title: "Password Strength Meter",
        description: "Add a password strength meter to the registration form.",
        priority: "Medium",
        timestamp: "2024-08-18T04:00:00Z",
      },
      {
        id: "task4-5",
        title: "Admin Login Monitoring",
        description: "Monitor and log admin login activities.",
        priority: "High",
        timestamp: "2024-08-18T05:00:00Z",
      },
    ],
  },
];

const TaskSections = () => {
  return (
    <section className="grid grid-cols-4 gap-3 rounded-lg p-3 bg-white">
      {categories.map((category) => (
        <CategoryColumn key={category.id} category={category} />
      ))}
    </section>
  );
};

export default TaskSections;
