/*
  Refactor to use enhanced literal notation
  const red = '#ff0000';
  const blue = '#0000ff';

  const COLORS = { red: red, blue: blue };
*/
const red = '#ff0000';
const blue = '#0000ff';

const COLORS = { red , blue };

/*
Refactor the following to use enhance object literal syntax
  const fields = ['firstName', 'lastName', 'phoneNumber'];

  const props = { fields: fields };
*/
const fields = ['firstName', 'lastName', 'phoneNumber'];

const props = { fields };


/*
Refactor to use enhanced literal notation

  const canvasDimensions = function(width, initialHeight) {
    const height = initialHeight * 9 /16;
    return {
      width: width,
      height: height
    };
  }
*/
const canvasDimensions = function(width, initialHeight) {
  const height = initialHeight * 9 /16;
  return {
    width,
    height
  };
}

/*
  Refactor to use enhanced literal notation
  const color = 'red';

  const Car = {
    color: color,
    drive: function() {
      return 'Vroom!';
    },
    getColor: function() {
      return this.color;
    }
  };

*/
const color = 'red';

const Car = {
  color,
  drive() {
    return 'Vroom!';
  },
  getColor() {
    return this.color;
  }
};
