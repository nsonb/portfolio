import { useState } from 'react';
import { usePoems } from '../../features/usePoems';

const Poetry = () => {
  const poems = usePoems();
  const [currentPoem, setCurrentPoem] = useState(
    poems[Math.floor(Math.random() * poems.length)]
  );

  const getRandomPoem = () => {
    const randomIndex = Math.floor(Math.random() * poems.length);
    setCurrentPoem(poems[randomIndex]);
  };

  return (
    <div className="text-black bg-white h-full p-4 flex flex-col gap-2 justify-center items-start">
      <button
        className="p-2 border border-2 border-black italic mb-4 cursor-pointer"
        onClick={getRandomPoem}
      >
        Get a Different Poem
      </button>
      <div className="max-h-8/10 overflow-y-auto">
        <pre className="whitespace-pre-wrap font-mono text-lg">
          {currentPoem}
        </pre>
      </div>
    </div>
  );
};

export default Poetry;
