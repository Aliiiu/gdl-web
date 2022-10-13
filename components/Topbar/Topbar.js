import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { TopContainer, OverlayDiv } from "./topbar.styles";
import LinkList from "../Widgets/Link/Link";
import Link from "next/link";
import { useTheme } from "next-themes";
import Menu, { MenuClose } from "../Widgets/Icons/Menu";
import { AppButton } from "../Widgets/Button/Button";
import { AiOutlineArrowRight } from "react-icons/ai";

const Topbar = props => {
  const [mode, setMode] = useState(false);
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open == true) {
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.width = "100vw";
      document.body.style.position = "fixed";
    } else {
      const scrollY = window.scrollY;

      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  }, [open]);

  return (
    <>
      <Transition
        show={open}
        enter="transition ease-out duration-500"
        enterFrom="transform opacity-0"
        enterTo="transform opacity-100"
        leave="transition ease-in duration-500"
        leaveFrom="transform opacity-100"
        leaveTo="transform opacity-0"
      >
        <OverlayDiv
          className="top-0 left-0 right-0 bottom-0 fixed Overlay h-[100vh] overflow-y-scroll"
          data-v-0ab2563a=""
          onClick={() => setOpen(!open)}
        ></OverlayDiv>
        <nav className="bg-white dark:bg-black rounded-lg p-6 px-4 mx-[2rem] fixed top-0 left-0 mt-[68px] lg:w-[66.666667%] w-full animate-slide-down">
          wassa
        </nav>
      </Transition>
      <TopContainer
        className={`dark:bg-black bg-white w-full sticky top-0 border-b border-gray-200 dark:border-gray-600`}
      >
        <div className="bg-transparent lg:w-4/6 w-full animate-fade-in">
          <nav className="py-2 z-20 top-0 left-0">
            <div className="container flex flex-wrap items-center mx-auto">
              <div className="flex">
                <button
                  data-collapse-toggle="navbar-sticky"
                  type="button"
                  className="inline-flex items-center lg:p-2 lg:px-0 p-0 text-sm text-black rounded-lg focus:outline-none focus:ring-0 focus:ring-gray-200 dark:text-white dark:focus:ring-gray-600"
                  aria-controls="navbar-sticky"
                  aria-expanded="false"
                  onClick={() => setOpen(!open)}
                >
                  <span className="sr-only">Open main menu</span>
                  {!open ? <Menu theme={theme} /> : <MenuClose theme={theme} />}
                </button>
                <Link href="/">
                  <a className="flex items-center mx-4 flex-col justify-center font-title-font">
                    <img
                      src="https://flowbite.com/docs/images/logo.svg"
                      class="h-6 sm:h-9 sm:block hidden"
                      alt="Flowbite Logo"
                    />
                  </a>
                </Link>
              </div>

              <div
                className="hidden flex-grow justify-between items-center md:flex md:order"
                id="navbar-sticky"
              >
                <ul className="flex flex-col p-4 py-2 mt-4 lg:mx-7 bg-gray-50 md:flex-row md:space-x-12 md:mt-0 lg:text-[15px] md:font-light md:border-0 md:bg-white dark:bg-black md:dark:bg-black text-gray-500 dark:text-gray-400 dark:border-gray-700">
                  <LinkList name="about" url="/about" />
                  <LinkList name="product" url="/product" />
                  <LinkList name="blog" url="/blogs" />
                </ul>
              </div>
              <div className="flex-grow flex gap-x-6 justify-end items-center">
                <Link href="/login">
                  <a className="text-black dark:text-white font-light">Login</a>
                </Link>
                <AppButton
                  name="Create an Account"
                  icon={<AiOutlineArrowRight className="font-thin text-sm" />}
                />
                <div className="flex justify-start items-center">
                  <label
                    for="toggleB"
                    className="flex w-full items-center cursor-pointer"
                  >
                    <div className="w-4/5 flex justify-end">
                      <span className="mr-3 lg:text-sm text-sm uppercase font-light text-gray-900 dark:text-gray-400">
                        night
                      </span>
                    </div>

                    <div class="relative">
                      <input
                        type="checkbox"
                        checked={theme == "dark" ? true : false}
                        id="toggleB"
                        className="sr-only"
                        onClick={() => {
                          setMode(!mode);
                          setTheme(theme == "dark" ? "light" : "dark");
                        }}
                      />
                      <div className="drawer block bg-gray-200 w-9 h-5 rounded-full"></div>
                      <div className="dot absolute left-0.5 top-0.5 bg-black dark:bg-white w-4 h-4 rounded-full transition"></div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </TopContainer>
    </>
  );
};

export default Topbar;
