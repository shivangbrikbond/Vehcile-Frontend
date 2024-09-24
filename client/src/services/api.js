const fetchVehicleData = async () => {
  const response = await fetch('https://vehicle-movement-wigz.onrender.com');
  const data = await response.json();
  return data;
};

export { fetchVehicleData };
