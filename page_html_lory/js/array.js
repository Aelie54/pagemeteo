function showArray() {
    $.ajax({
        url: "http://localhost/page_html_lory/vues/array.html", 
        type: "GET",
        success: function(response) {
            document.getElementById("container").innerHTML = response;
        }
    }) 
}
    
