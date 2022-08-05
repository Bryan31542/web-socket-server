// Html refs
const lblOnline = document.querySelector("#lblOnline");
const lblOffline = document.querySelector("#lblOffline");

const socket = io();

socket.on("connect", () => {
  console.log("Connected");

  lblOffline.style.display = "none";
  lblOnline.style.display = "";
});

socket.on("disconnect", () => {
  console.log("Disconnected");
  lblOffline.style.display = "";
  lblOnline.style.display = "none";
});
