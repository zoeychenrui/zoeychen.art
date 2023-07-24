import { useState, useEffect } from 'react';
import storage from "./Config";


function Teaching() {
  const [allImages, setImages] = useState([]);
  const [selectedGallery, setSelectedGallery] = useState(null);
  
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
    <Footer />
    </div>
  )
}

export default Teaching
