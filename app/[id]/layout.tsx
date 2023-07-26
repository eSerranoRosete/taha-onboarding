type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="w-full p-4 min-h-screen flex items-center justify-center">
      {children}
    </div>
  );
}
