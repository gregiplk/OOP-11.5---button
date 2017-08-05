//OOP 11.5 button

function Button(text) {
	this.text = text || 'Hello';
}
Button.prototype = {
	create: function() {
		var self = this;
		this.$element = $('<button>');
		this.$element.text(this.text);
		this.$element.click(function() {
			alert(self.text);
		});
		$('body').append(this.$element);
	}
}

var btn = new Button('Hello!');
btn.create(); 
var btn = new Button('Hi!');
btn.create(); 