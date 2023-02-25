// Select color input
// Select size input
var height, table, width, color;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event) {
    event.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWidth').val();

    makeGrid(height, width);
    //table=document.getElementById('pixelcanvas');
    //console.log('Height:' + height +' and width: ' + width);
})
$(document).ready(function() {
    makeGrid(10,10);
	// add color to cell


});
$(document).on('click', 'td', function (event) {
   color = $('#colorPicker').val();
	console.log($('#colorPicker').val());

    if($(this).attr('style')) {
        $(this).removeAttr('style')
    } else {
        $(this).attr('style', 'background-color:' +color);
    }
})
function makeGrid(x, y) {
$('tr').remove();


// Your code goes here!
for (var i = 1; i <=x; i++) {
    $('#pixelCanvas').append('<tr id="table' +i+'"></tr>');
    for (var j = 1; j <=y; j++) {
        $('#table'+i).append('<td></td>'); 
        console.log(x ,y);

    }
}
} 
//for(let i=0;i<=x;i++){
  //  let row=table.insertRow(i);
    //for(let j=0; j<=width;j++){
      //  let cell=row.insetcell(j);
        //cell.addEventListener('click',function changecolor(){
         //event.preventDefault();
         //cell.style.backgroundcolor=color;
        //})
   //     }
    //}
//}










