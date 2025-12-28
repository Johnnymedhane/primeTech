
import useCityPosition from "../../hooks/useCityPosition"
import Spinner from "../../ui/Spinner";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import styles from './Map.module.css'

function Map() {
  const {isMapLoading,  cityPosition, error
  }= useCityPosition();




  if(isMapLoading) return <Spinner />
  
  
  
  return (
    <div className={styles.mapContainer}>
      {error && <div className={styles.errorMessage}> {error} </div>
        }
      
      {!cityPosition && !error && !isMapLoading && (
        <div>No map data available</div>
      )}
      {cityPosition &&
        cityPosition.lat != null &&
        cityPosition.lng != null && (
        <MapContainer
          className={styles.map}
          center={[cityPosition.lat, cityPosition.lng]}
          zoom={16}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[cityPosition.lat, cityPosition.lng]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      )}
      
    </div>
  )
}

export default Map
