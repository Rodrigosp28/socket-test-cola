
var socket = io();

var searchParams = new URLSearchParams(window.location.search);

if(!searchParams.has('escritorio')){
  window.location = 'index.html';
  throw new Error('el escritorio es necesario');
}

var escritorio = searchParams.get('escritorio');
var label = $('small');
console.log(escritorio);
$('h1').text('Escritorio: ' + escritorio);

$('button').on('click',function() {
  socket.emit('atenderTicket',{
    escritorio:escritorio
  },function(resp){
    if(resp.numero){
      label.text('ticket numero: '+ resp.numero);
      return;
    }
    alert('no hay mas tickets');
    label.text('no hay mas tickets');
    console.log(resp);
  });
});