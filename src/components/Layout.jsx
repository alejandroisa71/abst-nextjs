const Layout = ({ children }) => {
  return (
    <div className="bg-orange-400 text-white h-[calc(100vh-4rem)]">
      <main className="h-5/6 px-28 py-10">{children}</main>
    </div>
  );
};
export default Layout;
