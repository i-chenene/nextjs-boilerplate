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
      className="flex flex-col items-end gap-1 text-sm"
      onMouseLeave={() => setHovered(undefined)}
    >
      {links.map((link) => {
        const isActive = pathname === link.href || (link.href === "/" && pathname === "/");
        return (
          <li
            key={link.label}
            className={`text-right ${isActive ? "" : "text-[#999]"}`}
            style={{
              color: isActive ? "#5b8dd9" : undefined,
              ...(hovered === link.label ? hoverStyle : {}),
            }}
            onMouseEnter={() => setHovered(link.label)}
          >
            <a
              href={link.href}
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
