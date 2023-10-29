import { useInView, motion } from "framer-motion";
import React from "react";

const PagersText = ({ inView, text, mColor, dColor }) => {
  return (
    <div className="relative flex  items-center justify-center py-4">
      <div className="pagers  text-2xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white ">
        {text == "objective" && (
          <>
            <span className="z-20 relative" style={{ color: mColor }}>
              Ou
            </span>
            <span className="z-0 relative" style={{ color: dColor }}>
              r
            </span>
            <span className="z-20  relative" style={{ color: mColor }}>
              {" "}
              Ob
            </span>
            <span className="z-20 relative" style={{ color: mColor }}>
              je
            </span>
            <span className="z-0 relative" style={{ color: dColor }}>
              cti
            </span>
            <span className="z-20 relative" style={{ color: mColor }}>
              ve
            </span>
          </>
        )}
        {text == "whoweare" && (
          <>
            <span className="z-20 relative" style={{ color: mColor }}>
              Wh
            </span>
            <span className="z-0 relative" style={{ color: dColor }}>
              o
            </span>
            <span className="z-20  relative" style={{ color: mColor }}>
              {" "}
              we{" "}
            </span>
            <span className="z-20 relative" style={{ color: mColor }}>
              a
            </span>
            <span className="z-0 relative" style={{ color: dColor }}>
              r
            </span>
            <span className="z-20 relative" style={{ color: mColor }}>
              e
            </span>
          </>
        )}
        {text == "sportevent" && (
          <>
            <span className="z-20 relative" style={{ color: mColor }}>
              Sp
            </span>
            <span className="z-0 relative" style={{ color: dColor }}>
              o
            </span>
            <span className="z-20  relative" style={{ color: mColor }}>
              rt
            </span>
            <span className="z-20 relative" style={{ color: mColor }}>
              {" "}
              E
            </span>
            <span className="z-0 relative" style={{ color: dColor }}>
              ve
            </span>
            <span className="z-20 relative" style={{ color: mColor }}>
              nt
            </span>
            <span className="z-0 relative" style={{ color: dColor }}>
              s
            </span>
          </>
        )}
        {text == "cricket" && (
          <>
            <span className="z-20 relative" style={{ color: mColor }}>
              Cr
            </span>
            <span className="z-0 relative" style={{ color: dColor }}>
              i
            </span>
            <span className="z-20  relative" style={{ color: mColor }}>
              ck
            </span>
            <span className="z-20 relative" style={{ color: mColor }}>
              et
            </span>
          </>
        )}
        {text == "ringfootball" && (
          <>
            <span className="z-20 relative" style={{ color: mColor }}>
              Ri
            </span>
            <span className="z-0 relative" style={{ color: dColor }}>
              n
            </span>
            <span className="z-20 relative" style={{ color: mColor }}>
              g Fo
            </span>
            <span className="z-0 relative" style={{ color: dColor }}>
              ot
            </span>
            <span className="z-20  relative" style={{ color: mColor }}>
              ba
            </span>
            <span className="z-20 relative" style={{ color: mColor }}>
              ll
            </span>
          </>
        )}
        {text == "tugofwar" && (
          <>
            <span className="z-20 relative" style={{ color: mColor }}>
              Tu
            </span>
            <span className="z-0 relative" style={{ color: dColor }}>
              g O
            </span>
            <span className="z-20 relative" style={{ color: mColor }}>
              f W
            </span>
            <span className="z-0 relative" style={{ color: dColor }}>
              a
            </span>
            <span className="z-20 relative" style={{ color: mColor }}>
              r
            </span>
          </>
        )}
        {text == "dodgeball" && (
          <>
            <span className="z-20 relative" style={{ color: mColor }}>
              Do
            </span>
            <span className="z-0 relative" style={{ color: dColor }}>
              dg
            </span>
            <span className="z-20 relative" style={{ color: mColor }}>
              e Ba
            </span>
            <span className="z-0 relative" style={{ color: dColor }}>
              l
            </span>
            <span className="z-20 relative" style={{ color: mColor }}>
              l
            </span>
          </>
        )}
        {text == "goaloflag" && (
          <>
            <span className="z-20 relative" style={{ color: mColor }}>
              Go
            </span>
            <span className="z-0 relative" style={{ color: dColor }}>
              a
            </span>
            <span className="z-20 relative" style={{ color: mColor }}>
              l O F
            </span>
            <span className="z-0 relative" style={{ color: dColor }}>
              l
            </span>
            <span className="z-20 relative" style={{ color: mColor }}>
              ag
            </span>
          </>
        )}
        {text == "getintouchwithus" && (
          <>
            <span className="z-20 relative" style={{ color: mColor }}>
              Ge
            </span>
            <span className="z-0 relative" style={{ color: dColor }}>
              t I
            </span>
            <span className="z-20 relative" style={{ color: mColor }}>
              n T
            </span>
            <span className="z-0 relative" style={{ color: dColor }}>
              ou
            </span>
            <span className="z-20 relative" style={{ color: mColor }}>
              ch w
            </span>
            <span className="z-20 relative" style={{ color: mColor }}>
              it
            </span>
            <span className="z-0 relative" style={{ color: dColor }}>
              h U
            </span>
            <span className="z-20 relative" style={{ color: mColor }}>
              s !
            </span>
          </>
        )}
      </div>
      <motion.div
        animate={{
          width: inView ? "70%" : "0%",
          transition: {
            type: "tween",
            delay: 0.2,
            duration: 1,
            ease: "circOut",
          },
        }}
        className=" absolute z-10 flex-1 h-[2px] m-auto  bg-black "
      ></motion.div>
    </div>
  );
};

export default PagersText;
