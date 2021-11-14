$(document).ready(function(){
    //alert("hello");
    var databaseId = "9737653f-da86-44b1-968e-8bcaf8be06ba";
    var token = "secret_lJj3ZfB62VLsgEgvKIHy7sWzhL8Wo9PEUWVnSRcwYUc";

    $.ajax({
        type: "POST",
        url: "https://api.notion.com/v1/databases/"+databaseId+"/query",
        beforeSend: function(request) {
            request.setRequestHeader("Authorization", "Bearer "+token);
            request.setRequestHeader("Notion-Version", "2021-08-16");
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
            request.withCredentials = true;
        },
        crossDomain: true,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        secure: true,
        success: function(data){
            alert(data);
        },
        error: function(data){
            alert(data.statusText);
        },
        cache:"false"
    })
});