const TripList = () => (
  <div className="grid md:grid-cols-3 gap-6">
    {tripsData.map((trip) => (
      <TripCard key={trip.id} trip={trip} />
    ))}
  </div>
);
export default TripList ;