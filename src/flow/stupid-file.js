/* @flow */

// https://alligator.io/vuejs/components-flow/

const doSomethingStupid = stringArg => {
  // Flow should show an error here, "The operand of an arithmetic operation must be a number."
  return stringArg * 3109
}

console.log(doSomethingStupid(`I'm stringy`))
