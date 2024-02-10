"use client";

import React from "react";
import Socials from "./Socials";

function Footer() {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          <Socials
            containerStyles="flex gap-x-6 xl:mx-0 mb-4"
            iconsStyle="text-primary text-[20px] dark:text-white/70 dark:hover:text-white transition-all"
          />
          <div className="text-white/60 text-center">
            Copyright &copy; Ohiduzzaman Siam. All rights reserved as of{" "}
            {new Date().getFullYear()}.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
