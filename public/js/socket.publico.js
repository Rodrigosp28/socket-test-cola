

var socket = io();

socket.on('saludo',function(data){
  console.log(data);
});

//console.log('publico');
var label1 = $('#lblTicket1');
var label2 = $('#lblTicket2');
var label3 = $('#lblTicket3');
var label4 = $('#lblTicket4');

var escritorio1 = $('#lblEscritorio1');
var escritorio2 = $('#lblEscritorio2');
var escritorio3 = $('#lblEscritorio3');
var escritorio4 = $('#lblEscritorio4');

var labeltickets = [label1,label2,label3,label4];
var labelescritorio =[escritorio1,escritorio2,escritorio3,escritorio4];

socket.on('estadoActual',function(data){
  console.log(data);
  // labeltickets[0].text('dasdasd');
  actualizar(data.ultimos4);
});

socket.on('ultimos4',function(data){
  // console.log(data);
  // labeltickets[0].text('dasdasd');
  var audio = new Audio('audio/new-ticket.mp3');
  audio.play();
  actualizar(data.ultimos4);
});

function actualizar(ultimos4){
  // labelescritorio[0].text('asdasd');
  for(var i=0;i<=ultimos4.length-1; i++){
    labeltickets[i].text('Tickect ' + ultimos4[i].numero);
    labelescritorio[i].text('Escritorio ' + ultimos4[i].escritorio);
  }

}