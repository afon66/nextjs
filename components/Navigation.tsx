"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type navMenu = {
  title: string;
  href: string;
};

type Props = {
  navMenu: navMenu[];
};

export const Navigation = ({ navMenu }: Props) => {
  const pathname = usePathname();
  return (
    <>
      {navMenu.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.title}
            href={item.href}
            className={isActive ? "active" : ""}
          >
            {item.title}
          </Link>
        );
      })}
    </>
  );
};

