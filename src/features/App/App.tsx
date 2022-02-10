import React from "react";
import { Footer } from "../Footer/Footer";
import { Landing } from "../Landing/Landing";
import { Navigation } from "../Navigation/Navigation";

const About = () => <section></section>;
const Pricing = () => <section></section>;
const Reviews = () => <section></section>;
const WriteReview = () => <section></section>;
const Gallery = () => <section></section>;

export const App = () => (
  <>
    <Navigation />
    <Landing />
    <About />
    <Pricing />
    <Reviews />
    <WriteReview />
    <Gallery />
    <Footer />
  </>
);
