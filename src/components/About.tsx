"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  GraduationCap,
  HomeIcon,
  MailIcon,
  Phone,
  User2,
} from "lucide-react";
import Image from "next/image";
import DevImg from "./DevImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Ohiduzzaman Siam",
  },
  {
    icon: <Phone size={20} />,
    text: "+880 177-0371-XXXX",
  },
  {
    icon: <MailIcon size={20} />,
    text: "ohiduzzamansiam@gmail.com",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Currently On 9th Grade",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 14 February, 2008",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "166/8 Utso, Gollamari, Khulna",
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS",
      },
      {
        name: "Front-end Development",
      },
      {
        name: "Javascript, PHP",
      },
      {
        name: "Back-end Development",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/wordpress.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
    ],
  },
];

const varients = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

function About() {
  const getData = (arr: any[], title: string) => {
    return arr.find((item: any) => item.title === title);
  };

  return (
    <>
      <section className="xl:h-[860px] mb-12 xl:py-24">
        <div className="container mx-auto">
          <h2 className="section-title mb-8 xl:mb-12 text-center mx-auto">
            About me
          </h2>
          <div className="flex justify-center">
            {/* images */}
            <div className="hidden xl:flex flex-1 relative">
              <DevImg
                containerStyles={`w-[500px] h-[500px] relative bg-bottom scale-[1.3]`}
                imgSrc={"/about/developer.png"}
              />
            </div>
            {/* tabs */}
            <div className="flex-1">
              <Tabs defaultValue="personal">
                <TabsList className="w-full grid xl:grid-cols-2 xl:max-w-[520px] xl:border dark:border-none">
                  <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                    Personal Info
                  </TabsTrigger>
                  <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                    Skills
                  </TabsTrigger>
                </TabsList>
                <div className="text-lg mt-12 xl:mt-8">
                  <TabsContent value="personal">
                    <motion.div
                      variants={varients}
                      initial="hidden"
                      animate="enter"
                      transition={{
                        type: "spring",
                        delay: 0.1,
                        duration: 0.2,
                      }}
                    >
                      <div className="text-center xl:text-left">
                        <h3 className="h3 mb-4">
                          Unbeatable Service Quality forever.
                        </h3>
                        <p className="subtitle max-w-xl xl:mx-0 mx-auto">
                          I specialize in crafting intuitive websites with
                          cutting-edge technology, delivering dynamic and
                          engaging user experiences.
                        </p>
                        {/* icons */}
                        <div className="grid xl:grid-cols-2 gap-4 mb-12">
                          {infoData.map((item, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            >
                              <div className="text-primary">{item.icon}</div>
                              <div>{item.text}</div>
                            </div>
                          ))}
                        </div>
                        {/* languages */}
                        <div className="flex flex-col gap-y-2">
                          <div className="text-primary">Language Skill</div>
                          <div className="border-b border-border"></div>
                          <div>English, Bengali, Telegu, Hindi</div>
                        </div>
                      </div>
                    </motion.div>
                  </TabsContent>
                  <TabsContent value="skills">
                    <motion.div
                      variants={varients}
                      initial="hidden"
                      animate="enter"
                      transition={{
                        type: "tween",
                        delay: 0.1,
                        duration: 0.2,
                      }}
                    >
                      <div className="text-center xl:text-left">
                        <h3 className="h3 mb-8">Tools I Use Everyday</h3>
                        {/* skills */}
                        <div className="mb-16">
                          <h4 className="text-xl font-semibold mb-2">Skills</h4>
                          {/* Border */}
                          <div className="border-b border-border mb-4"></div>
                          {/* skill lists */}
                          <div>
                            {getData(skillData, "skills").data.map(
                              (item: any, idx: number) => {
                                const { name } = item;
                                return (
                                  <div
                                    key={idx}
                                    className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                                  >
                                    <div className="font-medium">{name}</div>
                                  </div>
                                );
                              }
                            )}
                          </div>
                        </div>
                        {/* Tools */}
                        <div>
                          <h4 className="text-xl font-semibold mb-2 xl:text-left">
                            Tools
                          </h4>
                          {/* Border */}
                          <div className="border-b border-border mb-4"></div>
                          {/* tools lists */}
                          <div className="flex gap-x-8 justify-center xl:justify-start">
                            {getData(skillData, "tools").data.map(
                              (tool: any, idx: number) => {
                                const { imgPath } = tool;
                                return (
                                  <div key={idx}>
                                    <Image
                                      src={imgPath}
                                      width={48}
                                      height={48}
                                      alt=""
                                      priority
                                    />
                                  </div>
                                );
                              }
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
