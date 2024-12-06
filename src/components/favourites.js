export const saveImage = (favourites) => (
    favourites.map(saveImg => (
      <div className="col animate__animated animate__fadeIn" key={saveImg.id}>
        <a data-fancybox="gallery-2" href={saveImg.urls.regular} data-caption={saveImg.alt_description}>
          <img
            className="img-thumbnail"
            src={saveImg.urls.small}
            alt={saveImg.alt_description}
          ></img>
        </a>
      </div>
    ))
  );
  