import React, { useState } from "react";
import ProjectDetail from "./components/ProjectDetail";
import ProjectList from "./components/ProjectList";
import Login from "./components/Login";
import "./style.css";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleSelectProject = (project) => setSelectedProject(project);
  const handleBack = () => setSelectedProject(null);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="app">
      {!isAuthenticated ? (
        <Login onLogin={setIsAuthenticated} />
      ) : (
        <div>
          {selectedProject ? (
            <ProjectDetail
              project={selectedProject}
              projects={projects}
              setProjects={setProjects}
              onBack={handleBack}
            />
          ) : (
            <ProjectList
              projects={projects}
              setProjects={setProjects}
              onSelect={handleSelectProject}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default App;

