"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { path: "/", name: "Home" },
  { path: "/projects", name: "My Projects" },
  { path: "/contact", name: "Contact" },
];

function Nav({
  containerStyles,
  linkStyles,
  underlineStyles,
}: {
  containerStyles?: any;
  linkStyles?: any;
  underlineStyles?: any;
}) {
  const pathname = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, idx) => (
        <>
          <Link
            href={link.path}
            key={idx}
            className={`capitalize ${linkStyles}`}
          >
            {link.path === pathname && (
              <>
                <motion.span
                  initial={{ y: "-100%" }}
                  animate={{ y: 0 }}
                  transition={{ type: "tween" }}
                  layoutId="underline"
                  className={`${underlineStyles}`}
                />
              </>
            )}
            {link.name}
          </Link>
        </>
      ))}
    </nav>
  );
}

export default Nav;
