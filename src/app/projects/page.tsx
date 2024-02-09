"use client";

import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Project, getProjects } from "@/lib/apollo";
import { useEffect, useState } from "react";

// get an array of each unique category

function Projects() {
  const [projectData, setProjectData] = useState<Project[]>([]);

  const [categories, setCategories] = useState<string[]>([]);
  const [category, setCategory] = useState("all projects");

  // filter projects based on category
  const filteredProjects = projectData.filter((item) => {
    if (category === "all projects") {
      return item;
    } else {
      return item.category.name === category;
    }
  });

  useEffect(() => {
    const getData = async () => {
      const { projects } = await getProjects();
      setProjectData(projects);
      setCategories([
        "all projects",
        ...Array.from(new Set(projects.map((item) => item.category.name))),
      ]);
    };
    getData();
  }, []);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue="all projects">
          <TabsList
            className={`w-full grid xl:grid-cols-${categories.length} xl:max-w-[640px] xl:border dark:border-none mx-auto`}
          >
            {categories.map((category, idx) => (
              <TabsTrigger
                onClick={() => setCategory(category)}
                value={category}
                key={idx}
                className="capitalize md:w-auto w-[162px]"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="text-lg mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, idx) => (
              <TabsContent key={idx} value={category}>
                <ProjectCard project={project} />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </div>
  );
}

export default Projects;
