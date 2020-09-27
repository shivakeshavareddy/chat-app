const http = require("http");
const app = require("../index");
const socketio = require('socket.io')

const PORT = process.env.port || 3000;

const server = http.createServer(app);

server.listen(PORT, () => console.log(`server started :: ${PORT}`));

const io = socketio(server)
let connectedUsers={}
let chatHistory = {}
io.on('connection', (socket) => {
    console.log('user connected',socket.id)
    socket.on('register', (userName)=>{
        socket.userName=userName
        connectedUsers[userName]=socket
    })

    socket.on('chat', (content)=>{
        let msg = content.msg
        let from = content.from
        let to = content.to
        // console.log(content)
        // console.log(content,connectedUsers)
        let key;
        if ((to).localeCompare(from)==-1){
            key = to+'-'+from
        }else{
            key = from+'-'+to
        }

        if (key in chatHistory){
            chatHistory[key].push({from:from,msg:msg})
        }else{
            chatHistory[key]=[{from:from,msg:msg}]
        }
        // console.log(chatHistory)
        io.to(connectedUsers[to].id).emit('chat', {from:from, msg:msg})
    })

    socket.on('chatHistory', (content)=>{
        
        let to=content.to
        let from =content.from
        let key;
        if ((to).localeCompare(from)==-1){
            key = to+'-'+from
        }else{
            key = from+'-'+to
        }
        console.log('backend chatHistory',chatHistory[key])
        io.to(connectedUsers[from].id).emit('chatHistory',chatHistory[key])

    })
    
})