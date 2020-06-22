// Connection string
const channel = "ws://websocketdev.rtw.no/ACADEMY3/HelloWorld/2/channel"
// Token
const token = "aToken_417dcb08da9034cb9ea248b20a85161024508b5ee4052ec7e74a2f7aaa7f8977"
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
