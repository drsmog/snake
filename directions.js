var directions = {
  RIGHT: {
    text: 'right',
    placeNewHead: function(head, snakeSize) {
      return {
        x: head.x + snakeSize,
        y: head.y
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
    }
  },
  LEFT: {
    text: 'left',
    placeNewHead: function(head, snakeSize) {
      return {
        x: head.x - snakeSize,
        y: head.y
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
    }
  }
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
