import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import SecondButton from "../components/SecondButton";
import img from '../Assets/Illustration.png'


function Main() {
  return(
    <div className="grid gap-4
    md:px-8 md:gap-7 xl:grid-cols-autoCol xl:mt-16 xl:p-0
    ">  
      <div className="grid gap-6 xl:flex xl:flex-col xl:max-w-4xl">

       <Button className='mt-16 cursor-pointer bg-button rounded-full text-center py-2 px-6
        md:mt-24 xl:mt-12 2xl:mt-24 xl:w-fit xl:flex xl:items-center' content ={
          <span className="text-firstButtonColor ">
          We are now allowing early-access for
          users. <a className="underline font-semibold" href="#">Learn more</a>
        </span>
        }/>
      
        <h1 className="text-4xl leading-normal text-titleColor text-center xl:text-start font-semibold
        md:text-5.5xl md:leading-snug xl:text-5xl xl:leading-normal
        ">
          Build a highly engaged community with no effort
        </h1>

        <p className="text-paragraphColor text-center xl:text-start xl:leading-normal">
          Commune offers the tools you need to build a highly
          engaged community with little to no effort. Simply
          setup your Commune workspace, and manage everything
          from members to content from one central dashboard.
        </p>

        <div className='grid gap-2 mt-4
        md:grid-cols-3 md:px-8 md:mt-12 xl:px-0 xl:mt-0
        xl:max-w-lg
        '>
          <Input />
          <SecondButton className='py-4 bg-button text-white font-semibold rounded-md' text="Join Waitlist" />
        </div>
      </div>

      <div className="hidden xl:block xl:ml-auto">
        <img className="xl:max-w-sm 2xl:max-w-md" src={img} alt="" />
      </div>

    </div>
  );
}

export default Main;