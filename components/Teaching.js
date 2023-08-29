import { useState, useEffect } from 'react';
import { listAll, getDownloadURL } from 'firebase/storage';
import { ref } from 'firebase/storage';
import { storage } from './Config';


function Teaching() {
  const [allImages, setImages] = useState([]);
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  
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
    setImages([]); // Reset images state
    setImagesLoaded(0); // Reset loaded images count
    getFromFirebase(gallery.folder);
  };

  const getFromFirebase = (folder) => {
    const folderRef = ref(storage, folder);
  
    listAll(folderRef)
      .then(async (res) => {
        const urlPromises = res.items.map(imageRef => getDownloadURL(imageRef));
        const urls = await Promise.all(urlPromises);
        setImages(urls);
      })
      .catch((error) => {
        console.error(`Error while retrieving images from folder "${folder}": `, error);
        setImagesLoaded(0);  // Reset loaded images count on error
      });
  };


useEffect(() => {
}, [selectedGallery]);

const totalImages = allImages.length;
const handleImageLoad = () => {
  console.log('Image loaded');
  setImagesLoaded(prev => prev + 1);
};

useEffect(() => {
  console.log('Images Loaded:', imagesLoaded, 'Total Images:', totalImages);
}, [imagesLoaded, totalImages]);

  return (
    <div>
    <div className={`flex w-[95%] md:w-[85%] mx-auto mt-12 lg:mt-24 mb-48 `}>
  <div className="w-[35%] p-4 mr-2 md:mr-6">
    <h2 className="text-md md:text-lg lg:text-xl mb-4 px-2 mt-2 ">Galleries</h2>
    <ul>
      {galleries.map((gallery, index) => (
        <li
          key={index}
          className={`py-2 px-2 cursor-pointer font-light ${
    selectedGallery && selectedGallery.folder === gallery.folder ? 'text-gray-800 ' : 'text-gray-400'
  }`}
          onClick={() => handleGalleryClick(gallery)}
        >
          {gallery.name} {gallery.date}
        </li>
      ))}
    </ul>
  </div>
  <div className="w-[50%]">
    {selectedGallery ? (
      <>
      <h2 className={`text-md md:text-lg lg:text-xl mb-4 font-light`}>{selectedGallery.name} {selectedGallery.date}</h2>
      
      {/* Show spinner until all images are loaded */}
      {imagesLoaded < totalImages && (
        <div className="flex justify-center items-center min-h-screen">
          <div className="spinner"></div>
        </div>
      )}

      <div className="flex flex-wrap">
        {allImages.map((url, index) => (
          <div className="w-full sm:w-1/2 md:w-1/3 p-1" key={index}>
            <img 
              src={url} 
              alt="From Firebase" 
              className="w-full h-auto" 
              onLoad={handleImageLoad}  // Increment the loaded images count
            />
          </div>
        ))}
      </div>
    </>
  ) : (
      <p className="text-md md:text-lg lg:text-xl font-light">Select a class to see the student gallery</p>
    )}
  </div>
</div>
    </div>
  )
}

export default Teaching
