import Poetry from '../poetry/Poetry';

const Profile = () => {
  return (
    <div className="w-screen h-screen flex flex-row gap-8 font-mono pl-16 border border-8 border-white bg-black text-white leading-tight overflow-hidden">
      <div className="flex flex-col justify-center items-start grow h-full">
        <h1 className="text-[10rem] font-serif font-extralight">my name is</h1>
        <h1 className="text-[10rem] font-sans font-black">SON BUI</h1>
        <div className="flex flex-row gap-4 mt-4">
          <div className="border border-2 border-white p-2">web developer</div>
          <div className="border border-2 border-white p-2">
            game enthusiast
          </div>
        </div>
      </div>
      <div className="flex-grow overflow-auto">
        <Poetry />
      </div>
    </div>
  );
};

export default Profile;
