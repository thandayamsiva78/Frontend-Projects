import React from 'react';

const SongPlayer = ({ song, audioPath }) => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-4 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold mb-4">{song}</h3>
      <audio controls className="w-full">
        <source src={audioPath} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default SongPlayer;



