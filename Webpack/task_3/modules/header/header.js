import $ from 'jquery';
import './header.css';
import logo from '../../assets/holberton-logo.jpg';

console.log('Init header');

const body = $('body');

body.append(`<img id="logo" src="${logo}" alt="Holberton logo">`);
body.append('<h1>Holberton Dashboard</h1>');
