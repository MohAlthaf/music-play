import Cardmusic from "@/components/Cardmusic";
import FeaturedCourses from "@/components/FeaturedCourses";
import Hero from "@/components/Hero";
import Instructors from "@/components/Instructors";
import Testimonial from "@/components/Testimonial";
import { Card } from "@/components/ui/card-hover-effect";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <div>
         <Hero/>
         <FeaturedCourses/>
         <WhyChooseUs/>
         <Testimonial/>
         <UpcomingWebinars/>
         <Instructors/>
         {/* <Cardmusic/> */}
      </div>
    </main>
  );
}
