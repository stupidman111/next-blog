import Link from "next/link";

interface NavStructure {
  navname: string;
  href: string;
}

const navs: NavStructure[] = [
  {
    navname: "关于我",
    href: "/1",
  },
  {
    navname: "文章",
    href: "/2",
  },
  {
    navname: "项目",
    href: "/3",
  },
  {
    navname: "更多",
    href: "/4",
  },
];

const Navigation = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex bg-white shadow-lg py-2 px-10 rounded-full gap-4 dark:bg-black">
        {navs.map((nav) => {
          return (
            <div key={nav.navname} className="p-2 rounded-full">
              <Link
                href="/"
                className="text-gray-500 hover:text-black dark:text-white"
              >
                {nav.navname}
              </Link>
            </div>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
