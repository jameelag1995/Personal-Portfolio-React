import React from "react";

export default function TabButton({ target, children }) {
  const isExternalLink = target.startsWith("http");
  return (
    <li>
      <a
        href={target}
        target={isExternalLink ? "_blank" : "_self"}
        rel={isExternalLink ? "noopener noreferrer" : ""}
      >
        <button>{children}</button>
      </a>
    </li>
  );
}
