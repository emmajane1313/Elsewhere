import { FunctionComponent, JSX, useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

const MusicaPlayer: FunctionComponent = (): JSX.Element => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [primeraInteraccion, setPrimeraInteraccion] = useState<boolean>(false);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.log('Error playing audio:', error);
      }
    }
  };

  useEffect(() => {
    const handlePrimeraInteraccion = async () => {
      if (!primeraInteraccion && audioRef.current) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
          setPrimeraInteraccion(true);
        } catch (error) {
          console.log('Error in primera interaccion:', error);
        }
      }
    };

    window.addEventListener("click", handlePrimeraInteraccion);
    return () => window.removeEventListener("click", handlePrimeraInteraccion);
  }, [primeraInteraccion]);

  return (
    <>
      <audio
        draggable={false}
        ref={audioRef}
        src="/audio/isleofmullBantock.mp3"
        preload="auto"
        loop
      />
      <button
        onClick={togglePlay}
        style={{
          position: "fixed",
          top: "1rem",
          right: "1rem",
          zIndex: 9999,
          padding: "0.5rem 1rem",
          borderRadius: "999px",
          backgroundColor: "#c0bebe",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        {isPlaying ? <Pause color="#f5331a" size={20} /> : <Play color="#f5331a" size={20} />}
      </button>
    </>
  );
};

export default MusicaPlayer;
