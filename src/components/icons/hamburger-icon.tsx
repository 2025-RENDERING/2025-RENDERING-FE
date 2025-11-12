type HamburgerIconProps = {
  className?: string;
  stroke?: string;
};

const HamburgerIcon = ({ className, stroke = "currentColor" }: HamburgerIconProps) => (
  <svg className={className} width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.75 14.75H20.75" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M0.75 7.75H20.75" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M0.75 0.75H20.75" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export default HamburgerIcon;
