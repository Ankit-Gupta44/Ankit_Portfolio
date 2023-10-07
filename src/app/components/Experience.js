"use client";
// import { groq } from "next-sanity";
import React, { useState, useEffect } from "react";
// import { client } from "../../../developer-portfolio/sanity";

// async function getData() {
//   return client.fetch(groq`*[_type == "experience"]`);
// }

function Experience() {
  const cardsData = [
    {
      name: "ConnectVerse",
      image:
        "https://icon-library.com/images/chat-app-icon/chat-app-icon-24.jpg",
      title: "Frontend Developer at Chance",
      description: [
        "Developed a real-time chat application using the MongoDB, Express.js, React-native, and Node.js with a focus on user-friendly features(UI/UX) and security and login/signup with MongoDb database",
        "The application enables users to send follow requests, accept or decline requests, engage in text conversations with emojis support, exchange photos, set profile pictures, and can delete selected messages for both users",
        // "Embark on your coding expedition, where the community supports your growth",
        " Leveraged Native camera functionality to enable users to capture and set their profile pictures, and can share to friends",
      ],
    },
    {
      name: "WashWise",
      image:
        "https://s3.amazonaws.com/ionic-marketplace/laundry-app-template-app/icon.png",
      description: [
        "A Laundary App Secure with Firebase Authentication: This app ensures a safe and encrypted login process,keeping your personal details protected",
        "Schedule your laundry pick-up and delivery at your convenience. Set the date and time that works for you",
        // "Embark on your coding expedition, where the community supports your growth",
        "Our intuitive cart feature allows you to view the total cost and items in your order, making the entire process smooth and transparent with clean UI/UX",
      ],
    },
    {
      name: "Threads App",
      image:
        "https://seeklogo.com/images/T/threads-by-instagram-logo-20008C5295-seeklogo.com.png?v=638252100920000000",
      description: [
        "I have created a Twitter thread app clone using React Native with MongoDB and Express as the backend. This app allows users to post tweets using their handles and offers options for commenting and liking posts",
        "The application enables users to send follow requests, accept or decline requests",
        "It is a user-friendly app that features login and signup functionality, along with an aesthetically pleasing user profile page",
        // "Embrace the power of adaptability and uniformity, leaving a trail of code",
      ],
    },
  ];
  // const [posts, setPosts] = useState([]);
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
    <>
      <h3 className="tracking-[20px] mx-auto text-center mb-10 uppercase text-gray-400 text-2xl">
        Projects
      </h3>

      <div className="max-w-6xl mx-auto px-8 lg:px-0 grid grid-cols-1 lg:grid-cols-3 mt-8 mb-20">
        {cardsData?.map((item, index) => (
          <div
            className="bg-slate-400 p-6 rounded-lg shadow-md mx-4"
            key={index}
          >
            <div className="flex items-center justify-center">
              <img
                className="rounded-full w-32 h-32 mx-auto md:mx-0 object-contain"
                src={item?.image}
              />
            </div>
            <h4 className="text-xl text-white font-bold mb-2 mt-4">
              {item?.name}
            </h4>
            <ul className="text-x text-white font-light text-left list-disc">
              {item?.description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export default Experience;
