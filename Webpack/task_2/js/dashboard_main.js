import $ from 'jquery';
import debounce from 'lodash/debounce';
import '../css/main.css';

const body = $('body');

body.append('<div id="logo"></div>');
body.append('<p>Holberton Dashboard</p>');
body.append('<p>Dashboard data for the students</p>');
body.append('<div class="dashboard-controls"><button>Click here to get started</button><p id="count"></p></div>');
body.append('<p>Copyright - Holberton School</p>');

let count = 0;

function updateCounter() {
  count += 1;
  $('#count').text(`${count} clicks on the button`);
}

$('button').on('click', debounce(updateCounter, 500));
