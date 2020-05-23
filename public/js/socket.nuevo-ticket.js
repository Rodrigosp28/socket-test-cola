


// comando para establecer la conexion
var socket = io();
var label = $('#lblNuevoTicket');

socket.on('connect',function(){
  console.log('conectado con el servidor');
});

socket.on('disconnect', function(){
  console.log('desconectado del servidor');
});

socket.on('estadoActual',function(data){
  label.text(data.actual);
});

$('#btn').on('click', function(){
  socket.emit('siguienteTicket',null,function(siguienteTicket) {
    label.text(siguienteTicket);
    console.log(siguienteTicket);
  });
  // console.log('hello');
});