# Nornir Academy Starter Kit Tutorial
This is a simple app for bidirectional communication using RTW. Before using it
make sure that:
- you have registered and created a service on cioty.com
- starter kit is connected to a WiFi network

## Connection
To receive data use this string
'''
"ws://websocket.rtw.no/DOMAIN/SERVICE/INSTANCE/channel"
'''
where:
- DOMAIN name that you get after registration for example: student
- SERVICE name that you have created for example: message
- INSTANCE should be a number for example: 2

After it should look like this:
'''
"ws://websocket.rtw.no/student/message/2/channel"
'''

To send data it is almost the same string
'''
"ws://websocket.rtw.no/DOMAIN/SERVICE/INSTANCE/string"
'''
where: on the end instead of channel is a string.

Also, you need a token to secure connection:
'''
"aToken_417dcb08da9034cb9ea248b20a85131024508b5eedfg2ec7e74a2f7aaa7f8977"
'''
You should get it together with student kit.

## Features
Now when everything is connected you should:
- Receive message "Hello World"
- Monitor battery life
- Turn on/off light
- Send message which should appear on device display
