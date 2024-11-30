import React from 'react';
import { useNavigate } from 'react-router-dom';

const albums = [
    { id: 1, name: 'Das Ka Dhamki', album: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRWxpDUKRFrf9gRgx7kis3wl8-AK8fhnFv7ulYl3pPFNc9AjLmFkT0un7-TNSlvk2xxir-w" },
    { id: 2, name: 'Amaran', album: "https://assetscdn1.paytm.com/images/cinema/Amaran-608x800-3b60ca10-4594-11ef-83ec-5d141d381675.jpg" },
    { id: 3 , name : "Salaar" , album : "https://www.businessoftollywood.com/wp-content/uploads/2023/12/Prabhas-salaar-1.jpg"},
    { id: 4 , name : "Radheshyam" , album : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzoXBdkaOx_ND1yIgVLRBJgKB_0poGk5ag5A&s"},
    { id: 5, name: 'Gangs of Godavari', album: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS9D16vRRqih8UjvXQ2CluwnH_YGeaqFSRWbTJ1tftQXBO5O8K8IMUvNht9xkMILm26bhwGqL1Uk8_meMsdRWylHjGuLGpIgQCsuIT8XAk" },
    { id: 6, name: 'RRR', album: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ_gA25hvAzvrTHQaotqRuOVJqQbWScm5Ig5dF4ctHmnF5bUjPpUFqKTHZRqrm8CwG-98ILbA" },
    { id: 7, name: 'Pushpa: The Rise', album: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS3I84wCRTf0lEnJBcXKdTnHGsKUUtptPZOKjar3x9F97SbbdInBh6oQ6j9eFo6c361C5iM" },
    { id: 8, name: 'Baahubali 2: The Conclusion', album: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSwAZddfdsmgj84MRQyRDfNxl-swkZRxt2IQX3gnLkzHl3EEzyD3dduWibKdNCCqOTyaL3WIw" },
    { id: 9, name: 'Ala Vaikunthapurramuloo', album: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNbcbDm_BFh4LXRPu8WTJjedhXgcDTV34g2f6ZtZDRErslORaHIS4o6qE6JmiWCNIdj4Grbg" },
    { id: 10, name: 'Arjun Reddy', album: "https://m.media-amazon.com/images/S/pv-target-images/79a8a69e853daef866c405bcf2b1253df311463f1bd246cafccda81f173d8fba.jpg" },
    { id: 11, name: 'Geetha Govindam', album: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRn1w2Vpgn25T79j8Vb4bikIrafpOvgf2SgFhqEKTQT0ebBEtWxNiUATuZFrNKNMS49J7nJ" },
    { id: 12, name: 'DJ: Duvvada Jagannadham', album: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVDHX7MNS9rx3_Olnvb9raEr_AfvlLX8J_GPRQCwK1yB2YHKVB-wEH_1Oy4rukHG8Rvi7YKg" },
    { id: 13, name: 'Maharshi', album: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQgYtbhN--gPvtqtdtXKOODkqJG0jlCYFBEBzBnJnxd43zVGmkmN1jkd2Omn9nOkmbEknut" },
    { id: 14, name: 'Jersey', album: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2RRSZ9VxJVJKgsVGo6vFdoGiHwQ01hsYE3R1lkI2r_H60n_7q" },
    { id: 15, name: 'Fidaa', album: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRHNfRyxqNAOisatY1Cs5aA7odqhIsBS8ugw7MH-IT41TDh5LJQ6lCsuHONqUyC_sDyV7nUiA" },
    { id: 16, name: 'Magadheera', album: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSUiR4TNrr8BSv3YIhlsARQst5YTeCEXVvS1acibuiZ94iQfl_fIlrm5or6KXKto4euUE9L" },
    { id: 17, name: 'Eega', album: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQiHQOyXpMsw61KlV0PXzdzoFKUFGrtInpSJ-9gwnUqTB8rr9uYeWBNguf3Qqj9_QjnmweuWA" },
  ];
  

const AlbumList = () => {
  const navigate = useNavigate();

  const handleAlbumClick = (albumId) => {
    navigate(`/album/${albumId}`);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3  sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4">
      {albums.map((album) => (
        <div
          key={album.id}
          onClick={() => handleAlbumClick(album.id)}
          className="bg-custome-gray shadow-lg rounded-lg cursor-pointer hover:shadow-xl transition-shadow duration-300 p-2"
        >
          <img
            className="w-full h-48 rounded-t-lg object-cover"
            src={album.album}
            alt={album.name}
          />
          <h2 className="text-lg font-semibold line-clamp-1">{album.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default AlbumList;
