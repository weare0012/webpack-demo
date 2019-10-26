var _ = require('lodash');
import './style.css'
import './hello.scss'
//es6 named import
import {area} from './js/circle';
//import _ from 'lodash';
import volume from './js/cube';

function component() {
	let element = document.createElement('div');

	// Lodash, currently included via a script, is required for this line to work
	element.innerHTML = _.join(['Hello', 'webpack!!'], ' ');

	return element;
}

document.body.appendChild(component());

console.log(area(5));
console.log(volume(5));