const Navbar = () => {
  return (
    <nav className="bg-teal-500 text-white flex justify-between h-[70px] items-center px-10">
      <h2 className="text-2xl font-bold">Tailwind CSS</h2>
      <aside>
        <a href="#" className="mx-10 font-semibold text-[20px]">Home</a>
        <a href="#" className="mx-10 font-semibold text-[20px]">About</a>
        <a href="#" className="mx-10 font-semibold text-[20px]">Contact</a>
        <a href="#" className="mx-10 font-semibold text-[20px]">Services</a>
      </aside>
    </nav>
  )
}

export default Navbar