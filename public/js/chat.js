const socket = io();


$('#send-msg-btn').click(()=> {
     
    const textMsg = $('#msg-text').val();

    socket.emit('send-msg', {
        user: currentUser,
        msg: textMsg
    })


    $('#msg-text').val("");
})

socket.on('received-msg', (data) =>{
    $('#all-msg-container').append(`<li> ${data.user} says --> ${data.msg}</li>`);
})

