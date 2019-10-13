import { useState, useEffect } from "react";

const useLocation = () => {
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [denied, setDenied] = useState(null);

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        setLat(Math.floor(position.coords.latitude));
        setLong(Math.floor(position.coords.longitude));
      },
      error => setDenied(error.message)
    );
  }, []);

  return [lat, long, denied];
};

export default useLocation;
