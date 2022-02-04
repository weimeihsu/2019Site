var anim = document.getElementById('anim');
var animation = bodymovin.loadAnimation({
    wrapper: anim,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'data.json'
  });

  var header = document.getElementById('header');
  var animation = bodymovin.loadAnimation({
      wrapper: header,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'data-header.json'
    });