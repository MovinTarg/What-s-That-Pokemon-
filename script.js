$(document).ready(function() {

    for (var i = 1; i < 152; i++) {
        $(".pokemon").append("<img id='"+i+"'src='http://pokeapi.co/media/img/"+i+".png'>");
    }

    $("img").click(function() {
        var pokeNum = $(this).attr('id');
        $.get("https://pokeapi.co/api/v2/pokemon/"+pokeNum+"/", function(res) {
            var html_str = "";
            html_str += "<h1>"+res.name+"</h1>";
            html_str += "<img id='"+i+"'src='http://pokeapi.co/media/img/"+pokeNum+".png'>"
            html_str += "<h4>Types</h4>";
            html_str += "<ul>";
            for (var i = 0; i < res.types.length; i++) {
                html_str += "<li>"+res.types[i].type.name+"</li>";
            };
            html_str += "</ul>";
            html_str += "<h4>Height</h4>";
            html_str += "<p>"+res.height+"</p>";
            html_str += "<h4>Weight</h4>";
            html_str += "<p>"+res.weight+"</p>";
            $(".pokedex").html(html_str);
        }, "json");
    });
    
});