# Todo-take-home-challenge

A React-based application to manage projects and todos, with features for adding, editing, and tracking the completion status of todos. This application supports authentication, allows users to add projects, and export project summaries in markdown format (as a Gist).

## Features

- **Authentication:**
 Authentication (For Testing)
For demo purposes, the application has hardcoded credentials. Use the following credentials to log in:

Username: admin
Password: password123
Security Note
Since the username and password are hardcoded, this method is only for testing purposes. In a real-world application, you should implement a proper authentication system (e.g., JWT, OAuth) with secure user management.


- **Project Management:**
  - Create new projects.
  - View the details of a project.
  - Edit project titles.
  - Add, update, and remove todos.

- **Todo Management:**
  - Mark todos as **Pending** or **Complete**.
  - Add descriptions to todos and set their status.
  - Update the description of existing todos.
  - Delete todos.

- **Export Project Summary:**
  - Export the project summary in markdown format.
  - The markdown includes a summary of completed and pending todos.

## Tech Stack

- **Frontend:** React.js
- **State Management:** React useState hooks
- **Authentication:** Basic Auth (User login)
- **Markdown Export:** Generates project summary in markdown for export
- **Storage:** Local state (not using backend for persistence)

## Installation

### Prerequisites

Before you begin, make sure you have the following installed:

- Node.js (v14 or later)
- npm or yarn (for managing packages)

### Steps to Install

1. Clone the repository to your local machine:
   ```bash
   git clone (https://github.com/Aswandccp/Todo-take-home-challenge.git)
   cd Todo-take-home-challenge.git
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

   or if you prefer `yarn`:
   ```bash
   yarn install
   ```

3. Run the application:
   ```bash
   npm start
   ```

   or with `yarn`:
   ```bash
   yarn start
   ```

   The app should now be running at `http://localhost:3000`.

## Usage

1. **Login:**
   - After launching the app, users are prompted to log in.

2. **Project List:**
   - Once logged in, users can create a new project, view existing projects, and navigate to the project detail page.

3. **Add and Manage Todos:**
   - In the project detail page, users can add new todos, mark them as completed or pending, and remove todos.
   - Users can update the todo descriptions and export the project summary as a markdown file.

4. **Export Project Summary:**
   - Click the "Export as Gist" button to download the summary of the project in markdown format.

## File Structure

```plaintext
project-management-app/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── Login.js
│   │   ├── ProjectDetail.js
│   │   └── ProjectList.js
│   ├── App.js
│   └── style.css
│
├── .gitignore
├── package.json
└── README.md
```
