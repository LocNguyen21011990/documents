import msg from './message.js'
import $ from 'jquery'

$(function () {
	$('#showButton').on('click', function() {
		var mes = new msg();
		mes.show();
	})
})