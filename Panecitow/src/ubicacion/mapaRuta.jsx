import { useEffect, useState, useCallback } from "react";
import { GoogleMap, LoadScript, Marker, DirectionsService, DirectionsRenderer } from "@react-google-maps/api";
function MapaRuta({ destinoLat, destinoLng }) {
    
    const [ubicacion, setUbicacion] = useState(null);
    const [directionsResponse, setDirectionsResponse] = useState(null);


    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setUbicacion({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                });
            },
            (error) => console.error(error),
            { enableHighAccuracy: true }
        );
    }, []);


    const directionsCallback = useCallback((res) => {
        if (res !== null && res.status === 'OK') {
            setDirectionsResponse(res);
        } else {
            console.log("No se pudo trazar ruta:", res);
        }
    }, []);

    return (
        <div>

            <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
                
                {ubicacion && (
                    <GoogleMap
                        mapContainerStyle={{ width: "100%", height: "300px" }}
                        center={ubicacion} 
                        zoom={15}
                    >

                        <Marker position={ubicacion} />


                        {ubicacion && destinoLat && !directionsResponse && (
                            <DirectionsService
                                options={{
                                    destination: { lat: destinoLat, lng: destinoLng },
                                    origin: ubicacion,
                                    travelMode: 'DRIVING' // O 'WALKING', 'BICYCLING'
                                }}
                                callback={directionsCallback}
                            />
                        )}


                        {directionsResponse && (
                            <DirectionsRenderer 
                                options={{ directions: directionsResponse }} 
                            />
                        )}

                    </GoogleMap>
                )}

            </LoadScript>
        </div>
    );
}

export default MapaRuta;