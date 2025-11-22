interface LayoutProps {
  title: string;
  content: React.ReactNode;
}

const Layout = ({ title, content }: LayoutProps) => {
  return (
    <section className="flex flex-col items-center gap-[24px] w-full">
      <h3 className="w-[120px] h-[32px] flex justify-center items-center bg-red-normal text-s-medium leading-[19.6px] text-grey-light">
        {title}
      </h3>
      <div className="w-full">{content}</div>
    </section>
  );
};

export default Layout;
