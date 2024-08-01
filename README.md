# Task Management Application

## ⚠️ **Important Note**

<span style="color:red">**Backend Deployment:** The backend for this application is deployed on the free tier of Render. Due to the nature of the free tier, the server spins down after a period of inactivity. As a result, the first request (such as sign-in or sign-up) after a period of inactivity can take up to **50 seconds** to respond while the server is waking up. Subsequent requests will be much faster.</span>

<span style="color:red">**Incomplete Features:** Please note that there are a few features that I am currently working on and will complete soon:

1. Creating new tasks.
2. Editing and deleting tasks.
3. Creating tasks by clicking the "Add Task" button in any column.</span>

This Task Management Application is designed to help users manage their tasks efficiently. It includes features like user authentication, a task board with multiple columns, task management functionalities, drag-and-drop capabilities, and data persistence to ensure a seamless user experience.

## Features

1. **User Authentication**

   - Signup and login functionality using email and password.
   - Secure password storage and user session management.

2. **Task Board**

   - Personalized task board for each user upon logging in.
   - Four columns: "To-Do", "In Progress", "Under Review", and "Completed".

3. **Task Management**

   - Create new tasks in any column.
   - Each task includes:
     - Title (mandatory)
     - Description (optional)
     - Status (mandatory, auto-filled based on the column)
     - Priority (optional; values: Low, Medium, Urgent)
     - Deadline (optional)
   - Edit and delete tasks after creation.

4. **Drag and Drop Functionality**

   - Move tasks between columns using drag-and-drop.
   - Automatic status update when tasks are moved to a different column.

5. **Data Persistence**
   - Store all user data (account information and tasks) in a database.
   - Ensure each user can only see and manage their own tasks.

## Technologies Used

- **Frontend**:
  - **Next.js**: React framework for server-side rendering and static site generation.
  - **Tailwind CSS**: Utility-first CSS framework for styling.
  - **React Query**: Data fetching, caching, and synchronization for server state management.
  - **Zustand**: State management library for managing global state.
  - **dnd-kit**: Drag-and-drop toolkit for building draggable interfaces.
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/task-management-app.git
   cd crework-assignment
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Set up environment variables:

   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     NEXT_PUBLIC_BACKEND_URL=your_backend_uri
     ```

4. Start the application:
   ```sh
   npm run dev
   ```

## Running the Project Locally

When running the project locally, you might encounter a blank page due to Next.js caching. If this happens, please manually reload the page. This issue does not affect the production environment, where everything works smoothly.

## Usage

1. **Signup/Login**:

   - Navigate to the signup page to create a new account.
   - Login with your email and password.

2. **Task Board**:

   - After logging in, you will be directed to your task board.
   - Create tasks by clicking the "Add Task" button in any column.
   - Drag and drop tasks between columns to update their status.

3. **Task Management**:
   - Edit or delete tasks by clicking on the task and selecting the appropriate option.
