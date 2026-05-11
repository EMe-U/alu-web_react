import $ from 'jquery';
import debounce from 'lodash/debounce';
import './body.css';

const body = $('body');

body.append('<p>Dashboard data for the students</p>');
body.append('<div class="dashboard-controls"><button>Click here to get started</button><p id="count"></p></div>');

let count = 0;

function updateCounter() {
  count += 1;
  $('#count').text(`${count} clicks on the button`);
}

$('button').on('click', debounce(updateCounter, 500));
