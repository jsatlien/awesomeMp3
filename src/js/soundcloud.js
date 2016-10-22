import $ from 'jquery';

import { CLIENT_ID } from './clientid';


var SC_API = 'https://api.soundcloud.com'

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

export { getTrackData };
