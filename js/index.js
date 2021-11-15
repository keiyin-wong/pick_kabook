$(document).ready(function(){
    //alert("hello");

    $.ajax({
        type: "POST",
        url: "https://pickkabook.tk/getAllBook",
        headers: {
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
						"<h4><a href='product-single.html?id="+this.id+"'>"+this.properties.Name.title[0].plain_text+"</a></h4>" +
						"<p class='price'>RM"+this.properties.Price.number+"</p>" +
					"</div>" +
				"</div>" +
			"</div>";
                $("#bestSellerItems").append(html);
            })
        },
        error: function(data){
            console.log(data.statusText);
        },
        cache:"false"
    })
    

});
