import { Fragment } from "react";

interface ScrollingLogosProps {
  logos: Array<{
    id: string;
    image?: string;
    text?: string;
  }>;
}

const ScrollingLogos = ({ logos }: ScrollingLogosProps) => {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="relative w-full overflow-hidden py-4">
      <div className="flex items-center animate-scroll-left">
        {duplicatedLogos.map((logo, index) => (
          <Fragment key={`${logo.id}-${index}`}>
            <div className="flex items-center shrink-0 mx-4">
              {logo.image ? (
                <img src={logo.image} alt={logo.id} className={logo.id === "photo" ? "w-[62px] h-[18px] object-contain" : "h-[39px] object-contain"} />
              ) : (
                <span className="text-s-bold text-grey-darker whitespace-nowrap">{logo.text}</span>
              )}
            </div>
            <div className="w-2 h-2 bg-red-normal shrink-0 mx-4" />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default ScrollingLogos;
