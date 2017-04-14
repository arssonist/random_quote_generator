$(function() {

  var url = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?"
  var value = "https://twitter.com";

// on load, check if box is empty. If it is, then load quote
  if($("#quote-text-box").html() === ""){
//
    $.getJSON(url,function(json){
      let author = json.quoteAuthor
      let text   = json.quoteText
//append quote to page
        $("#quote-author-box").append(author)
        $("#quote-text-box").append(text)
//
//get quote content
          let text_content = $('#quote-text-box').html()
//get author content
          let author_content = $('#quote-author-box').html();

          let full_quote = `${text_content} -${author_content}`

          let make_string = value + "/intent/tweet?text=" + full_quote
//           console.log(make_string)
//  //add click to change the a href string
    $(".twitter-share-button").click(function(e){
    // e.preventDefault()
     $('.twitter-share-button').attr('href',make_string)
          console.log(make_string)
       })
     })

   }

//on click, give quote
  $('#quote-button').on('click',(e) => {

// OTHER CALL TYPES
  // var url = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=";
//url for AJAX- NO JSONP
  // var url = "http://api.forismatic.com/api/1.0/method=getQuote&key=457653&format=json&lang=en"
// url for getJSON
    // $.ajax({
    //   url:url,
    //   method:'GET',
    //   dataType:'JSONP'
    // }).done(function(json){

    $.getJSON(url,function(json){
      let author = json.quoteAuthor
      let text   = json.quoteText

        $("#quote-text-box").empty()
        $("#quote-author-box").empty()
        $("#quote-author-box").append(author)
        $("#quote-text-box").append(text)



          let text_content = $('#quote-text-box').html()
          // console.log(text_content)
          let author_content = $('#quote-author-box').html();

          let full_quote = `${text_content} -${author_content}`

          let make_string = value + "/intent/tweet?text=" + full_quote

          $(".twitter-share-button").click(function(e){



            $('.twitter-share-button').attr('href',make_string)
            console.log(make_string)

          })
      })


//
//
//
//   })
//
//
//


    })
  })
