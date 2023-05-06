interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <main className="max-w-5xl mx-auto px-6 flex flex-col justify-cente">
      {children}
    </main>
  );
};

export default Container;
