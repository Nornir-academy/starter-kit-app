# [Starter Kit App](https://nornir-academy.github.io/starter-kit-app/)
This is a simple client-side app for bidirectional communication using RTW. You
can receive and send data back to device. Before using it make sure that:
- you have registered and created a service on cioty.com
- starter kit is connected to a WiFi network

## Connection
To receive data use this string
```
"ws://websocket.rtw.no/DOMAIN/SERVICE/INSTANCE/channel"
```
where:
- DOMAIN name that you get after registration for example: student
- SERVICE name that you have created for example: message
- INSTANCE should be a number for example: 2

After it should look like this:
```
"ws://websocket.rtw.no/student/message/2/channel"
```

To send data it is almost the same string where on the end instead of channel
is a string.
```
"ws://websocket.rtw.no/DOMAIN/SERVICE/INSTANCE/string"
```

Also, you need a token to secure connection:
```
"aToken_417dcb08da9034cb9ea248b20a85131024508b5eedfg2ec7e74a2f7aaa7f8977"
```
You should get it together with student kit.

### IMPORTANT!!
Token is a part of security and therefor don't share it with anyone. Never
upload code containing token to any source. You can clone this repository and
run code locally using your browser. If you want run your app on server you need
to handle security on server side.

## Features
Now when everything is connected you should:
- Receive message "Hello World"
- Monitor battery life
- Turn on/off light
- Send message which should appear on device display

## Additional
This App is just an example of how you can communicate with the device. It's
not the only way, therefore, you can build new features on top of that. Below you
will find links for other tutorials that will help you freely create custom apps
and manipulate data as you wish.

## Links
- Link for device back-end
- Link for server-side code
