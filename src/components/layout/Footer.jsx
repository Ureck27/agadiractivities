const Footer = () => (
  <footer className="bg-gray-800 text-white mt-16">
    <div className="container mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">
      <div>
        <h3 className="font-bold text-xl mb-2">Agadir Activities</h3>
        <p className="text-gray-300">
          Best tours and activities in Agadir.
        </p>
      </div>

      <div>
        <h3 className="font-bold mb-2">Contact</h3>
        <p className="flex items-center gap-2">
          <MapPin className="w-4 h-4" /> Agadir, Morocco
        </p>
        <p className="flex items-center gap-2">
          <Phone className="w-4 h-4" /> +212 XXX XXX XXX
        </p>
      </div>

      <div className="flex gap-4">
        <Facebook />
        <Instagram />
      </div>
    </div>
  </footer>
);

export default Footer ;