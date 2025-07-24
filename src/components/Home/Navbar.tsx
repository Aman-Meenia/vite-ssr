import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignLeft } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router";
import { cn } from "@/lib/utils";
import MenuBar from "./MenuBar";

const Navbar = () => {
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <>
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 z-50">
        <div className="flex items-center justify-between h-14 px-4 md:hidden">
          <Sheet>
            <SheetTrigger>
              <AlignLeft className="w-7 h-7" />
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-full max-w-full sm:max-w-full md:max-w-full p-0"
            >
              <MenuBar />
            </SheetContent>
          </Sheet>
          <div className="flex-1 flex justify-center">
            <Link to="/">
              <div className="flex items-center gap-2 sm:gap-3">
                <picture>
                  <source srcSet="/images/JivaSync.webp" type="image/webp" />
                  <img
                    src="/images/JivaSync.svg"
                    alt="Jiva Sync"
                    className="h-11 w-11"
                  />
                </picture>
                <h1 className="text-2xl sm:text-[30px] font-semibold dark:text-white">
                  JIVA SYNC
                </h1>
              </div>
            </Link>
          </div>
        </div>
        <div className="hidden md:flex h-16 max-w-[1184px] mx-auto items-center gap-8 px-6 lg:px-12 ">
          <Link to="/">
            <div className="flex items-center gap-2 sm:gap-3">
              <picture>
                <source srcSet="/images/JivaSync.webp" type="image/webp" />
                <img
                  src="/images/JivaSync.svg"
                  alt="Jiva Sync"
                  className="h-11 w-11"
                />
              </picture>
              <h1 className="hidden md:block text-2xl sm:text-[30px] font-semibold dark:text-white ">
                JIVA SYNC
              </h1>
            </div>
          </Link>

          <nav className="flex flex-1 items-center justify-end ">
            <div className="flex items-center gap-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  cn(
                    "text-foreground/60 font-bold text-[16px] transition-transform transform hover:scale-105 hover:text-foreground",
                    isActive && "text-foreground scale-105 font",
                  )
                }
                onClick={() => {
                  if (pathName === "/") {
                    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                  }
                }}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  cn(
                    "text-foreground/60 font-bold text-[16px] transition-transform transform hover:scale-105 hover:text-foreground",
                    isActive && "text-foreground scale-105 font",
                  )
                }
                onClick={() => {
                  if (pathName === "/about") {
                    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                  }
                }}
              >
                About us
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  cn(
                    "text-foreground/60 font-bold text-[16px] transition-transform transform hover:scale-105 hover:text-foreground",
                    isActive && "text-foreground scale-105 font",
                  )
                }
                onClick={() => {
                  if (pathName == "/contact") {
                    window.scrollTo({ left: 0, top: 0, behavior: "instant" });
                  }
                }}
              >
                Contact us
              </NavLink>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Navbar;
