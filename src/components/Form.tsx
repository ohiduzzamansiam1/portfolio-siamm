"use client";

import React from "react";
import { Input } from "./ui/input";
import { Mail, MailIcon, User } from "lucide-react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { toast } from "sonner";

function Form() {
  return (
    <form
      className="flex flex-col gap-y-4"
      onSubmit={(e) => e.preventDefault()}
    >
      {/* input */}
      <div className="relative flex items-center">
        <Input type="text" placeholder="Name" id="name" />
        <User className="absolute right-6" size={20} />
      </div>
      {/* input */}
      <div className="relative flex items-center">
        <Input type="email" placeholder="Email" id="email" />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      {/* textarea */}
      <div className="relative flex items-center">
        <Textarea placeholder="Message" id="message" className="resize-none" />
        <User className="absolute right-6 top-6" size={20} />
      </div>
      {/* Submit button */}
      <Button
        onClick={() => {
          toast("Thanks for contacting me!");
        }}
        className="flex items-centyer max-w-[166px] px-5 py-4"
      >
        Let&apos;s Talk
      </Button>
    </form>
  );
}

export default Form;
