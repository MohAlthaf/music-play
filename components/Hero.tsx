import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

const Hero = () => {
  return (
    <div className=" md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="teal"
      />
       

      <div className="p-4 relative z-10 w-full text-center">
        {/* <h1 className="mt-20 md:mt-20 text-4xl md:text-7xl font-bold ">
           Master the Art of Music
        </h1> */}
        <h1 className="mt-20 md:mt-20 text-4xl md:text-7xl font-bold gradient-text">
          Master the Art of Music
        </h1>

        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Dive into our comprehensive music courses and transform your miksical
          journey today. Whether you're a beginner or looking to refine your
          skills, join us to unlock your true potential.
        </p>
        <div className="mt-4">
          <Link href={"/courses"}>
            <Button
              borderRadius="1.75rem"
              className="bg-neutral-200 border-slate-800 dark:bg-black text-black dark:text-white "
            >
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
