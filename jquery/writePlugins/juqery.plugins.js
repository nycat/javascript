;(function ($, window) {
  $.fn.greentify = function() {
    this.css("background-color", "green");
	  return this;
  };
}(jQuery, window));


;(function ($, window) {
  $.fn.toopTip = function(options) {
    var setting = $.extend({
      message: 'hello from default setting'
    }, options)
    console.log(setting.message)
  };
}(jQuery, window));


