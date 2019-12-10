
exports.up = function(knex) {
  return knex.schema.createTable('veggies', tbl => {
      //primary key, called 'id', an interger, auto-increments
      tbl.increments(); //by default id, can name it 'veggie_id'
      tbl.string('name', 255) //first column and chara length(optional)
        .notNullable() //required field
        .unique() //.unique is a constraint which are rules to protect against invalid data
        .index(); //makes searching for veggies using this column faster, but comes at a cost(something to add later when you see searches are slow)
     tbl.boolean('like_it').defaultTo(true) //second column
    })
};

exports.down = function(knex) {
  return knew.schema
};
