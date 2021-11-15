$(document).ready(function(){

    $.urlParam = function(name){
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (results==null){
           return null;
        }
        else{
           return results[1] || 0;
        }
    }
    var id = parseInt($.urlParam("id"));
    var url = $.urlParam("url");
    var data = {
        "filter":{
            "property":"Id",
            "number":{
                "equals":id
            }
        }
    };
    
    $.ajax({
        type: "POST",
        url: "https://pickkabook.tk/"+url,
        headers: {
            "Notion-Version": "2021-08-16"
        },
        data:JSON.stringify(data),
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function(data){
            var book = data.results;
            $("#bookImage").attr("src",book[0].properties.Image.files[0].file.url);
            $(".single-product-details > h2").html(book[0].properties.Name.title[0].plain_text);
            $(".product-description").html(book[0].properties.Description.rich_text[0].plain_text);
            $(".product-price").html(book[0].properties.Price.number);
        },
        error: function(data){
            console.log(data.statusText);
        },
        cache:"false"
    })
});
