import { useState, useEffect } from 'react';
import storage from "./Config";


function Teaching() {
  const [allImages, setImages] = useState([]);
  const [selectedGallery, setSelectedGallery] = useState(null);
  
  const galleries = [
    {
      name: 'year of the cow',
      folder: 'yearOfTheCow/',
      date: '2.7.2021'
    },
    {
      name: 'potted cacti',
      folder: 'pottedCacti/',
      date: '9.13.2020'
    },
    {
      name: 'assorted flowers',
      folder: 'assortedFlowers/',
      date: '8.30.2020'
    },
    {
      name: 'golden gate bridge',
      folder: 'goldenGateBridge/',
      date: '9.27.2020'
    },
    {
      name: 'paris',
      folder: 'paris/',
      date: '2.14.2021'
    },
    {
      name: 'lavendar farm',
      folder: 'lavendarFarm/',
      date: '2.28.2021'
    },
    {
      name: 'hot air balloon',
      folder: 'hotAirBalloon/',
      date: '8.23.2020'
    },
    {
      name: 'desert',
      folder: 'desert/',
      date: '8.9.2020'
    },
    {
      name: 'beach',
      folder: 'beach/',
      date: '8.2.2020'
    },
    {
      name: 'red bird',
      folder: 'redBird/',
      date: '12.20.2020'
    },
    {
      name: 'fox',
      folder: 'fox/',
      date: '12.6.2020'
    },
    {
      name: 'winter woods',
      folder: 'winterWoods/',
      date: '1.24.2021'
    },
    {
      name: 'midnight',
      folder: 'midnight/',
      date: '3.7.2021'
    },
    {
      name: 'sunset in morocco',
      folder: 'sunsetInMorocco/',
      date: '1.10.2021'
    },
    {
      name: 'mountains',
      folder: 'mountains/',
      date: '11.8.2020'
    },
    {
      name: 'lavendar',
      folder: 'lavendar',
      date: '7.5.2020'
    },
    {
      name: 'panda',
      folder: 'pandaClass/',
      date: '4.5.2020'
    },
    {
      name: 'panda',
      folder: 'pandaClass/',
      date: '4.5.2020'
    },
    {
      name: 'sunflowers',
      folder: 'sunflowersClass/',
      date: '4.26.2020'
    },
    {
      name: 'rainbow sky',
      folder: 'rainbowSkyClass/',
      date: '5.24.2020'
    },
    {
      name: 'firefly',
      folder: 'fireflyClass/',
      date: '5.17.2020'
    },
    {
      name: 'abstract flowers',
      folder: 'abstractFlowersClass/',
      date: '6.14.2020'
    },
    {
      name: 'abstract flowers',
      folder: 'abstractFlowersClass/',
      date: '6.14.2020'
    },
    {
      name: 'flowers',
      folder: 'flowersClass/',
      date: '4.12.2020'
    },
    {
      name: 'birds',
      folder: 'birds/',
      date: '9.6.2020'
    },
    {
      name: 'flowers',
      folder: 'flowersClass/',
      date: '4.12.2020'
    },
    {
      name: 'lotus flower',
      folder: 'lotusFlower/',
      date: '7.12.2020'
    },
    {
      name: 'peacock',
      folder: 'peacock/',
      date: '7.26.2020'
    },
    {
      name: 'river reflections',
      folder: 'riverReflections/',
      date: '3.14.2021'
    },
    {
      name: 'white fusion calathea',
      folder: 'whiteFusionCalathea/',
      date: '1.31.2021'
    },
    {
      name: 'secluded bridge',
      folder: 'secludedBridge/',
      date: '1.17.2021'
    },
    {
      name: 'koi',
      folder: 'koi/',
      date: '3.28.2021'
    },
    {
      name: 'spring shade',
      folder: 'springShade/',
      date: '3.21.2021'
    },
    {
      name: 'key to summer',
      folder: 'keyToSummer/',
      date: '4.4.2021'
    },
    {
      name: 'little bird',
      folder: 'littleBirdClass/',
      date: '5.3.2020'
    },
    {
      name: 'sunset mountains',
      folder: 'sunsetMountains/',
      date: '6.21.2020'
    },
    {
      name: 'night sky',
      folder: 'nightSky/',
      date: '6.28.2020'
    },
    {
      name: 'cherry blossom',
      folder: 'cherryBlossom/',
      date: '5.10.2020'
    },
    {
      name: 'hummingbird',
      folder: 'hummingbird/',
      date: '8.16.2020'
    },
    {
      name: 'aurora borealis',
      folder: 'auroraBorealis/',
      date: '11.29.2020'
    },
    {
      name: 'sunset',
      folder: 'sunset/',
      date: '12.13.2020'
    },
  ];

  const handleGalleryClick = (gallery) => {
    setSelectedGallery(gallery);
  };

  const getFromFirebase = (id) => {
  let storageRef = storage.ref().child(id);
  storageRef.listAll().then(function (res) {
      res.items.forEach((imageRef) => {
        imageRef.getDownloadURL().then((url) => {
            setImages((allImages) => [...allImages, url]);
        });
      });
    })
    .catch(function (error) {
      console.log(error);
    });
};
console.log(allImages);

useEffect(() => {
  getFromFirebase();
 
}, []);
  return (
    <div>

    <div className={`flex w-[95%] md:w-[85%] lg:w-[70%] mx-auto mt-12 lg:mt-24 mb-48 `}>
  <div className="w-[35%] p-4 mr-2 md:mr-6 lg:mr-24">
    <h2 className="text-xl font-bold mb-4 px-2 mt-2 text-white">Galleries</h2>
    <ul>
      {galleries.map((gallery, index) => (
        <li
          key={index}
          className={`py-2 px-2 cursor-pointer ${
            selectedGallery === gallery ? 'font-bold ' : 'font-light'
          }`}
          onClick={() => handleGalleryClick(activity)}
        >
          {gallery.name}
        </li>
      ))}
    </ul>
  </div>
  <div className="w-[65%] p-4">
    {selectedGallery ? (
      <>
        <h2 className={`text-xl font-bold mb-4`}>{selectedGallery.name}</h2>
        
      </>
    ) : (
      <p className="text-xl">Select a class to see the student gallery</p>
    )}
  </div>
</div>
  
    </div>
  )
}

export default Teaching
