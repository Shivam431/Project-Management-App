import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectsSelected from "./components/NoProjectsSelected";
import SidebarPanel from "./components/SidebarPanel";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined, //no projects
    projects: [],
  });

  const handleStartAddProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null, // want to add new project
      };
    });
  };

  const handleProject = (projectData) => {
    const projects = {
      ...projectData,
      id: Math.random(),
    };

    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, projects],
      };
    });
  };

  const onCancel = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  };

  const viewProject = (id) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  };

  const deleteProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  };

  const project = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );
  let content = <SelectedProject project={project} onDelete={deleteProject}/>;

  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleProject} oncancel={onCancel} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectsSelected onStartAddProject={handleStartAddProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <SidebarPanel
        onStartAddProject={handleStartAddProject}
        allProjects={projectState.projects}
        displayProject={viewProject}
      />
      {content}
    </main>
  );
}

export default App;
