$(function() {

  console.log(getQuote())
  $('.twitter-share-button').attr('href', (index, value) => { //value is twitter.com
    return value + "/intent/tweet?text=" + getQuote()
  })

  $('#quote-button').on('click',(e) => {

  // var url = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=";
//url for AJAX- NO JSONP
  // var url = "http://api.forismatic.com/api/1.0/method=getQuote&key=457653&format=json&lang=en"
// url for getJSON

// function to open twitter window
// window.open()
//
// function to twitter
// call open window mesageas params
// inside callback get text, and send it bak out here

  var url = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?"

    // $.ajax({
    //   url:url,
    //   method:'GET',
    //   dataType:'JSONP'
    // }).done(function(json){
    $.getJSON(url,function(json){
      var author = json.quoteAuthor
      var text   = json.quoteText
      // console.log(author)
      // console.log(text)
      // var string = JSON.stringify(json)
      // string = string.slice(0)
        // Object.keys(json).forEach((key) => {
        // $("#quote-putter").append(key.quoteText)
        // })
        $("#quote-text-box").empty()
        $("#quote-author-box").empty()
        $("#quote-author-box").append(author)
        $("#quote-text-box").append(text)
        // $(".twitter-share-button").attr('href', twitter_url)
      })
    })
  })

var getQuote = function(){
  var text = $('#quote-text-box').html()
  if (text != "Quotes goe here!"){
    return text
  }
}
