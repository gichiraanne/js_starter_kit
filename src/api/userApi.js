/* eslint-disable no-console */
import 'whatwg-fetch';
import { getbaseUrl } from './baseUrl';

const baseUrl = getbaseUrl();

export function getUsers() {
	return get('users')
}

function get(url){
	return fetch(baseUrl + url).then(onSuccess, onError);
}

function onSuccess(response){
	return response.json();
}

function onError(error){
	console.log(error);
}
