// Html refs
const lblOnline = document.querySelector("#lblOnline");
const lblOffline = document.querySelector("#lblOffline");

const btnSend = document.querySelector("#btnSend");
const txtMessage = document.querySelector("#txtMessage");

const socket = io();

socket.on("connect", () => {
  // console.log("Connected");

  lblOffline.style.display = "none";
  lblOnline.style.display = "";
});

socket.on("disconnect", () => {
  // console.log("Disconnected");
  lblOffline.style.display = "";
  lblOnline.style.display = "none";
});

socket.on("send-message", (payload) => {
  console.log(payload);
});

btnSend.addEventListener("click", () => {
  const message = txtMessage.value;

  const payload = {
    message,
    id: "123",
    timestamp: Date.now(),
  };

  socket.emit("send-message", payload);
});
