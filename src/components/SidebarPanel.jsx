import Buttons from "./Buttons";
import SelectedProject from "./SelectedProject";

const SidebarPanel = ({ onStartAddProject, allProjects, displayProject }) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        My Projects
      </h2>
      <div>
        <Buttons onClick={onStartAddProject}>+ add new projects</Buttons>
      </div>
      <ul className="mt-8">
      {allProjects.map(project=>{
        let CSSclasses="w-full text-left px-2 py-1 text-stone-400 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";     
        return(
          <li key={project.id}>
          <button
            className={CSSclasses}
            onClick={()=>{displayProject(project.id)}}
          >
            {project.title}
          </button>
        </li>
        )
      })}
      </ul>
    </aside>
  );
};

export default SidebarPanel;
