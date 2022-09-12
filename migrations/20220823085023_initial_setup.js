/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return Promise.resolve()
    .then(() => {
      return knex.schema.createTable("users", function (table) {
        table.increments("id").primary().unique().notNullable(); // security: to be UUID some day
        table.string("givenName");
        table.string("familyName");
        table.string("email");
        table.string("imageUrl");
        table.string("name");
        table.string("token", 3000); // can't be varchar 255!
        table.string("provider");
      });
    })
    .then(() => {
      return knex.schema.createTable("shops", function (table) {
        table.increments("id");
        table.string("name");
        table.string("address");
      });
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return Promise.resolve()
    .then(() => {
      return knex.schema.dropTableIfExists("users");
    })
    .then(() => {
      return knex.schema.dropTableIfExists("shops");
    });
};
