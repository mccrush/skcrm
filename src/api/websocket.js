export const websocket = () => {

  // Создаёт WebSocket - подключение.
  const socket = new WebSocket("ws://testws.na4u.ru/config/db_connect.php");

  console.log('socket = ', socket);

  // Соединение открыто
  socket.addEventListener("open", function (event) {
    socket.send("Hello Server!");
  });

  // Наблюдает за сообщениями
  socket.addEventListener("message", function (event) {
    console.log("Message from server ", event.data);
    return 'Connect is success';
  });

}