import React, { useState } from "react";

const ProjectDetail = ({ project, onBack }) => {
  const [todos, setTodos] = useState(project.todos);
  const [newTodoDescription, setNewTodoDescription] = useState("");
  const [newTodoStatus, setNewTodoStatus] = useState("Pending");
  const [editTodoId, setEditTodoId] = useState(null); 
  const [editTodoDescription, setEditTodoDescription] = useState(""); 

  const handleAddTodo = () => {
    if (!newTodoDescription.trim()) return;
    const newTodo = {
      id: Date.now(),
      description: newTodoDescription,
      status: newTodoStatus,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setTodos([...todos, newTodo]);
    setNewTodoDescription("");
  };

  const handleStatusChange = (id, status) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, status, updatedAt: new Date() } : todo
    );
    setTodos(updatedTodos);
  };

  const handleRemoveTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEditTodo = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    setEditTodoId(id);
    setEditTodoDescription(todoToEdit.description); 
  };

  const handleSaveEdit = () => {
    if (!editTodoDescription.trim()) return;
    const updatedTodos = todos.map((todo) =>
      todo.id === editTodoId
        ? { ...todo, description: editTodoDescription, updatedAt: new Date() }
        : todo
    );
    setTodos(updatedTodos);
    setEditTodoId(null); 
    setEditTodoDescription(""); 
  };

  const exportToMarkdown = () => {
    const projectTitle = project.name;
    const creationDate = new Date(project.createdAt).toLocaleDateString();
    
    let markdownContent = `# ${projectTitle}\n\n`;

    const completedTodos = todos.filter((todo) => todo.status === "Complete").length;
    const totalTodos = todos.length;
    markdownContent += `**Summary:** ${completedTodos}/${totalTodos} todos completed.\n\n`;

    const pendingTodos = todos.filter((todo) => todo.status === "Pending");
    const completedTodosList = todos.filter((todo) => todo.status === "Complete");

    if (pendingTodos.length > 0) {
      markdownContent += `## Pending\n`;
      pendingTodos.forEach((todo) => {
        markdownContent += `- [ ] ${todo.description} (Created: ${todo.createdAt.toLocaleDateString()})\n`;
      });
    }

    if (completedTodosList.length > 0) {
      markdownContent += `\n## Completed\n`;
      completedTodosList.forEach((todo) => {
        markdownContent += `- [x] ${todo.description} (Created: ${todo.createdAt.toLocaleDateString()}, Completed: ${todo.updatedAt.toLocaleDateString()})\n`;
      });
    }

    const blob = new Blob([markdownContent], { type: "text/markdown" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${projectTitle}-summary.md`;
    link.click();
  };

  return (
    <div>
      <h2>{project.name}</h2> 
      <button onClick={onBack}>Back</button>

      <div>
        <h3>Add Todo</h3>
        <input
          type="text"
          value={newTodoDescription}
          onChange={(e) => setNewTodoDescription(e.target.value)}
          placeholder="Enter Todo Description"
        />
        <select
          value={newTodoStatus}
          onChange={(e) => setNewTodoStatus(e.target.value)}
        >
          <option value="Pending">Pending</option>
          <option value="Complete">Complete</option>
        </select>
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>

      <div>
        <h3>Todo List</h3>
        <div>
          <h4>Pending Todos</h4>
          <ul>
            {todos
              .filter((todo) => todo.status === "Pending")
              .map((todo) => (
                <li key={todo.id}>
                  {editTodoId === todo.id ? (
                    <div>
                      <input
                        type="text"
                        value={editTodoDescription}
                        onChange={(e) => setEditTodoDescription(e.target.value)}
                      />
                      <button onClick={handleSaveEdit}>Save</button>
                    </div>
                  ) : (
                    <span>
                      {todo.description} - {todo.createdAt.toLocaleDateString()}
                      <button onClick={() => handleStatusChange(todo.id, "Complete")}>Mark as Complete</button>
                      <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
                      <button onClick={() => handleEditTodo(todo.id)}>Edit</button>
                    </span>
                  )}
                </li>
              ))}
          </ul>
        </div>

        <div>
          <h4>Completed Todos</h4>
          <ul>
            {todos
              .filter((todo) => todo.status === "Complete")
              .map((todo) => (
                <li key={todo.id}>
                  {editTodoId === todo.id ? (
                    <div>
                      <input
                        type="text"
                        value={editTodoDescription}
                        onChange={(e) => setEditTodoDescription(e.target.value)}
                      />
                      <button onClick={handleSaveEdit}>Save</button>
                    </div>
                  ) : (
                    <span>
                      {todo.description} - {todo.createdAt.toLocaleDateString()} (Completed: {todo.updatedAt.toLocaleDateString()})
                      <button onClick={() => handleStatusChange(todo.id, "Pending")}>Mark as Pending</button>
                      <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
                      <button onClick={() => handleEditTodo(todo.id)}>Edit</button>
                    </span>
                  )}
                </li>
              ))}
          </ul>
        </div>
      </div>

      <button onClick={exportToMarkdown}>Export as Gist</button>
    </div>
  );
};

export default ProjectDetail;

