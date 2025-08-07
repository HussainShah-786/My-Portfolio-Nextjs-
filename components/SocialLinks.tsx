import { link } from "fs";
import { Facebook, Github, Instagram, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";
import React from "react";

const socialData = [
  {
    title: "Youtube",
    icon: <Youtube width={20} height={20} />,
    link: "https://www.youtube.com/watch?v=JgYHjk8k4W0",
  },
  {
    title: "Github",
    icon: <Github width={20} height={20} />,
    link: "https://github.com/HussainShah-786",
  },
  {
    title: "Linkedin",
    icon: <Linkedin width={20} height={20} />,
    link: "https://www.linkedin.com/in/hussain-shah-2978ab131/",
  },
  {
    title: "Facebook",
    icon: <Facebook width={20} height={20} />,
    link: "https://www.facebook.com/hsyn.abn.hydr.592561",
  },
  {
    title: "instagram",
    icon: <Instagram width={20} height={20} />,
    link: "https://www.instagram.com/hussain_haidery72/",
  },
];

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-3">
      {socialData?.map((item) => (
        <div
          key={item?.title}
          className="text-lightSky/80 border border-lightSky/30 p-2.5 rounded-full hover:bg-lightSky/10 hover:border-lightSky hover:text-lightSky hoverEffect"
        >
          <Link href={item.link} target="blank">
            <span className="">{item?.icon}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SocialLinks;
