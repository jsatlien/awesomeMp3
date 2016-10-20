import $ from 'jquery';

import { CLIENT_ID } from './clientid';

//for audio source, add ClIENT_ID to the end of 'stream_url'
// `${stream_url}?clien_id=${CLIENT_ID}`

var SC_API = 'https://api.soundcloud.com'

function getResults (event) {
  event.preventDefault()
  var searchcontent = $('#searchinput').val();
  var result = getTrackData(searchcontent);
  return result; 
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
