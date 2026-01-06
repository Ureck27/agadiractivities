const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <Link to="/" className="font-bold text-xl text-blue-600">
          Agadir Activities
        </Link>

        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X /> : <Menu />}
        </button>

        <div className="hidden md:flex gap-6">
          <Link to="/">Home</Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar ;