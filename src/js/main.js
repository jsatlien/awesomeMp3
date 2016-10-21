import $ from 'jquery';

import { CLIENT_ID } from './clientid';

//for audio source, add ClIENT_ID to the end of 'stream_url'
// `${CLIENT_ID}`
// <source src="${stream_url}?client_id=${CLIENT_ID}" type="${original_format}">


var SC_API = 'https://api.soundcloud.com'

function renderHTML (data) {
    var newHTML = `
        <div class='eachresult'>
          <img src="${data.album_art}" alt="image"/>
          <div id="title">${data.title_artist}</div>
          <div id="genre">${data.genre}</div>
        </div>
      `
    $('.searchresults').append(newHTML)
}

function resultData(myResults) {
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
    // console.log(myResults);
}




function getResults (event) {
  event.preventDefault()
  var searchcontent = $('#searchinput').val();
  var result = getTrackData(searchcontent);
  result.then(resultData);
  // console.log(result);
};


$('#searchbutton').click(getResults);

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
