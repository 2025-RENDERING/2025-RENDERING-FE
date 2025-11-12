type BackIconProps = {
  className?: string;
  stroke?: string;
};

const BackIcon = ({ className, stroke = "currentColor" }: BackIconProps) => (
  <svg className={className} width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.06067 14.75L1.06067 7.64706L8.06067 0.75" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export default BackIcon;
