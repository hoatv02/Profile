import React from "react";

const About = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white" name='about'>
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4">About</p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero at
          quia, eum rerum repudiandae neque? Velit placeat unde, perferendis
          laborum saepe dolorum repudiandae harum minus, dignissimos enim,
          doloremque quod maxime.
        </p>
        <br></br> 
        <p className='text-xl'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam neque
          nihil assumenda asperiores pariatur quisquam perferendis impedit qui
          consequuntur quidem esse fuga laboriosam rerum labore, quod cumque
          fugit commodi eum.
        </p>
      </div>
    </div>
  );
};

export default About;
