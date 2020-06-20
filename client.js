// Connection string
const channel = "ws://websocket.rtw.no/DOMAIN/SERVICE/INSTANCE/channel"
// Token
const token = "aToken_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
// Create new instance of WebSocket
const ws_channel = new WebSocket(channel)

connection()

/*
  Connect to WebSocket and send token when connected
  Try to reconnect every second
*/
function connection(){
  if(ws_channel.readyState === 1){
    console.log("Connected to WebSocket!")
    ws_channel.send('{"token":"'+token+'"}')
    console.log("Token has been sendt")
  }else{
    setTimeout(function(){
      console.log("Reconnecting")
      connection()
    }, 1000)
  }
}

/*
  Add event listener
  When data received, converting it in to a JS object
*/
ws_channel.onmessage = function(event){
  const data = JSON.parse(event.data)
  const element = document.getElementById("hello-world")
  element.textContent = data.RTW.STRING
}
