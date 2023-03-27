import React,{useEffect} from 'react';
import Contact from '../components/Homepage/Contact/Contact';
import Me from '../components/Homepage/Body/Me';
import Hero from '../components/Homepage/Hero/Hero';
import AOS from "aos";
import "aos/dist/aos.css";
import MySkills from '../components/Homepage/MySkills/MySkills';
import MyProject from '../components/Homepage/ProjectComponent/MyProject';
import Blogs from '../components/Homepage/WebBlogs/Blogs';

const Homepage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
 
  return (
    <div>
        <Hero/>
        <Blogs/>
        <Me/>
        <MySkills/>
        <MyProject/>
        <Contact/>
    </div>
  )
}

export default Homepage