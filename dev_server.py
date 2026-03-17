from livereload import Server

server = Server()
server.watch('.')
server.watch('*.html')
server.watch('*.css')
server.watch('*.js')
server.serve(root='.', port=8000, open_url_delay=2)
