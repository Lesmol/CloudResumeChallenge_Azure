import React from "react";

import userImage from "../../assets/Image/me_2.png";
import linkedIn from "../../assets/Image/LinkedIn.png";
import github from "../../assets/Image/Github.png";
import lineChart from "../../assets/Image/LineChart.png";

function UserSummary() {
  return (
    <>
      <div>
        <div className="flex mt-12 justify-center">
          <div>
            <img
              className="w-[70px] rounded-full"
              src={userImage}
              alt="An image of Lesedi Molemi"
            />
          </div>
          <div className="ml-2">
            <div className="text-4xl">Lesedi Molemi</div>
            <div className="text-sm text-primary">
              I design and write the code.
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <a
            href="https://www.linkedin.com/in/lesedi-molemi-b589751a6/"
            target="_blank"
          >
            <img src={linkedIn} alt="LinkedIn Logo" />
          </a>
          <a href="https://github.com/Lesmol" target="_blank">
            <img src={github} alt="Github Logo" className="ml-8" />
          </a>
        </div>
      </div>
    </>
  );
}

export default UserSummary;
