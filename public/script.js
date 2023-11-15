const socket = io("/");

const userName = prompt("Enter Your Name");

$(function () {
    $("#send").click(function () {
        if ($("#chat_message").val().length !== 0) {
            console.log(user);
            socket.emit("message", $("#chat_message").val(), userName);
            $("#chat_message").val("");
        }
    })
    $("#chat_message").keydown(function (e) {
        if (e.key == "Enter" && $("#chat_message").val().length !== 0) {
            socket.emit("message", $("#chat_message").val(), userName);
            $("#chat_message").val("");
        }
    })
})

socket.on("createMessage", (message, userName) => {
    $(".messages").append(`
        <div class="message">
            <span class="username" >${userName} : </span>
            <span>${message}</span>
        </div>
    `)
});