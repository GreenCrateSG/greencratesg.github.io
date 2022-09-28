
// When the user clicks on <div>, open the popup
function togglePopupOne(){
    document.getElementById("popup-1").classList.toggle("active");
  }

function togglePopupTwo(){
    document.getElementById("popup-2").classList.toggle("active");
  }

// window.addEventListener('mouseup', function(event){
//   var box = document.getElementById("popup-1");
//   if(event.target != box){
//     document.getElementById("popup-1").classList.toggle("active");
//   }
// });