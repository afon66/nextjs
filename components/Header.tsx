import { Navigation } from "./Navigation";

export const Header = () => {
  const navItems = [
    { title: "Home", href: "/" },
    { title: "Blog", href: "/blog" },
    { title: "About", href: "/about" },
  ];

  return (
    <header>
      <Navigation navMenu={navItems} />
    </header>
  );
};
