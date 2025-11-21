interface LayoutProps {
  title: string;
  content: React.ReactNode;
}

const Layout = ({ title, content }: LayoutProps) => {
  return (
    <section>
      <h3>{title}</h3>
      <div>{content}</div>
    </section>
  );
};

export default Layout;
