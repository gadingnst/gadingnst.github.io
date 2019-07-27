db.ref("/reports/network-programming").on("value", (dataSnap) => {
  let reportBox = $("#network-programming");
  reportBox.html(null);
  dataSnap.forEach((childSnap) => {
    let title = childSnap.child("title").val();
    let img = childSnap.child("img").val();
    let link = childSnap.child("link").val();
    let desc = childSnap.child("desc").val();
    reportBox.append(`
      <div class="box shadow box-col-4 animasi-scroll-zoom">
        <div class="report-pic">
          <img src="${img}" alt="Image Not Loaded">
        </div>
        <div class="report-desc">
          <h5>${title}</h5>
          <div class="line-kontainer-small"></div>
          <p>${desc}</p>
          <a rel="noopener" class="r-button" target="_blank" href="${link}">
            <i class="fa fa-eye"></i>&nbsp;Read More
          </a>
        </div>
      </div>
    `);
  });
  animate();
});
