var x = alert("Enter Admin Password");
if(x === "Yasser"){
  SETTINGS.PLAYER.WIDTH = 50;
}
var SETTINGS = {
  
  VER : "1.0",
  WIDTH : 1200,
  HEIGHT : 800,
  BORDER_WIDTH : 0,
  BACKGROUND_COLOR : "#FFFFFF",
  PLAYER : {
    WIDTH : 20,
    HEIGHT : 165,
    GAP : 25
  },
  BALL : {
    WIDTH : 50,
    HEIGHT : 50,
  },
  NET : {
    WIDTH : 6
  },
  SCORE : {
    Y : 40,
    SIZE : 30,
    GAP : 50
  },
  EDGE_SHOOT_ANGLE_ADJUST : 10,
  EDGE_ANGLE : 6,
  STRAIGHT_ADJUST : 7,
  STRATGHT_ANGLE : 7,
  SERVE_ANGLE : 15,
  GOAL : 5
};
SETTINGS.CLIENT_SETTINGS = {
  VER : SETTINGS.VER,
  WIDTH : SETTINGS.WIDTH,
  HEIGHT : SETTINGS.HEIGHT,
  BORDER_WIDTH : SETTINGS.BORDER_WIDTH,
  BACKGROUND_COLOR : SETTINGS.BACKGROUND_COLOR,
  NET : SETTINGS.NET
};

module.exports = SETTINGS;
