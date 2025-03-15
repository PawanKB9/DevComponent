import React from "react";
import { FaPen ,FaCamera } from "react-icons/fa";

const UserProfile = ({
  Name,
  CollageName,
  profileImg,
  bgImg,
  Description, 
}) => {
  return (
    <div id="linkedInProfile_SPand_ST" className="max-w-[900px] p-2 largePhone:p-4 bg-amber-100">
      <div>
        {/* Background Image Section */}
        <div className="relative mx-auto rounded-xl flex flex-col max-w-[850px] h-[calc(15vh+2vw)] tab:h-[calc(17vh+2vw)] transition-all duration-[200ms] transform ">
          <label
            htmlFor="bg-img"
            className="absolute self-end rounded-full p-[6px] bg-white text-center m-2 text-xl largePhone:text-2xl tab:text-3xl laptop:text-4xl"
          >
            <FaCamera/>
          </label>
          <img
            src={bgImg}
            loading="lazy"
            alt="Background"
            id="bg-img"
            className="bg-green-200 w-full rounded-xl h-[calc(15vh+2vw)] tab:h-[calc(17vh+2vw)]"
          />
          {/* Profile Image */}
          <div className="absolute flex flex-col-reverse translate-y-16 translate-x-12">
            <img
              src={profileImg}
              alt="Profile"
              loading="lazy"
              id="profile-img"
              className="bg-red-300 transition-all duration-[200ms] transform rounded-full h-[calc(15vh+2vw)] w-[calc(15vh+2vw)] tab:h-[calc(17vh+2vw)] tab:w-[calc(17vh+2vw)]"
            />
            <label
              htmlFor="profile-img"
              className="absolute self-end -translate-x-1 -translate-y-2 text-lg mobilePhone:text-xl tab:text-2xl"
            >
              <FaCamera/>
            </label>
          </div>
        </div>
        {/* Edit Icon */}
        <div className="flex justify-end m-8">
           <FaPen className="rotate-270" />
        </div>
        {/* Profile Details */}
        <h2 id="nameAndNickName" className="text-lg font-bold">
          {`Full Name`}
        </h2>
        <p>{`Collage Name`}</p>
        <p>{`Description...`}</p>

        


        {/* User Uploads */}
        <div id="userUploads" className="my-6 bg-fuchsia-200 gap-[2px] grid grid-cols-3 largePhone:grid-cols-4">
          {
            <img
              key={`Id`}
              src={`assets/ThreeCats.png`}
              alt="User upload"
              className="h-[30vw] rounded-md largePhone:w-[23vw] largePhone:h-[23vw] max-h-[205px] max-w-[205px] w-[30vw] border-2 border-blue-600 object-cover"
            />
          }
        </div>

      </div>
    </div>
  );
};

export default UserProfile;