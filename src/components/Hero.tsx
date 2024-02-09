"use client";

import { Download, Send } from "lucide-react";
import Link from "next/link";
import {
  RiArrowDownSLine,
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
} from "react-icons/ri";
import Badge from "./Badge";
import DevImg from "./DevImg";
import Socials from "./Socials";
import { Button } from "./ui/button";
import { toast } from "sonner";

function Hero() {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-3">
          {/* texts */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              web developer
            </div>
            <h1
              style={{ lineHeight: "1.1" }}
              className="mb-4 text-4xl font-bold xl:font-extrabold md:text-5xl xl:text-6xl"
            >
              Hello, I am Ohiduzzaman Siam
            </h1>
            <p className="subtitle max-w-490px mx-auto xl:mx-0">
              Transforming Ideas into Engaging Websites: Let&apos;s Collaborate
              to Make Your Online Presence Stand Out!
            </p>
            {/* Buttons */}
            <div className="gap-x-3 flex flex-col gap-y-3 md:flex-row mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2 min-w-[166px] px-5 py-3">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <Button
                variant="secondary"
                className="gap-x-2 min-w-[166px] px-5"
                onClick={() => {
                  toast("Not available right now.", {
                    action: {
                      label: "CANCEL",
                      onClick: () => {},
                    },
                  });
                }}
              >
                Download CV <Download size={18} />
              </Button>
            </div>
            {/* Socials */}
            <Socials
              containerStyles={`flex gap-x-6 mx-auto xl:mx-0`}
              iconsStyle={`text-foreground text-[22px] hover:text-primary transition-all `}
            />
          </div>
          {/* images */}
          <div className="hidden xl:flex relative">
            {/* Badges */}
            <Badge
              containerStyles={`absolute top-[27%] -left-[1rem]`}
              icon={<RiBriefcase4Fill />}
              endCountNum={3}
              endCountText="+"
              badgeText="Years Of Experience"
            />
            <Badge
              containerStyles={`absolute top-[70%] -left-[1rem]`}
              icon={<RiTodoFill />}
              endCountNum={150}
              endCountText="+"
              badgeText="Projects completed"
            />
            <Badge
              containerStyles={`absolute top-[40%] left-[25rem]`}
              icon={<RiTeamFill />}
              endCountNum={25}
              endCountText="+"
              badgeText="Happy clients"
            />
            {/* <div className="w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div> */}
            <DevImg
              containerStyles={`w-[600px] h-[570px] scale-[1.1] relative bg-bottom`}
              imgSrc={"/hero/siam.png"}
            />
          </div>
          {/* icon */}
          <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
            <RiArrowDownSLine className="text-3xl text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
