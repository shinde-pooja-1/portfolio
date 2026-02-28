import { projects } from "@/data/projects";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard3D from "@/components/ui/ProjectCard3D";
export default function Projects() {
  return <section id="projects" className="relative py-32 px-6 md:px-12 max-w-7xl mx-auto z-10">
            <SectionHeading subtitle="03. Selected Work">
                Featured Projects
            </SectionHeading>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
                {projects.map((project, index) => <div key={project.id} className={index % 2 !== 0 && projects.length > 1 ? "md:mt-32" : ""}>
                        <ProjectCard3D project={project} index={index} />
                    </div>)}
            </div>
        </section>;
}