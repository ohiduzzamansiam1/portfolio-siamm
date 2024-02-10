import { Github, Link2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Card, CardHeader } from "./ui/card";
import { Project } from "@/lib/apollo";

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group relative overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_prject_bg_light dark:xl:bg-work_prject_bg_dark bg-no-repeat xl:bg-[110%] overflow-hidden">
          <Image
            className="absolute bottom-0 shadow-2xl rounded-t-xl"
            src={project.image.url}
            alt=""
            width={270}
            height={250}
            priority
          />
          {/* btns */}
          <div className="flex gap-x-3">
            <Link
              href={project.link}
              target="_blank"
              className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
            >
              <Link2Icon className="text-white" />
            </Link>
            <Link
              href={project.github}
              target="_blank"
              className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
            >
              <Github className="text-white" />
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {project.category.name}
        </Badge>
        <h4 className="h4 mb-1">{project.name}</h4>
        <p className="text-muted-foreground text-lg line-clamp-2">
          {project.description}
        </p>
      </div>
    </Card>
  );
}

export default ProjectCard;
