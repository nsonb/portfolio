import React from 'react';

const Profile = () => {
  return (
    <div className="w-screen h-screen flex flex-row gap-8 font-mono pl-16 border border-8 border-white bg-black text-white leading-tight">
      <div className="flex flex-col justify-center items-start grow h-screen">
        <h1 className="text-[10rem] font-serif font-extralight">my name is</h1>
        <h1 className="text-[10rem] font-sans font-black">SON BUI</h1>
        <div className="flex flex-row gap-4 mt-4">
          <div className="border border-2 border-white p-2">web developer</div>
          <div className="border border-2 border-white p-2">
            game enthusiast
          </div>
          <p className="py-2 border border-2 border-black italic">
            "who does not want to live forever?"
          </p>
        </div>
      </div>
      <div className="w-3/10 p-8 text-justify border border-white border-2 italic text-sm bg-white text-black">
        <h2 className="text-2xl font-bold mb-4">The Road Goes Ever On</h2>
        <p>The Road goes ever on and on</p>
        <p>Down from the door where it began.</p>
        <p>Now far ahead the Road has gone,</p>
        <p>And I must follow, if I can,</p>
        <p>Pursuing it with eager feet,</p>
        <p>Until it joins some larger way,</p>
        <p>Where many paths and errands meet.</p>

        <br />

        <p>The Road goes ever on and on</p>
        <p>Down from the door where it began.</p>
        <p>Now far ahead the Road has gone,</p>
        <p>And I must follow, if I can,</p>
        <p>Pursuing it with weary feet,</p>
        <p>Until it joins some larger way,</p>
        <p>Where many paths and errands meet.</p>

        <br />

        <p>And whither then? I cannot say.</p>
        <p>The Road goes ever on and on</p>
        <p>Out from the door where it began.</p>
        <p>Now far ahead the Road has gone.</p>
        <p>Let others follow, if they can!</p>
        <p>Let them a journey new begin.</p>
        <p>But I at last with weary feet</p>
        <p>Will turn towards the lighted inn,</p>
        <p>My evening-rest and sleep to meet.</p>
        <span className="font-bold">
          ― J.R.R. Tolkien, The Lord of the Rings
        </span>
      </div>
    </div>
  );
};

export default Profile;
