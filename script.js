//filter by id
function pp() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("id");
  filter = input.value;
  ul = document.getElementById("phunky-list");
  li = ul.getElementsByTagName("p");

  for (i = 0; i < li.length; i++) {
    txtValue = li[i].innerText;
    if (txtValue.indexOf(filter) > -1) {
      li[i].parentNode.style.display = "";
    } else {
      li[i].parentNode.style.display = "none";
    }
  }
}

//reset trait filer selection
function reset(x) {
      var selectElement = document.getElementById(x)
        selectElement.selectedIndex = 0;
}

//trait filtering 
$('select').on('change', function() {
  var d = $(this).attr('id');
  var c = `${d}hide`
  var v = (this.value);
  var ul = document.getElementById("phunky-list");
  var li = ul.getElementsByClassName("phunk-wrapper");

  for (i = 0; i < li.length; i++) {
    var txtValue = li[i].getAttribute(d);
    var p = li[i]

    if (txtValue == v) {
      $(p).removeClass(c)

    } else {
      $(p).addClass(c); 
    }
  }
});

//clear trait filtering
function clr(x) {
  var f = $(x).parent().parent().children().first().attr('id');
  $('.phunk-wrapper').removeClass(`${f}hide`);
} 