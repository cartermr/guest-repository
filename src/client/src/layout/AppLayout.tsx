import { Outlet } from 'react-router';

function AppLayout() {
  return (
    <>
      <header className="bg-[#fa7135] justify-center flex p-4 text-[#2d2d2f] font-bold text-2xl">
        <h1>Fleece Performance Engineering</h1>
      </header>
      <main className='bg-[#2d2d2f]'>
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;