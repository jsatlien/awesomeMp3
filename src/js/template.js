import $ from 'jquery';
import { CLIENT_ID } from './clientid'

function renderHTML (data) {
    var newHTML = `
        <div class='eachresult' data-image="${data.album_art}" data-title="${data.title_artist}" data-streamurl="${data.stream}?client_id=${CLIENT_ID}" data-format="${data.format}">
          <img src="${data.album_art}" alt="image"/>
          <div id="title">${data.title_artist}</div>
          <div id="genre">${data.genre}</div>
        </div>
      `;
    $('.searchresults').append(newHTML)
}


function renderPlayer (event) {
    console.log(event.currentTarget.dataset)
    var audioHTML = `
    <div id="nowplaying">Now Playing: ${event.currentTarget.dataset.title}</div>
    <img src="${event.currentTarget.dataset.image}"/>
    <audio controls="controls">
    <source src="${event.currentTarget.dataset.streamurl}" type="audio/${event.currentTarget.dataset.format}">
    </audio>
`
    $(".player").html(audioHTML)
};

export { renderHTML, renderPlayer };
