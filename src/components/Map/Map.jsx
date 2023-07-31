import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import location1 from '/public/location2.png';
import 'leaflet/dist/leaflet.css';


export default function Map() {

    const customIcon = new L.Icon({
        iconUrl: location1,
        iconSize: [30, 50], // Tamaño del icono [ancho, alto]
        iconAnchor: [12, 41], // Punto del icono que se ancla a la posición del marcador [ancho/2, alto]
        popupAnchor: [12, 41], // Punto donde se muestra el popup en relación con la posición del marcador [ancho/2, -alto]
      });

  return (
    <div className="md:w-1/2 z-0 rounded-xl px-8">
      <MapContainer
        center={[-32.89084, -68.82717]}
        zoom={13}
        className='h-[20rem] w-full rounded-xl shadow-sombra-imagenes px-4'
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // URL del proveedor de mapas (en este caso, OpenStreetMap)
        />

        {/* Marcador en la ubicación especificada */}
        <Marker position={[-32.89084, -68.82717]} icon={customIcon}>
          <Popup>
          Mendoza Automotores
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

