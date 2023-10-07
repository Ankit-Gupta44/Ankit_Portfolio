"use client";
import React, { useEffect, useRef,useState } from "react";
import Skill from "./Skill";
import lottie from "lottie-web";
// import { client } from "../../../developer-portfolio/sanity";
// import { groq } from "next-sanity";

// async function getData(){
//   return client.fetch(groq`*[_type == "skill"]`);
// }

function Skills() {
  const skills = [
    {
      id: "0",
      image:
        "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
      progress: 80,
      type: "React Native",
    },
    {
      id: "0",
      image:
        "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
      progress: 70,
      type: "React",
    },
    {
      id: "0",
      image:
        "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
      progress: 50,
      type: "Javascript",
    },
    {
      id: "0",
      image:
        "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
      progress: 80,
      type: "Tailwind",
    },
    {
      id: "0",
      image:
        "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
      progress: 80,
      type: "Firebase",
    },
    {
      id: "0",
      image:
        "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
      progress: 80,
      type: "HTML",
    },

    {
      id: "0",
      image:
        "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
      progress: 70,
      type: "Java",
    },

    {
      id: "0",
      image:
        "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
      progress: 140,
      type: "C/C++",
    },
    {
      id: "0",
      image:
        "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
      progress: 70,
      type: "Python",
    },
    {
      id: "0",
      image:
        "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
      progress: 160,
      type: "DSA/CP",
    },
  ];
  const container = useRef(null);
  const animationData = require("../../../public/assets/hello.json");
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });
  }, [animationData]);
  const [posts,setPosts] = useState([]);
  // useEffect(() => {
  //   getData()
  //     .then((data) => {
  //       setPosts(data);
  //     })
  //     .catch((error) => {
  //       console.log("error fetching posts", error);
  //     });
  // }, []);
  return (
    <div className="">
      <h3 className="tracking-[20px] text-center uppercase text-gray-500 text-2xl">
        Skills
      </h3>

      <div className="container mx-auto max-w-6xl flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="md:w-1/2 grid grid-cols-3 gap-5">
          {skills?.map((item, index) => (
            <Skill key={index} item={item} />
          ))}
        </div>

        <div className="md:w-1/2 z-auto pt-2 md:mt-0">
          <div className="container" ref={container}></div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
