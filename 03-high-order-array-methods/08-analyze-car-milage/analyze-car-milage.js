function analyzeCarMileage(cars) {
    const totalMileage = cars.reduce((sum, car) => sum +
      car.mileage, 0);
      const averageMileage = Number((totalMileage /
      cars.length).toFixed(2));
      const mileages = cars.map(car => car.mileage);
     const maxMileage = Math.max(...mileages);
   const minMileage = Math.min(...mileages);
   const highestMileageCar = cars.find(car => car.mileage
      === maxMileage);
    const lowestMileageCar = cars.find(car => car.mileage ===
      minMileage);
      return { averageMileage, highestMileageCar, lowestMileageCar,
       totalMileage };

}

module.exports = analyzeCarMileage;
