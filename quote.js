$(function() {
// ----HTTP API url
  // var url = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?"

//empty var for quote type
  var quote_type = ""

// --------HTTPS API url
  var url =
 `https://andruxnet-random-famous-quotes.p.mashape.com/?cat=${quote_type}`
  const twitter_url = "https://twitter.com";
  const key = "xRqMQONRP0mshyAA6LJmal2wXJX8p1NUZ4JjsnqIPxoEssQFS3"

//ON EMPTY PAGE LOAD
  if($("#quote-text-box").html() === ""){

// set to movies by default
  quote_type = "movies"

  request(url, key, twitter_url)

// // -------HTTP API request
// //     // $.getJSON(url,function(json){
// //       console.log(json)
// //       let author = json.quoteAuthor
// //       let text   = json.quoteText
// // //append quote to page


   }

//ON BUTTON CLICK
  $('#quote-button').on('click',(e) => {

// ----------HTTP REQUEST
//url for AJAX- NO JSONP
  // var url = "http://api.forismatic.com/api/1.0/method=getQuote&key=457653&format=json&lang=en"

// JSONP
// url for ajax
    // $.ajax({
    //   url:url,
    //   method:'GET',
    //   dataType:'JSONP'
    // }).done(function(json){

    // $.getJSON(url,function(json){

// -----------------HTTPS

  if($('#quote-type-selector option:selected').val() === 'movie'){
    quote_type = "movies"
    request(url, key, twitter_url)
  }
    // $.ajax({
    //   url:url,
    //   method:'GET',
    //   dataType:'JSON',
    //   headers:{
    //     "Content-Type":"application/x-www-form-urlencoded",
    //     "X-Mashape-Key":key,
    //     "Accept":"application/json"
    //     }
    //   }).done(function(json){
    //   let author = json.author
    //   let text   = json.quote
    //
    //     $("#quote-text-box").empty()
    //     $("#quote-author-box").empty()
    //     $("#quote-author-box").append(author)
    //     $("#quote-text-box").append(text)
    //
    //
    //
    //       let text_content = $('#quote-text-box').html()
    //       // console.log(text_content)
    //       let author_content = $('#quote-author-box').html();
    //
    //       let full_quote = `${text_content} -${author_content}`
    //
    //       let make_string = twitter_url + "/intent/tweet?text=" + full_quote
    //
    //       $(".twitter-share-button").click(function(e){
    //
    //
    //
    //         $('.twitter-share-button').attr('href',make_string)
    //         console.log(make_string)
    //
    //       })
    //   })

    })
  })

var request = function(url, key, twitter_url){
  $.ajax({
    url:url,
    method:'GET',
    dataType:'JSON',
    headers:{
      "Content-Type":"application/x-www-form-urlencoded",
      "X-Mashape-Key":key,
      "Accept":"application/json"
      }
    }).done(function(json){
    let author = json.author
    let text   = json.quote
      $("#quote-text-box").empty()
      $("#quote-author-box").empty()
      $("#quote-author-box").append(author)
      $("#quote-text-box").append(text)
        let text_content = $('#quote-text-box').html()
        // console.log(text_content)
        let author_content = $('#quote-author-box').html();

        let full_quote = `${text_content} -${author_content}`

        let make_string = twitter_url + "/intent/tweet?text=" + full_quote

        $(".twitter-share-button").click(function(e){

          $('.twitter-share-button').attr('href',make_string)
          console.log(make_string)

        })
    })
}
