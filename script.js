var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://raw.githubusercontent.com/warehouse-fashions/developer-exercise/master/data/recommendations.json', true);
xhr.responseType = "text";

xhr.onload = function () {
    if (xhr.status===200) {
        var mystuff = JSON.parse(xhr.responseText);
        console.log(mystuff);
             
        
        var html = "";
        for (i = 0; i < mystuff.hits.length; i++) {
            if (mystuff.hits[i].image != undefined) {
                console.log(mystuff.hits[i].link);
                html += "<li class='inner-box'><a href = '" + mystuff.hits[i].link + "'><img src = '" + mystuff.hits[i].image.link + "'/></a>";
                html += '<p class="image-title">' + mystuff.hits[i].image.title + '</p>';
                html += '<p class="price">£' + mystuff.hits[i].price + '.00</p></li>';

                document.getElementById('box').innerHTML = html;

            }
            
            
      
        }
        
    }
}
xhr.send();

