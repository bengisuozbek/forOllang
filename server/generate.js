var faker = require('faker');

var database = { profiles: []};

for (var i = 1; i<= 10; i++) {
  database.profiles.push({
    id: i,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    country: faker.address.country(),
    city: faker.address.city(),
    internship_number: faker.datatype.number({ max: 5}),
    experience: faker.datatype.number({ max: 40}),
    certificates: faker.datatype.number({ max: 15}),
    imageUrl: faker.image.image(),
    text: faker.lorem.paragraphs(3, '<br/>\n')
  });
}

console.log(JSON.stringify(database));