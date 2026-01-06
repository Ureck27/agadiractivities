const TripCard = ({ trip }) => (
  <div className="bg-white rounded-lg shadow hover:shadow-xl transition">
    <img src={trip.image} alt={trip.title} className="h-48 w-full object-cover" />

    <div className="p-5">
      <Badge>{trip.category}</Badge>
      <h3 className="text-xl font-bold mt-2">
        <Link to={`/trips/${trip.slug}`}>{trip.title}</Link>
      </h3>

      <Rating value={trip.rating} reviews={trip.reviews} />

      <div className="flex justify-between items-center mt-4">
        <span className="flex items-center text-blue-600 font-bold">
          <Euro className="w-5 h-5" /> {trip.price}
        </span>

        <Link to={`/trips/${trip.slug}`}>
          <Button>Details</Button>
        </Link>
      </div>
    </div>
  </div>
);

export default TripCard ;