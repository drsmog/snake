var directions = {
  RIGHT: {
    text: 'right',
    placeNewHead: function(head, snakeSize) {
      return {
        x: head.x + snakeSize,
        y: head.y
      };
    },
    calculateRectParams: function(snakeSize, stepSize) {
      return {
        xChange: 0 + stepSize,
        yChange: 0,
        xSize: stepSize,
        ySize: snakeSize
      };
    }
  },
  DOWN: {
    text: 'down',
    placeNewHead: function(head, snakeSize) {
      return {
        x: head.x,
        y: head.y + snakeSize
      };
    },
    calculateRectParams: function(snakeSize, stepSize) {
      return {
        xChange: 0,
        yChange: 0 + stepSize,
        xSize: snakeSize,
        ySize: stepSize
      };
    }
  },
  LEFT: {
    text: 'left',
    placeNewHead: function(head, snakeSize) {
      return {
        x: head.x - snakeSize,
        y: head.y
      };
    },
    calculateRectParams: function(snakeSize, stepSize) {
      return {
        xChange: 0 - stepSize,
        yChange: 0,
        xSize: stepSize,
        ySize: snakeSize
      };
    }
  },
  UP: {
    text: 'up',
    placeNewHead: function(head, snakeSize) {
      return {
        x: head.x,
        y: head.y - snakeSize
      };
    },
    calculateRectParams: function(snakeSize, stepSize) {
      return {
        xChange: 0,
        yChange: 0 - stepSize,
        xSize: snakeSize,
        ySize: stepSize
      };
    }
  }
};

var directionsDict = {
  'right': directions.RIGHT,
  'down': directions.DOWN,
  'left': directions.LEFT,
  'up': directions.UP
};

Object.freeze(directions);

function chooseDirection(keyCode) {
  switch (event.keyCode) {
    case 37:
      //left
      return directions.LEFT;
    case 38:
      //up
      return directions.UP;
    case 39:
      //right
      return directions.RIGHT;
    case 40:
      //down
      return directions.DOWN;
  }

  return null;
}
