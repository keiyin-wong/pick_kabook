$(document).ready(function(){
    //alert("hello");
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
            var parameterList = JSON.parse(JSON.stringify(data.results));
            $.each(parameterList,function() {
                var html = "<div class='col-md-4'>" + 
				"<div class='product-item'>" +
					"<div class='product-thumb'>" +
						"<img class='img-responsive' src="+this.properties.Image.files[0].file.url+" alt='product-img' />"+
						"<div class='preview-meta'>" +
							"<ul>" +
								"<li>" +
									"<span  data-toggle='modal' data-target='#product-modal'>" +
										"<i class='tf-ion-ios-search-strong'></i>" +
									"</span>" +
								"</li>" +
								"<li>" +
			                        "<a href='#!' ><i class='tf-ion-ios-heart'></i></a>" +
								"</li>" +
								"<li>" +
									"<a href='#!'><i class='tf-ion-android-cart'></i></a>" +
								"</li>"+
							"</ul>" +
                      	"</div>" +
					"</div>" +
					"<div class='product-content'>" +
						"<h4><a href='product-single.html?name=123'>"+this.properties.Name.title[0].plainText+"</a></h4>" +
						"<p class='price'>RM"+this.properties.Price.number+"</p>" +
					"</div>" +
				"</div>" +
			"</div>";
                $("#bestSellerItems").append(html);
            })
        },
        error: function(data){
            alert(data.statusText);
        },
        cache:"false"
    })
    

});