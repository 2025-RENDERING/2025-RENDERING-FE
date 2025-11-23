interface PartnerSectionProps {
  title: string;
  titleImage?: string;
  description: string[];
  images?: string[];
  showDecoration?: boolean;
  decorationCount?: number;
}

const PartnerSection: React.FC<PartnerSectionProps> = ({ title, titleImage, description, images = [], showDecoration = false, decorationCount = 5 }) => {
  return (
    <section className="w-full py-12">
      <div className="flex items-center justify-center mb-8 text-grey-darker text-s-bold">
        <div className="flex-1 h-px bg-red-normal" />
        <div className="mx-6">
          {titleImage ? <img src={titleImage} alt={title} className="h-[39px] object-contain" /> : <h2 className="text-text-xxl-medium text-black">{title}</h2>}
        </div>
        <div className="flex-1 h-px bg-red-normal" />
      </div>

      <div className="w-full border border-red-normal p-8 mb-4">
        <div className="mb-8 flex items-center justify-center">
          {images.length > 0 ? (
            <img src={images[0]} alt={title} className="max-w-full max-h-64 object-contain" />
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
