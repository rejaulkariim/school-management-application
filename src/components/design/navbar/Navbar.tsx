import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { navLinks } from "@/constants";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-background border-b border-border/60 h-16 flex justify-center items-center sticky z-50 top-0 inset-x-0">
      <MaxWidthWrapper>
        <nav className="flex justify-between items-center">
          <h1 className="font-bold text-xl">
            ইঞ্জিনিয়ার ফরিদুল ইসলাম উচ্চ বিদ্যালয়
          </h1>

          <div className="hidden items-center gap-x-14 ">
            {navLinks.map((link) => (
              <Link
                href={link.route}
                key={link.lable}
                className="text-base text-muted-foreground hover:text-foreground"
              >
                {link.lable}
              </Link>
            ))}
          </div>
          <button className="hidden md:block bg-blue-600 px-6 py-2 rounded-md text-white">
            ভর্তি চলছে
          </button>
        </nav>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;
