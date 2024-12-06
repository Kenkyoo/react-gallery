import { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'animate.css';
import Buttons from './buttons';
import { saveImageToLocalStorage } from './localStorage';
import useFavourites, { saveImageToLocalStorage, clearFavourites } from './localStorage';
import { saveImage } from './favourites'; // Importar función para mostrar favoritos
import Swal from "sweetalert2";

function Gallery() {
  const [category, setCategory] = useState("nature");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(24);
  const [favourites, setFavourites] = useFavourites(); // Usar hook personalizado para manejar favoritos
  const [swalShown, setSwalShown] = useState(false);

  const showSwal = () => {
    Swal.fire({
      title: "La imagen ha sido añadida a tus favoritos",
      didOpen: () => setSwalShown(true),  // Establece el estado cuando se abre
      didClose: () => setSwalShown(false),  // Restablece el estado cuando se cierra
    });
  };

  // Fetch de imágenes de Unsplash
  useEffect(() => {
    fetch(`https://api.unsplash.com/search/photos/?&page=${page}&per_page=${perPage}&query=${category}&client_id=_Lo9ruec1rqQ_-ERrp_NHgqbfBdANyAzPYaSLwGdXh0`)
      .then(response => response.json())
      .then(data => setImages(data.results));
  }, [category, page, perPage]);

  // Mapeo de las imágenes obtenidas
  const image = images.map(img => (
    <div className="col animate__animated animate__fadeIn" key={img.id}>
      <div className="card shadow-sm hvr-grow">
        <a data-fancybox="gallery" href={img.urls.regular} data-caption={img.alt_description}>
          <img
            className="card-img-top object-fit-cover"
            src={img.urls.small}
            alt={img.alt_description}
            width="100%"
            height="225"
          ></img>
        </a>
        <div className="card-body">
          <p className="card-text">{img.alt_description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button  onClick={showSwal} type="button" className="btn btn-sm btn-outline-secondary">
                <i className="bi bi-heart-fill me-1"></i>
                {img.likes}
              </button>
              <button onClick={() => saveImageToLocalStorage(img)} type="button" className="btn btn-sm btn-outline-secondary">
                Guardar
              </button>
            </div>
            <small className="text-body-secondary">{img.user.name}</small>
          </div>
        </div>
      </div>
    </div>
  ));


  const handleClearFavourites = () => {
    clearFavourites(); // Llamar a la función que elimina los favoritos
    setFavourites([]); // Actualizar el estado para que los favoritos se eliminen del DOM
  };


  return (
    <>
      <Tabs defaultIndex={1}>
        <TabList className="nav justify-content-center">
          <Tab className="nav-link active">Favoritos</Tab>
          <Tab className="nav-link">Galería</Tab>
        </TabList>

        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <TabPanel>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {saveImage(favourites)} {/* Renderizar favoritos */}
              </div>
              <button onClick={handleClearFavourites} className="btn btn-danger btn-clear">Eliminar todos los favoritos</button>  
            </TabPanel>

            <TabPanel>
              <Buttons setCategory={setCategory} setPage={setPage} />
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {image}
                <div className="text-center">
                  <button className="btn-custom" onClick={() => setPerPage(perPage + 5)}>Cargar más</button>
                </div>
              </div>
            </TabPanel>
          </div>
        </div>
      </Tabs>
    </>
  );
}

export default Gallery;
