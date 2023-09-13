from socket import socket, AF_INET, SOCK_DGRAM

server_name = '172.16.6.28'
server_port = 12000

client_socket = socket(AF_INET, SOCK_DGRAM)
msg = input('Digite a mensagem: \n')

client_socket.sendto(msg.encode(), (server_name, server_port))
msg_modificada, server_address = client_socket.recvfrom(2048)
print(server_address)
print(msg_modificada.decode())
client_socket.close()
