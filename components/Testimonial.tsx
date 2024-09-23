"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const Testimonial = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-[40rem] overflow-hidden bg-white dark:bg-black rounded-md">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 bg-white dark:bg-black dark:bg-grid-white/[0.05] bg-grid-black/[0.05]"></div>

      <h2 className="z-10 mb-8 text-3xl font-bold text-center">
        Hear our Harmony: Voices of Success
      </h2>

      <div
        className="relative z-10 flex  justify-center w-full px-4 overflow-hidden sm:px-6 lg:px-8"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%)",
        }}
      >
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
        </div>
      </div>

      <div className="relative flex items-center justify-center w-full dark:bg-black bg-white z-0">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
    </div>
  );
};

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

export default Testimonial;
