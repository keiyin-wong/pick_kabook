$(document).ready(function(){
    var token = "secret_lJj3ZfB62VLsgEgvKIHy7sWzhL8Wo9PEUWVnSRcwYUc";

    $.urlParam = function(name){
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (results==null){
           return null;
        }
        else{
           return results[1] || 0;
        }
    }
    var name = $.urlParam("name");
    var data = {
        "filter":{
            "property":"Name",
            "text":{
                "equals":name
            }
        }
    };
    
    $.ajax({
        type: "POST",
        url: "https://pickkabook.tk/notionBestSeller",
        headers: {
            "Authorization": "Bearer "+token,
            "Notion-Version": "2021-08-16"
        },
        data:JSON.stringify(data),
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function(data){
            alert(data);
        },
        error: function(data){
            console.log(data.statusText);
        },
        cache:"false"
    })
});