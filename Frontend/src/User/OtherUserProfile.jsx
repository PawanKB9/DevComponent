import React from "react";

const OtherUserProfile = ({
  userName,
  fullName,
  CollageName,
  profileImg,
  bgImg,
  selfDescription,
}) => {
  return (
    <div id="linkedInProfile" className=" mx-auto p-2 largePhone:p-4 bg-amber-100">
     
        {/* Background Image Section */}
        <div className="largePhone:pr-[5%] tab:pr-[10%] ">
            <div className="relative flex w-full ">
            <img
                src={bgImg}
                loading="lazy"
                alt="Background"
                id="bg-img"
                className={`bg-green-400 h-36 w-full rounded-lg tab:h-44`}
            />
            {/* Profile Image */}
            
                <img
                src={profileImg}
                alt="Profile"
                loading="lazy"
                id="profile-img"
                className={`absolute translate-y-[50%] mx-[10%] bg-rose-400 h-36 w-36 tab:h-44 tab:w-44 rounded-full`}
                />
            
            </div>

            {/* Profile Details */}
            <div className="mt-24 underline">
                <h2 id="" className="text-lg font-semibold">{`Full Name`}</h2>
                <p>{`Collage Name`}</p>
                <p>{`Description...`}</p>
            </div>

        </div>


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
  );
};

export default OtherUserProfile;