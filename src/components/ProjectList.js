import React, { useState } from "react";

const ProjectList = ({ projects, setProjects, onSelect }) => {
  const [projectName, setProjectName] = useState("");

  const handleAddProject = () => {
    if (!projectName.trim()) return;
    const newProject = {
      id: Date.now(),
      name: projectName,
      createdAt: new Date().toISOString(),
      todos: [],
    };
    setProjects([...projects, newProject]);
    setProjectName("");
  };

  return (
    <div>
      <h2>Projects</h2>
      <input
        type="text"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
        placeholder="Enter project name"
      />
      <button onClick={handleAddProject}>Add Project</button>
      <ul>
        {projects.map((project) => (
          <li
            key={project.id}
            onClick={() => onSelect(project)}
            style={{
              cursor: "pointer",
              listStyle: "none",
              padding: "5px",
              fontWeight: "bold",
            }}
          >
            {project.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
