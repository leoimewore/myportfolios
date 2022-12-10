import './App.css';
import React from 'react';
import logo from "./images/icon-github.svg"
import logo1 from "./images/icon-twitter.svg"
import logo2 from "./images/icon-linkedin.svg"
import { useState } from 'react';




const api_key=process.env.REACT_APP_YOUR_API_KEY
const base_id=process.env.REACT_APP_AIRTABLE_BASE_ID
const tableName=process.env.REACT_APP_AIRTABLE_TABLE_NAME






function App() {

const [showError, setshowError] = useState(false)


  
const postData=function(e){
  e.preventDefault()
  const info = new FormData(e.target);
 console.log(info)

  const data={
    "fields":{
      "Name": info.get("name"),
      "Message":info.get("message"),
      "Email":info.get("email")
      
}
  }
  let email=info.get("email")
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


  if (email=== "" || email=== null){
   
    setshowError(true)
 }else if (!email.match(emailRegex)) {
  setshowError(true)
 }


  fetch(`https://api.airtable.com/v0/${base_id}/${tableName}`,{
    method:"POST",
    body:JSON.stringify(data),
    headers:{
      "Authorization":`Bearer ${api_key}`,
      "Content-type":'application/json'
    }
  })
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
   
  })
  .catch((error) => {
    console.error('Error:', error);
  });







}



  





  return (
    <main class="h-full scroll-smooth bg-slate-900 text-white flex-col font-Space+Grotesk px-6 lg:px-32 bg-[url('./images/pattern-rings.svg')]
    bg-no-repeat bg-10% bg-top-left">
      <header class="pt-6 flex justify-between">
        <p>leonardisaac</p>
        <section class="flex gap-x-1.5">
          <a href="https://github.com/leoimewore" target="_blank" rel="noreferrer"><img src={logo} alt="github" /></a>
          <a href='https://twitter.com/capino48' target="_blank" rel="noreferrer"><img src={logo1} alt="twitter" /></a>
          <a href="https://linkedin.com/in/leoisaac" target="_blank" rel="noreferrer"><img src={logo2} alt="linkedin" /></a>
        </section>
      </header>
      <section class="flex flex-col-reverse gap-y-8 text-center mt-16 overflow-hidden shadow-md md:max-w-full md:flex-row md:text-left items-center md:items-start">
        <div class="flex flex-col justify-between w-5/6">
          <h1 class="text-5xl lg:text-7xl font-bold tracking-tighter mb-8 z-40">Nice to meet you! I'm Leonard Isaac.</h1>

          <p className="font-bold mb-1 text-xs mb-32 max-w-sm text-smoky-white pa">
            Based in Indianapolis, I'm a front-end engineer passionate about
            building accessible web apps that users love.
          </p>

          <a class="font-bold  uppercase decoration-[#50d71e] tracking-widest text-sm underline-offset-4 underline cursor-pointer" href="#contacts" rel="noreferrer">CONTACT ME</a>
        </div>

        <div class="w-3/4 flex ml-auto mr-auto">
          <img src={require("./images/leonard.webp")} alt="leonardisaac" class="max-w-full h-full rounded-lg self-center" />
        </div>

      </section>

      <section class="flex w-full mt-16 border-t-2">
        <section class="flex w-full flex-wrap justify-between items-center content-between gap-y-10 pt-7">
          <div class="sm:w-1/2 w-full md:w-1/3 text-center md:text-left">
            <p class="text-3xl">HTML</p>
            <span class="text-xs text-smoky-white">4 Years Experience</span>
          </div>

          <div class="sm:w-1/2 w-full md:w-1/3 text-center md:text-left">
            <p class="text-3xl ">CSS</p>
            <span class="text-xs text-smoky-white">4 Years Experience</span>
          </div>

          <div class="sm:w-1/2 w-full md:w-1/3 text-center md:text-left">
            <p class="text-3xl">JavaScript</p>
            <span class="text-xs text-smoky-white">4 Years Experience</span>
          </div>

          <div class="sm:w-1/2 w-full md:w-1/3 text-center md:text-left">
            <p class="text-3xl">Accessibility</p>
            <span class="text-xs text-smoky-white">4 Years Experience</span>
          </div>

          <div class="sm:w-1/2 w-full md:w-1/3 text-center md:text-left">
            <p class="text-3xl">React</p>
            <span class="text-xs text-smoky-white">3 Years Experience</span>
          </div>

          <div class="sm:w-1/2 w-full md:w-1/3 text-center md:text-left">
            <p class="text-3xl"> Tailwind</p>
            <span class="text-xs text-smoky-white">3 Years Experience</span>
          </div>
        </section>
      </section>
      <section class="flex-col w-full mt-16">

        <div class="flex flex-col justify-between my-6 md:flex-row">
          <h2 class="text-4xl text-center font-bold md:text-left mb-3"> Projects</h2>
          <a class="self-center font-bold uppercase decoration-[#50d71e] tracking-widest text-sm underline-offset-8 underline cursor-pointer" href="#contacts">Contact me</a>

        </div>

        <section class="flex w-full flex-wrap justify-between md:flex-wrap gap-x-0.5 gap-y-10">


          <section class="flex flex-col w-full md:w-45">
            <article class="w-full relative">
              <div class="flex flex-col w-full">
                <img src={require("./images/WeatherApp.jpg")} alt="project1" class="w-full h-full" />
              </div>

            <div class="absolute bottom-0 left-0 right-0 top-0 text-center text-xl text-white bg-light-gray opacity-0 hover:opacity-100">
                <div class="flex flex-col h-full justify-center gap-y-3">
                  <a href="https://leoimewore.github.io/weatherApp/" target="_blank" rel="noreferrer" class="uppercase font-bold  uppercase decoration-[#50d71e] tracking-widest text-xl underline-offset-4 underline cursor-pointer">View project</a>
                  <a href="https://github.com/leoimewore/weatherApp" target="_blank"  rel="noreferrer" class="font-bold  uppercase decoration-[#50d71e] tracking-widest text-xl underline-offset-4 underline cursor-pointer">View code</a>
                </div>
              </div>
            </article>
            <div>
              <h3 class="uppercase text-base font-bold mt-4">Weather App</h3>
              <span class="mt-3.5 text-smoky-white uppercase text-xs">HTML  CSS  JavaScript</span>
            </div>
          </section>


          <section class="flex flex-col w-full md:w-45" >
            <article class="w-full relative">
              <div class="flex flex-col w-full">
                <img src={require("./images/thumbnail-project-3-large.webp")} alt="project1" class="w-full h-full" />
              </div>

             <div class="absolute bottom-0 left-0 right-0 top-0 text-center text-xl text-white bg-light-gray opacity-0 hover:opacity-100">
                <div class="flex flex-col h-full justify-center gap-y-3">
                  <a href="https://leoimewore.github.io/Todolist-App/" target="_blank" rel="noreferrer" class="uppercase font-bold  uppercase decoration-[#50d71e] tracking-widest text-xl underline-offset-4 underline cursor-pointer">View project</a>
                  <a href="https://github.com/leoimewore/Todolist-App" target="_blank"  rel="noreferrer" class="font-bold  uppercase decoration-[#50d71e] tracking-widest text-xl underline-offset-4 underline cursor-pointer">View code</a>
                </div>
              </div>
            </article>
            <div>
              <h3 class="uppercase text-lg font-bold mt-4">Todolist App</h3>
              <span class="mt-3.5 text-smoky-white uppercase text-xs">HTML  CSS  React</span>
            </div>
          </section>

          <section class="flex flex-col w-full md:w-45">
            <article class="w-full relative">
              <div class="flex flex-col w-full">
                <img src={require("./images/jobsearch.jpg")} alt="project1" class="w-full h-full" />
              </div>

              <div class="absolute bottom-0 left-0 right-0 top-0 text-center text-xl text-white bg-light-gray opacity-0 hover:opacity-100">
                <div class="flex flex-col h-full justify-center gap-y-3">
                  <a href="https://github.com/leoimewore/job_search" class="uppercase font-bold  uppercase decoration-[#50d71e] tracking-widest text-xl underline-offset-4 underline cursor-pointer">View project</a>
                  <a href="https://leoimewore.github.io/job_search/" class="font-bold  uppercase decoration-[#50d71e] tracking-widest text-xl underline-offset-4 underline cursor-pointer">View code</a>
                </div>
              </div>
            </article>
            <div>
              <h3 class="uppercase text-lg font-bold mt-4">Job-Search App</h3>
              <span class="mt-3.5 text-smoky-white uppercase text-xs">HTML  CSS  React</span>
            </div>
          </section>

          <section class="flex flex-col w-full md:w-45">
            <article class="w-full relative">
              <div class="flex flex-col w-full">
                <img src={require("./images/blank.jpg")} alt="project1" class="w-full h-full" />
              </div>

              <div class="absolute bottom-0 left-0 right-0 top-0 text-center text-xl text-white bg-light-gray opacity-0 hover:opacity-100">
                <div class="flex flex-col h-full justify-center gap-y-3">
                  <a href="" class="uppercase font-bold  uppercase decoration-[#50d71e] tracking-widest text-xl underline-offset-4 underline cursor-pointer">View project</a>
                  <a href="" class="font-bold  uppercase decoration-[#50d71e] tracking-widest text-xl underline-offset-4 underline cursor-pointer">View code</a>
                </div>
              </div>
            </article>
            <div>
              <h3 class="uppercase text-lg font-bold mt-4">BLANK</h3>
              <span class="mt-3.5 text-smoky-white uppercase text-xs">HTML  CSS  JavaScript</span>
            </div>
          </section>
        </section>
      </section>


      <section class="flex flex-col text-center justify-between mt-20 bg-slate-900 md:text-left" id="contacts">

       <section class=" flex flex-col justify-between md:flex-row">
          <section class="flex flex-col ">
            <h2 class="text-5xl lg:text-7xl font-bold tracking-tighter mb-8 z-40"> Contact</h2>
            <p class="font-bold mb-1 text-xs mb-32 max-w-sm text-smoky-white pa">
              I would love to hear about your project and how I could help. Please
              fill in the form, and I’ll get back to you as soon as possible.
            </p>
          </section>
          <form class="flex flex-col bg-slate-900" onSubmit={postData}>
  
            <input type="text" name="name"  maxLength="30" placeholder="NAME" class="bg-slate-900 text-xs p-4 font-light outline-0 border-b"
/>
            <input type="text" name="email"   maxLength="30" placeholder="EMAIL" class="bg-slate-900 text-xs p-4 outline-0 border-b"/>
           { showError&&<div class="text-xs mt-1 text-right text-rose-900">Sorry invalid format</div>}
            <textarea name="message" placeholder="MESSAGE"  cols="45" rows="5" class="bg-slate-900 text-xs p-4 outline-0 border-b"></textarea>
  
            <button class="mt-4 text-right font-bold  uppercase decoration-[#50d71e] tracking-widest text-sm underline-offset-4 underline cursor-pointer">Send Message</button>
  
          </form>
       </section>


        <footer class="pt-6 flex justify-between border-t-2 mt-16 mb-16">
        <p>leonardisaac</p>
        <section class="flex gap-x-1.5">
          <a href="https://github.com/leoimewore" target="_blank" rel="noreferrer"><img src={logo} alt="github" /></a>
          <a href='https://twitter.com/capino48' target="_blank" rel="noreferrer"><img src={logo1} alt="twitter" /></a>
          <a href="https://linkedin.com/in/leoisaac" target="_blank" rel="noreferrer"><img src={logo2} alt="linkedin" /></a>
        </section>
      </footer>

      </section>






      
    </main>


  );
}

export default App;
