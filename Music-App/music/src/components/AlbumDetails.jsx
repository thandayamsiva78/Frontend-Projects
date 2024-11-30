import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import "../App.css";
import SongPlayer from './SongPlayer';


const albumData = {
  1: {
    name: 'Das Ka Dhamki',
    album: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRWxpDUKRFrf9gRgx7kis3wl8-AK8fhnFv7ulYl3pPFNc9AjLmFkT0un7-TNSlvk2xxir-w",
    songName: ['Almost Padipoyinde Pilla', 'Mawa Bro', 'O Dollar Pilla'],
    audioPath: [
      "/songs/das-ka-dhamki/AlmostPadipoyindePilla.mp3",
      "/songs/das-ka-dhamki/MawaBro.mp3",
      "/songs/das-ka-dhamki/ODollarPilla.mp3"
    ],
    artists: ["2023 -", "Leon James", "Ram Miriyala"]

  },
  2: {
    name: 'Amaran',
    album: "https://assetscdn1.paytm.com/images/cinema/Amaran-608x800-3b60ca10-4594-11ef-83ec-5d141d381675.jpg",
    songName: ['Hey Rangule', 'Azadi'],
    audioPath: ["/songs/amaran/HeyRangule.mp3", "/songs/amaran/Azadi.mp3"],
    artists: ["2024", "Harris Jayaraj", "Chinmayi", "Karthik"]
  },
  3: {
    name: 'Salaar',
    album: "https://www.businessoftollywood.com/wp-content/uploads/2023/12/Prabhas-salaar-1.jpg",
    songName: ["Vinaraa", "Sound Of Salaar"],
    audioPath: ["/songs/salaar/Vinaraa.mp3", "/songs/salaar/Sound of Salaar.mp3"],
    artists: ["2023 -", "Ravi Basrur"]
  },
  4: {
    name: 'Radheshyam',
    album: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzoXBdkaOx_ND1yIgVLRBJgKB_0poGk5ag5A&s",
    songName: ["Ee Raathale", "Sanchari", "Ninnele", "Sundhra Vadhana"],
    audioPath: [
      "/songs/radheshyam/Ee Raathale.mp3",
      "/songs/radheshyam/Sanchari.mp3",
      "/songs/radheshyam/Ninnele.mp3",
      "/songs/radheshyam/Sundhara Vadhana.mp3"
    ],
    artists: ["2022 -", "Radha Krishna ", " S. Thaman"]
  },
  5: {
    name: 'Gangs of Godavari',
    album: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS9D16vRRqih8UjvXQ2CluwnH_YGeaqFSRWbTJ1tftQXBO5O8K8IMUvNht9xkMILm26bhwGqL1Uk8_meMsdRWylHjGuLGpIgQCsuIT8XAk",
    songName: ['Suttamla Soosi'],
    audioPath: ["/songs/gangsOfGodavari/SuttamlaSoosi.mp3"],
    artists: ["2021", "Arvind Krishna", "Devi Sri Prasad"]
  },
  6: {
    name: 'RRR',
    album: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ_gA25hvAzvrTHQaotqRuOVJqQbWScm5Ig5dF4ctHmnF5bUjPpUFqKTHZRqrm8CwG-98ILbA",
    songName: ['Naatu Naatu', 'Dosti'],
    audioPath: ["/songs/rrr/Nattu Nattu.mp3", "/songs/rrr/Dosti.mp3"]
  },
  7: {
    name: 'Pushpa: The Rise',
    album: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS3I84wCRTf0lEnJBcXKdTnHGsKUUtptPZOKjar3x9F97SbbdInBh6oQ6j9eFo6c361C5iM",
    songName: ['Srivalli', 'Oo Antava Oo Oo Antava', 'Saami Saami'],
    audioPath: ["/songs/pushpaTheRule/Srivalli.mp3", "/songs/pushpaTheRule/Oo Antava Oo Oo Antava,mp3", "/songs/pushpaTheRule/Saami Saami.mp3"]
  },
  8: {
    name: 'Baahubali 2: The Conclusion',
    album: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSwAZddfdsmgj84MRQyRDfNxl-swkZRxt2IQX3gnLkzHl3EEzyD3dduWibKdNCCqOTyaL3WIw",
    songName: ['Hamsa Naava', 'Dandaalayyaa', 'Saahore Baahubali'],
    audioPath: ["/songs/bahubal2TheConclusion/Hamsa Naava-SenSongsMp3.Co.mp3", "/songs/bahubal2TheConclusion/Dandaalayyaa-SenSongsMp3.Co.mp3", "/songs/bahubal2TheConclusion/Saahore Baahubali-SenSongsMp3.Co.mp3"],
    artists: ["2017 - SS Rajamouli , M.M Keeravani"]
  },
  9: {
    name: 'Ala Vaikunthapurramuloo',
    album: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNbcbDm_BFh4LXRPu8WTJjedhXgcDTV34g2f6ZtZDRErslORaHIS4o6qE6JmiWCNIdj4Grbg",
    songName: ['Samajavaragamana', "OMG Daddy", 'Butta Bomma', 'Ramuloo Ramulaa', "Sittharala Siripadu"],
    audioPath: ["/songs/ala vaikuntapuramlo/", "/songs/ala vaikuntapuramlo/OMG Daddy - SenSongsMp3.Co.mp3", "/songs/ala vaikuntapuramlo/Buttabomma - SenSongsMp3.Co.mp3", "/songs/ala vaikuntapuramlo/Ramuloo Ramula - SenSongsMp3.Co.mp3", "/songs/ala vaikuntapuramlo/Sittharala Sirapadu - SenSongsMp3.Co.mp3"]
  },
  10: {
    name: 'Arjun Reddy',
    album: "https://m.media-amazon.com/images/S/pv-target-images/79a8a69e853daef866c405bcf2b1253df311463f1bd246cafccda81f173d8fba.jpg",
    songName: ['Emitemito', 'Madhuram', 'Gundelonaa', 'Telisiney Na Nuvvey'],
    audioPath: ["/songs/arjun reddy/Emitemitemo - SenSongsMp3.Co.mp3",
      "/songs/arjun reddy/Madhurame - SenSongsMp3.Co.mp3",
      "/songs/arjun reddy/Gundelonaa - SenSongsMp3.Co.mp3",
      "/songs/arjun reddy/Telisiney Na Nuvvey - SenSongsMp3.Co.mp3"
    ]
  },
  11: {
    name: 'Geetha Govindam',
    album: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRn1w2Vpgn25T79j8Vb4bikIrafpOvgf2SgFhqEKTQT0ebBEtWxNiUATuZFrNKNMS49J7nJ",
    songName: ['Inkem Inkem Inkem Kaavaale', 'Yenti Yenti', 'What The Life', "Tanemandhe Tanemandhe"],
    audioPath: [
      "/songs/geetha govindam/Inkem Inkem Inkem Kaavaale - SenSongsMp3.Co.mp3",
      "/songs/geetha govindam/Yenti Yenti - SenSongsMp3.Co.mp3",
      "/songs/geetha govindam/What The Life - SenSongsMp3.Co.mp3",
      "/songs/geetha govindam/Tanemandhe Tanemandhe - SenSongsMp3.Co.mp3",
    ]
  },
  12: {
    name: 'DJ: Duvvada Jagannadham',
    album: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVDHX7MNS9rx3_Olnvb9raEr_AfvlLX8J_GPRQCwK1yB2YHKVB-wEH_1Oy4rukHG8Rvi7YKg",
    songName: ['Seeti Maar', 'Gudilo Badilo Madilo', 'Box Baddhalai Poye', "DJ Sharanam Bhaje Bhaje"],
    audioPath: ["/songs/duvvada jaganaatham/Seeti Maar-SenSongsMp3.Co.mp3",
      "/songs/duvvada jaganaatham/Gudilo Badilo Madilo-SenSongsMp3.Co.mp3",
      "/songs/duvvada jaganaatham/Box Baddhalai Poye-SenSongsMp3.Co.mp3",
      "/songs/duvvada jaganaatham/DJ Sharanam Bhaje Bhaje-SenSongsMp3.Co.mp3"]
  },
  13: {
    name: 'Maharshi',
    album: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQgYtbhN--gPvtqtdtXKOODkqJG0jlCYFBEBzBnJnxd43zVGmkmN1jkd2Omn9nOkmbEknut",
    songName: ['Choti Choti Baatein', 'Paala Pitta', 'Idhe Kadha Nee Katha' ,'Nuvvani Idhi Needani'],
    audioPath: ["/songs/maharshi/[iSongs.info] 01 - Choti Choti Baatein.mp3",
      "/songs/maharshi/[iSongs.info] 05 - Paala Pitta.mp3",
      "/songs/maharshi/[iSongs.info] 07 - Idhe Kadha Nee Katha.mp3",
      "/songs/maharshi/[iSongs.info] 08 - Nuvvani Idhi Needani.mp3"
    ]
  },
  14: {
    name: 'Jersey',
    album: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2RRSZ9VxJVJKgsVGo6vFdoGiHwQ01hsYE3R1lkI2r_H60n_7q",
    songName: ['Aarambhame', 'Spirit of Jersey', 'Prapanchame Alaa'],
    audioPath: ["/songs/jersey/[iSongs.info] 06 - Aarambhame Le.mp3",
      "/songs/jersey/[iSongs.info] 02 - Spirit Of Jersey.mp3",
      "/songs/jersey/[iSongs.info] 04 - Prapanchame Alaa.mp3"
    ]
  },
  15: {
    name: 'Fidaa',
    album: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRHNfRyxqNAOisatY1Cs5aA7odqhIsBS8ugw7MH-IT41TDh5LJQ6lCsuHONqUyC_sDyV7nUiA",
    songName: ['Vachinde', 'Hey Pillagaada', 'Oosupodu'],
    audioPath: [
      "/songs/fidaa/Vachinde-SenSongsMp3.Co.mp3",
      "/songs/fidaa/Hey Pillagaada-SenSongsMp3.Co.mp3",
      "/songs/fidaa/Oosupodu-SenSongsMp3.Co.mp3",
    ],
    artists: ["2017", "Shakthikanth Karthick"]
  },
  16: {
    name: 'Magadheera',
    album: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSUiR4TNrr8BSv3YIhlsARQst5YTeCEXVvS1acibuiZ94iQfl_fIlrm5or6KXKto4euUE9L",
    songName: ['Panchadara Bomma', 'Bangaru Kodipetta', 'Nakosam Nuvu' , 'Rolling Title'],
    audioPath: ["/songs/Magadheera/[iSongs.info] 03 - Panchadhara Bomma.mp3" ,
      "/songs/Magadheera/[iSongs.info] 01 - Bangaru Kodipetta.mp3",
      "/songs/Magadheera/[iSongs.info] 05 - Nakosam Nuvu.mp3",
      "/songs/Magadheera/[iSongs.info] 06 - Rolling Title Music.mp3"
    ]
  },
  17: {
    name: 'Eega',
    album: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQiHQOyXpMsw61KlV0PXzdzoFKUFGrtInpSJ-9gwnUqTB8rr9uYeWBNguf3Qqj9_QjnmweuWA",
    songName: ['Nene Nani Ne', 'Eega Eega', 'Konchem Konchem'],
    audioPath: ["/songs/Eaga/Nene - Nanine - SenSongsmp3.Co.mp3",
      "/songs/Eaga/Ga Eega Eega Eega (Remix) - SenSongsmp3.Co.mp3",
      "/songs/Eaga/Konchemu Konchemu - SenSongsmp3.Co.mp3"
    ]
  },

  

};


const AlbumDetails = () => {
  const { albumId } = useParams();
  const [currentSong, setCurrentSong] = useState(null);
  const [currentAudioPath, setCurrentAudioPath] = useState(null);

  const album = albumData[albumId];

  if (!album) {
    return <h2 className="text-center text-red-500">Album not found!</h2>;
  }

  const handleSongClick = (song, audioPath) => {
    setCurrentSong(song);
    setCurrentAudioPath(audioPath);
  };

  return (
    <div className="p-4">
      <div className="text-center bg-gradient-to-t from-indigo-900/0 via-purple-900 to-pink-600 py-2 rounded-lg">
        <img
          src={album.album}
          alt={album.name}
          className="w-64 h-64 mx-auto rounded-lg shadow-lg object-cover"
        />
        <h2 className="text-2xl font-semibold mt-4">{album.name}</h2>
        <div className='flex justify-start items-center gap-2 cursor-pointer pl-4'>
          <div className='bg-custome-moregray p-3 rounded-full'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>

          </div>
          <div className='bg-custome-green p-3 rounded-full cursor-pointer hover:bg-custome-lightgreen'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
            </svg>

          </div>
        </div>
        <marquee behavior="" direction="">{album.artists}</marquee>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-medium mb-2">Songs:</h3>
        <ul className="flex flex-col space-y-2">
          {album.songName.map((song, index) => (
            <li
              key={index}
              onClick={() => handleSongClick(song, album.audioPath[index])}
              className="flex justify-between p-2 bg-custome-moregray rounded-lg cursor-pointer hover:bg-custome-gray transition"
            >
              {song}
              <div className='flex gap-2'>
                <div className='hover:bg-purple-600 rounded-full p-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
                  </svg>
                </div>
                <div className='hover:bg-purple-600 rounded-full p-1'>
                  <a href={currentAudioPath} download>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {currentSong && currentAudioPath && (
        <div className="mt-6">
          <SongPlayer key={currentAudioPath} song={currentSong} audioPath={currentAudioPath} />
        </div>
      )}
    </div>
  );
};


export default AlbumDetails;

