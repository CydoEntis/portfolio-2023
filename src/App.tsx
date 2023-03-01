import { useState } from "react";
import { RiMenu5Fill } from "react-icons/ri";
function App() {
  const githubLink = "dasdasd";
  console.log(githubLink);
  return (
    <div className="bg-[#272822] w-full h-screen">
      <div className="w-full flex flex-col justify-between h-screen">
        <div className="flex justify-between items-center p-3 w-full h-12 border-b border-[#75715e] text-[#cfcfc2]">
          <h3>cody-stine</h3>
          <RiMenu5Fill className="text-2xl" />
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center border">
          <div className="p-5 text-white">
            <p className="text-[18px] text-[#f92672]">
              <span className="text-[#66d9ef]">Hi there.</span> I am
            </p>
            <h1 className="text-[72px] leading-none">Cody Stine</h1>
            <h3 className="text-[18px] text-[#a6e22e]">
              &gt; Software Developer
            </h3>
          </div>

          <div className="p-5 mb-24">
            <p className="text-[#75715e]">// Find me on github.</p>
            <p className="text-[#e6db74]">
              <span className="text-[#ae81ff]">const</span>{" "}
              <span className="text-white">githubLink</span>{" "}
              <span className="text-[#f92672]">=</span>{" "}
              "https://github.com/CydoEntis"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
/**
<div className="flex justify-center h-full">
<div className="w-full flex flex-col justify-evenly items-center">
  <div className="flex justify-center items-center">
    <div className=" text-white">
      <p className="text-[1.15rem] text-[#FB8519]">Hey there! I am</p>
      <h1 className="text-white text-[4rem]">Cody Stine</h1>
      <h3 className="text-[#99E124] text-[1.5rem]">
        &gt; Software Developer
      </h3>
    </div>
  </div>
  <div className="flex justify-center items-center bg-[#272822]">
    <div className="border border-[#75715e] p-3 rounded-md">
      <div className="flex justify-between items-center py-3">
        <h3 className="text-[#FB8519]">Blueprint</h3>
        <h3 className="text-[#f92672]">Github</h3>
      </div>
      <div className="w-full rounded-md border border-[#3e3d32]  bg-[#20211c] ">
        <div className="px-5 py-3 text-[#cfcfc2]">
          <p>/**</p>
          <p>* Blueprint</p>
          <p>* Job Application Tracker</p>
          <p>* TypeScript, React, Redux</p>
          <p>* Node Js, Express, MongoDB</p>
          <p>* TailwindCSS, Framer Motion</p>
          <p>*/
/**
          </p>
        </div>
        <button className="text-black py-1 px-5 bg-[#66d9ef] w-full text-left rounded-b-md">
          View Project
        </button>
      </div>
    </div>
  </div>
</div>
</div>
*/
