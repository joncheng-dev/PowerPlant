import { changeState, storeState, breatheFire, giveName } from "./../src/js/plant.js";

describe("changeState", () => {
  test("upon currying the function, it would take in 3 parameters, 'soil', 10, and an empty object, and return an object with property key-value pair 'soil: 10'", () => {
    //Arrange
    const feed = changeState("soil")(10);
    //Act
    const feedUpdateState = feed({});
    //Assert
    expect(feedUpdateState).toEqual({ soil: 10 });
  });

  test("should store initial state in an empty object", () => {
    // Arrange
    const aBrownBox = storeState();
    // Act
    const emptyBox = aBrownBox();
    // Assert
    expect(emptyBox).toEqual({});
  });
});
