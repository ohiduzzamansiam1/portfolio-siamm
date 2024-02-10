"use client";

import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import { Button } from "./ui/button";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectCard from "./ProjectCard";
import { useEffect, useState } from "react";
import { Project, getProjects } from "@/lib/apollo";
function Works() {
  const [projectData, setProjectData] = useState<Project[]>([]);

  useEffect(() => {
    const getData = async () => {
      const { projects } = await getProjects();
      console.log(projects);
      setProjectData(projects);
    };
    getData();
  }, []);

  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            I&apos;ve done a lot of projects in my coding journey. Feel the
            first taste of it.
          </p>
          <Link href="/projects">
            <Button className="px-5">All projects</Button>
          </Link>
        </div>
        {/* Slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            autoplay={{
              disableOnInteraction: false,
            }}
            spaceBetween={30}
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 4 projects */}
            {projectData.slice(0, 4).map((project, idx) => (
              <SwiperSlide key={idx}>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Works;
