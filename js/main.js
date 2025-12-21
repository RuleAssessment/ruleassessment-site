(function () {
  var y = new Date().getFullYear();
  var nodes = document.querySelectorAll("#year");
  for (var i = 0; i < nodes.length; i++) nodes[i].textContent = String(y);
})();
