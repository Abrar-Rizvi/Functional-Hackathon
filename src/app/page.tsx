"use client"
import Hero from "@/components/Hero";
import Feature from "@/components/Feature";
import FeaturePeoducts from "@/components/FeaturePeoducts";
import Follow from "@/components/Follow";
import Booking from "@/components/Booking";
import Blogs from "@/components/Blogs";
import { Suspense } from "react";


export default function Home() {

  return (
    <>
      <Suspense fallback={<div>hello</div>}>
        <Hero />
      </Suspense>

      <Suspense fallback={<div>loading...</div>}>
        <Feature />
      </Suspense>

      <Suspense fallback={<div>loading...</div>}>
        <FeaturePeoducts />
      </Suspense>

      <Suspense fallback={<div>loading...</div>}>
        <Booking />
      </Suspense>

      <Suspense fallback={<div>loading...</div>}>
        <Blogs />
      </Suspense>

      <Suspense fallback={<div>loading...</div>}>
        <Follow />
      </ Suspense>
    </>
  );
}
