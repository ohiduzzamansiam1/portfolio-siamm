"use client";

import Link from "next/link";
import { RiFacebookFill, RiGithubFill, RiLinkedinFill } from "react-icons/ri";

const icons = [
  {
    path: "https://github.com/ohiduzzamansiam1",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.facebook.com/ohiduzzaman.siam.o",
    name: <RiFacebookFill />,
  },
  {
    path: "https://www.linkedin.com/in/ohiduzzaman-siam-624009262/",
    name: <RiLinkedinFill />,
  },
];

function Socials({
  containerStyles,
  iconsStyle,
}: {
  containerStyles?: any;
  iconsStyle?: any;
}) {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, idx) => (
        <div key={idx} className={`${iconsStyle}`}>
          <Link href={icon.path} target="_blank">
            {icon.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Socials;
