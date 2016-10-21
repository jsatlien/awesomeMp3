import $ from 'jquery';

import { CLIENT_ID } from './clientid';


var SC_API = 'https://api.soundcloud.com'


function renderHTML (data) {
    var newHTML = `
        <div class='eachresult' data-streamurl="${data.stream}?client_id=${CLIENT_ID}" data-format="${data.format}">
          <img src="${data.album_art}" alt="image"/>
          <div id="title">${data.title_artist}</div>
          <div id="genre">${data.genre}</div>
        </div>
      `;
    $('.searchresults').append(newHTML)
}

function resultData(myResults) {
    $('.searchresults').html("");
    myResults.forEach(function (eachResult) {
        var getData = {
          album_art: eachResult.artwork_url,
          title_artist: eachResult.title,
          format: eachResult.original_format,
          genre: eachResult.genre,
          stream: eachResult.stream_url
        }
        renderHTML(getData);
    });

    $(".eachresult").click(renderPlayer);
}

function getResults (event) {
  event.preventDefault()
  var searchcontent = $('#searchinput').val();
  var result = getTrackData(searchcontent);
  result.then(resultData);
};

$('#searchbutton').click(getResults);

function renderPlayer (event) {
        console.log(event);
        console.log(event.currentTarget.dataset.streamurl)
    var audioHTML = `
    <audio controls="controls" >
    <source src="${event.currentTarget.dataset.streamurl}" type="audio/${event.currentTarget.dataset.format}">
    </audio>
`
    $(".player").html(audioHTML)
}


$.ajaxSetup({
    data: {
      client_id: CLIENT_ID
    }
});

function getTrackData (keyword) {
  return $.ajax({
      url: `${SC_API}/tracks/`,
      data: {
        q: `${keyword}`,
      }
  });
};

// console.log(getTrackData(results);
//Audio template literal:
