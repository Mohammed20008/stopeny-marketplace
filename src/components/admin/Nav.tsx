"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps, ReactNode } from "react";

export const Nav = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

export const NavLink = (
  props: Omit<ComponentProps<typeof Link>, "className">,
) => {
  const pathname = usePathname();
  return <Link {...props} className={cn("p-4")} />;
};
