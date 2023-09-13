from socket import socket, AF_INET, SOCK_STREAM

server_name = 'localhost'
server_port = 12000

client_socket = socket(AF_INET, SOCK_STREAM)
client_socket.connect((server_name, server_port))

msg = input('Entre minúsculas \n')

client_socket.send(msg.encode())
msg_modificada = client_socket.recv(1024)

print(msg_modificada.decode())
client_socket.close()