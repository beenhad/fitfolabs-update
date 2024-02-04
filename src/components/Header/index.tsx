import ContactIcon from "@/components/Icons/ContactIcon";
import { cx } from "@/utils";
import TabHeader from "@/views/Home/components/TabHeader";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SiteLogo from "../SiteLogo";

const Header = () => {
  const router = useRouter();
  const [showHeader, setShowHeader] = useState(router.pathname === "/");
  const [isScrollEnd, setIsScrollEnd] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollTop + clientHeight >= scrollHeight - 5) {
        setIsScrollEnd(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let timeout1: any;
    if (router.pathname !== "/") {
      timeout1 = setTimeout(() => {
        setShowHeader(false);
      }, 700);
      return;
    }

    const timeout = setTimeout(() => {
      setShowHeader(true);
    }, 700);

    return () => {
      clearInterval(timeout);
      clearInterval(timeout1);
    };
  }, [router.pathname]);

  if (!showHeader) return null;
  return (
    <div
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      className={cx(
        "animate_fade_up pb-2 md:pb-12 pt-12 px-[3.5vw] flex flex-col md:flex-row md:justify-between gap-y-5 items-center relative"
      )}
    >
      {/** Logo --Start-- */}
      <div className="max-w-[208px]">
        <SiteLogo />
      </div>
      {/** Logo --End-- */}

      <div className="md:absolute top-1/2 md:-translate-y-1/2 left-1/2 md:-translate-x-1/2">
        <TabHeader />
      </div>

      {/* <Link className="__text_sm hidden md:block" href={"https://cal.com/fitfo/15min"}>
        Contact
      </Link> */}

      <motion.div
        className={cx("fixed bottom-5 right-5 z-[100]")}
        initial={false}
        animate={{ opacity: isScrollEnd ? 1 : 0 }}
        whileHover={{ scale: 1.15 }}
      >
        <a
          href="https://cal.com/fitfo/15min"
          target="_blank"
          className="h-14 aspect-square shrink-0 shadow-card-inset bg-dark-100 duration-200 rounded-full flex items-center justify-center"
        >
          <ContactIcon />
        </a>
      </motion.div>
    </div>
  );
};

export default Header;
