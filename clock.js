import stache from "can/view/stache/stache";
import moment from "moment";
import can from "can";

var timerID;
can.Component.extend({
	tag: "my-clock",
	template: stache("<h1>{{time}}</h2>"),
	viewModel: {
		time: moment().format('MMMM Do YYYY, h:mm:ss a'),
		init: function() {
			this.timer();
		},

	 	timer: function() {
			var self = this;
			timerID = setTimeout(function() {
				self.attr('time', moment().format('MMMM Do YYYY, h:mm:ss a'));
				self.timer();
			}, 1000);
		}
	}
});
