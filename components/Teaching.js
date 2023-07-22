import React from 'react';
import storage from "./Config";

function gallery(props) {

    const [allImages, setImages] = useState([]);

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
      <figure class="group cursor-pointer mt-4">
        <div class="relative overflow-hidden">
          <img
            src={props.src}
            class="ease absolute z-0 h-full w-full object-cover
            opacity-0 transition-opacity duration-700 group-hover:opacity-100"
            alt="Piece"
            
          />
    
          <div class="h-full w-full object-cover italic" >
            Click to see class gallery
          </div>

        </div>
  
        <figcaption className="mt-1">
          <span class=" text-gray-500">{props.text}</span>
        </figcaption>
      </figure>
    );
  }

function Teaching() {

  return (
    <div>
      
    </div>
  )
}

export default Teaching
