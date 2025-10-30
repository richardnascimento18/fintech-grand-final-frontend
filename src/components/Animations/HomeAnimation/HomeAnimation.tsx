"use client";

import Lottie from "lottie-react";
import animationData from "../../../../public/homepage-animation.json";


export function HomeAnimation() {
  return <Lottie animationData={animationData} loop autoPlay className="w-full" width={1000} height={1000} />;
}
