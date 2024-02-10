"use client";

import Form from "@/components/Form";
import { HomeIcon, MailIcon, PhoneCall } from "lucide-react";

function Contact() {
  return (
    <>
      <div className="container mx-auto">
        {/* text and illustration */}
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-20">
          {/* text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello 👋
            </div>
            <h1 className="h1 max-w-md mb-8">Let&apos;s Work Together.</h1>
            <p className="subtitle-1 max-w-[400px]">
              Prepared to make your ideas into reality? I&apos;m here to help
              you.
            </p>
          </div>
          {/* illustration */}
          <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-no-repeat"></div>
        </div>
        {/* info text and form */}
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          {/* info text */}
          <div className="flex flex-col gap-y-4 xl:gap-y-8 mb-12 xl:mb-24 text-base xl:text-lg">
            {/* mail */}
            <div className="flex gap-x-8 items-center">
              <MailIcon size={18} className="text-primary" />
              <div>ohiduzzamansiam@gmail.com</div>
            </div>
            {/* address */}
            <div className="flex gap-x-8 items-center">
              <HomeIcon size={18} className="text-primary" />
              <div>166/8 Utso, Gollamari, Khulna</div>
            </div>
            {/* phone */}
            <div className="flex gap-x-8 items-center">
              <PhoneCall size={18} className="text-primary" />
              <div>+880 177-0371-XXXX</div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </>
  );
}

export default Contact;
