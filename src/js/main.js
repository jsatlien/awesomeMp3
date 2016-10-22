import $ from 'jquery';

import { CLIENT_ID } from './clientid';
import { getTrackData } from './soundcloud';
import { renderHTML, renderPlayer } from './template';


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
};

function getResults (event) {
  event.preventDefault()
  var searchcontent = $('#searchinput').val();
  var result = getTrackData(searchcontent);
  result.then(resultData);
};

$('#searchbutton').click(getResults);
