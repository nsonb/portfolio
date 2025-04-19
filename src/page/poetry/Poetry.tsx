const Poetry = () => {
  return (
    <div className="text-black bg-white h-full p-4 flex flex-col gap-2 justify-center items-start">
      <p className="p-2 border border-2 border-black italic">
        "who does not want to live forever?"
      </p>
      <pre className="whitespace-pre-wrap font-mono text-lg">
        {`Who does not want to live forever
Cities of cinder, torn asunder
Gone, the world I remember
Dark, splintered, only past glimmer

Reminiscence—missed dinners with lovers
Warm embraces, touches of tender
Your sights, your smiles, my solemn respite
Shadows and echoes, lost, endless crevice

Only fools seek to live forever
Each wish ungranted, all prayers denied 
Is there light? Where withered desires
Still, storms cease, ere the sun rises

From ember arise flames anew
Sparks of thought, stitched unto view
Ruins break, boughs stretch through slumber
Be assured, like green blooms, we endure`}
      </pre>
    </div>
  );
};

export default Poetry;
