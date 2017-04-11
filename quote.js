$(function() {


  var url = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?"


//on load, check if box is empty. If it is, then load quote
  if($("#quote-text-box").html() === ""){
    $.getJSON(url,function(json){
      var author = json.quoteAuthor
      var text   = json.quoteText

        $("#quote-author-box").append(author)
        $("#quote-text-box").append(text)
      })
    }


//on click, give quote
  $('#quote-button').on('click',(e) => {

  // var url = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=";
//url for AJAX- NO JSONP
  // var url = "http://api.forismatic.com/api/1.0/method=getQuote&key=457653&format=json&lang=en"
// url for getJSON


// function to twitter
// call open window mesageas params
// inside callback get text, and send it bak out here


    // $.ajax({
    //   url:url,
    //   method:'GET',
    //   dataType:'JSONP'
    // }).done(function(json){
    $.getJSON(url,function(json){
      var author = json.quoteAuthor
      var text   = json.quoteText

        $("#quote-text-box").empty()
        $("#quote-author-box").empty()
        $("#quote-author-box").append(author)
        $("#quote-text-box").append(text)
        // $(".twitter-share-button").attr('href', twitter_url)
      })
    })
  })



$('.twitter-share-button').click(function(e){
  let value = "https://twitter.com";
  let text = $('#quote-text-box').html()
  console.log(text)
  let make_string = value + "/intent/tweet?text=" + text
  console.log(make_string)
  $('.twitter-share-button').attr('href',make_string)
  console.log(make_string)
    })

var getQuote = function(){
  var text = $('#quote-text-box').html()
  if (text != ""){
    return text
  }
}
