

const destructureItems = (input) => {
  // destructure the name and parents of the character and format the output as shown

  // we can use destructuring to do this in a better way...
  // console.log(input.first, input.last, input.allegiance.parents.mother, input.allegiance.parents.father);

  // destructuring first and last names
  let {first, last} = input;
  let {mother, father} = input.allegiance.parents;
  let result = `${mother} and ${father} are the parents of ${first} ${last}!`;
  return result;
};

const sansa = {
  first: 'Sansa',
  last: 'Stark',
  allegiance: {
    house: 'Winterfell',
    parents: {
      mother: 'Catelyn Tully',
      father: 'Eddard Stark',
    },
    animals: {
      direwolf: 'Lady',
    },
  },
};

const daenerys = {
  first: 'Daenerys',
  last: 'Targaryen',
  allegiance: {
    house: 'Targaryen',
    parents: {
      mother: 'Queen Rhaella',
      father: 'King Aerys II Targaryen',
    },
    animals: {
      dragons: 'Drogon',
    },
  },
};

console.log(destructureItems(sansa));
// Sansa Stark
//   daughter of
//   Catelyn Tully and Eddard Stark
console.log(destructureItems(daenerys));
// Daenerys Targaryen
//   daughter of
//   Queen Rhaella and King Aerys II Targaryen
