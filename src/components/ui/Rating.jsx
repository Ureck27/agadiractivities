const Rating = ({ value, reviews }) => (
  <div className="flex items-center gap-2">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(value)
            ? "text-yellow-400 fill-yellow-400"
            : "text-gray-300"
        }`}
      />
    ))}
    <span className="text-sm font-medium">{value}</span>
    <span className="text-sm text-gray-500">({reviews})</span>
  </div>
);

export default Rating;
