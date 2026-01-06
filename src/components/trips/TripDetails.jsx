const TripDetails = () => {
  const { slug } = useParams();
  const trip = tripsData.find((t) => t.slug === slug);

  if (!trip) return <p>Trip not found</p>;

  return (
    <div className="container mx-auto px-4 py-10">
      <img src={trip.image} className="w-full h-96 object-cover rounded-lg" />

      <h1 className="text-4xl font-bold mt-6">{trip.title}</h1>
      <Rating value={trip.rating} reviews={trip.reviews} />

      <p className="mt-4 text-gray-700">{trip.description}</p>

      <h2 className="text-2xl font-bold mt-6">Highlights</h2>
      {trip.highlights.map((h, i) => (
        <p key={i} className="flex gap-2">
          <CheckCircle className="text-blue-600" /> {h}
        </p>
      ))}

      <div className="mt-6">
        <Button fullWidth>
          <Calendar className="inline mr-2" /> Book Now
        </Button>
      </div>
    </div>
  );
};

export default TripDetails ;