
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments();
      tbl.string('make', 256).notNullable().index();
      tbl.string('model', 256).notNullable();
      tbl.integer('mileage', 20).notNullable();
      tbl.string('VIN', 256).notNullable();
      tbl.string('transmission', 256);
      tbl.string('status', 256);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
