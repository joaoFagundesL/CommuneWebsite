import React from "react";

function Main() {
  return(
    <div className="grid gap-4">
      <div className="mt-16 cursor-pointer bg-button rounded-full text-center py-2 px-6">
        <span className="text-firstButtonColor">
          We are now allowing early-access for
          users. <a className="underline font-semibold" href="#">Learn more</a>
        </span>
      </div>
    
      <h1 className="text-4xl leading-normal text-titleColor text-center font-semibold">
        Build a highly engaged community with no effort
      </h1>

      <p className="text-paragraphColor text-center">
        Commune offers the tools you need to build a highly
        engaged community with little to no effort. Simply
        setup your Commune workspace, and manage everything
        from members to content from one central dashboard.
      </p>
    </div>
  );
}

export default Main;