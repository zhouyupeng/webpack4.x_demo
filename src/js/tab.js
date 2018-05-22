/**
 * ypzhou
 */
(function ($, window) {
	var tabUI = tabUI || {};
	function Tab(wrap, options) {
		this.tabWrap = wrap;
		this.tabHdCon = this.tabWrap.find(".tab-hd-con");
		this.tabHdContent = this.tabWrap.find(".tab-bd-content");
		this.timer = null;
		this.autoPlayTimer = null;
		this.options = { //配置初始化
			autoPlay: false, //自动播放时间，默认false不自动播放
			tabEvent: "click", //tab事件有click,mouseover
			now: 0, //默认第几个显示
			delay: false //延迟时间,false时不延迟
		}
		$.extend(this.options, options);
		this.init();
	}
	Tab.prototype.constructor = Tab;
	Tab.prototype.init = function () {
		var _this = this;
		this.tabHdCon.eq(this.options.now).addClass("active");
		this.tabHdContent.eq(this.options.now).css("display", "block");
		this.tabHdCon.on(this.options.tabEvent, function () {
			if (_this.options.tabEvent == "mouseover" && (!isNaN(_this.options.delay))) { //延迟切换
				var This = this;
				_this.timer = setTimeout(function () {
					_this.change(This);
				}, _this.options.delay);
			} else {
				_this.change(this);
			}
		}).mouseout(function () {
			clearTimeout(_this.timer);
		});
		if (this.options.autoPlay && typeof (this.options.autoPlay) == "number") { //自动切换
			this.autoPlay();
			this.tabWrap.hover(function () {
				clearInterval(_this.options.autoPlayTimer);
			}, function () {
				_this.autoPlay();
			});
		}
	}
	Tab.prototype.autoPlay = function () {
		var _this = this;
		_this.options.autoPlayTimer = setInterval(function () {
			if (_this.options.now == _this.tabHdCon.length - 1) {
				_this.options.now = 0;
			} else {
				_this.options.now++;
			}
			_this.tabHdCon.removeClass("active");
			_this.tabHdCon.eq(_this.options.now).addClass("active");
			_this.tabHdContent.css("display", "none");
			_this.tabHdContent.eq(_this.options.now).css("display", "block");
		}, this.options.autoPlay);
	}
	Tab.prototype.change = function (obj) {
		this.tabHdCon.removeClass("active");
		this.options.now = $(obj).index();
		this.tabHdCon.eq(this.options.now).addClass("active");
		this.tabHdContent.css("display", "none");
		this.tabHdContent.eq(this.options.now).css("display", "block");
	}

	var tab = function (wrap, options) {
		if (wrap.length < 1) {
			return false;
		}
		wrap.each(function (index, value) {
			new Tab($(value), options);
		})

	}
	tabUI.tab = tab;
	tabUI.init = function (opt) {
		$(".tabWrap") && tab($(".tabWrap"), opt);
	}

	if (typeof module !== 'undefined' && typeof exports === 'object' && define.cmd) {
		module.exports = tabUI;
	} else if (typeof define === 'function' && define.amd) {
		define(function () {
			return tabUI;
		});
	} else {
		window.tabUI = tabUI;
	}
})(jQuery, window)