import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import ContactD from "@/components/ContactD";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Samanvay - Your Mental Health Partner",
  description:
    "Welcome to our innovative web app designed to empower parents with valuable insights into their child's well-being. Our real-time machine learning model allows you to answer specific questions related to early diagnosable disorders like ADHD, Dyslexia, Autism, and more. By evaluating the results, our app provides a reliable prediction of whether your child may be prone to these disorders. We believe that early intervention is key to a child's development, and our tool is here to assist you in making informed decisions about your child's health and future. Join us in ensuring a brighter, healthier future for your child",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Pricing />
      <ContactD />
      <Features />
      <Video />
      {/* <Brands /> */}
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  );
}
