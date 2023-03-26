// Connect to server using socket.io
const socket = io("http://localhost:3000");

// Listen for messages from the server
socket.on("message", (message) => {
  const messageList = document.getElementById("message-list");
  const listItem = document.createElement("li");
  listItem.textContent = message;
  messageList.appendChild(listItem);
  console.log(`Received message from server: ${message}`);
});

socket.on("connect", () => {
  console.log("Connected to server.");
});
