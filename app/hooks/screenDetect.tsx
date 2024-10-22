import { useState, useEffect } from "react";

export default function useScreenDetect() {
  const [screenSize, setScreenSize] = useState<undefined | boolean>(undefined);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth < 768);
    };

    // Détection de la taille d'écran uniquement après le montage du composant
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
}
