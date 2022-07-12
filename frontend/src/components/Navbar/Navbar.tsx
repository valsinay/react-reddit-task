import React from "react";
import "./Navbar.css";
import { ChevronDownIcon, HomeIcon, SearchIcon } from "@heroicons/react/solid";
import {
  MenuIcon,
  SparklesIcon,
  BellIcon,
  ChatIcon,
  PlusIcon,
  GlobeIcon,
  SpeakerphoneIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm">
      <div className="relative h-10 w-20 flex flex-shrink-0 cursor-pointer">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Reddit_logo_new.svg/2560px-Reddit_logo_new.svg.png"
          alt=""
          className="object-contain"
        />
      </div>
      <section className="flex items-center mx-7 xl:min-w-[300px]">
        <HomeIcon className="h-5 w-5" />
        <p className="flex-1 ml-2 hidden lg:inline">Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </section>
      {/* <section className="text-4xl"></section> */}
      <form
        className="flex flex-1 items-center space-x-2 border border-gray-200 rounded-sm
bg-gray-100 px-3 py-1"
      >
        <SearchIcon className="h-6 w-6 text-gray-400" />
        <input
          className="flex-1 bg-transparent outline-none"
          type="text"
          placeholder="Search"
        />
        <button hidden type="submit"></button>
      </form>
      <section
        className="mx-5  lg:inline-flex text-gray-500 space-x-2 items-center hidden
      "
      >
        <SparklesIcon className="icon" />
        <GlobeIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="h-10 border border-gray-100" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <SpeakerphoneIcon className="icon" />
      </section>
      <section className="ml-5 flex items-center lg:hidden">
        <MenuIcon className="icon" />
      </section>
      <section className="hidden items-center lg:flex space-x-2 border-gray-100 p-2 cursor-pointer">
        <div className="relative w-5 h-5 flex-shrink-0">
          <img className="object-contain"
            src="https://logoeps.com/wp-content/uploads/2014/09/52053-reddit-logo-icon-vector-icon-vector-eps.png"
            alt=""
          />
        </div>
        <p className="text-gray-400">Sign In</p>
      </section>
    </div>
  );
}
