$(document).ready(function() {
    $("#btn-signin").click(function() {
        const url = "/login";
        var data = {
            Oname: $("#lgn-Oname").val(),
            pwd: $("#lgn-password").val()
        }
        $.post(url, data, function(res, status) {
            swal("Oh yes!", res.msg, res.code);
        });
    });
});