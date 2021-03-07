


Pts.quickStart("#pt", "#252934");



(function () {
  var pts = new Group();

  space.add({
    // creatr 200 random points
    start: (bound) => {
      pts = Create.distributeRandom(space.innerBound, 100);
    },

    animate: (time, ftime) => {
      // make a line and turn it into an "op" (see the guide on Op for more)
      let perpend = new Group(space.center.$subtract(0.1), space.pointer).op(
        Line.perpendicularFromPt
      );
      pts.rotate2D(0.0005, space.center);

      pts.forEach((p, i) => {
        // for each point, find the perpendicular to the line
        let lp = perpend(p);
        var ratio = Math.min(
          1,
          1 - lp.$subtract(p).magnitude() / (space.size.x)
        );
        form.stroke(`rgba(119,136,153,${ratio}`, ratio ).line([p, lp]);
        form.fillOnly(["#f03", "#09f", "#0c6"][i % 3]).point(p, 1);
      });
    },
  });

  //// ----

  space.play();
})();
