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
            who does not want to live forever?
          </p>
        </div>
      </div>
      <div className="w-3/10 p-8 text-justify border border-white border-2 italic text-sm bg-white text-black">
        <p>
          Roads go ever ever on, Over rock and under tree, By caves where never
          sun has shone, By streams that never find the sea; Over snow by winter
          sown, And through the merry flowers of June, Over grass and over
          stone, And under mountains in the moon. Roads go ever ever on, Under
          cloud and under star. Yet feet that wandering have gone Turn at last
          to home afar. Eyes that fire and sword have seen, And horror in the
          halls of stone Look at last on meadows green, And trees and hills they
          long have known. The Road goes ever on and on Down from the door where
          it began. Now far ahead the Road has gone, And I must follow, if I
          can, Pursuing it with eager feet, Until it joins some larger way,
          Where many paths and errands meet. The Road goes ever on and on Down
          from the door where it began. Now far ahead the Road has gone, And I
          must follow, if I can, Pursuing it with weary feet, Until it joins
          some larger way, Where many paths and errands meet. And whither then?
          I cannot say. The Road goes ever on and on Out from the door where it
          began. Now far ahead the Road has gone. Let others follow, if they
          can! Let them a journey new begin. But I at last with weary feet Will
          turn towards the lighted inn, My evening-rest and sleep to meet.”
          <br />
          <span className="font-bold">
            ― J.R.R. Tolkien, The Lord of the Rings
          </span>
        </p>
      </div>
    </div>
  );
};

export default Profile;
