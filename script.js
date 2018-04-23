//GET the Name of Singer
function getSingerName(){
  let name = $('.singerName').val()
  return name
}

$('.go').click(function(){
  $('.track').text('')
  getSingerInfo(getSingerName())
  getAlbumNum(getSingerName())
})

//GET the Info of Singer
function getSingerInfo(callBack){
  $.getJSON("https://api.deezer.com/artist/"+ callBack,function(data){
    $('.name').text(data.name)
    $('.fan').text(data.nb_fan)
    $('.albNum').text(data.nb_album)
    $('img').attr('src',data.picture_medium)
  })
}

// Get All Album of Singer
function getAlbumNum(callBackA){
  $.getJSON('https://api.deezer.com/artist/'+callBackA, function(data){
    let numAlb = data.nb_album
    let idSinger = data.id
      console.log(data)
    for(let i = 0; i <= numAlb; i++){
      $.getJSON('https://api.deezer.com/artist/'+idSinger+'/top?limit=50', function(dataAlb){

        $('.track').append($('<option></option>').text(dataAlb.data[i].album.title))

      })
    }
  })
}
