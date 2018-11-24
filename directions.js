var directions = {
  RIGHT: {
    text: 'right',
    placeNewHead: function(head, snakeSize) {
      return {
        x: head.x + snakeSize,
        y: head.y
      };
    },
    calculateNewRectParams: function(rect, snakeSize, stepSize) {
      return {
        newX: rect.x + stepSize,
        newY: rect.y,
        xSize: stepSize,
        ySize: snakeSize
      };
    },
    animationStartPoint(rect) {
      return rect;
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
    calculateNewRectParams: function(rect, snakeSize, stepSize) {
      return {
        newX: rect.x,
        newY: rect.y + stepSize,
        xSize: snakeSize,
        ySize: stepSize
      };
    },
    animationStartPoint(rect) {
      return rect;
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
    calculateNewRectParams: function(rect, snakeSize, stepSize) {
      return {
        newX: rect.x + snakeSize - stepSize,
        newY: rect.y,
        xSize: stepSize,
        ySize: snakeSize
      };
    },
    animationStartPoint(rect, snakeSize) {
      return {
        x: rect.x + snakeSize,
        y: rect.y
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
    calculateNewRectParams: function(rect, snakeSize, stepSize) {
      return {
        newX: rect.x,
        newY: rect.y + snakeSize - stepSize,
        xSize: snakeSize,
        ySize: stepSize
      };
    },
    animationStartPoint(rect, snakeSize) {
      return {
        x: rect.x,
        y: rect.y + snakeSize
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

// FIXME: მარტო ზემოთ და მარცხნივ წასვლაზე აქვს შეცდომები და შემობრუნებზე კიდე. ამ ფუნქციის ბაგი იქნება.
function calculateDirection(startPoint, nextPoint) {
  if (startPoint.y === nextPoint.y && startPoint.x === nextPoint.x) return null;

  if (startPoint.y === nextPoint.y)
    return startPoint.x <= nextPoint.x ? directions.RIGHT : directions.LEFT;

  return startPoint.y <= nextPoint.y ? directions.DOWN : directions.UP;
}
