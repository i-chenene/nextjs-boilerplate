"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";

const hoverStyle = {
  textDecoration: "underline",
  textUnderlineOffset: "0.4em",
  textDecorationThickness: 1.5,
  textDecorationColor: "#5b8dd9",
};

const links = [
  { label: "experience", href: "/" },
  { label: "about", href: "/about" },
  { label: "contact", href: "mailto:ilies.chenene@universite-paris-saclay.fr", external: true },
  { label: "resume", href: "/resume.pdf", external: true },
];

export default function Navbar() {
  const pathname = usePathname();
  const [hovered, setHovered] = useState<string>();

  return (
    <ul
      className="flex flex-wrap gap-x-4 gap-y-1 text-sm sm:flex-col sm:items-end sm:gap-1"
      onMouseLeave={() => setHovered(undefined)}
    >
      {links.map((link) => {
        const isActive = pathname === link.href || (link.href === "/" && pathname === "/");
        return (
          <li
            key={link.label}
            className={`sm:text-right ${isActive ? "" : "text-[#666]"}`}
            style={{
              color: isActive ? "#5b8dd9" : undefined,
              ...(hovered === link.label ? hoverStyle : {}),
            }}
            onMouseEnter={() => setHovered(link.label)}
          >
            <a
              href={link.href}
              className="inline-flex min-h-11 items-center sm:min-h-0"
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
            >
              {link.label}{link.external ? " ↗" : ""}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
