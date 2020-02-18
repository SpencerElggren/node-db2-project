
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      const cars = [
          {
              make: 'Audi',
              model: 'A4',
              mileage: 123575,
              VIN: '1185278'
          }
      ];
      return knex('cars').insert(cars);
    });
};
