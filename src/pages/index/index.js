import "./index.scss";
let tabUI = require("../../js/tab");
console.log('121');
tabUI.init();
tabUI.tab($(".tab-wrap2"), {
	autoPlay: 2000,
	animate: true
});