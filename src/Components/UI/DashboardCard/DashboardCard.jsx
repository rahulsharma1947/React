const DashboardCard = ({ title, value, color, Icon }) => {
    console.log(value);
    return (
      <div className={`flex items-center p-2 rounded-lg ${color} text-white shadow-lg`}>
        <Icon className="text-4xl mr-4" />
        <div>
          <h2 className="text-xl font-bold">{value}</h2>
          <p>{title}</p>
        </div>
      </div>
    );
  };
  
  export default DashboardCard;
  