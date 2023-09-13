from socket import socket, AF_INET, SOCK_DGRAM

server_port = 12000

server_socket = socket(AF_INET, SOCK_DGRAM)

server_socket.bind(('', server_port))

print('Servidor pronto!')

while True:
    msg, client_adress = server_socket.recvfrom(2048)
    msg = msg.decode()
    if 'calcular' in str(msg.lower()):
        msg_modificada = str(eval(str(msg.lower()).replace('calcular ', '')))
    else:
        msg_modificada = f'{msg.upper()} + {5+89}'
    server_socket.sendto(msg_modificada.encode(), client_adress)


