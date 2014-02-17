var inherit = require('inherit');
var WuiDom = require('WuiDom');

/**
 * @class
 * @classDesc
 * @augments WuiDom
 */
function WuiView() {
	WuiDom.call(this);
	this.assign('div', { className: 'WuiView' });
	this.hideMethod();
	this._hasTouchListener = false;
}

inherit(WuiView, WuiDom);
module.exports = WuiView;

/**
 * @param options
 * @param itemName
 */
WuiView.prototype.create = function (options, itemName) {

	options.parentElement.appendChild(this.rootElement);
	this.emit('created', options, itemName);
};

/**
 * @param params
 */
WuiView.prototype.open = function () {
	window.document.documentElement.scrollIntoView(true);
	this.show();
};

/**
 * close
 */
WuiView.prototype.close = function () {
	this.hide();
};

/**
 * disableScrolling
 */
WuiView.prototype.disableScrolling = function () {
	if (!this._hasTouchListener) {
		this._hasTouchListener = true;
		var that = this;
		this.allowDomEvents();

		this.on('dom.touchmove', function (e) {
			// TODO: this does not work on a desktop

			if (that.scrollingDisabled) {
				e.preventDefault();
			}
		});
	}
	this.scrollingDisabled = true;
};

/**
 * enableScrolling
 */
WuiView.prototype.enableScrolling = function () {
	this.scrollingDisabled = false;
};