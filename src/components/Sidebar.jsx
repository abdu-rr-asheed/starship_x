import React from "react";
import { GiEarthAmerica, GiSkills } from "react-icons/gi";
import { FaFingerprint, FaBriefcase, FaFileCode } from "react-icons/fa";

const Sidebar = ({ aboutme, portfolio, skills, contact }) => {
  const gotoaboutme = () =>
    window.scrollTo({
      top: aboutme.current.offsetTop,
      behavior: "smooth",
    });

  const gotoportfolio = () =>
    window.scrollTo({
      top: portfolio.current.offsetTop,
      behavior: "smooth",
    });

  const gotoskills = () =>
    window.scrollTo({
      top: skills.current.offsetTop,
      behavior: "smooth",
    });

  const gotocontact = () =>
    window.scrollTo({
      top: contact.current.offsetTop,
      behavior: "smooth",
    });

  return (
    <div className="fixed right-0 top-0 z-10 md:block hidden">
      <div className="w-16 h-screen m-0 flex flex-col justify-center text-white">
        <SideBarIcon
          icon={<FaFingerprint size="24" />}
          text="About Me"
          clck={gotoaboutme}
        />
        <SideBarIcon
          icon={<FaBriefcase size="20" />}
          text="Portfolios"
          clck={gotoportfolio}
        />
        <SideBarIcon
          icon={<GiSkills size="26" />}
          text="Skills"
          clck={gotoskills}
        />
        <SideBarIcon
          icon={<GiEarthAmerica size="26" />}
          text="Contact Me"
          clck={gotocontact}
        />
        {/* <SideBarIcon icon={<FaFileCode size="22" />} text="Resume" /> */}
      </div>
    </div>
  );
};

const SideBarIcon = ({ icon, text, clck }) => (
  <a className="sidebar-icon group" onClick={clck}>
    {icon}

    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </a>
);

export default Sidebar;
