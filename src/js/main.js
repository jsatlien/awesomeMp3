import $ from 'jquery';

import { CLIENT_ID } from './clientid';

//for audio source, add ClIENT_ID to the end of 'stream_url'
// `${CLIENT_ID}`
//<source src="${stream_url}?client_id=${CLIENT_ID}" type="${original_format}">


var SC_API = 'https://api.soundcloud.com'

function getResults (event) {
  event.preventDefault()
  var searchcontent = $('#searchinput').val();
  var result = getTrackData(searchcontent);
  console.log(result);
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
