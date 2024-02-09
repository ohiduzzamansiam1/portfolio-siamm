"use client";

import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

function Cta() {
  return (
    <section className="py-24 bg-tertiary dark:bg-secondary/40">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-bold xl:text-3xl max-w-xl text-center mb-8">
            Prepared to make your ideas into reality? I&apos;m here to help you.
          </h3>
          <Link href={"/contact"}>
            <Button className="px-5">Get in touch</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Cta;
