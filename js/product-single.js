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
    var id =$.urlParam("id");
    // var data = {
    //     "filter":{
    //         "property":"Id",
    //         "number":{
    //             "equals":id
    //         }
    //     }
    // };
    
    $.ajax({
        type: "GET",
        url: "https://pickkabook.tk/getBook",
        headers: {
            "Notion-Version": "2021-08-16",
            "Id":id
        },
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function(data){
            $("#bookImage").attr("src",data.properties.Image.files[0].file.url);
            $(".single-product-details > h2").html(data.properties.Name.title[0].plain_text);
            if(!data.properties.Description.rich_text.length == 0){
                $(".product-description").html(data.properties.Description.rich_text[0].plain_text);
                $("#details > p").html(data.properties.Description.rich_text[0].plain_text);
            }
            $(".product-price").html("RM" + data.properties.Price.number);
        },
        error: function(data){
            console.log(data.statusText);
        },
        cache:"false"
    })
});
