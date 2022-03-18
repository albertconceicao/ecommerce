ShowOverlay();
$.ajax({
    type: "POST",
        beforeSend: function (request) {
            request.setRequestHeader("X- Client-Id", btoa("03280774535"));
            request.setRequestHeader("Content-Type", "application/json");
        },
        url: "https://api.mithra.com.br/mithra/v1/auth",
        xhrFields: {
            withCredentials: true
        },
        data: JSON.stringify(login),
        processData: false,
        success: function (msg) {
            HideOverlay();
            console.log(msg);

            sessionStorage.setItem("token", msg.acces_token);
            sessionStorage.setItem("session_expires_in", msg.expires_in);

            window.location.href = 'index.html';
        },
        error: function (xhr, ajaxOptions, thrownError) {
            HideOverlay();
            let json = xhr.responseJSON;
            if (json !== undefined) {
                alert(json.message);
            } else {
                alert(thrownError);
            }
        }

})

function login() {
    let login = {
        username: $("#username").val(),
        password: $("#password").val()
    }
}
