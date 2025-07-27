import { useEffect, useState } from "react";

const DraggableBox = ({
  src,
  color,
  initialX = 0,
  initialY = 0,
  initialPosition = "0px 0px",
}: {
  src: string;
  color: string;
  initialX?: number;
  initialY?: number;
  initialPosition?: string;
}) => {
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: initialX,
    y: initialY,
  });
  const [isClient, setIsClient] = useState(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [containerSize, setContainerSize] = useState<{
    width: number;
    height: number;
  }>({
    width: 1920,
    height: 1080,
  });

  useEffect(() => {
    setIsClient(true);
    const updateSize = () => {
      setContainerSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (isClient && initialPosition !== "0px 0px") {
      const [x, y] = initialPosition.split(" ");
      const xValue = x.endsWith("vw") 
        ? (parseFloat(x) / 100) * window.innerWidth 
        : parseInt(x);
      const yValue = y.endsWith("vh") 
        ? (parseFloat(y) / 100) * window.innerHeight 
        : parseInt(y);
      
      setPosition({ x: xValue, y: yValue });
    }
  }, [isClient, initialPosition]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    const touch = e.touches[0];
    setIsDragging(true);
    setDragStart({
      x: touch.clientX - position.x,
      y: touch.clientY - position.y,
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;

    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;

    updatePosition(newX, newY);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();

    const touch = e.touches[0];
    const newX = touch.clientX - dragStart.x;
    const newY = touch.clientY - dragStart.y;

    updatePosition(newX, newY);
  };

  const updatePosition = (newX: number, newY: number) => {
    const boxWidth = window.innerWidth * 0.25; // w-[25vw]
    const boxHeight = window.innerWidth * 0.25; // h-[25vw]

    const constrainedX = Math.max(
      0,
      Math.min(newX, containerSize.width - boxWidth)
    );
    const constrainedY = Math.max(
      0,
      Math.min(newY, containerSize.height - boxHeight)
    );

    setPosition({
      x: constrainedX,
      y: constrainedY,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("touchmove", handleTouchMove, { passive: false });
      document.addEventListener("touchend", handleTouchEnd);
    }
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging, dragStart]);

  return (
    <div
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      className={`absolute w-[25vw] h-[25vw] border-2 border-white select-none overflow-hidden p-1 md:p-3 lg:p-6 flex items-center justify-center bg-${color} ${
        isDragging ? "cursor-grabbing" : "cursor-grab"
      }`}
      style={{
        left: position.x,
        top: position.y,
        opacity: isDragging ? 0.8 : 1,
        zIndex: isDragging ? 1000 : 1,
      }}
    >
      <video
        className="relative flex w-full bg-black border border-black h-full object-cover"
        key={src}
        draggable={false}
        autoPlay
        loop
        muted
        poster={`/images/${src}.png`}
        playsInline
      >
        <source src={`/videos/${src}.mp4`} type="video/mp4" />
      </video>
    </div>
  );
};

export default DraggableBox;
