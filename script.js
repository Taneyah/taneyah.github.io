window.onload = function() {

document.getElementById("theImage").onclick = function(){
  changeImage();
}

}
var i = 0;
function changeImage (){
    var list = ["ult1.jpg", "ult2.jpg", "ult3.jpg","ilt4.jpg"]
    i++;
    if (i > 3){
      i = 0;
    }

    var newImg = list[i];
    document.getElementById("theImage").src = newImg;

  }
