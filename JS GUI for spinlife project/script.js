
function checkboxOne() {
    var checkbox = document.getElementById('one');

    if(checkbox.checked) {
        console.log('Checkbox has been checked');
       // alert('Выбран');
    } else {
      console.log('Checkbox deactivated');  
     //alert('Не выбран');
    }
}

function radioButton(){
    var radio = document.getElementsByName('r1');
    for( var i = 0; i < radio.length; i ++) {
        if(radio[i].checked){
            console.log(`Chosen ${i + 1} element`);
        }
    }
}

function mySelect(){
  var selector = document.getElementById('mySelect').selectedIndex;
  var options = document.getElementById('mySelect').options;
  console.log('chosen ' + options[selector].text);
}

function range() {
    var range = document.getElementById('range');
    // var p = document.getElementById('paragraph');
    var input = document.getElementById('text_for_range');
    //p.innerHTML = range.value;
    input.value = range.value;
    input.style.width = range.value + 'px';

}

function cssRange() {
  var rtl = document.getElementById('rtl').value;
  var rtr = document.getElementById('rtr').value;  
  var rbr = document.getElementById('rbr').value;
  var rbl = document.getElementById('rbl').value;

  var ttl = document.getElementById('ttl');
  var ttr = document.getElementById('ttr');  
  var tbr = document.getElementById('tbr');
  var tbl = document.getElementById('tbl');

  var block = document.getElementById('block');

  ttl.value = rtl;
  ttr.value = rtr;
  tbr.value = rbr;
  tbl.value = rbl;

  block.style.borderRadius = rtl +'px ' + rtr + 'px ' + rbr + 'px ' + rbl + 'px';
}


    var modal = document.getElementById('myModal');
    var btn = document.getElementById('myBtn');
    var span = document.getElementsByClassName('close')[0];

    btn.onclick = function () {
        modal.style.display = 'block';
    }
    span.onclick = function () {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if(event.target == modal) {
            this.modal.style.display = "none";
        }
    }

    function myMove(){
        var element = document.getElementById('myAnimation');
        var position = 0;
        var id = setInterval(frame, 10);
        function frame() {
            if(position == 350) {
                clearInterval(id);
            } else {
                position ++;
                element.style.top = position + 'px';
                element.style.left = position + 'px';
            }
        }
    }

    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n){
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n){
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");

        if (n > slides.length){
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (i=0; i < slides.length; i++){
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace("active", "");
        }

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += "active";



    }