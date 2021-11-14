$(document).ready(function(){
    //alert("hello");
    var databaseId = "9737653f-da86-44b1-968e-8bcaf8be06ba";
    var token = "secret_lJj3ZfB62VLsgEgvKIHy7sWzhL8Wo9PEUWVnSRcwYUc";

    $.ajax({
        type: "POST",
        url: "https://keiyin.tk/notionBestSeller",
        headers: {
            "Authorization": "Bearer "+token,
            "Notion-Version": "2021-08-16"
        },
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function(data){
            alert(data);
        },
        error: function(data){
            alert(data.statusText);
        },
        cache:"false"
    })
});