// Connection string
const channel = "ws://websocketdev.rtw.no/DOMAIN/SERVICE/INSTANCE/channel"
// Token
const token = "aToken_XXXXXXXXXX"
// Create new instance of WebSocket
const ws_channel = new WebSocket(channel)

/*
  Connect to WebSocket and send token when connected
  Try to reconnect every second
*/
ws_channel.on('open', function open() {
  console.log('Connected to WebSocket!')
  ws_channel.send('{"token":"'+token+'"}')
  console.log('Token has been sendt')
})

/*
  Add event listener
  When data received, converting it in to a JS object
*/
ws_channel.onmessage = function(event){
  const data = JSON.parse(event.data)
  const element = document.getElementById("hello-world")
  element.textContent = data.RTW.STRING
}
