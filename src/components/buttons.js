import React from 'react';

// Componente para los botones de categorías
function Buttons({ setCategory, setPage }) {
    return (
        
        <div className="btn-group d-flex justify-content-center gap-2 g-1 mx-auto mb-3 w-50" role="group" aria-label="Basic example" id="group">
            <button class="btn btn-primary mx-1" onClick={() => setPage(prevPage => prevPage + 1)}>Actualizar</button>
            <button class="btn btn-primary mx-1" onClick={() => setCategory('nature')}>Nature</button>
            <button class="btn btn-primary mx-1" onClick={() => setCategory('animals')}>Animals</button>
            <button class="btn btn-primary mx-1" onClick={() => setCategory('food')}>Food</button>
            <button class="btn btn-primary mx-1" onClick={() => setCategory('travels')}>Travels</button>
            <button class="btn btn-primary mx-1" onClick={() => setCategory('space')}>Space</button>
        </div>
    );
}

export default Buttons;
