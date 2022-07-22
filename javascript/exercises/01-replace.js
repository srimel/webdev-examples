const replaceItems = (input) => {
  // return a string with 'gold' replaced by 'SHINY' and 'wander' replaced by 'roam', regardless of the case of the letters
  const rgx_gold = /\b(g|G)(o|O)(l|L)(d|D)\b/;
  const rgx_wander = /\b(w|W)(a|A)(n|N)(d|D)(e|E)(r|R)\b/;
  input = input.replace(rgx_gold, 'SHINY');
  input = input.replace(rgx_wander, 'roam');
  // for reference, see the MDN "Regular Expressions" entry:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

  return input;
};

console.log(replaceItems('All that is gold does not glitter'));
// expected: 'All that is SHINY does not glitter'
console.log(replaceItems('Wisdom is better than silver or GOLD.'));
// expected: 'Wisdom is better than silver or SHINY.'
console.log(replaceItems('Not all those who Wander are lost'));
// expected: 'Not all those who roam are lost'
