import { FaFolderOpen, FaUsers } from "react-icons/fa";

const projects = [
  {
    id: 1,
    name: "TaskFlow UI",
    progress: 80,
    members: 4,
    deadline: "20 Jul 2026",
  },
  {
    id: 2,
    name: "FastAPI Backend",
    progress: 45,
    members: 3,
    deadline: "30 Jul 2026",
  },
  {
    id: 3,
    name: "AWS Deployment",
    progress: 20,
    members: 2,
    deadline: "10 Aug 2026",
  },
];

function Projects() {
  return (
    <div>

      <h1 className="text-3xl font-bold">
        Projects
      </h1>

      <p className="text-gray-500 mt-2">
        Track all your ongoing projects
      </p>

      <div className="grid grid-cols-3 gap-6 mt-8">

        {projects.map((project) => (

          <div
            key={project.id}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
          >

            <div className="flex justify-between items-center">

              <FaFolderOpen className="text-3xl text-emerald-600" />

              <span className="text-sm text-gray-500">
                {project.deadline}
              </span>

            </div>

            <h2 className="text-xl font-bold mt-5">
              {project.name}
            </h2>

            <div className="mt-5">

              <div className="flex justify-between text-sm mb-2">

                <span>Progress</span>

                <span>{project.progress}%</span>

              </div>

              <div className="bg-gray-200 h-3 rounded-full">

                <div
                  className="bg-emerald-600 h-3 rounded-full"
                  style={{ width: `${project.progress}%` }}
                ></div>

              </div>

            </div>

            <div className="flex items-center gap-2 mt-6 text-gray-600">

              <FaUsers />

              {project.members} Team Members

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Projects;