"use client";
import Link, { LinkProps } from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
  transitionText?: string;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const TransitionLink: React.FC<TransitionLinkProps> = ({
  children,
  href,
  transitionText = "Regionaliza+",
  ...props
}) => {
  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const body = document.querySelector("body");

    const transitionElement = document.createElement("div");
    transitionElement.className = "page-transition";
    transitionElement.innerHTML = `<span>${transitionText}</span>`;
    body?.appendChild(transitionElement);

    await sleep(10);
    transitionElement.classList.add("page-transition-in");

    await sleep(900);
    router.push(href);

    transitionElement.classList.replace("page-transition-in", "page-transition-out");

    await sleep(900);
    transitionElement.remove();
  };

  return (
    <Link {...props} href={href} onClick={handleTransition}>
      {children}
    </Link>
  );
};