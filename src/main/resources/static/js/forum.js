function post() {
    var questionId = $("#question_id").val();
    var content = $("#comment_content").val();
    commentToTarget(questionId, 1, content);
}
function commentToTarget(targetId, type, content) {
    if (!content) {
        alert("content can not be empty");
        return;
    }

    $.ajax({
        type: "POST",
        url: "/comment",
        contentType: 'application/json',
        data: JSON.stringify({
            "parentId": targetId,
            "content": content,
            "type": type
        }),
        success: function (response) {
            if (response.code == 200) {
                window.location.reload();
            } else {
                if (response.code == 2003) {
                    var isAccepted = confirm(response.message);
                    if (isAccepted) {
                        window.open("https://github.com/login/oauth/authorize?client_id=Iv1.6fcf47f2a229f736&redirect_uri=http://localhost:5000/callback&scope=user&state=1");
                        window.localStorage.setItem("closable", true);
                    }
                } else {
                    alert(response.message);
                }
            }
        },
        dataType: "json"
    });
}

function comment(e) {
    var commentId = e.getAttribute("data-id");
    var content = $("#input-" + commentId).val();
    commentToTarget(commentId, 2, content);
}

// toggle second level comments
function collapseComments(e) {
    var id = e.getAttribute("data-id");
    var comments = $("#comment-" + id);

    // collapse or not
    var collapse = e.getAttribute("data-collapse");
    if (collapse) {
        // collapse second level comments
        comments.removeClass("in");
        e.removeAttribute("data-collapse");
        e.classList.remove("active");
    } else {
        $.getJSON("/comment/" + id, function (data) {
            console.log(data);

            // show second level comments
            comments.addClass("in");
            // set collapse status
            e.setAttribute("data-collapse", "in");
            e.classList.add("active");
        });
    }
}