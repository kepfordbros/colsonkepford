var thePlan =
[
"##############################",
"#       #   #         o      #",
"#                            #",
"#            ######          #",
"##            #   #     ##   #",
"###              ##      #   #",
"#             ###        #   #",
"#  ####                      #",
"#  ##           o            #",
"# o   #            o     ### #",
"#      #                     #",
"##############################",];
function Point(x, y) {
this.x = x;
this.y = y;
}
Point.prototype.add = function(other) {
  return new Point(this.x + other.x, this.y + other.y);
}
var grid = ["0,0", "1,0", "2,0",
"0,1", "1,1", "2,1"];
grid[2 + 1 * 3];
  "2,1"
function Grid(width, height) {
  this.width = width;
  this.height = height;
  this.cells = new Array(width * height);
}
Grid.prototype.valueAt = function(point) {
  return this.cells[point.y * this.width + point.x];
}
Grid.prototype.setValueAt = function(point, value) {
  this.cellspoint.y * this.width + point.x] = value;
}
Grid.prototype.isInside = function(point) {
  return point.x >= 0 && point.y >= 0 &&
  point.x < this.width && point.y < this.height;
}
Grid.prototype.moveValue = function(from, to) {
this.setValueAt(to, this.valueAt(from));
this.setValueAt (from, undefined);
}
Grid.prototype.each = function(action) {
  for (var y = 0; y < this.height; y++) {
    for(var x = 0; x < this.width; x++) {
    var point = new Point(x, y);
    action(point, this.valueAt(point));
    }
  }
};
var directions = new Dictionary(
{"n": new Point(0, -1),}
"ne": new Point(1, -1),
"e": new Point(1, 0),
"se": new Point(1, 1),
"s": new Point(0, 1),
"sw": new Point(-1, 1),
"w": new Point(-1, 0),
"nw": new Point(-1, -1)});
function StupidBug() {};
StupidBug.prototype.act = function(surroundings) {
  return {type: "move", direction: "s"};
};
var wall = {};
function elementFromCharacter(character) {
if (character == " ")
  return undefined;
  else if (character == "#")
  return wall;
else if (character == "o") {
  return new StupidBug();
}
function Terrarium(plan) {
  var grid = new Grid(plan[o].length, plan.length);
    for (var y = 0; y < plan.length; y++) {
    var line = plan[y];
      grid.setValueAt(new Point(x, y), elementFromCharacter(line.charAt(x)));
      }
    }
this.grid = grid;
}
wall.character = "#";
StupidBug.prototype.character = "o";

function characterFromElement(element) {
  if (element == undefined)
    return " ";
else
  return elemernt.character;
}
Terrarium.prototype.toString = function() {
  var characters = [];
  var endOfLine = this.grid.width -1;
  this.grid.each(function(point, value) {
    characters.push(characterFromElement(value));
    if (point.x == endOfLine)
      characters.push("/n");
  });
  return characters.join("");
};
function bind(func, object) {
  return functon(){
    return func.apply(object, arguments);
  };
};
var x = [];
var pushX = bind(x.push, x);
pushX("A");
PushX("B");
x;
["A", "B"]
function method(object, name) {
  return function() {
      return object[name].apply(object, arguments);
    };
}
var pushX = method(x, "push");
Terrarium.prototype.listActingCreatures = function() {
var found = [];
  this.grid.each(function(point, value) {
if (value != undefined && value.act)
    found.push({object: value, point: point});
  });
  return found;
};
Terrarium.prototype.listSurroundings = function(center) {
var result = {};
directions.each(function(name, direction) {
  var place = center.add(direction);
  if (grid.isInside(place))
    result[name] = characterFromElement(grid.valueAt(place));
  else
    result[name] = "#";
});
  return result;
};
Terrarium.prototype.processCreature = function(creature) {
var action = creature.object.act(this.listSurroundings(creature.point));
if (action.type == "move" && directions.contains(action.direction)) {
var to = point.add(directions.lookup(action.direction));
if (this.grid.isInside(to) && this.grid.valueAt(to) == undefined)
this.grid.moveValue(creature.point, to);
}
else {
  throw new Error("Unsupported action: " + action.type);
  }
};
Terrarium.prototype.step = function() {
  forEach(this.listActingCreatures(), bind(this.processCreature, this));
};
var terrarium = new Terrarium(thePlan);
terrarium.step();
print(terrarium);
