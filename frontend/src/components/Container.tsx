interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <div className="max-w-7xl mx-auto px-6 flex flex-col justify-cente">
      {children}
    </div>
  );
};

export default Container;
