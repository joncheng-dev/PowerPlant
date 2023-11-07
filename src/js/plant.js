// Let's make our function factory:
// Arrow Function version:
// const changeState = (prop) => {
//   return (value) => {
//     return (state) => {
//       return {
//         ...state,
//         [prop]: (state[prop] || 0) + value
//       }
//     }
//   }
// }

// Function Factory:
const changeState = function (prop) {
  return function (value) {
    return function (state) {
      return {
        ...state,
        [prop]: (state[prop] || 0) + value,
      };
    };
  };
};

const storeState = function () {
  // currentState object save properties:
  // We use 'let' because the currentState will be mutated
  // each time the inner function is called
  let currentState = {};
  // Our inner function takes a function that will specify
  // the exact change that should be made to our currentState:
  // ie, blueFood
  return function (stateChangeFunction) {
    // Instead of mutating currentState,
    // we will save the new state in a constant:
    const newState = stateChangeFunction(currentState); // we call line 17 of a specific changeState function! (ie, blueFood(currentState))
    // We 'break the rules' and update currentState,
    // by making a copy of newState and assigning it to currentState:
    currentState = { ...newState };

    return newState;
  };
};

// We store our function in another constant:
// Here, we invoke storeState and create a CLOSURE over
// the currentState variable in the outer function.
const stateControl = storeState();
// Individual Plants
const plantPhil = storeState();
const plantLucas = storeState();
const plantGenevieve = storeState();

// -------------------------------------------------------------------------------------------------------------
// New functions we make with our function factory:
const feed = changeState("soil");
const hydrate = changeState("water");
const giveLight = changeState("light");
// Different kinds of soil / feed:
const roadSideDirt = feed(1);
const cowManure = feed(5);
const superiorGuano = feed(10);
// More specific functions we can make with our function factory:
const blueFood = changeState("soil")(5);
const superWater = changeState("water")(5);
// -------------------------------------------------------------------------------------------------------------

// Let's try passing one of our feeding functions into stateControl:
// const fedPhil = stateControl(blueFood);
console.log("First feeding: ");
console.log(stateControl(blueFood));

// const fedPhilAgain = stateControl(blueFood);

console.log("Second feeding: ");
console.log(stateControl(blueFood));

// stateControl:
// When we pass blueFood into stateControl, it invokes
// the inner function inside storeState():
// let currentState = {};
// // blueFood is passed in as an argument for the stateChangeFunction parameter.
// return function (blueFood) {
//   const newState = blueFood(currentState); // this does not directly update currentState
//   // newState is "currentState" plus any modifications via blueFood.
//   currentState = { ...newState };

//   return newState;
// };

// when blueFood(currentState) is called, it invokes the following function:
//
// function(currentState) {
//  ...currentState,
//  ["soil"]: (currentState["soil"] || 0) + 5
// }

// currentState is passed into the state parameter, because currentState
// doesn't have a soil property yet, it defaults to 0 before 5 is added.

// abilities
const breatheFire = function (plant) {
  const obj = {
    fire: function (soil) {
      //line 61/57/20
      return `The ${plant} uses the ${soil} to generate fire.`;
    },
  };
  return obj;
};
