import React from "react";
import { Footer } from "../Footer/Footer";
import { Hero } from "../Hero/Hero";
import { Navigation } from "../Navigation/Navigation";

const About = () => <section></section>;
const Pricing = () => <section></section>;
const Reviews = () => <section></section>;
const WriteReview = () => <section></section>;
const Gallery = () => <section></section>;

export const App = () => (
  <>
    <Navigation />
    <Hero />
    <About />
    <Pricing />
    <Reviews />
    <WriteReview />
    <Gallery />
    <Footer />
  </>
);
