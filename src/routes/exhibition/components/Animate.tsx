import React, { useState } from "react";

interface AnimateProps {
  Icon: string;
  position?: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
  exit?: string;
  isClicked: boolean;
}

const Animate = ({ Icon, position, exit, isClicked }: AnimateProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      style={{
        top: position?.top,
        left: position?.left,
        right: position?.right,
        bottom: position?.bottom,
      }}
      className={`
        absolute z-30
        transition-all duration-700 ease-out transform
        will-change-transform
        ${
          isLoaded && isClicked
            ? "opacity-100 translate-x-0 translate-y-0"
            : `${exit} opacity-0`
        }
      `}
    >
      <img
        src={Icon}
        alt="icon"
        onLoad={() => setIsLoaded(true)}
        className="w-full h-full"
      />
    </div>
  );
};

export default React.memo(Animate);
