const Card = ({ title, description }) => {
    return (
      <div className="border rounded-xl p-4 shadow-lg">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="mt-2 text-gray-700">{description}</p>
      </div>
    );
  };
  
  export default Card;
  