interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return <div className="max-w-7xl mx-auto p-6 flex flex-col justify-center">{children}</div>;
};

export default Container;
