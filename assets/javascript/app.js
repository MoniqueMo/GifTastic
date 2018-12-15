var realityTV = ["Real Housewives", "Keeping up with the Kardashians", "Vanderpump Rules", "Married to Medecine", "Tean Mom", "16 and Pregnant"];


var renderButtons = function () {
$("#realityTV-view").empty();

for (var i = 0; i <realityTV.length; i++){
    var newButton = $("<button>");
    newButton.addClass("reality");
    newButton.attr("data-name", realityTV[i]);
    newButton.text(realityTV[i]);
    $("#realityTV-view").append(newButton);
    }
}

$("#add-show").on("click", function(event){
    event.preventDefault();
    var realityShow = $("#show-input").val().trim();
    realityTV.push(realityShow);
    setTimeout(renderButtons(), 50000);
});

renderButtons();


$(document).on("click", "button", function() {
    console.log("in here");
    var show = $(this).attr("data-name");
    console.log(show);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    show + "&api_key=9FRoacj4zLlQi2R9I6lYxUHDAyGS3sOi&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response){
       loadImages(response.data);
    });

function loadImages(results){
    for (var i = 0; i < results.length; i++) {
        console.log(results);
        var showDiv = $("<div>");
        var showImage = $("<img>");
        showImage.attr("src", results[i].images.fixed_height_still.url);
        showImage.attr("data-animated",results[i].images.fixed_height.url);
        showDiv.prepend(showImage);
        console.log(showImage);
    
        $(".gifs").prepend(showDiv);
    
    }
};



$(".gifs").on("click", "img", function(){
    var switcher = $(this).attr("src");
    $(this).attr("src", $(this).attr("data-animated"));
    $(this).attr("data-animated", switcher);
});

$(".reality").on("click",function(){

    var show = $("#show-input").val().trim();
    showDiv.reset();
    realityTV.push(show);
    console.log(gifs)

    return false;

  

});
});