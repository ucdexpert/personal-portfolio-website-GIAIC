"use client"
import react from "react"
import Link from "next/link"
import Image from "next/image";
import Typewriter from 'typewriter-effect';

import { SiVisualstudiocode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function nav() {
  return (
    <div className="bg-gradient-to-r from-black to-gray-500">
     <header className=" text-gray-400 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
    
        <img className="w-12 h-12 rounded-full" src="images/mypicture.jpg" alt="logo" />

        <span className="ml-3 text-xl">Muhammad Uzair</span>
      </a>
      <nav className="font-medium text-white md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
        <a href="/" className="mr-5 hover:text-blue-300">Home</a>
        <a href="/about" className="mr-5 hover:text-blue-300">About Us</a>
        <a href="/contact" className="mr-5 hover:text-blue-300">Contact Us</a>
        <a href="/privecy" className="mr-5 hover:text-blue-300">Privecy Policy</a>
      </nav>
      <button className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500  text-black font-medium inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Download Resume
      
      </button>
    </div>
  </header>
      <br />

     

   

      <div>
        <section className=" text-gray-400 body-font">
          <div className="container mx-auto flex px-1 py-23 md:flex-row flex-col items-center text-center">

            <h1 className="title-font sm:text-3xl text-3xl mb-4 font-bold font-serif text-white ">
              Master Next.js with Muhammad Uzair For,</h1>
          </div>
          <div className="container mx-auto flex px-4 py-23 md:flex-row flex-col items-center text-center">

            {/* typewriter effect */}

            <h1 className="title-font sm:text-3xl text-3xl mb-4 font-medium text-yellow-300">

              <Typewriter
                options={{
                  strings: ['I m Frontend Developer'],

                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </div>
          <br />
          <div className="w-96 h-96 float-right">
            <img className="rounded-full float-right w-50 h-50 p-12  relative bottom-40 " src=" https://img.freepik.com/premium-photo/cartoon-boy-avatar-anime-style-wallpaper-background-illustration_956664-807.jpg" alt="image" />
          </div>

        </section>



      </div>

      {/* image */}
      <div>
        <h1 className="text-yellow-300 text-3xl pl-12 font-extralight ">
          Passionate about crafting-user friendly web interfaces.
          Over the past<br />
           1.5 years. I have been learning and refining my skills in frontend  technologies
          through various handson projects. I have a <br /> 
          foundational understanding of Al too having <br />completed a basic course in the field.
        </h1>


      </div>


      <section>
        <div className="container px-2 py-2 flex-wrap flex justify-center items-center space-x-4 text-2xl">
          <h1 className="title-font sm:text-3xl text-3xl mb-4 font-medium text-yellow-300">

            <Typewriter
              options={{
                strings: ['Programming Languages'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>



          <div className="flex flex-col items-center bg-white border-2 border-yellow-500 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <FaHtml5 className="text-sky-500 text-6xl" />
            <span className="mt-2 text-lg text-black">HTML</span>
          </div>


          <div className="flex flex-col items-center bg-white border-2 border-yellow-500 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <FaCss3Alt className="text-sky-500 text-6xl" />
            <span className="mt-2 text-lg text-black">CSS </span>
          </div>

          <div className="flex flex-col items-center bg-white border-2 border-yellow-500 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <TbBrandJavascript className="text-yellow-500 text-6xl" />
            <span className="mt-2 text-lg text-black">JAVASCRIPT</span>
          </div>

          <div className="flex flex-col items-center bg-white border-2 border-yellow-500 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <FaPython className="text-sky-500 text-6xl" />
            <span className="mt-2 text-lg text-black">PYTHON </span>
          </div>

          <div className="flex flex-col items-center bg-white border-2 border-yellow-500 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <BiLogoTypescript className="text-yellow-400 text-6xl" />
            <span className="mt-2 text-lg text-black">TYPESCRIPT </span>
          </div>

        </div>
      </section>

      <section>

        <div className="container px-2 py-2 flex-wrap flex justify-center items-center space-x-4 text-2xl">


          <div className="flex flex-col items-center bg-white border-2 border-yellow-500 p-4 transition-transform 
        duration-300 ease-in-out transform hover:scale-110">
            <SiVisualstudiocode className="text-sky-500 text-6xl" />
            <span className="mt-2 text-lg text-black">Visual Studio Code </span>
          </div>


          <div className="flex flex-col items-center bg-white border-2 border-yellow-500 p-4 transition-transform
         duration-300 ease-in-out transform hover:scale-110">
            <FaGithub className="text-black text-6xl" />
            <span className="mt-2 text-lg text-black">Github </span>
          </div>
          <h1 className="title-font sm:text-3xl text-3xl mb-4 font-medium text-yellow-300">

            <Typewriter
              options={{
                strings: ['Development Tools And Frame Works'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>


        </div>
      </section>



      {/* Project */}

      <section className=" text-amber-500   body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className=" sm:text-3xl text-2xl font-bold   title-font text-white mb-4 font-serif hover:text-blue-400  "> My Typescript Project For Quarter 1</h1>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div className="p-2 sm:w-1/2 w-full">
              <div className=" rounded flex p-4 h-full items-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white">Project 1 : Claculator</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className=" rounded flex p-4 h-full items-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"  strokeWidth="2" className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white">Project 2 : Number_Guessing_Game</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className=" rounded flex p-4 h-full items-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"  strokeWidth="2" className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white">Project 3 : Atm</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className=" rounded flex p-4 h-full items-center">
                <svg fill="none"stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"  strokeWidth="2" className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white">Project 4 : Todo List</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className=" rounded flex p-4 h-full items-center">
                <svg fill="none"stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white">Project 5 : Currency Converter</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="rounded flex p-4 h-full items-center">
                <svg fill="none"stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white">Project 6 : Word Counter</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className=" rounded flex p-4 h-full items-center">
                <svg fill="none"stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white">Project 7 : Student Management System</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className=" rounded flex p-4 h-full items-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"  strokeWidth="2" className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white">Project 8 : Advanture Game</span>
              </div>
            </div>
          </div>
          <a href="https://github.com/ucdexpert"><button className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500  flex mx-auto mt-16 text-black bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"> Visit My Github</button></a>
        </div>
      </section>










      {/* gallery  */}


      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-3xl  title-font mb-4 text-white hover:text-blue-400 font-bold font-serif">MY CERTIFICATE</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="images/Uzair-1.jpg" />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">THE SUBTITLE</h2>
                  <p className="leading-relaxed font-medium">
                    I want to extend my heartfelt gratitude for organizing this quiz, which not only tested our knowledge but also encouraged us to learn and grow together. Your efforts to create a engaging and challenging experience for us are truly appreciated!</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="images/Uzair-2.jpg" />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                  <p className="leading-relaxed font-medium">
                    I want to extend my heartfelt gratitude to for organizing this quiz, which not only tested our knowledge but also encouraged us to learn and grow together. Your efforts to create a engaging and challenging experience for us are truly appreciated!</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="images/Uzair-3.jpg" />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                  <p className="leading-relaxed font-medium" >
                    I want to extend my heartfelt gratitude to for organizing this quiz, which not only tested our knowledge but also encouraged us to learn and grow together. Your efforts to create a engaging and challenging experience for us are truly appreciated!</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="images/Uzair-4.jpg" />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                  <p className="leading-relaxed font-medium">
                    I want to extend my heartfelt gratitude to for organizing this quiz, which not only tested our knowledge but also encouraged us to learn and grow together. Your efforts to create a engaging and challenging experience for us are truly appreciated!
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="images/Uzair-5.jpg" />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3"></h1>
                  <p className="leading-relaxed font-medium">
                    I want to extend my heartfelt gratitude to for organizing this quiz, which not only tested our knowledge but also encouraged us to learn and grow together. Your efforts to create a engaging and challenging experience for us are truly appreciated!
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="images/Uzair-6.jpeg" />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3"></h1>
                  <p className="leading-relaxed font-medium">
                    I want to extend my heartfelt gratitude to for organizing this quiz, which not only tested our knowledge but also encouraged us to learn and grow together. Your efforts to create a engaging and challenging experience for us are truly appreciated!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-400 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-bold hover:text-blue-400 text-center title-font text-white mb-4 font-serif">Npm Command In Next.js</h1>
            {/* <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p> */}
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div className="p-2 sm:w-1/2 w-full">
              <div className=" rounded flex p-4 h-full items-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white ">1st Command: npm i typewriter-effect</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className=" rounded flex p-4 h-full items-center">
                <svg fill="none"stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white">2nd Command: npm create-next-app@latest </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className=" rounded flex p-4 h-full items-center">
                <svg fill="none"stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white">3rd Command: cd my-app</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className=" rounded flex p-4 h-full items-center">
                <svg fill="none"stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white">4th Command: npm run dev</span>
              </div>
            </div>

          </div>


        </div>
      </section>



      <section className="text-gray-400 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-bold font-serif title-font mb-4 text-white hover:text-blue-400">My Team</h1>
            {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p> */}
          </div>
          <div className="flex flex-wrap -m-2">
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-white border p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="data:image/png;base64,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" />
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium  hover:text-blue-500">Muhammad Uzair</h2>
                  {/* <p className="text-gray-600">UI Designer</p> */}
                </div>
              </div>
            </div>
           
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-white border p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZwjfZSi63GYorzeBKJTZ63A_BwMjGLPvGk8koQxj1DGq8xzyvdLRzsxxhsPiP-O9HS7M&usqp=CAU" />
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium  hover:text-yellow-400">Hafsa Kamali</h2>
                  {/* <p className="text-gray-600">Founder</p> */}
                </div>
              </div>
            </div>
          
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-white border p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfn2w86j30Syx8Mtah86WgapMDLeVCubwMQBx1GteIlHVXyOu51uj1A3dVx3Tfy7BsE58&usqp=CAU" />
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium  hover:text-blue-500">Muhammad Ibrahim</h2>
                  {/* <p className="text-gray-600">Software Engineer</p> */}
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-white border p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGwhtNErM_i8vS1NJ6njslqU91qgqAjAlbQbPEZusv5zGrz99oV8vloKM-aaKOkK8fwrI&usqp=CAU" />
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium  hover:text-yellow-400">Fiza Sagar</h2>
                  {/* <p className="text-gray-600">UX Researcher</p> */}
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-white border p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="data:image/jpeg;base64,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" />
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium  hover:text-yellow-400">Mrs. Zia</h2>
                  {/* <p className="text-gray-600">QA Engineer</p> */}
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-white border p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzeqnyJukVW_2Ym9KVWtqBy4mHLULwxdnYkYuItraE9OzLhTRrPm22dFCR4tzMEf4JaWc&usqp=CAU" />
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium  hover:text-yellow-400">Areeba Khilji</h2>
                  {/* <p className="text-gray-600">System</p> */}
                </div>
              </div>
            </div>
         
  

          </div>
        </div>
      </section>






      {/* location */}

      <section className="text-gray-600 body-font relative  ">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" scrolling="yes" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                <p className="mt-1"> Muhammad Nagar. Orangi Town No. 10 Karachi</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                <a className="text-indigo-500 leading-relaxed">hk202504@gmail.com</a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                <p className="leading-relaxed">0317-0219387</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0  pl-3 pr-3">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
            <p className="leading-relaxed mb-5 text-gray-600"></p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
              <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
              <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>

            <button className="text-black bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-800 rounded text-lg bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 ">Submit</button>

            <p className="text-xs text-gray-500 mt-3"></p>
          </div>
        </div>
      </section>



      <footer className="text-gray-800 body-font ">
        <div className=" container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-800">
            <img className="w-12 h-12 rounded-full" src="images/mypicture.jpg" alt="logo images" />
            <span className="ml-3 text-2xl font-bold hover:text-blue-700 text-white font-serif">Muhammad Uzair</span>
          </a>
          <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 font-bold hover:text-blue-700">© 2024 Muhammad Uzair
            <a href="twiter" className="text-white ml-1" rel="noopener noreferrer" target="_blank"></a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">

            <div className="flex flex-row space-x-3">

            <div className="flex flex-col items-center bg-gray-800 ">
            <Link href="https://www.facebook.com/uzairkhilji.uzairkhilji"><FaFacebook className="text-white text-2xl"/></Link>
          </div>

          <div className="flex flex-col items-center bg-gray-800 ">
            <Link href="https://www.linkedin.com/in/muhammad-uzair-066733314/"><FaLinkedin className="text-white text-2xl"/></Link>
          </div>

          <div className="flex flex-col items-center bg-gray-800 ">
            <Link href="https://www.instagram.com/uzair.khilji.182/"><FaInstagram className="text-white text-2xl"/></Link>
          </div>
          
          
          <div className="flex flex-col items-center bg-gray-800 ">
            <Link href="https://github.com/ucdexpert"><FaGithub className="text-white text-2xl"/></Link>
          </div>
          



            </div>
          </span>
        </div>
      </footer>

    </div>
  )
}











