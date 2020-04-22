
exports.seed = function(knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {id: 1, username: 'username1' , password: 'something' , department: 'software engineer'},
        {id: 2, username: 'username2' , password: 'something1' , department: 'software engineer'},
        {id: 3, username: 'username3' , password: 'something2' , department: 'finance'},
        {id: 4, username: 'differentuser' , password: 'something3' , department: 'software engineer'},
        {id: 5, username: 'theuser' , password: 'something4' , department: 'business'},
        {id: 6, username: 'iamauser' , password: 'something4' , department: 'hr'}
      ]);
    });
};
