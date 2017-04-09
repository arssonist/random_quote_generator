$(function() {
  $('#quote-button').on('click',(e) => {
  // var url = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=";
  var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en"
  // var url = "https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en"
    $.getJSON(url,function(json){
      var author = json.quoteAuthor
      var text   = json.quoteText
      console.log(author)
      console.log(text)
      // var string = JSON.stringify(json)
      // string = string.slice(0)
        // Object.keys(json).forEach((key) => {
        // $("#quote-putter").append(key.quoteText)
        // })
        $(".quotes").empty()
        $("#quote-author-box").append(author)
        $("#quote-text-box").append(text)
      })
    })
  })
