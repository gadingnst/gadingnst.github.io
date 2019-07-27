"use strict";

db.ref("/reports/network-programming").on("value", function (dataSnap) {
  var reportBox = $("#network-programming");
  reportBox.html(null);
  dataSnap.forEach(function (childSnap) {
    var title = childSnap.child("title").val();
    var img = childSnap.child("img").val();
    var link = childSnap.child("link").val();
    var desc = childSnap.child("desc").val();
    reportBox.append("\n      <div class=\"box shadow box-col-4 animasi-scroll-zoom\">\n        <div class=\"report-pic\">\n          <img src=\"" + img + "\" alt=\"Image Not Loaded\">\n        </div>\n        <div class=\"report-desc\">\n          <h5>" + title + "</h5>\n          <div class=\"line-kontainer-small\"></div>\n          <p>" + desc + "</p>\n          <a rel=\"noopener\" class=\"r-button\" target=\"_blank\" href=\"" + link + "\">\n            <i class=\"fa fa-eye\"></i>&nbsp;Read More\n          </a>\n        </div>\n      </div>\n    ");
  });
  animate();
});