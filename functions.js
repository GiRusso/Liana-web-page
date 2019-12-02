    
//numbers animation
$('.count').each(function() {
  $(this).prop('Counter', 0).animate({
    Counter: $(this).text()
}, {
  duration: 2000,
  easing: 'swing',
  step: function(now) {
    $(this).text(Math.ceil(now));
    }
  });
});

// form validation
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

//rss feed
var feedURL = "https://www.lianatech.com/blog.rss";
$.ajax({
  type: 'GET',
  url: "https://api.rss2json.com/v1/api.json?rss_url=" + feedURL,
  dataType: 'jsonp',
  success: function(data) {
    //console.log(data);
    var item = data.items;
    
    document.getElementById("time1").innerHTML = item[0].pubDate;
    document.getElementById("title1").innerHTML += "<a href='"+item[0].link+"'>"+item[0].title+"</a>";

    document.getElementById("time2").innerHTML = item[1].pubDate;
    document.getElementById("title2").innerHTML += "<a href='"+item[1].link+"'>"+item[1].title+"</a>";

    document.getElementById("time3").innerHTML = item[2].pubDate;
    document.getElementById("title3").innerHTML += "<a href='"+item[2].link+"'>"+item[2].title+"</a>";
  }
});