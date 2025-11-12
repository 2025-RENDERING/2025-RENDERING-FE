type CloseIconProps = {
  className?: string;
  stroke?: string;
};

const CloseIcon = ({ className, stroke = "currentColor" }: CloseIconProps) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 19L19 1" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
    <path d="M19 19L1 1" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default CloseIcon;

