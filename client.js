// Connection string
const channel = "ws://websocketdev.rtw.no/DOMAIN/SERVICE/INSTANCE/channel"
// Token
const token = "aToken_XXXXXXXXXXXXXXXXXX"
// Create new instance of WebSocket
const ws_channel = new WebSocket(channel)

/*
  Add event listener
  When WebSocket is open it will send token
*/
ws_channel.onopen = function() {
  console.log('Connected to WebSocket!')
  ws_channel.send('{"token":"'+token+'"}')
  console.log('Token has been sendt')
}

/*
  Add event listener
  When data received, converting it in to a JS object
*/
ws_channel.onmessage = function(event){
  const data = JSON.parse(event.data)
  selectData(data)
}

// Select DOM elements
const messageElement = document.getElementById("hello-world")
const batteryNumberElement = document.getElementById("battery-number")
const batteryProgressElement = document.getElementById("battery-progress")

// Selecting needed values from data object
function selectData(data) {
  const message = data.RTW.STRING
  const battery = data.RTW.BATTERY
  printMessage(message)
  batteryLife(battery)
}

// Display received message on a web page
function printMessage(message) {
  messageElement.textContent = message
}

// Display battery life as a number and as a progress bar on a web page
function batteryLife(battery) {
  batteryNumberElement.textContent = batteryPercent(battery)+"%"
  batteryProgressElement.style.width = batteryPercent(battery)+"%"
}

// Calculating current battery power in percent
function batteryPercent(battery) {
  return battery / 3.7 * 100
}
