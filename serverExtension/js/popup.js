// Connect to server using socket.io
const socket = io("http://localhost:3000");

// Send message to server when button is clicked
const sendButton = document.getElementById("send-btn");
sendButton.addEventListener("click", () => {
  const messageInput = document.getElementById("message-input");
  const message = messageInput.value;
  socket.emit("message", message);
  messageInput.value = "";
});

// Log actions to console
socket.on("connect", () => {
  console.log("Connected to server.");
});

socket.on("message", (data) => {
  console.log(`Server message: ${data}`);
});
