angular.module("jogoDaVelha", []);
angular.module("jogoDaVelha").controller("gameController", function($scope) {
  $scope.initGame = function() {
    $scope.app = "Jogo da Velha com AngularJS - Igor Cezatte";
    $scope.fields = [
      { play: "", img: "" },
      { play: "", img: "" },
      { play: "", img: "" },

      { play: "", img: "" },
      { play: "", img: "" },
      { play: "", img: "" },

      { play: "", img: "" },
      { play: "", img: "" },
      { play: "", img: "" }
    ];
    a1 = $scope.fields[0];
    a2 = $scope.fields[1];
    a3 = $scope.fields[2];
    b1 = $scope.fields[3];
    b2 = $scope.fields[4];
    b3 = $scope.fields[5];
    c1 = $scope.fields[6];
    c2 = $scope.fields[7];
    c3 = $scope.fields[8];
    endGame = false;
    $scope.winner = "img/initial.png";
  };
  let playTime = "x";
  endGame = false;

  $scope.setValue = function(field) {
    if (endGame) {
      return;
    }
    if (field.play != "") {
      return;
    }

    if (playTime == "x") {
      field.play = "x";
      field.img = "img/x.png";
      playTime = "o";
    } else {
      field.play = "o";
      field.img = "img/circle.png";
      playTime = "x";
    }

    checkWinner();
  };
  function checkWinner() {
    winner = "";
    if (
      ((a1.play == b1.play && a1.play == c1.play) ||
        (a1.play == a2.play && a1.play == a3.play) ||
        (a1.play == b2.play && a1.play == c3.play)) &&
      a1.play != ""
    ) {
      winner = a1.play;
    } else if (
      ((b2.play == b1.play && b2.play == b3.play) ||
        (b2.play == a2.play && b2.play == c2.play) ||
        (b2.play == a3.play && b2.play == c1.play)) &&
      b2.play != ""
    ) {
      winner = b2.play;
    } else if (
      ((c3.play == b3.play && c3.play == a3.play) ||
        (c3.play == c2.play && c3.play == c1.play)) &&
      c3.play != ""
    ) {
      winner = c3.play;
    }

    if (
      a1.play != "" &&
      a2.play != "" &&
      a3.play != "" &&
      b1.play != "" &&
      b2.play != "" &&
      b3.play != "" &&
      c1.play != "" &&
      c2.play != "" &&
      c3.play != ""
    ) {
      $scope.winner = "img/empate.png";
    }

    if (winner == "x") {
      $scope.winner = "img/x.png";
    } else if (winner == "o") {
      $scope.winner = "img/circle.png";
    }

    if (winner != "") {
      endGame = true;
    }
  }
});
