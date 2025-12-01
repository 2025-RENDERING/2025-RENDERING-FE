interface PartnerSectionProps {
  title: string;
  titleImage?: string;
  titleImageWidth?: number;
  titleImageHeight?: number;
  description: string[];
  images?: string[];
  showDecoration?: boolean;
  decorationCount?: number;
  imageWidth?: number;
  imageHeight?: number;
  isFirst?: boolean;
}

const PartnerSection: React.FC<PartnerSectionProps> = ({
  title,
  titleImage,
  titleImageWidth,
  titleImageHeight,
  description,
  images = [],
  showDecoration = false,
  decorationCount = 5,
  imageWidth,
  imageHeight,
  isFirst = false,
}) => {
  return (
    <section className={`w-full py-6 ${isFirst ? "md:pt-0" : ""}`}>
      <div className="flex items-center justify-center mb-8 text-grey-darker text-s-bold">
        <div className="flex-1 h-px bg-red-normal" />
        <div className="mx-6">
          {titleImage ? (
            <img
              src={titleImage}
              alt={title}
              className={titleImageWidth || titleImageHeight ? "" : "h-[39px] object-contain"}
              style={
                titleImageWidth || titleImageHeight
                  ? {
                      width: titleImageWidth ? `${titleImageWidth}px` : "auto",
                      height: titleImageHeight ? `${titleImageHeight}px` : "auto",
                      objectFit: "contain",
                    }
                  : undefined
              }
            />
          ) : (
            <h2 className="text-xxl-medium text-black">{title}</h2>
          )}
        </div>
        <div className="flex-1 h-px bg-red-normal" />
      </div>

      <div className="w-full border border-red-normal p-4 md:p-8 mb-4">
        <div className="mb-8 flex items-center justify-center overflow-hidden">
          {images.length > 0 ? (
            <div
              className="flex items-center justify-center w-full"
              style={{
                gap: 0,
                ...(imageWidth && imageHeight
                  ? {
                      maxWidth: images.length > 1 ? `${imageWidth}px` : "100%",
                      maxHeight: `${imageHeight}px`,
                      width: images.length > 1 ? `${imageWidth}px` : "100%",
                    }
                  : {}),
              }}
            >
              {images.map((image, index) => {
                const style: React.CSSProperties = {
                  display: "block",
                  objectFit: "contain",
                };

                if (imageWidth && imageHeight) {
                  if (images.length > 1) {
                    style.height = `${imageHeight}px`;
                    style.width = "auto";
                    style.maxWidth = "100%";
                  } else {
                    style.width = "100%";
                    style.maxWidth = `${imageWidth}px`;
                    style.height = "auto";
                    style.maxHeight = `${imageHeight}px`;
                  }
                }

                return (
                  <img
                    key={index}
                    src={image}
                    alt={`${title} ${index + 1}`}
                    className={imageWidth || imageHeight ? "max-w-full max-h-full w-full h-auto" : "max-w-full max-h-64 object-contain w-full h-auto"}
                    style={style}
                  />
                );
              })}
            </div>
          ) : (
            <div className="text-s-bold text-grey-dark">사진 첨부 예정</div>
          )}
        </div>

        <div>
          {description.map((text, index) => (
            <p key={index} className="text-xs-medium text-red-darker text-center mt-0">
              {text}
            </p>
          ))}
        </div>
      </div>

      {showDecoration && (
        <div className="flex justify-center gap-[12px]">
          {Array.from({ length: decorationCount }, (_, i) => (
            <div key={i} className={`w-[8px] h-[8px] ${i % 2 === 0 ? "bg-red-normal" : "bg-white border border-red-normal"}`} />
          ))}
        </div>
      )}
    </section>
  );
};

export default PartnerSection;
