import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
    </>
  );
}
