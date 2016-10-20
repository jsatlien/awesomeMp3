import $ from 'jquery';

import { CLIENT_ID } from './clientid';

var SC_API = 'https://api.soundcloud.com'


$.ajaxSetup({
    data: {
      client_id: CLIENT_ID
    }
});
