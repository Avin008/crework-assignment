import { UniqueIdentifier } from "@dnd-kit/core";

export type ItemType = {
  id: UniqueIdentifier;
  title: string;
  description: string;
  priority: "Low" | "Medium" | "High" | "Urgent";
  timestamp: Number;
  createdAt?: Number;
};

export type CategoryType = {
  id: UniqueIdentifier;
  title: string;
  items: ItemType[];
};

export const categories: CategoryType[] = [
  {
    id: "1",
    title: "To do",
    items: [
      {
        id: "task1-1",
        title: "Implement User Authentication",
        description:
          "Develop and integrate user authentication using email and password.",
        priority: "High",
        timestamp: new Date().getTime(),
      },
      {
        id: "task1-2",
        title: "Fix Login Bug",
        description: "Resolve the issue with the login redirect loop.",
        priority: "Medium",
        timestamp: new Date().getTime(),
      },
      {
        id: "task1-3",
        title: "Update Password Policy",
        description: "Enhance password policy to include special characters.",
        priority: "Low",
        timestamp: new Date().getTime(),
      },
      {
        id: "task1-4",
        title: "Add Forgot Password Feature",
        description:
          "Implement a feature to allow users to reset their passwords.",
        priority: "High",
        timestamp: new Date().getTime(),
      },
      {
        id: "task1-5",
        title: "Integrate OAuth",
        description: "Integrate Google and Facebook OAuth for user login.",
        priority: "Medium",
        timestamp: new Date().getTime(),
      },
    ],
  },
  {
    id: "2",
    title: "In progress",
    items: [
      {
        id: "task2-1",
        title: "Optimize Authentication",
        description: "Improve the performance of the authentication process.",
        priority: "Low",
        timestamp: new Date().getTime(),
      },
      {
        id: "task2-2",
        title: "Security Audit",
        description: "Perform a security audit on the authentication system.",
        priority: "High",
        timestamp: new Date().getTime(),
      },
      {
        id: "task2-3",
        title: "User Session Management",
        description:
          "Implement proper session management to handle user sessions.",
        priority: "Medium",
        timestamp: new Date().getTime(),
      },
      {
        id: "task2-4",
        title: "Update Login UI",
        description: "Redesign the login page for a better user experience.",
        priority: "Low",
        timestamp: new Date().getTime(),
      },
      {
        id: "task2-5",
        title: "Two-Factor Authentication",
        description: "Add two-factor authentication for additional security.",
        priority: "High",
        timestamp: new Date().getTime(),
      },
    ],
  },
  {
    id: "3",
    title: "Under review",
    items: [
      {
        id: "task3-1",
        title: "Database Cleanup",
        description: "Remove unused user accounts from the database.",
        priority: "Low",
        timestamp: new Date().getTime(),
      },
      {
        id: "task3-2",
        title: "Login Rate Limiting",
        description: "Implement rate limiting to prevent brute force attacks.",
        priority: "High",
        timestamp: new Date().getTime(),
      },
      {
        id: "task3-3",
        title: "Monitor Failed Logins",
        description: "Set up monitoring for failed login attempts.",
        priority: "Medium",
        timestamp: new Date().getTime(),
      },
      {
        id: "task3-4",
        title: "Session Timeout",
        description: "Implement session timeout for inactive users.",
        priority: "Low",
        timestamp: new Date().getTime(),
      },
      {
        id: "task3-5",
        title: "User Account Lockout",
        description: "Lock user accounts after multiple failed login attempts.",
        priority: "High",
        timestamp: new Date().getTime(),
      },
    ],
  },
  {
    id: "4",
    title: "Finished",
    items: [
      {
        id: "task4-1",
        title: "Implement Captcha",
        description: "Add captcha to the login page to prevent bots.",
        priority: "Medium",
        timestamp: new Date().getTime(),
      },
      {
        id: "task4-2",
        title: "Update Authentication Docs",
        description: "Update the documentation for the authentication system.",
        priority: "Low",
        timestamp: new Date().getTime(),
      },
      {
        id: "task4-3",
        title: "Email Verification",
        description: "Implement email verification for new user registrations.",
        priority: "Medium",
        timestamp: new Date().getTime(),
      },
      {
        id: "task4-4",
        title: "Password Strength Meter",
        description: "Add a password strength meter to the registration form.",
        priority: "Medium",
        timestamp: new Date().getTime(),
      },
      {
        id: "task4-5",
        title: "Admin Login Monitoring",
        description: "Monitor and log admin login activities.",
        priority: "Urgent",
        timestamp: new Date().getTime(),
      },
    ],
  },
];

export const infoData: {
  id: number;
  img: string;
  title: string;
  description: string;
}[] = [
  {
    id: Date.now() + Math.random() * 1000,
    img: "/illustration-1.png",
    title: "Introducing tags",
    description:
      "Easily categorize and find your notes by adding tags. Keep your workspace clutter-free and efficient.",
  },
  {
    id: Date.now() + Math.random() * 1000,
    img: "/illustration-2.png",
    title: "Share Notes Instantly",
    description:
      "Effortlessly share your notes with others via email or link. Enhance collaboration with quick sharing options.",
  },
  {
    id: Date.now() + Math.random() * 1000,
    img: "/illustration-3.png",
    title: "Access Anywhere",
    description:
      "Sync your notes across all devices. Stay productive whether you're on your phone, tablet, or computer.",
  },
];
