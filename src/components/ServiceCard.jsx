function ServiceCard({ title, description, icon }) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md mb-4">
        <div className="flex items-center mb-4">
          <div className="text-blue-500 text-2xl mr-3">{icon}</div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-gray-700">{description}</p>
      </div>
    );
  }
  
  export default ServiceCard;