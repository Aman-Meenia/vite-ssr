import { X } from "lucide-react";
import { SheetClose } from "@/components/ui/sheet";
import { NavLink } from "react-router";
import { cn } from "@/lib/utils";
const MenuBar = () => {
  return (
    <>
      <div className="min-h-screen bg-white flex flex-col">
        <header className="flex justify-between items-center mt-6 px-4">
          <div className="flex-shrink-0">
            <SheetClose>
              <X className="w-7 h-7" />
            </SheetClose>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="flex items-center gap-2 sm:gap-3">
              <img
                src="/images/JivaSyncIcon.png"
                alt="Jiva Sync"
                className="h-12 w-12"
              />
              <h1 className="text-2xl sm:text-[30px] font-semibold dark:text-white">
                JIVA SYNC
              </h1>
            </div>
          </div>
        </header>
        <div className="flex flex-col items-center mt-10 text-lg gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              cn(
                "text-foreground/60 font-bold text-lg transition-transform transform hover:scale-105 hover:text-foreground",
                isActive && "text-foreground scale-105 font",
              )
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              cn(
                "text-foreground/60 font-bold text-lg transition-transform transform hover:scale-105 hover:text-foreground",
                isActive && "text-foreground scale-105 font",
              )
            }
          >
            About us
          </NavLink>
          {/* <NavLink */}
          {/*   to="/faq" */}
          {/*   className={({ isActive }) => */}
          {/*     cn( */}
          {/*       "text-foreground/60 font-bold text-lg transition-transform transform hover:scale-105 hover:text-foreground", */}
          {/*       isActive && "text-foreground scale-105 font", */}
          {/*     ) */}
          {/*   } */}
          {/* > */}
          {/*   FAQ */}
          {/* </NavLink> */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              cn(
                "text-foreground/60 font-bold text-lg transition-transform transform hover:scale-105 hover:text-foreground",
                isActive && "text-foreground scale-105 font",
              )
            }
          >
            Contact us
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              cn(
                "text-foreground/60 font-bold text-lg transition-transform transform hover:scale-105 hover:text-foreground",
                isActive && "text-foreground scale-105 font",
              )
            }
          >
            Login
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default MenuBar;
