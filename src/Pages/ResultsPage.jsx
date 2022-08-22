import React from "react";
import Layout from "../Components/Layout/Layout";
import ProfileCard from "../Components/ProfileCard/ProfileCard";
import lizard from "../../src/Assets/images/lizard.jpeg";

const ResultsPage = () => {
  return (
    <Layout>
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <a
        href="#"
        class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          class="object-cover w-full h-100 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={lizard}
          alt=""
        ></img>
        <div
          class="flex flex-col justify-between
 p-4 leading-normal text-left"
        >
          <h5 class="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white underline">
            Adam Jones
          </h5>
          <h3 class="mb-1 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Developer
          </h3>
          <div class="flex flex-row mb-2">
            <div class="text-gray-900 dark:text-white mb-2">
              <p>Tech Stack</p>
              <ul class="list-disc">
                <li>Python</li>
                <li>JavaScript</li>
                <li>Angular</li>
              </ul>
            </div>
            <div class="text-gray-900 dark:text-white mb-2">
              <p>Industry</p>
              <ul class="list-disc mb-2">
                <li>Healthcare</li>
                <li>Nuclear</li>
                <li>Public Sector</li>
              </ul>
            </div>
          </div>
        </div>
      </a>
    </Layout>
  );
};

export default ResultsPage;
