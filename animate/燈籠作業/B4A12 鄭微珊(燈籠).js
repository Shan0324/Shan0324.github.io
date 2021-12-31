(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"B4A12 鄭微珊_燈籠__atlas_1", frames: [[0,1147,333,316],[1119,969,82,230],[1119,0,80,967],[0,0,1117,1145]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_4 = function() {
	this.initialize(ss["B4A12 鄭微珊_燈籠__atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["B4A12 鄭微珊_燈籠__atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["B4A12 鄭微珊_燈籠__atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["B4A12 鄭微珊_燈籠__atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.燈本體 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.燈本體, new cjs.Rectangle(0,0,166.5,158), null);


(lib.燈下線 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.燈下線, new cjs.Rectangle(0,0,41,115), null);


(lib.吊繩 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.吊繩, new cjs.Rectangle(0,0,40,483.5), null);


(lib.中燈籠 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 中燈籠
	this.ikNode_15 = new lib.燈下線();
	this.ikNode_15.name = "ikNode_15";
	this.ikNode_15.setTransform(-110.8,88.55,1,1,0,0,0,20.4,0);

	this.ikNode_14 = new lib.燈本體();
	this.ikNode_14.name = "ikNode_14";
	this.ikNode_14.setTransform(-107.5,-63.5,1,1,0,0,0,87.9,3.1);

	this.ikNode_13 = new lib.吊繩();
	this.ikNode_13.name = "ikNode_13";
	this.ikNode_13.setTransform(-69.65,-279.7,1,1,0,0,0,39.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_13,p:{rotation:0,x:-69.65,y:-279.7,regY:0,regX:39.9}},{t:this.ikNode_14,p:{rotation:0,x:-107.5,y:-63.5,regX:87.9}},{t:this.ikNode_15,p:{rotation:0,x:-110.8,y:88.55,regY:0}}]}).to({state:[{t:this.ikNode_13,p:{rotation:0.9049,x:-69.55,y:-279.65,regY:0,regX:39.9}},{t:this.ikNode_14,p:{rotation:0.946,x:-110.8,y:-64.1,regX:87.9}},{t:this.ikNode_15,p:{rotation:0.4957,x:-116.65,y:87.8,regY:0}}]},1).to({state:[{t:this.ikNode_13,p:{rotation:1.81,x:-69.55,y:-279.7,regY:0,regX:39.9}},{t:this.ikNode_14,p:{rotation:1.8923,x:-114.25,y:-64.8,regX:87.9}},{t:this.ikNode_15,p:{rotation:0.9906,x:-122.55,y:86.95,regY:0}}]},1).to({state:[{t:this.ikNode_13,p:{rotation:2.7156,x:-69.55,y:-279.65,regY:0,regX:39.9}},{t:this.ikNode_14,p:{rotation:2.839,x:-117.6,y:-65.5,regX:87.9}},{t:this.ikNode_15,p:{rotation:1.4864,x:-128.45,y:86.1,regY:0}}]},1).to({state:[{t:this.ikNode_13,p:{rotation:3.621,x:-69.6,y:-279.7,regY:0,regX:39.9}},{t:this.ikNode_14,p:{rotation:3.7858,x:-121,y:-66.3,regX:87.9}},{t:this.ikNode_15,p:{rotation:1.9824,x:-134.3,y:85.1,regY:0}}]},1).to({state:[{t:this.ikNode_13,p:{rotation:4.5264,x:-69.55,y:-279.65,regY:0,regX:39.9}},{t:this.ikNode_14,p:{rotation:4.7317,x:-124.35,y:-67.1,regX:87.9}},{t:this.ikNode_15,p:{rotation:2.4785,x:-140.2,y:84.05,regY:0}}]},1).to({state:[{t:this.ikNode_13,p:{rotation:5.4321,x:-69.6,y:-279.65,regY:0,regX:39.9}},{t:this.ikNode_14,p:{rotation:5.6781,x:-127.7,y:-68,regX:87.9}},{t:this.ikNode_15,p:{rotation:2.9739,x:-146.05,y:82.8,regY:0}}]},1).to({state:[{t:this.ikNode_13,p:{rotation:6.3374,x:-69.55,y:-279.7,regY:0,regX:39.9}},{t:this.ikNode_14,p:{rotation:6.6242,x:-131.05,y:-68.95,regX:87.9}},{t:this.ikNode_15,p:{rotation:3.4695,x:-151.9,y:81.65,regY:0}}]},1).to({state:[{t:this.ikNode_13,p:{rotation:7.2425,x:-69.55,y:-279.65,regY:0,regX:39.9}},{t:this.ikNode_14,p:{rotation:7.5714,x:-134.35,y:-69.95,regX:87.9}},{t:this.ikNode_15,p:{rotation:3.9653,x:-157.65,y:80.25,regY:0}}]},1).to({state:[{t:this.ikNode_13,p:{rotation:8.1477,x:-69.55,y:-279.7,regY:0,regX:39.9}},{t:this.ikNode_14,p:{rotation:8.5178,x:-137.65,y:-71.05,regX:87.9}},{t:this.ikNode_15,p:{rotation:4.4615,x:-163.45,y:78.8,regY:0}}]},1).to({state:[{t:this.ikNode_13,p:{rotation:9.0531,x:-69.55,y:-279.65,regY:0,regX:39.9}},{t:this.ikNode_14,p:{rotation:9.4642,x:-140.95,y:-72.15,regX:87.9}},{t:this.ikNode_15,p:{rotation:4.9572,x:-169.25,y:77.2,regY:0}}]},1).to({state:[{t:this.ikNode_13,p:{rotation:9.9591,x:-69.55,y:-279.7,regY:0,regX:39.9}},{t:this.ikNode_14,p:{rotation:10.4103,x:-144.2,y:-73.25,regX:87.9}},{t:this.ikNode_15,p:{rotation:5.4523,x:-174.95,y:75.6,regY:0}}]},1).to({state:[{t:this.ikNode_13,p:{rotation:10.864,x:-69.55,y:-279.7,regY:0,regX:39.9}},{t:this.ikNode_14,p:{rotation:11.3567,x:-147.45,y:-74.45,regX:87.9}},{t:this.ikNode_15,p:{rotation:5.9487,x:-180.65,y:73.85,regY:0}}]},1).to({state:[{t:this.ikNode_13,p:{rotation:11.7698,x:-69.55,y:-279.65,regY:0,regX:39.9}},{t:this.ikNode_14,p:{rotation:12.3036,x:-150.65,y:-75.7,regX:87.9}},{t:this.ikNode_15,p:{rotation:6.4439,x:-186.35,y:72.05,regY:0}}]},1).to({state:[{t:this.ikNode_13,p:{rotation:12.6752,x:-69.55,y:-279.7,regY:0,regX:39.9}},{t:this.ikNode_14,p:{rotation:13.2493,x:-153.9,y:-77.05,regX:87.9}},{t:this.ikNode_15,p:{rotation:6.9394,x:-191.95,y:70.1,regY:0}}]},1).to({state:[{t:this.ikNode_13,p:{rotation:13.5801,x:-69.55,y:-279.7,regY:0,regX:39.9}},{t:this.ikNode_14,p:{rotation:14.1961,x:-157.1,y:-78.4,regX:87.9}},{t:this.ikNode_15,p:{rotation:7.4356,x:-197.55,y:68.1,regY:0}}]},1).to({state:[{t:this.ikNode_13,p:{rotation:14.4858,x:-69.55,y:-279.65,regY:0,regX:39.9}},{t:this.ikNode_14,p:{rotation:15.1423,x:-160.25,y:-79.8,regX:87.9}},{t:this.ikNode_15,p:{rotation:7.9313,x:-203.2,y:66,regY:0}}]},1).to({state:[{t:this.ikNode_13,p:{rotation:15.3907,x:-69.55,y:-279.65,regY:0,regX:39.9}},{t:this.ikNode_14,p:{rotation:16.0893,x:-163.4,y:-81.25,regX:87.9}},{t:this.ikNode_15,p:{rotation:8.4268,x:-208.7,y:63.8,regY:0}}]},1).to({state:[{t:this.ikNode_13,p:{rotation:16.2968,x:-69.55,y:-279.65,regY:0,regX:39.9}},{t:this.ikNode_14,p:{rotation:17.0359,x:-166.5,y:-82.8,regX:87.9}},{t:this.ikNode_15,p:{rotation:8.923,x:-214.25,y:61.5,regY:0}}]},1).to({state:[{t:this.ikNode_13,p:{rotation:17.2015,x:-69.55,y:-279.65,regY:0,regX:39.9}},{t:this.ikNode_14,p:{rotation:17.9821,x:-169.65,y:-84.3,regX:87.9}},{t:this.ikNode_15,p:{rotation:9.4189,x:-219.75,y:59.2,regY:0}}]},1).to({state:[{t:this.ikNode_13,p:{rotation:18.1071,x:-69.55,y:-279.7,regY:0,regX:39.9}},{t:this.ikNode_14,p:{rotation:18.9287,x:-172.7,y:-85.9,regX:87.9}},{t:this.ikNode_15,p:{rotation:9.9138,x:-225.15,y:56.7,regY:0}}]},1).to({state:[{t:this.ikNode_13,p:{rotation:19.0128,x:-69.55,y:-279.65,regY:0,regX:39.9}},{t:this.ikNode_14,p:{rotation:19.8749,x:-175.75,y:-87.6,regX:87.9}},{t:this.ikNode_15,p:{rotation:10.4103,x:-230.55,y:54.2,regY:0}}]},1).to({state:[{t:this.ikNode_13,p:{rotation:19.9178,x:-69.55,y:-279.65,regY:0,regX:39.9}},{t:this.ikNode_14,p:{rotation:20.8216,x:-178.8,y:-89.25,regX:87.9}},{t:this.ikNode_15,p:{rotation:10.9058,x:-235.85,y:51.55,regY:0}}]},1).to({state:[{t:this.ikNode_13,p:{rotation:20.8232,x:-69.5,y:-279.65,regY:0,regX:39.9}},{t:this.ikNode_14,p:{rotation:21.7683,x:-181.75,y:-91,regX:87.9}},{t:this.ikNode_15,p:{rotation:11.4013,x:-241.2,y:48.85,regY:0}}]},1).to({state:[{t:this.ikNode_13,p:{rotation:21.7287,x:-69.55,y:-279.7,regY:0,regX:39.9}},{t:this.ikNode_14,p:{rotation:22.7145,x:-184.7,y:-92.85,regX:87.9}},{t:this.ikNode_15,p:{rotation:11.8967,x:-246.5,y:46,regY:0}}]},1).to({state:[{t:this.ikNode_13,p:{rotation:22.6341,x:-69.5,y:-279.7,regY:0,regX:39.9}},{t:this.ikNode_14,p:{rotation:23.6611,x:-187.7,y:-94.7,regX:87.9}},{t:this.ikNode_15,p:{rotation:12.3931,x:-251.7,y:43.15,regY:0}}]},1).to({state:[{t:this.ikNode_13,p:{rotation:23.5398,x:-69.5,y:-279.65,regY:0,regX:39.9}},{t:this.ikNode_14,p:{rotation:24.6074,x:-190.65,y:-96.65,regX:87.8}},{t:this.ikNode_15,p:{rotation:12.8886,x:-256.85,y:40.15,regY:0}}]},1).to({state:[{t:this.ikNode_13,p:{rotation:24.445,x:-69.55,y:-279.7,regY:0,regX:39.9}},{t:this.ikNode_14,p:{rotation:25.5535,x:-193.45,y:-98.5,regX:87.9}},{t:this.ikNode_15,p:{rotation:13.3842,x:-262,y:37.1,regY:0}}]},1).to({state:[{t:this.ikNode_13,p:{rotation:25.3502,x:-69.55,y:-279.65,regY:0,regX:39.9}},{t:this.ikNode_14,p:{rotation:26.5001,x:-196.4,y:-100.5,regX:87.8}},{t:this.ikNode_15,p:{rotation:13.8798,x:-267.05,y:34,regY:0}}]},1).to({state:[{t:this.ikNode_13,p:{rotation:26.2554,x:-69.5,y:-279.7,regY:0,regX:39.9}},{t:this.ikNode_14,p:{rotation:27.4468,x:-199.25,y:-102.55,regX:87.8}},{t:this.ikNode_15,p:{rotation:14.3757,x:-272.1,y:30.75,regY:0}}]},1).to({state:[{t:this.ikNode_13,p:{rotation:25.3803,x:-69.5,y:-279.7,regY:0,regX:39.9}},{t:this.ikNode_14,p:{rotation:26.5314,x:-196.4,y:-100.6,regX:87.9}},{t:this.ikNode_15,p:{rotation:13.8969,x:-267.25,y:33.9,regY:0}}]},1).to({state:[{t:this.ikNode_13,p:{rotation:24.5057,x:-69.55,y:-279.65,regY:0,regX:39.9}},{t:this.ikNode_14,p:{rotation:25.6165,x:-193.65,y:-98.6,regX:87.9}},{t:this.ikNode_15,p:{rotation:13.4173,x:-262.3,y:36.95,regY:0}}]},1).to({state:[{t:this.ikNode_13,p:{rotation:23.6298,x:-69.55,y:-279.65,regY:0,regX:39.9}},{t:this.ikNode_14,p:{rotation:24.7017,x:-190.95,y:-96.8,regX:87.8}},{t:this.ikNode_15,p:{rotation:12.9378,x:-257.35,y:39.85,regY:0}}]},1).to({state:[{t:this.ikNode_13,p:{rotation:22.7544,x:-69.5,y:-279.65,regY:0,regX:39.9}},{t:this.ikNode_14,p:{rotation:23.7872,x:-188.05,y:-94.9,regX:87.9}},{t:this.ikNode_15,p:{rotation:12.4593,x:-252.4,y:42.75,regY:0}}]},1).to({state:[{t:this.ikNode_13,p:{rotation:21.8793,x:-69.45,y:-279.8,regY:-0.1,regX:39.9}},{t:this.ikNode_14,p:{rotation:22.872,x:-185.2,y:-93.15,regX:87.9}},{t:this.ikNode_15,p:{rotation:11.9798,x:-247.35,y:45.55,regY:0}}]},1).to({state:[{t:this.ikNode_13,p:{rotation:21.0047,x:-69.55,y:-279.7,regY:0,regX:39.9}},{t:this.ikNode_14,p:{rotation:21.9566,x:-182.35,y:-91.4,regX:87.9}},{t:this.ikNode_15,p:{rotation:11.5003,x:-242.25,y:48.25,regY:0}}]},1).to({state:[{t:this.ikNode_13,p:{rotation:20.1291,x:-69.55,y:-279.65,regY:0,regX:39.9}},{t:this.ikNode_14,p:{rotation:21.0424,x:-179.45,y:-89.7,regX:87.9}},{t:this.ikNode_15,p:{rotation:11.0215,x:-237.15,y:50.9,regY:0}}]},1).to({state:[{t:this.ikNode_13,p:{rotation:19.2542,x:-69.55,y:-279.7,regY:0,regX:39.9}},{t:this.ikNode_14,p:{rotation:20.1272,x:-176.5,y:-88.05,regX:87.9}},{t:this.ikNode_15,p:{rotation:10.5419,x:-231.95,y:53.5,regY:0}}]},1).to({state:[{t:this.ikNode_13,p:{rotation:18.3785,x:-69.55,y:-279.65,regY:0,regX:39.9}},{t:this.ikNode_14,p:{rotation:19.2127,x:-173.6,y:-86.4,regX:87.9}},{t:this.ikNode_15,p:{rotation:10.063,x:-226.75,y:55.85,regY:-0.1}}]},1).to({state:[{t:this.ikNode_13,p:{rotation:17.5038,x:-69.55,y:-279.7,regY:0,regX:39.9}},{t:this.ikNode_14,p:{rotation:18.2975,x:-170.65,y:-84.85,regX:87.9}},{t:this.ikNode_15,p:{rotation:9.5838,x:-221.55,y:58.35,regY:0}}]},1).to({state:[{t:this.ikNode_13,p:{rotation:16.6285,x:-69.5,y:-279.7,regY:0,regX:39.9}},{t:this.ikNode_14,p:{rotation:17.3829,x:-167.7,y:-83.35,regX:87.9}},{t:this.ikNode_15,p:{rotation:9.1044,x:-216.25,y:60.7,regY:0}}]},1).to({state:[{t:this.ikNode_13,p:{rotation:15.7536,x:-69.55,y:-279.65,regY:0,regX:39.9}},{t:this.ikNode_14,p:{rotation:16.468,x:-164.7,y:-81.9,regX:87.9}},{t:this.ikNode_15,p:{rotation:8.6249,x:-210.95,y:62.9,regY:0}}]},1).to({state:[{t:this.ikNode_13,p:{rotation:14.8781,x:-69.55,y:-279.65,regY:0,regX:39.9}},{t:this.ikNode_14,p:{rotation:15.5529,x:-161.65,y:-80.45,regX:87.9}},{t:this.ikNode_15,p:{rotation:8.1459,x:-205.55,y:65.05,regY:0}}]},1).to({state:[{t:this.ikNode_13,p:{rotation:14.0032,x:-69.55,y:-279.7,regY:0,regX:39.9}},{t:this.ikNode_14,p:{rotation:14.6376,x:-158.6,y:-79.05,regX:87.9}},{t:this.ikNode_15,p:{rotation:7.6666,x:-200.2,y:67.1,regY:0}}]},1).to({state:[{t:this.ikNode_13,p:{rotation:13.1272,x:-69.55,y:-279.7,regY:0,regX:39.9}},{t:this.ikNode_14,p:{rotation:13.7231,x:-155.5,y:-77.7,regX:87.9}},{t:this.ikNode_15,p:{rotation:7.1879,x:-194.75,y:69.1,regY:0}}]},1).to({state:[{t:this.ikNode_13,p:{rotation:12.2525,x:-69.55,y:-279.7,regY:0,regX:39.9}},{t:this.ikNode_14,p:{rotation:12.8078,x:-152.55,y:-76.5,regX:87.8}},{t:this.ikNode_15,p:{rotation:6.7087,x:-189.35,y:71.05,regY:0}}]},1).to({state:[{t:this.ikNode_13,p:{rotation:11.3771,x:-69.55,y:-279.7,regY:0,regX:39.9}},{t:this.ikNode_14,p:{rotation:11.8931,x:-149.35,y:-75.2,regX:87.9}},{t:this.ikNode_15,p:{rotation:6.2292,x:-183.85,y:72.8,regY:0}}]},1).to({state:[{t:this.ikNode_13,p:{rotation:10.5018,x:-69.55,y:-279.8,regY:-0.1,regX:39.9}},{t:this.ikNode_14,p:{rotation:10.978,x:-146.15,y:-73.95,regX:87.9}},{t:this.ikNode_15,p:{rotation:5.7501,x:-178.35,y:74.55,regY:0}}]},1).to({state:[{t:this.ikNode_13,p:{rotation:9.6263,x:-69.55,y:-279.7,regY:0,regX:39.9}},{t:this.ikNode_14,p:{rotation:10.0638,x:-143.05,y:-72.85,regX:87.9}},{t:this.ikNode_15,p:{rotation:5.2706,x:-172.85,y:76.2,regY:0}}]},1).to({state:[{t:this.ikNode_13,p:{rotation:8.7514,x:-69.55,y:-279.7,regY:0,regX:39.9}},{t:this.ikNode_14,p:{rotation:9.1487,x:-139.85,y:-71.8,regX:87.9}},{t:this.ikNode_15,p:{rotation:4.7914,x:-167.25,y:77.75,regY:0}}]},1).to({state:[{t:this.ikNode_13,p:{rotation:7.8766,x:-69.6,y:-279.7,regY:0,regX:39.9}},{t:this.ikNode_14,p:{rotation:8.2333,x:-136.7,y:-70.7,regX:87.9}},{t:this.ikNode_15,p:{rotation:4.3125,x:-161.7,y:79.25,regY:0}}]},1).to({state:[{t:this.ikNode_13,p:{rotation:7.0011,x:-69.55,y:-279.7,regY:0,regX:39.9}},{t:this.ikNode_14,p:{rotation:7.3191,x:-133.45,y:-69.7,regX:87.9}},{t:this.ikNode_15,p:{rotation:3.833,x:-156.15,y:80.6,regY:0}}]},1).to({state:[{t:this.ikNode_13,p:{rotation:6.1263,x:-69.6,y:-279.7,regY:0,regX:39.9}},{t:this.ikNode_14,p:{rotation:6.4042,x:-130.25,y:-68.75,regX:87.9}},{t:this.ikNode_15,p:{rotation:3.3539,x:-150.5,y:81.9,regY:0}}]},1).to({state:[{t:this.ikNode_13,p:{rotation:5.2504,x:-69.55,y:-279.7,regY:0,regX:39.9}},{t:this.ikNode_14,p:{rotation:5.4892,x:-127.05,y:-67.85,regX:87.9}},{t:this.ikNode_15,p:{rotation:2.8749,x:-144.9,y:83.15,regY:0.1}}]},1).to({state:[{t:this.ikNode_13,p:{rotation:4.3756,x:-69.55,y:-279.65,regY:0,regX:39.9}},{t:this.ikNode_14,p:{rotation:4.5738,x:-123.8,y:-67,regX:87.9}},{t:this.ikNode_15,p:{rotation:2.3953,x:-139.2,y:84.2,regY:0}}]},1).to({state:[{t:this.ikNode_13,p:{rotation:3.5001,x:-69.5,y:-279.65,regY:0,regX:40}},{t:this.ikNode_14,p:{rotation:3.6596,x:-120.55,y:-66.2,regX:87.9}},{t:this.ikNode_15,p:{rotation:1.9168,x:-133.55,y:85.25,regY:0}}]},1).to({state:[{t:this.ikNode_13,p:{rotation:2.6255,x:-69.6,y:-279.65,regY:0,regX:39.9}},{t:this.ikNode_14,p:{rotation:2.7445,x:-117.3,y:-65.45,regX:87.9}},{t:this.ikNode_15,p:{rotation:1.4374,x:-127.85,y:86.15,regY:0}}]},1).to({state:[{t:this.ikNode_13,p:{rotation:1.7497,x:-69.55,y:-279.7,regY:0,regX:39.9}},{t:this.ikNode_14,p:{rotation:1.8293,x:-114,y:-64.75,regX:87.9}},{t:this.ikNode_15,p:{rotation:0.9583,x:-122.15,y:87.05,regY:0}}]},1).to({state:[{t:this.ikNode_13,p:{rotation:0.8752,x:-69.55,y:-279.7,regY:0,regX:39.9}},{t:this.ikNode_14,p:{rotation:0.9145,x:-110.7,y:-64.1,regX:87.9}},{t:this.ikNode_15,p:{rotation:0.4791,x:-116.45,y:87.8,regY:0}}]},1).to({state:[{t:this.ikNode_13,p:{rotation:0,x:-69.65,y:-279.7,regY:0,regX:39.9}},{t:this.ikNode_14,p:{rotation:0,x:-107.5,y:-63.5,regX:87.9}},{t:this.ikNode_15,p:{rotation:0,x:-110.8,y:88.55,regY:0}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-348.5,-297.3,319.6,501.1);


(lib.大燈籠 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 大燈籠
	this.ikNode_12 = new lib.燈下線();
	this.ikNode_12.name = "ikNode_12";
	this.ikNode_12.setTransform(-111.2,88.95,1,1,0,0,0,20,0.4);

	this.ikNode_11 = new lib.燈本體();
	this.ikNode_11.name = "ikNode_11";
	this.ikNode_11.setTransform(-107.5,-63.5,1,1,0,0,0,87.9,3.1);

	this.ikNode_10 = new lib.吊繩();
	this.ikNode_10.name = "ikNode_10";
	this.ikNode_10.setTransform(-69.65,-279.7,1,1,0,0,0,39.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_10,p:{rotation:0,x:-69.65,y:-279.7,regX:39.9}},{t:this.ikNode_11,p:{rotation:0,x:-107.5,y:-63.5,regX:87.9}},{t:this.ikNode_12,p:{rotation:0,x:-111.2,y:88.95,regX:20,regY:0.4}}]}).to({state:[{t:this.ikNode_10,p:{rotation:-0.6295,x:-69.6,y:-279.65,regX:39.9}},{t:this.ikNode_11,p:{rotation:-0.5919,x:-105.05,y:-63,regX:87.9}},{t:this.ikNode_12,p:{rotation:0.1346,x:-106.75,y:88.9,regX:20,regY:0.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-1.2599,x:-69.6,y:-279.65,regX:39.9}},{t:this.ikNode_11,p:{rotation:-1.1839,x:-102.7,y:-62.6,regX:87.9}},{t:this.ikNode_12,p:{rotation:0.2701,x:-102.8,y:89.3,regX:20,regY:0.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-1.8896,x:-69.6,y:-279.6,regX:39.9}},{t:this.ikNode_11,p:{rotation:-1.7768,x:-100.3,y:-62.3,regX:87.9}},{t:this.ikNode_12,p:{rotation:0.4048,x:-98.85,y:89.65,regX:20,regY:0.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-2.5196,x:-69.65,y:-279.6,regX:39.9}},{t:this.ikNode_11,p:{rotation:-2.3691,x:-97.95,y:-61.95,regX:87.9}},{t:this.ikNode_12,p:{rotation:0.5394,x:-94.9,y:89.95,regX:20,regY:0.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-3.1499,x:-69.6,y:-279.6,regX:39.9}},{t:this.ikNode_11,p:{rotation:-2.9607,x:-95.5,y:-61.65,regX:87.9}},{t:this.ikNode_12,p:{rotation:0.675,x:-90.9,y:90.2,regX:20,regY:0.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-3.7796,x:-69.65,y:-279.65,regX:39.9}},{t:this.ikNode_11,p:{rotation:-3.5536,x:-93.1,y:-61.4,regX:87.9}},{t:this.ikNode_12,p:{rotation:0.8096,x:-86.95,y:90.4,regX:20,regY:0.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-4.4098,x:-69.6,y:-279.6,regX:39.9}},{t:this.ikNode_11,p:{rotation:-4.1459,x:-90.85,y:-61.1,regX:87.8}},{t:this.ikNode_12,p:{rotation:0.9451,x:-82.95,y:90.6,regX:20,regY:0.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-5.0397,x:-69.6,y:-279.6,regX:39.9}},{t:this.ikNode_11,p:{rotation:-4.7378,x:-88.35,y:-60.9,regX:87.9}},{t:this.ikNode_12,p:{rotation:1.0798,x:-79,y:90.75,regX:20,regY:0.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-5.6701,x:-69.65,y:-279.6,regX:39.9}},{t:this.ikNode_11,p:{rotation:-5.3303,x:-85.9,y:-60.7,regX:87.9}},{t:this.ikNode_12,p:{rotation:1.2153,x:-75,y:90.75,regX:20,regY:0.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-6.2995,x:-69.65,y:-279.6,regX:39.9}},{t:this.ikNode_11,p:{rotation:-5.9223,x:-83.5,y:-60.5,regX:87.9}},{t:this.ikNode_12,p:{rotation:1.35,x:-71.05,y:90.8,regX:20,regY:0.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-6.9297,x:-69.65,y:-279.6,regX:39.9}},{t:this.ikNode_11,p:{rotation:-6.5143,x:-81.1,y:-60.35,regX:87.9}},{t:this.ikNode_12,p:{rotation:1.4856,x:-67.05,y:90.8,regX:20,regY:0.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-7.5599,x:-69.65,y:-279.6,regX:39.9}},{t:this.ikNode_11,p:{rotation:-7.1068,x:-78.7,y:-60.25,regX:87.9}},{t:this.ikNode_12,p:{rotation:1.6202,x:-63.1,y:90.8,regX:20,regY:0.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-8.1901,x:-69.6,y:-279.6,regX:39.9}},{t:this.ikNode_11,p:{rotation:-7.6992,x:-76.3,y:-60.25,regX:87.9}},{t:this.ikNode_12,p:{rotation:1.7558,x:-59.1,y:90.7,regX:20,regY:0.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-8.8204,x:-69.6,y:-279.55,regX:39.9}},{t:this.ikNode_11,p:{rotation:-8.2917,x:-73.85,y:-60.2,regX:87.9}},{t:this.ikNode_12,p:{rotation:1.8905,x:-55.1,y:90.6,regX:20,regY:0.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-9.45,x:-69.65,y:-279.6,regX:39.9}},{t:this.ikNode_11,p:{rotation:-8.8841,x:-71.4,y:-60.1,regX:87.9}},{t:this.ikNode_12,p:{rotation:2.0261,x:-51.05,y:90.4,regX:20.1,regY:0.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-10.0798,x:-69.6,y:-279.6,regX:39.9}},{t:this.ikNode_11,p:{rotation:-9.4757,x:-69.05,y:-60.1,regX:87.9}},{t:this.ikNode_12,p:{rotation:2.1608,x:-47.05,y:90.2,regX:20.1,regY:0.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-10.71,x:-69.65,y:-279.55,regX:39.9}},{t:this.ikNode_11,p:{rotation:-10.0683,x:-66.6,y:-60.1,regX:87.9}},{t:this.ikNode_12,p:{rotation:2.2956,x:-43.1,y:89.95,regX:20.1,regY:0.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-11.3406,x:-69.65,y:-279.6,regX:39.9}},{t:this.ikNode_11,p:{rotation:-10.6611,x:-64.2,y:-60.15,regX:87.9}},{t:this.ikNode_12,p:{rotation:2.4312,x:-39.15,y:89.65,regX:20.1,regY:0.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-11.9701,x:-69.6,y:-279.55,regX:39.9}},{t:this.ikNode_11,p:{rotation:-11.2532,x:-61.8,y:-60.2,regX:87.9}},{t:this.ikNode_12,p:{rotation:2.566,x:-35.15,y:89.3,regX:20.1,regY:0.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-12.5999,x:-69.6,y:-279.55,regX:39.9}},{t:this.ikNode_11,p:{rotation:-11.8449,x:-59.35,y:-60.3,regX:87.9}},{t:this.ikNode_12,p:{rotation:2.7007,x:-31.2,y:88.95,regX:20.1,regY:0.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-13.2305,x:-69.6,y:-279.6,regX:39.9}},{t:this.ikNode_11,p:{rotation:-12.4379,x:-56.95,y:-60.45,regX:87.9}},{t:this.ikNode_12,p:{rotation:2.8364,x:-27.25,y:88.5,regX:20.1,regY:0.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-13.86,x:-69.6,y:-279.55,regX:39.9}},{t:this.ikNode_11,p:{rotation:-13.0294,x:-54.55,y:-60.6,regX:87.9}},{t:this.ikNode_12,p:{rotation:2.9712,x:-23.45,y:88.05,regX:20,regY:0.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-14.4902,x:-69.6,y:-279.6,regX:39.9}},{t:this.ikNode_11,p:{rotation:-13.6223,x:-52.1,y:-60.8,regX:87.9}},{t:this.ikNode_12,p:{rotation:3.1061,x:-19.5,y:87.55,regX:20,regY:0.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-15.1205,x:-69.65,y:-279.55,regX:39.9}},{t:this.ikNode_11,p:{rotation:-14.2141,x:-49.75,y:-61,regX:87.9}},{t:this.ikNode_12,p:{rotation:3.2418,x:-15.55,y:87,regX:20,regY:0.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-15.75,x:-69.65,y:-279.6,regX:39.9}},{t:this.ikNode_11,p:{rotation:-14.8066,x:-47.3,y:-61.2,regX:87.9}},{t:this.ikNode_12,p:{rotation:3.3766,x:-11.6,y:86.4,regX:20,regY:0.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-16.3806,x:-69.6,y:-279.55,regX:39.9}},{t:this.ikNode_11,p:{rotation:-15.3987,x:-44.95,y:-61.45,regX:87.9}},{t:this.ikNode_12,p:{rotation:3.5115,x:-7.7,y:85.7,regX:20,regY:0.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-17.0104,x:-69.65,y:-279.55,regX:39.9}},{t:this.ikNode_11,p:{rotation:-15.991,x:-42.55,y:-61.7,regX:87.9}},{t:this.ikNode_12,p:{rotation:3.6464,x:-3.9,y:85.05,regX:19.9,regY:0.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-17.6404,x:-69.65,y:-279.55,regX:39.9}},{t:this.ikNode_11,p:{rotation:-16.5839,x:-40.1,y:-62.1,regX:87.9}},{t:this.ikNode_12,p:{rotation:3.7813,x:0,y:84.35,regX:19.9,regY:0.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-18.271,x:-69.6,y:-279.55,regX:39.9}},{t:this.ikNode_11,p:{rotation:-17.1758,x:-37.75,y:-62.4,regX:87.9}},{t:this.ikNode_12,p:{rotation:3.9172,x:3.9,y:83.55,regX:19.9,regY:0.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-17.6616,x:-69.65,y:-279.55,regX:39.9}},{t:this.ikNode_11,p:{rotation:-16.603,x:-40,y:-62.05,regX:87.9}},{t:this.ikNode_12,p:{rotation:3.7866,x:0.15,y:84.3,regX:19.9,regY:0.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-17.0525,x:-69.6,y:-279.55,regX:39.9}},{t:this.ikNode_11,p:{rotation:-16.0309,x:-42.35,y:-61.7,regX:87.9}},{t:this.ikNode_12,p:{rotation:3.6561,x:-3.65,y:85.1,regX:19.9,regY:0.5}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-16.4434,x:-69.65,y:-279.55,regX:39.9}},{t:this.ikNode_11,p:{rotation:-15.4577,x:-44.7,y:-61.5,regX:87.9}},{t:this.ikNode_12,p:{rotation:3.5256,x:-7.3,y:85.7,regX:20,regY:0.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-15.8344,x:-69.6,y:-279.55,regX:39.9}},{t:this.ikNode_11,p:{rotation:-14.8853,x:-47,y:-61.25,regX:87.9}},{t:this.ikNode_12,p:{rotation:3.3942,x:-11.1,y:86.3,regX:20,regY:0.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-15.2257,x:-69.6,y:-279.6,regX:39.9}},{t:this.ikNode_11,p:{rotation:-14.3134,x:-49.45,y:-61,regX:87.8}},{t:this.ikNode_12,p:{rotation:3.2637,x:-14.9,y:86.9,regX:20,regY:0.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-14.6168,x:-69.65,y:-279.55,regX:39.9}},{t:this.ikNode_11,p:{rotation:-13.7402,x:-51.65,y:-60.85,regX:87.9}},{t:this.ikNode_12,p:{rotation:3.1332,x:-18.7,y:87.45,regX:20,regY:0.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-14.0076,x:-69.65,y:-279.55,regX:39.9}},{t:this.ikNode_11,p:{rotation:-13.1677,x:-54,y:-60.65,regX:87.9}},{t:this.ikNode_12,p:{rotation:3.0028,x:-22.5,y:87.9,regX:20,regY:0.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-13.3984,x:-69.65,y:-279.55,regX:39.9}},{t:this.ikNode_11,p:{rotation:-12.5955,x:-56.25,y:-60.45,regX:87.9}},{t:this.ikNode_12,p:{rotation:2.8723,x:-26.35,y:88.4,regX:20,regY:0.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-12.7889,x:-69.65,y:-279.6,regX:39.9}},{t:this.ikNode_11,p:{rotation:-12.0227,x:-58.65,y:-60.35,regX:87.9}},{t:this.ikNode_12,p:{rotation:2.7419,x:-30,y:88.8,regX:20.1,regY:0.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-12.1801,x:-69.65,y:-279.55,regX:39.9}},{t:this.ikNode_11,p:{rotation:-11.4504,x:-61,y:-60.25,regX:87.9}},{t:this.ikNode_12,p:{rotation:2.6115,x:-33.85,y:89.2,regX:20.1,regY:0.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-11.5709,x:-69.6,y:-279.55,regX:39.9}},{t:this.ikNode_11,p:{rotation:-10.8782,x:-63.3,y:-60.2,regX:87.9}},{t:this.ikNode_12,p:{rotation:2.4802,x:-37.7,y:89.5,regX:20.1,regY:0.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-10.9619,x:-69.65,y:-279.6,regX:39.9}},{t:this.ikNode_11,p:{rotation:-10.3055,x:-65.65,y:-60.1,regX:87.9}},{t:this.ikNode_12,p:{rotation:2.3498,x:-41.5,y:89.8,regX:20.1,regY:0.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-10.3535,x:-69.6,y:-279.55,regX:39.9}},{t:this.ikNode_11,p:{rotation:-9.7328,x:-68,y:-60.1,regX:87.9}},{t:this.ikNode_12,p:{rotation:2.2195,x:-45.35,y:90.1,regX:20.1,regY:0.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-9.7443,x:-69.65,y:-279.6,regX:39.9}},{t:this.ikNode_11,p:{rotation:-9.1602,x:-70.3,y:-60.1,regX:87.9}},{t:this.ikNode_12,p:{rotation:2.0891,x:-49.2,y:90.35,regX:20.1,regY:0.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-9.1355,x:-69.6,y:-279.6,regX:39.9}},{t:this.ikNode_11,p:{rotation:-8.5877,x:-72.75,y:-60.1,regX:87.8}},{t:this.ikNode_12,p:{rotation:1.9579,x:-53.05,y:90.5,regX:20.1,regY:0.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-8.5259,x:-69.65,y:-279.55,regX:39.9}},{t:this.ikNode_11,p:{rotation:-8.0152,x:-74.95,y:-60.2,regX:87.9}},{t:this.ikNode_12,p:{rotation:1.8275,x:-57,y:90.65,regX:20,regY:0.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-7.9172,x:-69.65,y:-279.6,regX:39.9}},{t:this.ikNode_11,p:{rotation:-7.4426,x:-77.35,y:-60.25,regX:87.9}},{t:this.ikNode_12,p:{rotation:1.6972,x:-60.8,y:90.75,regX:20,regY:0.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-7.3077,x:-69.55,y:-279.6,regX:40}},{t:this.ikNode_11,p:{rotation:-6.8699,x:-79.8,y:-60.3,regX:87.8}},{t:this.ikNode_12,p:{rotation:1.5669,x:-64.65,y:90.8,regX:20,regY:0.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-6.6991,x:-69.6,y:-279.6,regX:39.9}},{t:this.ikNode_11,p:{rotation:-6.2978,x:-82,y:-60.45,regX:87.9}},{t:this.ikNode_12,p:{rotation:1.4357,x:-68.5,y:90.85,regX:20,regY:0.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-6.0902,x:-69.65,y:-279.6,regX:39.9}},{t:this.ikNode_11,p:{rotation:-5.7246,x:-84.35,y:-60.55,regX:87.9}},{t:this.ikNode_12,p:{rotation:1.3054,x:-72.35,y:90.8,regX:20,regY:0.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-5.4813,x:-69.65,y:-279.6,regX:39.9}},{t:this.ikNode_11,p:{rotation:-5.152,x:-86.6,y:-60.75,regX:87.9}},{t:this.ikNode_12,p:{rotation:1.1751,x:-76.2,y:90.75,regX:20,regY:0.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-4.872,x:-69.65,y:-279.6,regX:39.9}},{t:this.ikNode_11,p:{rotation:-4.58,x:-89,y:-60.95,regX:87.9}},{t:this.ikNode_12,p:{rotation:1.0439,x:-80.05,y:90.65,regX:20,regY:0.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-4.2625,x:-69.6,y:-279.6,regX:39.9}},{t:this.ikNode_11,p:{rotation:-4.0074,x:-91.3,y:-61.2,regX:87.9}},{t:this.ikNode_12,p:{rotation:0.9137,x:-83.9,y:90.5,regX:20,regY:0.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-3.6534,x:-69.65,y:-279.6,regX:39.9}},{t:this.ikNode_11,p:{rotation:-3.4344,x:-93.6,y:-61.4,regX:87.9}},{t:this.ikNode_12,p:{rotation:0.7834,x:-87.75,y:90.35,regX:20,regY:0.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-3.0448,x:-69.6,y:-279.6,regX:39.9}},{t:this.ikNode_11,p:{rotation:-2.8627,x:-95.9,y:-61.7,regX:87.9}},{t:this.ikNode_12,p:{rotation:0.6522,x:-91.55,y:90.15,regX:20,regY:0.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-2.4356,x:-69.65,y:-279.6,regX:39.9}},{t:this.ikNode_11,p:{rotation:-2.2895,x:-98.25,y:-62,regX:87.9}},{t:this.ikNode_12,p:{rotation:0.5219,x:-95.4,y:89.9,regX:20,regY:0.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-1.8267,x:-69.6,y:-279.6,regX:39.9}},{t:this.ikNode_11,p:{rotation:-1.7173,x:-100.55,y:-62.35,regX:87.9}},{t:this.ikNode_12,p:{rotation:0.3917,x:-99.25,y:89.6,regX:20,regY:0.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-1.2179,x:-69.6,y:-279.6,regX:39.9}},{t:this.ikNode_11,p:{rotation:-1.1445,x:-102.85,y:-62.65,regX:87.9}},{t:this.ikNode_12,p:{rotation:0.2605,x:-103.1,y:89.25,regX:20,regY:0.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-0.6085,x:-69.6,y:-279.6,regX:39.9}},{t:this.ikNode_11,p:{rotation:-0.5718,x:-105.15,y:-63.05,regX:87.9}},{t:this.ikNode_12,p:{rotation:0.1303,x:-106.9,y:88.9,regX:20,regY:0.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:0,x:-69.6,y:-279.7,regX:39.9}},{t:this.ikNode_11,p:{rotation:0,x:-107.45,y:-63.45,regX:87.9}},{t:this.ikNode_12,p:{rotation:0,x:-110.7,y:88.55,regX:20,regY:0.4}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-195.4,-279.7,278.5,485.7);


(lib.小燈籠 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 小燈籠
	this.ikNode_18 = new lib.燈下線();
	this.ikNode_18.name = "ikNode_18";
	this.ikNode_18.setTransform(-110.8,88.55,1,1,0,0,0,20.4,0);

	this.ikNode_17 = new lib.燈本體();
	this.ikNode_17.name = "ikNode_17";
	this.ikNode_17.setTransform(-107.5,-63.5,1,1,0,0,0,87.9,3.1);

	this.ikNode_16 = new lib.吊繩();
	this.ikNode_16.name = "ikNode_16";
	this.ikNode_16.setTransform(-69.65,-279.7,1,1,0,0,0,39.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_16,p:{rotation:0,x:-69.65,y:-279.7,regY:0}},{t:this.ikNode_17,p:{rotation:0,x:-107.5,y:-63.5,regX:87.9}},{t:this.ikNode_18,p:{rotation:0,x:-110.8,y:88.55}}]}).to({state:[{t:this.ikNode_16,p:{rotation:1.3325,x:-69.55,y:-279.65,regY:0}},{t:this.ikNode_17,p:{rotation:1.3299,x:-112.45,y:-64.4,regX:87.9}},{t:this.ikNode_18,p:{rotation:0.4887,x:-119.25,y:87.45}}]},1).to({state:[{t:this.ikNode_16,p:{rotation:2.6657,x:-69.55,y:-279.7,regY:0}},{t:this.ikNode_17,p:{rotation:2.6605,x:-117.45,y:-65.45,regX:87.9}},{t:this.ikNode_18,p:{rotation:0.9784,x:-127.8,y:86.2}}]},1).to({state:[{t:this.ikNode_16,p:{rotation:3.9995,x:-69.55,y:-279.65,regY:0}},{t:this.ikNode_17,p:{rotation:3.9917,x:-122.35,y:-66.65,regX:87.9}},{t:this.ikNode_18,p:{rotation:1.4681,x:-136.3,y:84.75}}]},1).to({state:[{t:this.ikNode_16,p:{rotation:5.3329,x:-69.55,y:-279.7,regY:0}},{t:this.ikNode_17,p:{rotation:5.3223,x:-127.45,y:-67.95,regX:87.8}},{t:this.ikNode_18,p:{rotation:1.957,x:-144.75,y:83.1}}]},1).to({state:[{t:this.ikNode_16,p:{rotation:6.6657,x:-69.55,y:-279.65,regY:0}},{t:this.ikNode_17,p:{rotation:6.6533,x:-132.25,y:-69.3,regX:87.9}},{t:this.ikNode_18,p:{rotation:2.4469,x:-153.15,y:81.25}}]},1).to({state:[{t:this.ikNode_16,p:{rotation:7.9993,x:-69.55,y:-279.65,regY:0}},{t:this.ikNode_17,p:{rotation:7.9835,x:-137.15,y:-70.9,regX:87.9}},{t:this.ikNode_18,p:{rotation:2.9362,x:-161.55,y:79.2}}]},1).to({state:[{t:this.ikNode_16,p:{rotation:9.333,x:-69.55,y:-279.7,regY:0}},{t:this.ikNode_17,p:{rotation:9.3144,x:-141.95,y:-72.45,regX:87.9}},{t:this.ikNode_18,p:{rotation:3.4257,x:-169.85,y:76.95}}]},1).to({state:[{t:this.ikNode_16,p:{rotation:10.6656,x:-69.55,y:-279.65,regY:0}},{t:this.ikNode_17,p:{rotation:10.645,x:-146.7,y:-74.2,regX:87.9}},{t:this.ikNode_18,p:{rotation:3.9145,x:-178.1,y:74.55}}]},1).to({state:[{t:this.ikNode_16,p:{rotation:11.9996,x:-69.5,y:-279.65,regY:0}},{t:this.ikNode_17,p:{rotation:11.9754,x:-151.5,y:-76.05,regX:87.9}},{t:this.ikNode_18,p:{rotation:4.4045,x:-186.3,y:71.9}}]},1).to({state:[{t:this.ikNode_16,p:{rotation:13.3329,x:-69.55,y:-279.65,regY:0}},{t:this.ikNode_17,p:{rotation:13.3068,x:-156.2,y:-78.05,regX:87.9}},{t:this.ikNode_18,p:{rotation:4.894,x:-194.45,y:69.1}}]},1).to({state:[{t:this.ikNode_16,p:{rotation:14.6656,x:-69.5,y:-279.65,regY:0}},{t:this.ikNode_17,p:{rotation:14.6376,x:-160.9,y:-80.15,regX:87.9}},{t:this.ikNode_18,p:{rotation:5.383,x:-202.55,y:66.1}}]},1).to({state:[{t:this.ikNode_16,p:{rotation:15.9991,x:-69.5,y:-279.65,regY:0}},{t:this.ikNode_17,p:{rotation:15.9681,x:-165.5,y:-82.25,regX:87.9}},{t:this.ikNode_18,p:{rotation:5.8722,x:-210.55,y:62.9}}]},1).to({state:[{t:this.ikNode_16,p:{rotation:17.3323,x:-69.5,y:-279.65,regY:0}},{t:this.ikNode_17,p:{rotation:17.2986,x:-170.05,y:-84.6,regX:87.9}},{t:this.ikNode_18,p:{rotation:6.362,x:-218.5,y:59.5}}]},1).to({state:[{t:this.ikNode_16,p:{rotation:18.6655,x:-69.5,y:-279.7,regY:0}},{t:this.ikNode_17,p:{rotation:18.6293,x:-174.55,y:-86.95,regX:87.9}},{t:this.ikNode_18,p:{rotation:6.8514,x:-226.3,y:56}}]},1).to({state:[{t:this.ikNode_16,p:{rotation:19.9986,x:-69.5,y:-279.65,regY:0}},{t:this.ikNode_17,p:{rotation:19.9596,x:-179,y:-89.5,regX:87.9}},{t:this.ikNode_18,p:{rotation:7.3404,x:-234.05,y:52.2}}]},1).to({state:[{t:this.ikNode_16,p:{rotation:21.3322,x:-69.5,y:-279.65,regY:0}},{t:this.ikNode_17,p:{rotation:21.2907,x:-183.4,y:-92.1,regX:87.9}},{t:this.ikNode_18,p:{rotation:7.8299,x:-241.75,y:48.35}}]},1).to({state:[{t:this.ikNode_16,p:{rotation:22.6655,x:-69.55,y:-279.55,regY:0.1}},{t:this.ikNode_17,p:{rotation:22.6208,x:-187.7,y:-94.8,regX:87.9}},{t:this.ikNode_18,p:{rotation:8.319,x:-249.3,y:44.2}}]},1).to({state:[{t:this.ikNode_16,p:{rotation:23.9985,x:-69.5,y:-279.65,regY:0}},{t:this.ikNode_17,p:{rotation:23.9516,x:-191.95,y:-97.55,regX:87.9}},{t:this.ikNode_18,p:{rotation:8.8089,x:-256.8,y:39.9}}]},1).to({state:[{t:this.ikNode_16,p:{rotation:25.3318,x:-69.5,y:-279.65,regY:0}},{t:this.ikNode_17,p:{rotation:25.2825,x:-196.15,y:-100.5,regX:87.9}},{t:this.ikNode_18,p:{rotation:9.2985,x:-264.15,y:35.5}}]},1).to({state:[{t:this.ikNode_16,p:{rotation:22.286,x:-69.5,y:-279.65,regY:0}},{t:this.ikNode_17,p:{rotation:22.4534,x:-186.5,y:-94.05,regX:87.9}},{t:this.ikNode_18,p:{rotation:8.4684,x:-247.65,y:45.15}}]},1).to({state:[{t:this.ikNode_16,p:{rotation:19.2395,x:-69.5,y:-279.65,regY:0}},{t:this.ikNode_17,p:{rotation:19.6233,x:-176.45,y:-88.05,regX:87.9}},{t:this.ikNode_18,p:{rotation:7.6384,x:-230.7,y:53.95}}]},1).to({state:[{t:this.ikNode_16,p:{rotation:16.1928,x:-69.55,y:-279.5,regY:0.1}},{t:this.ikNode_17,p:{rotation:16.7939,x:-166.1,y:-82.6,regX:87.9}},{t:this.ikNode_18,p:{rotation:6.8091,x:-213.3,y:61.85}}]},1).to({state:[{t:this.ikNode_16,p:{rotation:13.1461,x:-69.5,y:-279.65,regY:0}},{t:this.ikNode_17,p:{rotation:13.9635,x:-155.5,y:-77.75,regX:87.9}},{t:this.ikNode_18,p:{rotation:5.9786,x:-195.45,y:68.85}}]},1).to({state:[{t:this.ikNode_16,p:{rotation:10.0993,x:-69.45,y:-279.65,regY:0}},{t:this.ikNode_17,p:{rotation:11.1338,x:-144.65,y:-73.45,regX:87.9}},{t:this.ikNode_18,p:{rotation:5.1494,x:-177.35,y:75}}]},1).to({state:[{t:this.ikNode_16,p:{rotation:7.053,x:-69.5,y:-279.65,regY:0}},{t:this.ikNode_17,p:{rotation:8.3049,x:-133.6,y:-69.75,regX:87.9}},{t:this.ikNode_18,p:{rotation:4.3195,x:-158.9,y:80.05}}]},1).to({state:[{t:this.ikNode_16,p:{rotation:4.0065,x:-69.5,y:-279.6,regY:0}},{t:this.ikNode_17,p:{rotation:5.4752,x:-122.35,y:-66.6,regX:87.9}},{t:this.ikNode_18,p:{rotation:3.4896,x:-140.25,y:84.2}}]},1).to({state:[{t:this.ikNode_16,p:{rotation:0.96,x:-69.5,y:-279.65,regY:0}},{t:this.ikNode_17,p:{rotation:2.6456,x:-110.95,y:-64.1,regX:87.9}},{t:this.ikNode_18,p:{rotation:2.6596,x:-121.35,y:87.4}}]},1).to({state:[{t:this.ikNode_16,p:{rotation:-2.0856,x:-69.55,y:-279.55,regY:0}},{t:this.ikNode_17,p:{rotation:-0.1836,x:-99.5,y:-62.2,regX:87.9}},{t:this.ikNode_18,p:{rotation:1.8293,x:-102.4,y:89.65}}]},1).to({state:[{t:this.ikNode_16,p:{rotation:-5.1318,x:-69.55,y:-279.55,regY:0}},{t:this.ikNode_17,p:{rotation:-3.0132,x:-87.9,y:-60.8,regX:87.9}},{t:this.ikNode_18,p:{rotation:1.0002,x:-83.3,y:90.85}}]},1).to({state:[{t:this.ikNode_16,p:{rotation:-8.1786,x:-69.55,y:-279.6,regY:0}},{t:this.ikNode_17,p:{rotation:-5.8433,x:-76.25,y:-60.15,regX:87.9}},{t:this.ikNode_18,p:{rotation:0.1705,x:-64.15,y:91.1}}]},1).to({state:[{t:this.ikNode_16,p:{rotation:-11.2247,x:-69.55,y:-279.55,regY:0}},{t:this.ikNode_17,p:{rotation:-8.6726,x:-64.6,y:-60.1,regX:87.9}},{t:this.ikNode_18,p:{rotation:-0.6592,x:-45,y:90.35}}]},1).to({state:[{t:this.ikNode_16,p:{rotation:-14.271,x:-69.55,y:-279.55,regY:0}},{t:this.ikNode_17,p:{rotation:-11.5021,x:-52.95,y:-60.7,regX:87.9}},{t:this.ikNode_18,p:{rotation:-1.4891,x:-25.95,y:88.7}}]},1).to({state:[{t:this.ikNode_16,p:{rotation:-17.3177,x:-69.55,y:-279.55,regY:0}},{t:this.ikNode_17,p:{rotation:-14.3323,x:-41.45,y:-61.85,regX:87.8}},{t:this.ikNode_18,p:{rotation:-2.3183,x:-6.95,y:85.95}}]},1).to({state:[{t:this.ikNode_16,p:{rotation:-20.364,x:-69.55,y:-279.55,regY:0}},{t:this.ikNode_17,p:{rotation:-17.1623,x:-29.8,y:-63.7,regX:87.9}},{t:this.ikNode_18,p:{rotation:-3.1481,x:11.8,y:82.35}}]},1).to({state:[{t:this.ikNode_16,p:{rotation:-23.4102,x:-69.55,y:-279.55,regY:0}},{t:this.ikNode_17,p:{rotation:-19.9914,x:-18.4,y:-66.1,regX:87.9}},{t:this.ikNode_18,p:{rotation:-3.9785,x:30.25,y:77.65}}]},1).to({state:[{t:this.ikNode_16,p:{rotation:-26.4571,x:-69.65,y:-279.65,regY:-0.1}},{t:this.ikNode_17,p:{rotation:-22.821,x:-7.2,y:-69.05,regX:87.8}},{t:this.ikNode_18,p:{rotation:-4.808,x:48.6,y:72.05}}]},1).to({state:[{t:this.ikNode_16,p:{rotation:-29.5038,x:-69.6,y:-279.55,regY:0}},{t:this.ikNode_17,p:{rotation:-25.6505,x:4.05,y:-72.7,regX:87.9}},{t:this.ikNode_18,p:{rotation:-5.6377,x:66.6,y:65.5}}]},1).to({state:[{t:this.ikNode_16,p:{rotation:-32.5498,x:-69.55,y:-279.5,regY:0}},{t:this.ikNode_17,p:{rotation:-28.4805,x:14.9,y:-76.9,regX:87.9}},{t:this.ikNode_18,p:{rotation:-6.4676,x:84.2,y:58}}]},1).to({state:[{t:this.ikNode_16,p:{rotation:-35.5963,x:-69.55,y:-279.5,regY:0}},{t:this.ikNode_17,p:{rotation:-31.3104,x:25.55,y:-81.7,regX:87.9}},{t:this.ikNode_18,p:{rotation:-7.298,x:101.45,y:49.65}}]},1).to({state:[{t:this.ikNode_16,p:{rotation:-33.8169,x:-69.55,y:-279.55,regY:0}},{t:this.ikNode_17,p:{rotation:-29.7442,x:19.35,y:-78.8,regX:87.9}},{t:this.ikNode_18,p:{rotation:-6.9324,x:91.65,y:54.55}}]},1).to({state:[{t:this.ikNode_16,p:{rotation:-32.0366,x:-69.6,y:-279.5,regY:0}},{t:this.ikNode_17,p:{rotation:-28.1793,x:13.1,y:-76.1,regX:87.9}},{t:this.ikNode_18,p:{rotation:-6.5679,x:81.7,y:59.15}}]},1).to({state:[{t:this.ikNode_16,p:{rotation:-30.2569,x:-69.6,y:-279.55,regY:0}},{t:this.ikNode_17,p:{rotation:-26.6135,x:6.75,y:-73.75,regX:87.9}},{t:this.ikNode_18,p:{rotation:-6.2028,x:71.65,y:63.45}}]},1).to({state:[{t:this.ikNode_16,p:{rotation:-28.4773,x:-69.6,y:-279.5,regY:0}},{t:this.ikNode_17,p:{rotation:-25.0478,x:0.3,y:-71.4,regX:87.9}},{t:this.ikNode_18,p:{rotation:-5.838,x:61.4,y:67.45}}]},1).to({state:[{t:this.ikNode_16,p:{rotation:-26.6968,x:-69.6,y:-279.6,regY:0}},{t:this.ikNode_17,p:{rotation:-23.4826,x:-6.25,y:-69.4,regX:87.9}},{t:this.ikNode_18,p:{rotation:-5.4734,x:51.1,y:71.15}}]},1).to({state:[{t:this.ikNode_16,p:{rotation:-24.9176,x:-69.55,y:-279.55,regY:0}},{t:this.ikNode_17,p:{rotation:-21.917,x:-12.8,y:-67.45,regX:87.9}},{t:this.ikNode_18,p:{rotation:-5.1082,x:40.65,y:74.55}}]},1).to({state:[{t:this.ikNode_16,p:{rotation:-23.1372,x:-69.6,y:-279.6,regY:0}},{t:this.ikNode_17,p:{rotation:-20.3518,x:-19.4,y:-65.85,regX:87.9}},{t:this.ikNode_18,p:{rotation:-4.7431,x:30.2,y:77.6}}]},1).to({state:[{t:this.ikNode_16,p:{rotation:-21.3574,x:-69.6,y:-279.6,regY:0}},{t:this.ikNode_17,p:{rotation:-18.7863,x:-26.1,y:-64.4,regX:87.9}},{t:this.ikNode_18,p:{rotation:-4.3783,x:19.7,y:80.35}}]},1).to({state:[{t:this.ikNode_16,p:{rotation:-19.5777,x:-69.6,y:-279.55,regY:0}},{t:this.ikNode_17,p:{rotation:-17.2206,x:-32.9,y:-63.15,regX:87.8}},{t:this.ikNode_18,p:{rotation:-4.0135,x:9,y:82.8}}]},1).to({state:[{t:this.ikNode_16,p:{rotation:-17.7982,x:-69.6,y:-279.6,regY:0}},{t:this.ikNode_17,p:{rotation:-15.6548,x:-39.5,y:-62.1,regX:87.9}},{t:this.ikNode_18,p:{rotation:-3.6482,x:-1.75,y:84.95}}]},1).to({state:[{t:this.ikNode_16,p:{rotation:-16.0182,x:-69.6,y:-279.55,regY:0}},{t:this.ikNode_17,p:{rotation:-14.0897,x:-46.3,y:-61.3,regX:87.9}},{t:this.ikNode_18,p:{rotation:-3.2838,x:-12.55,y:86.75}}]},1).to({state:[{t:this.ikNode_16,p:{rotation:-14.2385,x:-69.6,y:-279.55,regY:0}},{t:this.ikNode_17,p:{rotation:-12.5238,x:-53.25,y:-60.65,regX:87.8}},{t:this.ikNode_18,p:{rotation:-2.9187,x:-23.4,y:88.25}}]},1).to({state:[{t:this.ikNode_16,p:{rotation:-12.4584,x:-69.6,y:-279.6,regY:0}},{t:this.ikNode_17,p:{rotation:-10.9584,x:-59.9,y:-60.3,regX:87.9}},{t:this.ikNode_18,p:{rotation:-2.5537,x:-34.25,y:89.4}}]},1).to({state:[{t:this.ikNode_16,p:{rotation:-10.6789,x:-69.6,y:-279.6,regY:0}},{t:this.ikNode_17,p:{rotation:-9.3923,x:-66.75,y:-60.1,regX:87.9}},{t:this.ikNode_18,p:{rotation:-2.1888,x:-45.2,y:90.25}}]},1).to({state:[{t:this.ikNode_16,p:{rotation:-8.899,x:-69.65,y:-279.6,regY:0}},{t:this.ikNode_17,p:{rotation:-7.8272,x:-73.55,y:-60.15,regX:87.9}},{t:this.ikNode_18,p:{rotation:-1.824,x:-56.15,y:90.8}}]},1).to({state:[{t:this.ikNode_16,p:{rotation:-7.1192,x:-69.6,y:-279.6,regY:0}},{t:this.ikNode_17,p:{rotation:-6.2618,x:-80.4,y:-60.35,regX:87.9}},{t:this.ikNode_18,p:{rotation:-1.4593,x:-67.1,y:91}}]},1).to({state:[{t:this.ikNode_16,p:{rotation:-5.339,x:-69.6,y:-279.6,regY:0}},{t:this.ikNode_17,p:{rotation:-4.6958,x:-87.2,y:-60.8,regX:87.9}},{t:this.ikNode_18,p:{rotation:-1.0946,x:-78.05,y:90.8}}]},1).to({state:[{t:this.ikNode_16,p:{rotation:-3.5597,x:-69.65,y:-279.65,regY:0}},{t:this.ikNode_17,p:{rotation:-3.1306,x:-94.1,y:-61.45,regX:87.8}},{t:this.ikNode_18,p:{rotation:-0.7292,x:-88.95,y:90.35}}]},1).to({state:[{t:this.ikNode_16,p:{rotation:-1.7794,x:-69.6,y:-279.65,regY:0}},{t:this.ikNode_17,p:{rotation:-1.5651,x:-100.75,y:-62.35,regX:87.9}},{t:this.ikNode_18,p:{rotation:-0.3646,x:-99.9,y:89.55}}]},1).to({state:[{t:this.ikNode_16,p:{rotation:0,x:-69.6,y:-279.7,regY:0}},{t:this.ikNode_17,p:{rotation:0,x:-107.45,y:-63.45,regX:87.9}},{t:this.ikNode_18,p:{rotation:0,x:-110.75,y:88.55}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-341.8,-296.7,553.8,503.2);


// stage content:
(lib.B4A12鄭微珊燈籠 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 筆畫2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah0gBIDpgHQACAIgcAFQgVAEgiAAQg5AAhfgKg");
	this.shape.setTransform(302.7316,246.7602);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(150));

	// 遮色片01 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AhNDCQg2gVgkgxQgkgxgEg6QgBgQABgPQACgXAHgXQAIgbAQgaQAhgyA4gZQA5gaA6AIQA7AJAvAoQAvApARA5QARA5gRA7QgRA8gtAoQgrAmg8ALQgTADgRAAQgoAAgkgPg");
	var mask_graphics_1 = new cjs.Graphics().p("AjZDHQg2gVgkgxQgkgxgEg6QgBgQABgPQACgXAHgXQAIgbAQgaQAhgyA4gZQA5gaA7AIQA6AJAuAnQAZgZAigPQA5gaA7AIQA7AJAvAoQAvApARA5QARA5gRA7QgRA8gtAoQgrAmg8ALQg8AKg1gWQgfgMgagWIgGAHQgrAmg8ALQgTADgSAAQgoAAgkgPg");
	var mask_graphics_2 = new cjs.Graphics().p("AllDbQg2gVgkgxQgkgxgEg6QgBgQABgQQACgWAHgXQAIgbAQgaQAhgyA4gZQA5gaA7AIQA6AJAuAnQAagZAigPQA5gaA6AIQAwAHAoAcQAeglAugUQA5gaA7AIQA7AJAvAoQAvApARA5QARA5gRA7QgRA8gtAoQgrAmg8ALQg8AKg1gWQgWgIgTgOQgKANgNAMQgrAmg8ALQg7AKg1gWQgfgMgagWIgHAHQgrAmg8ALQgTADgSAAQgoAAgkgPg");
	var mask_graphics_3 = new cjs.Graphics().p("AnxEDQg2gVgkgxQgkgxgEg6QgBgQABgQQACgXAHgXQAIgaAQgaQAhgyA4gZQA5gaA7AIQA6AJAuAnQAagZAigPQA5gaA7AIQAwAHAoAcQAdglAugUQA5gaA7AIQAlAGAgARIAGgKQAhgyA4gZQA5gaA7AIQA7AJAvAoQAvApARA5QARA5gRA8QgRA7gtAoQgrAmg8ALQg8AKg1gWIgVgKQgRAegaAXQgrAmg8ALQg8AKg1gWQgWgIgTgOQgKANgMAMQgrAmg8ALQg8AKg1gWQgfgMgagWIgHAHQgrAmg8ALQgTADgSAAQgoAAgkgPg");
	var mask_graphics_4 = new cjs.Graphics().p("Ap9E1Qg2gVgkgxQgkgxgEg6QgBgQABgQQACgXAHgXQAIgbAQgaQAhgxA4gZQA5gaA7AIQA6AJAuAnQAagZAigPQA5gaA7AIQAwAHAoAcQAeglAugUQA5gaA6AIQAlAGAgARIAGgKQAhgyA4gZQA5gaA7AIQAgAFAdAOQAGgNAIgNQAhgyA4gZQA5gaA7AIQA7AJAvAoQAvApARA5QARA5gRA8QgRA7gtAoQgrAmg8ALQg8AKg1gWIgNgGQgTAoggAdQgrAmg8ALQg8AKg1gWIgVgKQgRAegaAXQgrAmg8ALQg7AKg1gWQgWgIgTgOQgKANgNAMQgrAmg8ALQg8AKg1gWQgfgMgagWIgHAHQgrAmg8ALQgTADgSAAQgoAAgkgPg");
	var mask_graphics_5 = new cjs.Graphics().p("Ap9E1Qg2gVgkgxQgkgxgEg6QgBgQABgQQACgXAHgXQAIgbAQgaQAhgxA4gZQA5gaA7AIQA6AJAuAnQAagZAigPQA5gaA7AIQAwAHAoAcQAeglAugUQA5gaA6AIQAlAGAgARIAGgKQAhgyA4gZQA5gaA7AIQAgAFAdAOQAGgNAIgNQAhgyA4gZQA5gaA7AIQA7AJAvAoQAvApARA5QARA5gRA8QgRA7gtAoQgrAmg8ALQg8AKg1gWIgNgGQgTAoggAdQgrAmg8ALQg8AKg1gWIgVgKQgRAegaAXQgrAmg8ALQg7AKg1gWQgWgIgTgOQgKANgNAMQgrAmg8ALQg8AKg1gWQgfgMgagWIgHAHQgrAmg8ALQgTADgSAAQgoAAgkgPg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:282.9375,y:235.029}).wait(1).to({graphics:mask_graphics_1,x:296.9375,y:234.529}).wait(1).to({graphics:mask_graphics_2,x:310.9375,y:232.529}).wait(1).to({graphics:mask_graphics_3,x:324.9375,y:228.529}).wait(1).to({graphics:mask_graphics_4,x:338.9375,y:223.529}).wait(1).to({graphics:mask_graphics_5,x:338.9375,y:223.529}).wait(145));

	// 筆畫1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#322E1E").s().p("AloDTQgugGg+gMQh7gWhLgaIA0gbQBSgmCbg5ICRhCQCXhEAagGIDmg1QD+gyBzANIAtAFQAxAJASAUQA7A+kICOQhmAtiZAtQkuBaj7AAIgDAAg");
	this.shape_1.setTransform(333.6639,228.141);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(150));

	// 遮色片02 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_6 = new cjs.Graphics().p("AgIC8Qg/gDguglQgdgXgSgiQgTgigEglQgDglALglQALgkAYgdQAdgjArgSQAsgSAsAEQA6AFAwAoQAvAoAOA5QAPA4gYA6QgXA6gxAfQgsAdg3AAIgLAAg");
	var mask_1_graphics_7 = new cjs.Graphics().p("ABmC8Qg7gGgqghIgNAKQgxAgg+gEQg/gDgugkQgdgYgSgiQgTgigEglQgDgkALglQALglAYgdQAdgjArgSQAsgRAtADQA5AFAuAmQATgOAXgKQArgRAtAEQAsAEAnAYQAnAZAXAnQAiA7gPBHQgPBIg2ApQgvAig9AAIgUAAg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AgXDAQg7gGgrghIgNAKQgxAgg+gEQg/gDgugkQgdgYgSgiQgTgigEglQgDgkALglQALglAYgdQAdgjArgSQAsgRAtADQA5AFAuAmQAUgOAXgKQArgRAsAEQAsAEAnAYIARAMQAgggAwgOQA7gRA3ASQA3ATAjAyQAkAyABA6QAAA6glAzQglA0g5ASQg5ASg8gVQghgLgZgUQgKAJgKAJQgvAig8AAIgUAAg");
	var mask_1_graphics_9 = new cjs.Graphics().p("Ah/DuQg7gGgqghIgOAKQgxAgg+gEQg/gDgugkQgdgYgSgiQgTgigEglQgDglALgkQALglAYgdQAdgjArgSQAsgRAtADQA5AFAvAmQATgOAXgKQArgRAtAEQAsAEAnAYIARAMQAgggAvgOQAxgOAvAKQAPgZAWgVQAwgsA9gGQA9gGA4AjQA4AiAVA6QAWA5gSA+QgSA+gyAlQgxAkhCgBQgVAAgUgEIgMARQglA0g5ASQg5ASg8gVQghgLgZgUQgJAKgLAIQguAjg9AAIgUgBg");
	var mask_1_graphics_10 = new cjs.Graphics().p("AlCD9Qg8gGgqghIgNAKQgxAgg+gEQg/gDgugkQgdgYgSgiQgTgigEglQgDglALglQALgkAYgdQAdgjArgSQAsgRAtADQA5AFAuAmQAUgOAXgKQArgRAtAEQAsAEAnAYIARAMQAgggAwgOQAxgPAvALQANgZAXgVQAwgsA9gGQA9gGA4AjIAQALQAsgjA1gFQAigDAhAJQAVgPAcgKQA7gVA4ARQA4AQAmAxQAnAxADA6QACA7giAzQghA0g3AWQg3AVg8gPIgBgBIgBABQgxAkhCgBQhAAAgwglIgDACQgxAkhCgBQgWAAgTgEIgMARQglA0g5ASQg4ASg8gVQghgLgZgUQgKAKgKAIQgvAjg9AAIgUgBg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AlCD9Qg8gGgqghIgNAKQgxAgg+gEQg/gDgugkQgdgYgSgiQgTgigEglQgDglALglQALgkAYgdQAdgjArgSQAsgRAtADQA5AFAuAmQAUgOAXgKQArgRAtAEQAsAEAnAYIARAMQAgggAwgOQAxgPAvALQANgZAXgVQAwgsA9gGQA9gGA4AjIAQALQAsgjA1gFQAigDAhAJQAVgPAcgKQA7gVA4ARQA4AQAmAxQAnAxADA6QACA7giAzQghA0g3AWQg3AVg8gPIgBgBIgBABQgxAkhCgBQhAAAgwglIgDACQgxAkhCgBQgWAAgTgEIgMARQglA0g5ASQg4ASg8gVQghgLgZgUQgKAKgKAIQgvAjg9AAIgUgBg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(6).to({graphics:mask_1_graphics_6,x:270.9344,y:278.9881}).wait(1).to({graphics:mask_1_graphics_7,x:282.4245,y:279.0408}).wait(1).to({graphics:mask_1_graphics_8,x:295.0331,y:278.6446}).wait(1).to({graphics:mask_1_graphics_9,x:305.4128,y:274.0255}).wait(1).to({graphics:mask_1_graphics_10,x:324.9413,y:272.532}).wait(1).to({graphics:mask_1_graphics_11,x:324.9413,y:272.532}).wait(139));

	// 筆畫3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231815").s().p("AmGCWQh2gPgdgbQgEgCgFgFQgJgLABgPIBGAnQBYAnBZgEIASgBQh5gWgSgJQgggIgngUQhOgoghg4ICJAAQCRgCAlgIIJYiHQAzgHAuABQCVACAzBQIAEALQADAQgGASQgSA4hhBBQgJALggALQhBAXh3AEIogAVQg1gCg8gIg");
	this.shape_2.setTransform(321.1529,269.8438);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(6).to({_off:false},0).wait(144));

	// 遮色片03 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_12 = new cjs.Graphics().p("AhLDtQg1gRgoglQgoglgVg0QgVg0ACg1QADhAAkg5QAkg5A5geQA4geBDACQBDABA3AhQArAaAeAqQAeApALAxQALAwgJAyQgIAygbAqQgeAtgvAeQgwAeg2AHQgPACgQAAQglAAgmgMg");
	var mask_2_graphics_13 = new cjs.Graphics().p("AjhEaQg1gRgoglQgoglgVg0QgVg0ACg2QADg/Akg5QAkg5A5geQA4geBEACQAvABApARQAjg0A0gcQA4gfBEACQBDACA3AhQAqAaAfAqQAeApALAwQALAxgJAyQgIAygcAqQgdAtgvAeQgwAeg2AHQg1AHg2gRIgSgHQgdAqgrAcQgwAeg2AHQgPACgQAAQgmAAgmgMg");
	var mask_2_graphics_14 = new cjs.Graphics().p("AltEuQg1gRgoglQgoglgVg0QgVg0ACg2QADg/Akg5QAkg5A5geQA4geBEACQAvABApARQAjg0A1gcQA4gfBDACQA4ACAxAYQAXgWAcgPQA5gfBDACQBCACA4AhQArAaAeAqQAeApALAxQALAwgJAzQgJAxgbAqQgdAugvAdQgwAeg2AHQg2AHg1gRQgSgGgRgIQgQAPgUAMQgwAeg2AHQg0AHg2gRIgSgHQgdAqgsAcQgwAeg2AHQgPACgQAAQgmAAgmgMg");
	var mask_2_graphics_15 = new cjs.Graphics().p("AoIFMQg1gRgoglQgoglgVg0QgVg0ACg2QADhAAkg4QAkg5A5geQA4geBEACQAvABApARQAjg0A1gcQA4gfBEACQA4ACAwAYQAXgWAcgPQA5gfBDACQA8ACA0AcQAfgmArgXQA4gfBEACQBDACA3AhQAqAaAfAqQAeApALAwQALAxgJAyQgIAzgbApQgeAtgvAeQgwAeg1AHQg2AHg1gRQgXgIgUgKQgZAegiAVQgwAeg2AHQg2AHg1gRQgSgGgRgIQgRAPgSAMQgwAeg2AHQg1AHg2gRIgSgHQgdAqgsAcQgwAeg2AHQgPACgQAAQgmAAgmgMg");
	var mask_2_graphics_16 = new cjs.Graphics().p("AqPGDQg1gRgoglQgoglgVg0QgVg0ACg2QADhAAkg5QAkg4A5geQA4geBEACQAvABApARQAjg0A1gcQA4gfBEACQA5ACAwAYQAXgWAcgPQA5gfBCACQA9ACAzAcQAfgmArgXQA4gfBEACQAbABAZAGIABgBQAkg5A4geQA5gfBDACQBEACA3AiQAqAZAeAqQAeApALAxQAMAxgJAyQgJAygcAqQgdAtgvAdQgwAeg2AHQgsAFgsgLIgCAEQgeAtgvAeQgwAeg1AHQg2AHg1gRQgXgIgUgKQgYAegjAVQgwAeg2AHQg1AHg1gRQgSgGgRgIQgQAPgUAMQgwAeg2AHQg1AHg2gRIgSgHQgcAqgtAcQgwAeg2AHQgPACgQAAQgmAAgmgMg");
	var mask_2_graphics_17 = new cjs.Graphics().p("AtDGIQg1gRgoglQgoglgVg0QgVg0ACg2QADhAAkg5QAkg4A5geQA4geBEACQAvABApAQQAjgzA1gcQA4gfBEACQA4ABAwAZQAXgWAdgPQA5gfBDACQA8ACA0AcQAfgmAqgXQA4gfBEACQAbABAZAGIABgBQAkg5A4geQA5gfBDACQBEACA3AiQAZAPAWAVQAcggAngVQA4geBEACQBDABA3AhQAqAaAfAqQAeApALAwQALAxgIAyQgJAzgbAqQgeAtgvAeQgvAeg2AGQg2AHg2gRQg1gRgoglIgHgHQgWAZgeATQgwAeg2AHQgsAFgsgLIgCAEQgeAtgvAeQgwAeg1AHQg2AHg1gRQgXgIgUgKQgYAegiAVQgwAeg2AHQg2AHg1gRQgSgGgRgIQgRAPgTAMQgwAeg2AHQg1AHg2gRIgSgHQgdAqgsAcQgwAeg2AHQgQACgPAAQgmAAgmgMg");
	var mask_2_graphics_18 = new cjs.Graphics().p("AvoGcQg1gRgoglQgoglgVg0QgVg0ACg2QADhAAkg5QAkg4A5geQA4geBEACQAvABApAQQAjgzA1gcQA4gfBEACQA4ABAwAZQAXgWAdgPQA5gfBDACQA8ACA0AcQAfgmArgXQA4gfBEACQAbABAYAGIABgBQAkg5A4geQA5gfBDACQBEACA3AiQAZAPAWAVQAcggAngVQA4geBEACQBDABA3AhIAOAKQAegjAogVQA4geBEACQBDABA3AhQAqAaAfAqQAeApALAwQALAxgJAyQgIAzgbAqQgeAtgvAdQgvAeg2AHQg2AHg2gRQgkgMgegVQgYAbgfAUQgvAeg2AGQg2AHg2gRQg1gRgoglIgHgHQgWAZgeATQgwAeg2AHQgsAFgsgLIgCAEQgeAtgvAeQgwAeg0AHQg2AHg1gRQgXgIgUgKQgZAegiAVQgwAeg2AHQg2AHg1gRQgSgGgRgIQgRAPgTAMQgwAeg2AHQg1AHg2gRIgSgHQgdAqgsAcQgwAeg2AHQgPACgQAAQgmAAgmgMg");
	var mask_2_graphics_19 = new cjs.Graphics().p("AxvGcQg1gRgoglQgoglgVg0QgVg0ACg2QADhAAkg5QAkg4A5geQA4geBEACQAvABApAQQAjgzA1gcQA4gfBEACQA4ABAwAZQAXgWAdgPQA5gfBDACQA8ACA0AcQAfgmArgXQA4gfBEACQAbABAZAGIABgBQAkg5A4geQA4gfBDACQBEACA3AiQAZAPAWAVQAcggAngVQA4geBEACQBDABA3AhIAOAKQAegjAogVQA4geBEACQBDABA3AhQAPAKAOALQA2gbBBACQBDABA3AhQAqAaAfAqQAeApALAwQALAxgJAyQgIAzgbAqQgeAtgvAdQgwAeg2AHQg1AHg2gRQgugPgkgeQgmATgqAGQg2AHg2gRQgkgMgegVQgYAbgfAUQgvAeg2AGQg2AHg2gRQg1gRgoglIgHgHQgWAZgeATQgwAeg2AHQgsAFgsgLIgCAEQgeAtguAeQgwAeg1AHQg2AHg1gRQgXgIgUgKQgZAegiAVQgwAeg2AHQg2AHg1gRQgSgGgRgIQgRAPgTAMQgwAeg2AHQg1AHg2gRIgSgHQgdAqgsAcQgwAeg2AHQgPACgQAAQgmAAgmgMg");
	var mask_2_graphics_20 = new cjs.Graphics().p("A0FGcQg1gRgoglQgoglgVg0QgVg0ACg2QADhAAkg5QAkg4A5geQA4geBEACQAvABApAQQAjgzA1gcQA4gfBEACQA4ABAwAZQAXgWAdgPQA5gfBDACQA8ACA0AcQAfgmArgXQA4gfBEACQAbABAZAGIABgBQAkg5A4geQA5gfBDACQBDACA3AiQAZAPAWAVQAcggAngVQA4geBEACQBDABA3AhIAOAKQAegjAogVQA4geBEACQBDABA3AhQAPAKAOALQA2gbBBACQBDABA3AhQAOAJAOALQAMgJAOgHQA4geBEACQBDABA3AhQAqAaAfAqQAeApALAwQALAxgJAyQgIAzgbApQgeAtgvAeQgvAeg2AHQg2AHg1gRQgugPgjgdIgLAHQgwAeg2AHQg1AHg2gRQgugPgkgeQgmATgqAGQg2AHg2gRQgkgMgegVQgYAbgfAUQgvAeg2AGQg2AHg2gRQg1gRgoglIgHgHQgWAZgeATQgwAeg1AHQgsAFgsgLIgCAEQgeAtgvAeQgwAeg1AHQg2AHg1gRQgXgIgUgKQgZAegiAVQgwAeg2AHQg2AHg1gRQgSgGgRgIQgRAPgTAMQgwAeg2AHQg1AHg2gRIgSgHQgdAqgsAcQgwAeg2AHQgPACgQAAQgmAAgmgMg");
	var mask_2_graphics_21 = new cjs.Graphics().p("A0FGcQg1gRgoglQgoglgVg0QgVg0ACg2QADhAAkg5QAkg4A5geQA4geBEACQAvABApAQQAjgzA1gcQA4gfBEACQA4ABAwAZQAXgWAdgPQA5gfBDACQA8ACA0AcQAfgmArgXQA4gfBEACQAbABAZAGIABgBQAkg5A4geQA5gfBDACQBDACA3AiQAZAPAWAVQAcggAngVQA4geBEACQBDABA3AhIAOAKQAegjAogVQA4geBEACQBDABA3AhQAPAKAOALQA2gbBBACQBDABA3AhQAOAJAOALQAMgJAOgHQA4geBEACQBDABA3AhQAqAaAfAqQAeApALAwQALAxgJAyQgIAzgbApQgeAtgvAeQgvAeg2AHQg2AHg1gRQgugPgjgdIgLAHQgwAeg2AHQg1AHg2gRQgugPgkgeQgmATgqAGQg2AHg2gRQgkgMgegVQgYAbgfAUQgvAeg2AGQg2AHg2gRQg1gRgoglIgHgHQgWAZgeATQgwAeg1AHQgsAFgsgLIgCAEQgeAtgvAeQgwAeg1AHQg2AHg1gRQgXgIgUgKQgZAegiAVQgwAeg2AHQg2AHg1gRQgSgGgRgIQgRAPgTAMQgwAeg2AHQg1AHg2gRIgSgHQgdAqgsAcQgwAeg2AHQgPACgQAAQgmAAgmgMg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(12).to({graphics:mask_2_graphics_12,x:222.8843,y:336.9959}).wait(1).to({graphics:mask_2_graphics_13,x:237.8843,y:332.4709}).wait(1).to({graphics:mask_2_graphics_14,x:251.872,y:330.4709}).wait(1).to({graphics:mask_2_graphics_15,x:267.3843,y:327.4709}).wait(1).to({graphics:mask_2_graphics_16,x:280.8593,y:321.9709}).wait(1).to({graphics:mask_2_graphics_17,x:298.897,y:321.4959}).wait(1).to({graphics:mask_2_graphics_18,x:315.3843,y:319.4959}).wait(1).to({graphics:mask_2_graphics_19,x:328.8843,y:319.4959}).wait(1).to({graphics:mask_2_graphics_20,x:343.8843,y:319.4959}).wait(1).to({graphics:mask_2_graphics_21,x:343.8843,y:319.4959}).wait(129));

	// 筆畫4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231815").s().p("Ax3EbQgmgFgEgCIgagKQg3gVgPgKQgagMAAgNQAAgDAEgEIApAhQAzAiA5AIIA1AEQBFAABJgUIAngLQBCgVCKg1Qg5ARhCARQiCAhgngBQglAEgwgDQhfgFg2ggQgVgJgfgXQg8gwgvhNIAfAVQAoATAwgHQgUgCgJgGQgTgLA1gOIBIABQBagCBYgIQEXgaCUhVID2hLQEVhPCcgSICEgRQCkgSChgFQICgREdBxIAZAOQAbATAJAVQAfBFiaBJQglARhAAMQiBAaiLgXQiRgbiXgXQkwgvgiASQhxAEh8AOQj4Acg7A0QheAbhgAcQjAA5gIAIQi+BLgRgDQhwAfg9ABIgwABQggAAgTgDg");
	this.shape_3.setTransform(347.9021,315.7493);
	this.shape_3._off = true;

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(12).to({_off:false},0).wait(138));

	// 筆畫5
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AguARQgHABgFgBQgJgBAQgFIArgLQAvgMAXgEQgkAXgdADQgYAHgOAAIgFAAg");
	this.shape_4.setTransform(283.1347,331.1357);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(150));

	// 筆畫7
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231815").s().p("AASEIQAKgSAEgVIgInHIAChfQAJCQACB/QAFCpgFCwIhMAiQAngXASgmg");
	this.shape_5.setTransform(314.9566,190.95);
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(22).to({_off:false},0).wait(128));

	// 筆畫9
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfAbQAlgzA1guQhqCCgLAKQAJgQASgbg");
	this.shape_6.setTransform(257.125,380.5);
	this.shape_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(22).to({_off:false},0).wait(128));

	// 筆畫10
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAEgrIADgLQADgLAGgBQgUB3gLANg");
	this.shape_7.setTransform(315.125,255.35);
	this.shape_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(22).to({_off:false},0).wait(128));

	// 筆畫8
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgmAeQCThLBZg/IhwBSQioBthzAaQBGggBZgvg");
	this.shape_8.setTransform(201.2625,426.7);
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(22).to({_off:false},0).wait(128));

	// 遮色片04 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_22 = new cjs.Graphics().p("AgvFkQhVgMhGgwQg2gkgng4Qg3hQgGhnQgGhlAthXQAuhWBYg1QBYg1BgABQBiABBXA1QBYA1AtBXQAtBXgHBmQgHBmg5BQQg4BQheApQhHAfhIAAQgXAAgYgDg");
	var mask_3_graphics_23 = new cjs.Graphics().p("AgEKCQhwgBhYg8Qg2gkgmg3Qg9hXgChwQgChwA6hZQAig1AyglQgqgggfgtQg4hRgGhmQgGhnAuhWQAuhXBXg0QBYg1BhAAQBiABBXA1QBXA2AtBXQAtBXgHBmQgHBmg4BQQghAugtAhQAPAMAPAPQBQBPAVBoQAVBogrBnQgrBohYA7QhXA6htAAIgEAAg");
	var mask_3_graphics_24 = new cjs.Graphics().p("AhWOfQhWgIhMgxQhMgygqhMQgrhMgChaQgChbAnhNQAnhOBJg1QAagSAbgOQgTgUgQgXQg9hXgChwQgChvA6haQAig1AyglQgqgggfguQg4hQgGhnQgGhmAuhXQAuhWBXg1QBYg1BhABQBiABBXA1QBXA1AtBXQAtBXgHBnQgHBmg4BQQghAugtAhQAPANAPAOQBQBPAVBoQAVBngrBoQgrBnhYA7QgVAOgWAKQAWAYASAbQAfAvAPA2QAYBTgTBYQgTBXg3BDQg3BDhTAjQhEAchFAAQgRAAgQgBg");
	var mask_3_graphics_25 = new cjs.Graphics().p("AkPRrQhOgig1hAQg1hAgUhTQgThTAShQQAXhhBJhKQAkgkAqgYQghhFgChPQgChbAnhNQAmhOBKg1QAagTAbgNQgTgTgQgXQg9hXgChwQgChwA5haQAjg1AyglQgqghgggtQg3hQgGhnQgGhmAthXQAuhWBYg1QBXg1BhABQBiABBXA1QBYA1AtBXQAtBXgHBnQgHBmg5BQQggAugtAhQAPAMAPAPQBQBPAVBoQAVBogrBoQgrBmhZA7QgUAOgWAKQAWAXASAcQAfAvAPA2QAXBTgSBYQgTBXg3BDQgqAzg6AhQAXAxAIA6QAOBngoBbQgoBbhXA7QhVA7hkAEIgRAAQhJAAhGgfg");
	var mask_3_graphics_26 = new cjs.Graphics().p("Aj7UiQhUgLhHgxQg3gmgmg2Qg3hRgGhmQgGhmAuhXQAohLBIgyQgDgxALgxQAXhhBJhKQAkgkAqgYQghhEgChQQgChaAnhOQAmhNBKg0QAagTAbgNQgTgUgQgYQg9hXgChwQgChwA5hZQAjg1AyglQgqghgggtQg3hRgGhmQgGhnAthWQAuhXBXg0QBYg1BhAAQBiABBXA1QBYA2AtBXQAtBXgHBmQgHBmg5BQQggAvgtAhQAPAMAPAPQBQBPAVBoQAVBogrBnQgrBohZA7QgUAOgWAKQAWAXASAbQAfAvAPA1QAXBTgSBYQgTBYg3BDQgqAzg6AgQAXAyAIA5QAOBogoBbQgnBZhUA7QAAAVgBAVQgHBmg5BPQg4BQhdApQhHAghKAAQgXAAgXgEg");
	var mask_3_graphics_27 = new cjs.Graphics().p("AmMYRQhUgMhGgwQg5gmgkg3Qg4hQgFhnQgGhmAuhWQAuhXBYg0QBAgmBGgKQgRgwgDg2QgGhmAuhWQAohMBIgxQgDgyALgwQAXhhBJhKQAkgkAqgYQghhFgChOQgChbAnhNQAmhOBJg1QAagSAbgOQgTgUgQgXQg8hXgChwQgChwA4haQAjg0AygmQgqggggguQg2hQgGhnQgGhmAshXQAuhWBYg1QBYg1BhABQBiABBXA1QBYA1AtBXQAtBXgHBnQgHBmg5BQQggAugtAhQAPANAPAOQBQBPAVBoQAVBogrBoQgrBnhZA7QgUAOgWALQAWAXASAbQAfAvAPA2QAXBTgSBXQgTBXg3BDQgqAzg6AhQAXAxAIA6QAOBngoBbQgnBahUA6QAAAVgBAVQgHBmg5BQQg4BQheApQgvAUguAHQAYBGgGBOQgHBmg4BQQg4BQheAoQhGAfhJAAQgYAAgYgDg");
	var mask_3_graphics_28 = new cjs.Graphics().p("AolbNQhwAAhYg8Qg2glgmg2Qg9hXgChwQgChxA6hZQA5hZBogsQBagnBcALQgFhkAthVQAuhWBYg0QBAgmBGgLQgRgvgDg2QgGhmAuhXQAohLBIgyQgDgxAMgxQAWhhBJhJQAkgjApgZQghhEgChQQgChaAnhOQAnhOBJg0QAagTAbgNQgTgUgQgYQg9hXgChwQgChwA6hZQAig1AyglQgqghgfgtQg4hRgGhmQgGhmAuhXQAuhXBXg0QBYg1BiAAQBiABBXA1QBXA2AtBXQAtBXgHBmQgHBmg4BQQghAvgtAhQAPAMAPAPQBQBPAVBoQAVBogrBnQgrBohYA7QgVAOgWAKQAWAXASAbQAfAwAPA1QAYBTgTBYQgTBYg3BDQgqAyg6AgQAXAyAIA5QAPBogpBbQgnBZhUA7QABAVgCAVQgHBmg4BPQg5BQheApQguAVgvAHQAYBFgFBPQgIBmg4BPQg4BQhdApQhaAnhdgLQADBNggBMQgrBohYA6QhXA7huAAIgEgBg");
	var mask_3_graphics_29 = new cjs.Graphics().p("AsLb1QhwAAhYg8Qg2glgmg2Qg9hXgChwQgChxA6hZQALgSAOgQIgGgEQg2glgmg2Qg9hXgChwQgChxA6hZQA5hZBogsQBngsBoAUQBpAUBQBOQBPBPAVBoQAVBpgrBnQgWA1ghAoQAVAOATARIAEgGQA5hZBogsQBagnBcALQgFhkAthVQAuhWBYg0QA/gmBGgLQgRgvgDg2QgGhmAuhXQAohLBIgyQgDgxAMgxQAWhhBKhJQAkgjApgZQghhEgChQQgChaAnhOQAnhOBJg0QAagTAbgNQgTgUgQgYQg9hXgChwQgChwA6hZQAig1AyglQgqghgfgtQg4hRgGhmQgGhmAuhXQAuhXBXg0QBYg1BiAAQBiABBXA1QBXA2AtBXQAtBXgHBmQgHBmg4BQQghAvgtAhQAPAMAPAPQBQBPAVBoQAVBogrBnQgrBohYA7QgVAOgWAKQAWAXASAbQAfAwAPA1QAYBTgTBYQgTBYg3BDQgqAzg6AfQAXAyAIA5QAPBogpBbQgnBZhUA7QABAVgCAVQgHBmg4BPQg5BQheApQguAVgvAHQAYBFgFBPQgIBmg4BPQg4BQheApQhaAnhdgLQADBNggBMQgrBohXA6QhZA7hwgBQhwAAhYg8QgSgMgRgPQgoBDhAAqQhXA7huAAIgEgBg");
	var mask_3_graphics_30 = new cjs.Graphics().p("AsLb1QhwAAhYg8Qg2glgmg2Qg9hXgChwQgChxA6hZQALgSAOgQIgGgEQg2glgmg2Qg9hXgChwQgChxA6hZQA5hZBogsQBbgnBcALQgBhvA5hYQA5hZBogsQBngsBoAUQBpAUBQBOQBPBPAVBoQAVBpgrBnQgrBohYA6QhZA7hwgBQgUAAgTgCQAABIgdBGQgWA1ghAoQAVAOATARIAEgGQA5hZBogsQBagnBcALQgFhkAthVQAuhWBYg0QA/gmBGgLQgRgvgDg2QgGhmAuhXQAohLBIgyQgDgxAMgxQAWhhBKhJQAkgjApgZQghhEgChQQgChaAnhOQAnhOBJg0QAagTAbgNQgTgUgQgYQg9hXgChwQgChwA6hZQAig1AyglQgqghgfgtQg4hRgGhmQgGhmAuhXQAuhXBXg0QBYg1BiAAQBiABBXA1QBXA2AtBXQAtBXgHBmQgHBmg4BQQghAvgtAhQAPAMAPAPQBQBPAVBoQAVBogrBnQgrBohYA7QgVAOgWAKQAWAXASAbQAfAwAPA1QAYBTgTBYQgTBYg3BDQgqAzg6AfQAXAyAIA5QAPBogpBbQgnBZhUA7QABAVgCAVQgHBmg4BPQg5BQheApQguAVgvAHQAYBFgFBPQgIBmg4BPQg4BQheApQhaAnhdgLQADBNggBMQgrBohXA6QhZA7hwgBQhwAAhYg8QgSgMgRgPQgoBDhAAqQhXA7huAAIgEgBg");
	var mask_3_graphics_31 = new cjs.Graphics().p("AsLb1QhwAAhYg8Qg2glgmg2Qg9hXgChwQgChxA6hZQALgSAOgQIgGgEQg2glgmg2Qg9hXgChwQgChxA6hZQA5hZBogsQBbgnBcALQgBhvA5hYQA5hZBogsQBngsBoAUQBpAUBQBOQBPBPAVBoQAVBpgrBnQgrBohYA6QhZA7hwgBQgUAAgTgCQAABIgdBGQgWA1ghAoQAVAOATARIAEgGQA5hZBogsQBagnBcALQgFhkAthVQAuhWBYg0QA/gmBGgLQgRgvgDg2QgGhmAuhXQAohLBIgyQgDgxAMgxQAWhhBKhJQAkgjApgZQghhEgChQQgChaAnhOQAnhOBJg0QAagTAbgNQgTgUgQgYQg9hXgChwQgChwA6hZQAig1AyglQgqghgfgtQg4hRgGhmQgGhmAuhXQAuhXBXg0QBYg1BiAAQBiABBXA1QBXA2AtBXQAtBXgHBmQgHBmg4BQQghAvgtAhQAPAMAPAPQBQBPAVBoQAVBogrBnQgrBohYA7QgVAOgWAKQAWAXASAbQAfAwAPA1QAYBTgTBYQgTBYg3BDQgqAzg6AfQAXAyAIA5QAPBogpBbQgnBZhUA7QABAVgCAVQgHBmg4BPQg5BQheApQguAVgvAHQAYBFgFBPQgIBmg4BPQg4BQheApQhaAnhdgLQADBNggBMQgrBohXA6QhZA7hwgBQhwAAhYg8QgSgMgRgPQgoBDhAAqQhXA7huAAIgEgBg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(22).to({graphics:mask_3_graphics_22,x:335.4622,y:152.3063}).wait(1).to({graphics:mask_3_graphics_23,x:335.2438,y:180.5756}).wait(1).to({graphics:mask_3_graphics_24,x:330.0422,y:209.2251}).wait(1).to({graphics:mask_3_graphics_25,x:322.6718,y:232.6453}).wait(1).to({graphics:mask_3_graphics_26,x:315.0625,y:248.1563}).wait(1).to({graphics:mask_3_graphics_27,x:300.6625,y:272.017}).wait(1).to({graphics:mask_3_graphics_28,x:280.7438,y:290.5506}).wait(1).to({graphics:mask_3_graphics_29,x:249.7438,y:294.5506}).wait(1).to({graphics:mask_3_graphics_30,x:249.7438,y:294.5506}).wait(1).to({graphics:mask_3_graphics_31,x:249.7438,y:294.5506}).wait(119));

	// 筆畫6
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231815").s().p("AriXSQgigHgdgLIgVgJQgUAMgLgGQhbg6gnhcQgNgdgFgdIgEgXQAChZBThsQAaghAeggIAagYQBvh1EUiIQCLhEB0gtQmbCqjgDVQhwBqgeBJQgaA5AVBPQAKAoAPAcQAgBFA2AUQAaAKAUgEQAigICxhkICrhiQBmgwDOjjIC4jaQC6jQCwnBQA4iMAviTIAlh4QARg6BGmwQAGgYgQiiIgSicQggijAGhdQABgdAFgTIAGgNQAmg4BRAmQApASAiAeQCECTA1D1QAbB6AABdQgNDEh9FOQg/Cng8CAQhRDNjXFrQhrC2hcCMQlvIGmFBRQhDANg+AAQg1AAgygJg");
	this.shape_9.setTransform(259,292.5398);
	this.shape_9._off = true;

	var maskedShapeInstanceList = [this.shape_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(22).to({_off:false},0).wait(128));

	// 筆畫13
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABiAhQh5hAgNAAQiRg1gjgOICFApQCfA6CNBiIh3hCg");
	this.shape_10.setTransform(399.525,350.125);
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(31).to({_off:false},0).wait(119));

	// 筆畫12
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AE6AzQhkgghAgKIhYgdQgfAHhWgBIlaACQAJgUAegTQA6glBpAJIB4APQCOAWByApIBTAbQBeAhAwAWQglgOgzgQg");
	this.shape_11.setTransform(352.7,335.562);
	this.shape_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(31).to({_off:false},0).wait(119));

	// 遮色片05 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_31 = new cjs.Graphics().p("AhVDuQg2gTgngoQgmgmgUg0QgTg0ADg1QAEg7Afg0QAfg1AyggQAyggA8gHQA8gGA4AVQA3AVApAtQAqAtAQA5QAPA1gJA4QgJA5ggAtQgfAugyAdQgxAeg4AFIgWABQgrAAgrgQg");
	var mask_4_graphics_32 = new cjs.Graphics().p("ABnETQg2gUgngoQgXgZgRgfQgPAMgRAKQgxAeg4AFQg3AFg2gUQg2gTgngoQgmgmgUg0QgTg0ADg1QAEg7Afg0QAfg1AyggQAyggA8gHQA9gGA4AVQA3AVApAtQAUAWAPAaQAMgKANgIQAygfA9gGQA9gGA3AWQA3AVApAuQAoAtAQA5QAPA1gKA4QgJA5ggAtQggAugyAdQgyAcg3AFIgWABQgsAAgrgQg");
	var mask_4_graphics_33 = new cjs.Graphics().p("Ag3EsQg2gUgngnQgZgZgQgfQgPAMgRAKQgyAdg3AFQg4AFg2gTQg1gUgognQgmgmgTg1QgUg0AEg0QAEg7Afg1QAfg1AxggQAyggA9gGQA9gHA3AVQA3AVAqAtQAVAXAOAaQAMgKANgIQAyggA8gFQA9gGA3AVIAIgQQAfg1AxggQAyghA9gGQA9gHA3AUQA4AVAqAtQApAtARA5QAPA1gJA5QgJA3gfAuQgfAugxAeQgxAdg4AGQg3AFg2gTIgGgDQgJASgMARQggAtgxAdQgyAdg3AEIgWABQgrAAgrgQg");
	var mask_4_graphics_34 = new cjs.Graphics().p("AjcEsQg2gUgngnQgYgZgRgfQgPAMgRAKQgxAdg4AFQg3AFg2gTQg2gUgngnQgmgmgUg1QgTg0ADg0QAEg7Afg1QAfg1AyggQAyggA8gGQA9gHA4AVQA3AVApAtQAVAXAPAaQALgKAOgIQAyggA9gFQA8gGA3AVIAJgQQAeg1AxggQAyghA8gGQA9gHA4AUQAtARAkAhQAMgKANgIQAygfA8gGQA9gHA3AWQA4AVApAtQApAuAQA5QAOA1gJA5QgKA4ggAtQggAugxAdQgyAcg4AFQg3AFg2gUQgugSgjgfQgPALgQAKQgxAdg3AGQg3AFg2gTIgHgDQgJASgLARQggAtgxAdQgyAdg3AEIgWABQgsAAgrgQg");
	var mask_4_graphics_35 = new cjs.Graphics().p("AlTEsQg2gUgngnQgYgZgRgfQgPAMgRAKQgxAdg4AFQg3AFg2gTQg2gUgngnQgmgmgUg1QgTg0ADg0QAEg7Afg1QAfg1AyggQAyggA8gGQA9gHA4AVQA3AVApAtQAVAXAPAaQAMgKANgIQAyggA9gFQA9gGA2AVIAJgQQAeg1AyggQAyghA7gGQA9gHA4AUQAtARAkAhQAMgKANgIQAygfA8gGQA9gHA3AWQAkAOAeAXQAbgIAdgDQA9gHA3AWQA3AVApAuQApAtAQA5QAPA2gKA3QgJA5ggAtQggAugyAdQgxAcg3AFQg4AFg1gUQgngOgfgZQgdAKgfADQg3AFg2gUQgugSgjgfQgOALgRAKQgxAdg3AGQg3AFg1gTIgHgDQgJASgLARQggAtgyAdQgyAdg3AEIgWABQgsAAgrgQg");
	var mask_4_graphics_36 = new cjs.Graphics().p("An+EsQg2gUgngnQgYgZgRgfQgPAMgRAKQgxAdg4AFQg3AFg2gTQg2gUgngnQgmgmgUg1QgTg0ADg0QAEg7Afg1QAfg1AyggQAyggA8gGQA9gHA4AVQA3AVApAtQAVAXAPAaQALgKAOgIQAyggA9gFQA8gGA3AVIAJgQQAeg1AyggQAyghA8gGQA9gHA4AUQAsARAkAhQAMgKANgIQAygfA8gGQA9gHA3AWQAkAOAeAXQAbgIAdgDQA9gHA3AWQA3AVApAuQAMANAKAOQAxgfA7gFQA9gGA4AVQA3AWApAtQApAtAQA5QAOA1gJA4QgKA5gfAuQggAtgyAdQgxAdg3AFQg4AFg2gUQg1gUgognQgRgRgNgUIgGAEQgxAcg3AFQg4AFg1gUQgngOgfgZQgdAKgfADQg3AFg2gUQgugSgjgfQgPALgQAKQgwAdg3AGQg3AFg2gTIgHgDQgJASgLARQggAtgyAdQgyAdg3AEIgWABQgsAAgrgQg");
	var mask_4_graphics_37 = new cjs.Graphics().p("ANWFsQg2gUgogoQgZgagSgfIgZADQg4AFg2gUQg1gTgogoQgQgRgOgTIgGADQgxAdg3AEQg4AFg1gUQgngOgfgYQgdAKgfADQg3AEg2gUQgtgRgjggQgOALgRAKQgxAeg3AFQg3AGg2gUIgHgCQgIASgMAQQggAugyAdQgyAcg3AFQg3AFg2gUQg2gUgngoQgYgZgRgfQgPAMgRAKQgxAeg4AFQg3AFg2gUQg2gTgngoQgmgmgUg0QgTgzADg2QAEg7Afg0QAfg1AyggQAyggA8gHQA9gGA4AVQA3AVApAtQAVAWAPAaQAMgKANgIQAygfA9gGQA9gGA2AVIAJgPQAeg1AyghQAyggA8gHQA9gHA4AVQAtAQAkAhQAMgJANgIQAxggA8gGQA9gGA3AVQAkAOAeAYQAbgJAdgDQA9gGA3AVQA3AWApAtQAMANAKAOQAxgeA7gGQA9gGA4AWQA3AVApAtQAVAXAOAaIAVgDQA9gHA3AVQA4AVApAtQAqAtAQA4QAQA2gKA5QgJA5gfAuQggAugxAdQgyAdg4AFIgYABQgrAAgqgPg");
	var mask_4_graphics_38 = new cjs.Graphics().p("AOxG4Qg2gUgngnQgkgkgUgwQgQgEgQgFQg2gUgogoQgagagRgfIgZADQg4AFg2gUQg1gTgogoQgRgRgNgTIgGADQgxAdg3AEQg4AFg1gUQgngOgfgYQgdAKgfADQg2AEg2gUQgugRgjgfQgPAKgQAKQgxAeg3AFQg3AGg2gUIgHgCQgJASgLAQQggAugyAdQgyAcg3AFQg3AFg2gUQg2gUgngoQgYgZgRgfQgPAMgRAKQgxAeg4AFQg3AFg2gUQg2gTgngoQgmglgUg0QgTg0ADg2QAEg7Afg0QAfg1AyggQAyggA8gHQA9gGA4AVQA3AVApAtQAVAWAPAaQALgKAOgIQAygfA9gGQA8gGA3AVIAJgPQAeg1AyghQAyggA8gHQA9gHA4AVQAtAQAkAhQAMgJANgIQAyggA8gGQA8gGA3AVQAkAOAeAYQAagJAegDQA9gGA3AVQA3AWApAtQAMANAKAOQAxgeA7gGQA9gGA4AWQA3AVApAtQAUAXAPAaIAVgDQA9gHA3AVQA4AVApAtQAgAjARApQASAEASAHQA3AVAqAsQApAtAQA5QAPA1gJA5QgJA5ggAuQgfAugxAdQgyAdg3AFIgZABQgrAAgqgPg");
	var mask_4_graphics_39 = new cjs.Graphics().p("AQpIGQg2gTgognQgkgkgTgvQguAAgsgPQg2gUgngnQgkgkgUgwQgQgEgQgFQg2gUgogoQgagagRgfIgZADQg4AFg2gUQg1gTgogoQgRgRgNgSIgGADQgxAcg3AEQg4AFg1gUQgmgNgfgYQgdAKgfADQg3AEg2gUQgugRgjggQgPALgQAKQgxAeg3AFQg3AGg2gUIgHgCQgJASgLAQQggAtgyAdQgyAcg3AFQg3AFg2gUQg2gUgngoQgYgYgRgfQgPAMgRAKQgxAdg4AFQg3AFg2gUQg2gSgngoQgmgmgUg0QgTg0ADg2QAEg7Afg0QAfg1AyggQAyggA8gHQA9gGA4AVQA3AVApAtQAVAWAPAaQALgKAOgIQAygfA9gGQA8gGA3AVIAJgPQAeg1AyghQAyggA8gHQA9gHA4AVQAtAQAkAhQAMgJANgIQAyggA8gGQA9gGA3AVQAjAOAeAYQAagJAegDQA9gGA3AVQA3AWApAtQAMANAKAOQAxgeA7gGQA9gGA4AWQA3AVApAtQAUAXAPAaIAVgDQA9gHA3AVQA4AVApAtQAgAjARApQASAEASAHQA3AVAqAtQAfAhAQAoQAwgBAtAQQA3AVAqAtQAqAtAQA5QAPA2gJA4QgJA5gfAuQgfAugyAdQgxAeg4AFIgZABQgrAAgpgPg");
	var mask_4_graphics_40 = new cjs.Graphics().p("ASbKIQg2gTgogoQgmgmgTg0QgSgxABgxQgfgDgfgLQg2gTgognQgjgkgUgvQgtABgtgQQg2gUgngnQgkgkgTgwQgRgDgQgGQg2gUgogoQgZgZgSgfIgZADQg4AFg2gUQg1gTgogoQgRgRgNgTIgGADQgxAdg3AEQg3AFg1gUQgngOgfgYQgdAKgfADQg3AEg2gUQgugRgjggQgOALgRAKQgxAeg3AFQg3AGg2gUIgHgCQgIASgMAQQggAugyAdQgyAcg3AFQg3AFg2gUQg2gUgngoQgYgZgRgfQgPAMgRAKQgxAeg4AFQg3AFg2gUQg2gTgngoQgmgmgUg0QgTg0ADg2QAEg7Afg0QAfg1AyggQAyggA8gHQA9gGA4AVQA3AVApAtQAVAWAPAaQAMgKANgIQAygfA9gGQA9gGA2AVIAJgPQAeg1AyghQAyggA8gHQA9gHA4AVQAtAQAkAhQAMgJANgIQAyggA8gGQA9gGA3AVQAkAOAeAYQAbgJAdgDQA8gGA3AVQA3AWApAtQAMANAKAOQAxgeA7gGQA9gGA4AWQA3AVApAtQAVAXAOAaIAVgDQA9gHA3AVQA4AVApAtQAhAjARApQASAEARAHQA3AVAqAtQAfAiARAoQAwgBAsAQQA3AVAqAtQAqAsAQA5QALAmgBAoQAjADAhANQA3AVApAuQAqAtAQA5QAPA1gKA5QgJA5ggAuQgfAugyAdQgxAdg4AFIgWABQgsAAgrgQg");
	var mask_4_graphics_41 = new cjs.Graphics().p("ANGKnQg2gUgngnQgmgmgUg1QgTg0ADg2QAEg7Agg0QAfg1AyggIANgIIgBgEQgtABgtgQQg2gUgngnQgkgkgTgwQgRgDgQgGQg2gUgognQgZgZgSggIgZADQg4AFg2gUQg1gTgogoQgRgRgNgTIgGADQgxAdg3AEQg3AFg1gUQgngOgfgYQgdAKgfADQg3AEg2gUQgugRgjggQgOAMgRAJQgxAeg3AFQg3AGg2gUIgHgCQgIASgMAQQggAugyAdQgyAcg3AFQg3AFg2gUQg2gUgngoQgYgYgRgfQgPALgRAKQgxAeg4AFQg3AFg2gUQg2gTgngoQgmgmgUg0QgTg0ADg2QAEg7Afg0QAfg1AyggQAyggA8gHQA9gGA4AVQA3AVApAtQAVAXAPAZQAMgJANgJQAygfA9gGQA9gGA2AWIAJgQQAeg1AyghQAyggA8gHQA9gHA4AVQAtARAkAhQAMgKANgIQAyggA8gGQA9gGA3AVQAkAOAeAYQAbgJAdgDQA8gGA3AVQA3AWApAtQAMAOAKAOQAxgfA7gGQA9gGA4AWQA3AVApAtQAVAXAOAaIAVgDQA9gHA3AVQA4AVApAtQAhAjARAqQASADARAHQA3AVAqAtQAfAiARAoQAwgBAsAQQA3AVAqAtQAqAtAQA4QALAngBAoQAjADAhAMQA3AVApAuQAqAtAQA5QAPA1gKA5QgJA5ggAuQgfAugyAdQgxAdg4AFQg3AFg2gUQgbgJgYgPQgeAoguAbQgyAcg3AFIgWABQgsAAgrgPg");
	var mask_4_graphics_42 = new cjs.Graphics().p("ANGKnQg2gUgngnQgmgmgUg1IgDgKQgWgEgVgIQg2gTgogmQgmgmgUg0QgUg0ADg2QAEg7Aeg1QAZgqAlgdIgGgOQgRgDgQgGQg2gUgognQgZgZgSggIgZADQg4AFg2gUQg1gTgogoQgRgRgNgTIgGADQgxAdg3AEQg3AFg1gUQgngOgfgYQgdAKgfADQg3AEg2gUQgugRgjggQgOAMgRAJQgxAeg3AFQg3AGg2gUIgHgCQgIASgMAQQggAugyAdQgyAcg3AFQg3AFg2gUQg2gUgngoQgYgYgRgfQgPALgRAKQgxAeg4AFQg3AFg2gUQg2gTgngoQgmgmgUg0QgTg0ADg2QAEg7Afg0QAfg1AyggQAyggA8gHQA9gGA4AVQA3AVApAtQAVAXAPAZQAMgJANgJQAygfA9gGQA9gGA2AWIAJgQQAeg1AyghQAyggA8gHQA9gHA4AVQAtARAkAhQAMgKANgIQAyggA8gGQA9gGA3AVQAkAOAeAYQAbgJAdgDQA8gGA3AVQA3AWApAtQAMAOAKAOQAxgfA7gGQA9gGA4AWQA3AVApAtQAVAXAOAaIAVgDQA9gHA3AVQA4AVApAtQAhAjARAqQASADARAHQA3AVAqAtQAfAiARAoQAwgBAsAQQA3AVAqAtQAqAtAQA4QALAngBAoQAjADAhAMQA3AVApAuQAqAtAQA5QAPA1gKA5QgJA5ggAuQgfAugyAdQgxAdg4AFQg3AFg2gUQgbgJgYgPQgeAoguAbQgyAcg3AFIgWABQgsAAgrgPg");
	var mask_4_graphics_43 = new cjs.Graphics().p("ANGKnQg2gUgngnQgmgmgUg1IgDgKQgWgEgVgIQg2gTgogmQgNgNgLgPQgaAbgiAUQgxAdg3AFQg4AFg2gTQg1gUgognQgmgmgUg1QgTg0ADg2QAEg7Agg1QAfg1AygfQAyggA9gFQA9gHA3AUQA3AWApAtIAQATQAOgPAQgNIgGgOQgRgDgQgGQg2gUgognQgZgZgSggIgZADQg4AFg2gUQg1gTgogoQgRgRgNgTIgGADQgxAdg3AEQg3AFg1gUQgngOgfgYQgdAKgfADQg3AEg2gUQgugRgjggQgOAMgRAJQgxAeg3AFQg3AGg2gUIgHgCQgIASgMAQQggAugyAdQgyAcg3AFQg3AFg2gUQg2gUgngoQgYgYgRgfQgPALgRAKQgxAeg4AFQg3AFg2gUQg2gTgngoQgmgmgUg0QgTg0ADg2QAEg7Afg0QAfg1AyggQAyggA8gHQA9gGA4AVQA3AVApAtQAVAXAPAZQAMgJANgJQAygfA9gGQA9gGA2AWIAJgQQAeg1AyghQAyggA8gHQA9gHA4AVQAtARAkAhQAMgKANgIQAyggA8gGQA9gGA3AVQAkAOAeAYQAbgJAdgDQA8gGA3AVQA3AWApAtQAMAOAKAOQAxgfA7gGQA9gGA4AWQA3AVApAtQAVAXAOAaIAVgDQA9gHA3AVQA4AVApAtQAhAjARAqQASADARAHQA3AVAqAtQAfAiARAoQAwgBAsAQQA3AVAqAtQAqAtAQA4QALAngBAoQAjADAhAMQA3AVApAuQAqAtAQA5QAPA1gKA5QgJA5ggAuQgfAugyAdQgxAdg4AFQg3AFg2gUQgbgJgYgPQgeAoguAbQgyAcg3AFIgWABQgsAAgrgPg");
	var mask_4_graphics_44 = new cjs.Graphics().p("ANGKnQg2gUgngnQgmgmgUg1IgDgKQgWgEgVgIQg2gTgogmQgNgNgLgPQgaAbgiAUQgxAdg3AFQg4AFg2gTQg1gUgognQgmgmgUg1QgTg0ADg2QAEg7Agg1QAfg1AygfQAyggA9gFQA9gHA3AUQA3AWApAtIAQATQAOgPAQgNIgGgOQgRgDgQgGQg2gUgognQgZgZgSggIgZADQg4AFg2gUQg1gTgogoQgRgRgNgTIgGADQgxAdg3AEQg3AFg1gUQgngOgfgYQgdAKgfADQg3AEg2gUQgugRgjggQgOAMgRAJQgxAeg3AFQg3AGg2gUIgHgCQgIASgMAQQggAugyAdQgyAcg3AFQg3AFg2gUQg2gUgngoQgYgYgRgfQgPALgRAKQgxAeg4AFQg3AFg2gUQg2gTgngoQgmgmgUg0QgTg0ADg2QAEg7Afg0QAfg1AyggQAyggA8gHQA9gGA4AVQA3AVApAtQAVAXAPAZQAMgJANgJQAygfA9gGQA9gGA2AWIAJgQQAeg1AyghQAyggA8gHQA9gHA4AVQAtARAkAhQAMgKANgIQAyggA8gGQA9gGA3AVQAkAOAeAYQAbgJAdgDQA8gGA3AVQA3AWApAtQAMAOAKAOQAxgfA7gGQA9gGA4AWQA3AVApAtQAVAXAOAaIAVgDQA9gHA3AVQA4AVApAtQAhAjARAqQASADARAHQA3AVAqAtQAfAiARAoQAwgBAsAQQA3AVAqAtQAqAtAQA4QALAngBAoQAjADAhAMQA3AVApAuQAqAtAQA5QAPA1gKA5QgJA5ggAuQgfAugyAdQgxAdg4AFQg3AFg2gUQgbgJgYgPQgeAoguAbQgyAcg3AFIgWABQgsAAgrgPg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(31).to({graphics:mask_4_graphics_31,x:255.7289,y:333.9992}).wait(1).to({graphics:mask_4_graphics_32,x:274.8114,y:337.6982}).wait(1).to({graphics:mask_4_graphics_33,x:290.7637,y:335.1359}).wait(1).to({graphics:mask_4_graphics_34,x:307.2364,y:335.1359}).wait(1).to({graphics:mask_4_graphics_35,x:319.1114,y:335.1359}).wait(1).to({graphics:mask_4_graphics_36,x:336.2364,y:335.1359}).wait(1).to({graphics:mask_4_graphics_37,x:349.8039,y:341.3964}).wait(1).to({graphics:mask_4_graphics_38,x:358.8421,y:348.9964}).wait(1).to({graphics:mask_4_graphics_39,x:370.7387,y:356.7976}).wait(1).to({graphics:mask_4_graphics_40,x:382.3076,y:369.8869}).wait(1).to({graphics:mask_4_graphics_41,x:382.3076,y:372.9619}).wait(1).to({graphics:mask_4_graphics_42,x:382.3076,y:372.9619}).wait(1).to({graphics:mask_4_graphics_43,x:382.3076,y:372.9619}).wait(1).to({graphics:mask_4_graphics_44,x:382.3076,y:372.9619}).wait(106));

	// 筆畫11
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231815").s().p("AQfHUQjKg+jNg8Qmah3gPALQgRhtgVglIAxA5QA5A6AtAEIBwgRQB1gXATgeQAMgOgaglQg0hJi6hsQhmg9iHg/QkOh/ingMQgqgIhJgGQiRgLiYAJQhJADhbAJQi1AShUAdIhXAaIhFAVQAZgKARgJQAwgZhCANIBtgYQCBghAxgbIBgggQCAglCjgTICPgOQC1gLC+AQQJcAyHMErIAtAgQA3ArAzAxQClCeBECvQAfA3gSAtQgXA5hqAAQg9AAhZgTg");
	this.shape_12.setTransform(387.6215,372.0164);
	this.shape_12._off = true;

	var maskedShapeInstanceList = [this.shape_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(31).to({_off:false},0).wait(119));

	// 遮色片 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_45 = new cjs.Graphics().p("AhWDuQg2gUgngnQgmgngUg0QgTg0AEg1QAEg7Afg1QAgg1AyggQAyggA9gGQA8gGA4AWQA3AVApAuQAqAtAPA5QAPA2gKA3QgJA5ggAuQggAugyAcQgxAdg4AFIgWABQgrAAgrgQg");
	var mask_5_graphics_46 = new cjs.Graphics().p("AhyG8Qg2gUgognQgmgmgUg1QgTg0ADg2QAFg8Afg0QAfg1AygeIAVgMIgGgGQgmgngUg0QgTg0AEg2QAEg7Afg1QAgg1AyggQAyggA8gGQA9gGA4AWQA3AVApAuQAqAtAPA5QAPA2gKA4QgJA5ggAuQggAugyAbIgMAHIANANQAqAtAQA5QAPA2gJA5QgKA4gfAuQggAugxAdQgyAdg2AFIgXABQgrAAgrgPg");
	var mask_5_graphics_47 = new cjs.Graphics().p("Ah4JvQg2gTgngoQgmgmgUg0QgTg0ADg1QAEg7Afg1QATggAagZQgjgkgSgxQgUg1AEg2QAEg6Agg1QAfg0AyggIAUgMIgGgGQgmgmgTg0QgTg1ADg2QAEg7Agg0QAfg1AyggQAyggA9gGQA9gGA3AVQA3AWAqAtQApAuAQA5QAOA1gJA5QgKA5ggAtQggAugxAdIgMAGIANAOQApAtAQA5QAQA0gKA5QgJA5ggAuQgQAXgUASIADAEQAqAtAPA5QAPA2gJA4QgJA5ggAtQggAugxAdQgyAdg2AFIgYABQgrAAgqgQg");
	var mask_5_graphics_48 = new cjs.Graphics().p("AgBLwQhAgDg5gkQg6gkgfg5QgTglgHgoQgKg1AOg2IABgGQgYgfgPgnQgTg0ADg1QAEg7Afg1QATggAagYQgjglgSgxQgUg0AEg2QAEg7Agg1QAfg0AyggIAUgMIgGgGQgmgmgTg0QgTg1ADg2QAEg7Agg0QAfg1AyggQAyggA9gGQA9gGA3AVQA3AWAqAtQApAuAQA5QAOA1gJA5QgKA5ggAtQggAugxAdIgMAGIANAOQApAtAQA5QAQA1gKA5QgJA4ggAuQgQAXgUATIADADQAqAtAPA5QAPA2gJA4IgGAbQAUAZAOAeQAaA7gGBDQgGBDgkA2QglA1g8AeQg3Acg7AAIgLgBg");
	var mask_5_graphics_49 = new cjs.Graphics().p("AguNtQhJgQgzgzQgmgmgUgzQgTg0ADg1QADg/Ajg4IgFgIQgTgkgHgpQgKg1AOg1IABgHQgYgfgPgmQgTg0ADg2QAEg7Afg1QATgfAagYQgjglgSgxQgUg0AEg2QAEg8Agg0QAfg1AygfIAUgMIgGgGQgmgngTg0QgTg0ADg2QAEg7Agg1QAfg1AyggQAyggA9gGQA9gGA3AWQA3AVAqAuQApAtAQA5QAOA2gJA4QgKA5ggAuQggAugxAcIgMAHIANANQApAtAQA5QAQA2gKA5QgJA4ggAuQgQAXgUATIADADQAqAsAPA5QAPA2gJA4IgGAbQAUAZAOAeQAaA7gGBDQgFA/ggAyIAIAQQAhBDgHBHQgHBHguA6QgvA7hDAYQgoAOgqAAQgcAAgdgGg");
	var mask_5_graphics_50 = new cjs.Graphics().p("AguNtQhJgQgzgzQgmgmgUgzQgTg0ADg1QADg/Ajg4IgFgIQgTgkgHgpQgKg1AOg1IABgHQgYgfgPgmQgTg0ADg2QAEg7Afg1QATgfAagYQgjglgSgxQgUg0AEg2QAEg8Agg0QAfg1AygfIAUgMIgGgGQgmgngTg0QgTg0ADg2QAEg7Agg1QAfg1AyggQAyggA9gGQA9gGA3AWQA3AVAqAuQApAtAQA5QAOA2gJA4QgKA5ggAuQggAugxAcIgMAHIANANQApAtAQA5QAQA2gKA5QgJA4ggAuQgQAXgUATIADADQAqAsAPA5QAPA2gJA4IgGAbQAUAZAOAeQAaA7gGBDQgFA/ggAyIAIAQQAhBDgHBHQgHBHguA6QgvA7hDAYQgoAOgqAAQgcAAgdgGg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(45).to({graphics:mask_5_graphics_45,x:301.7358,y:372.0096}).wait(1).to({graphics:mask_5_graphics_46,x:298.8114,y:392.5356}).wait(1).to({graphics:mask_5_graphics_47,x:298.2864,y:410.4939}).wait(1).to({graphics:mask_5_graphics_48,x:298.2864,y:421.8732}).wait(1).to({graphics:mask_5_graphics_49,x:298.2864,y:434.9457}).wait(1).to({graphics:mask_5_graphics_50,x:298.2864,y:434.9457}).wait(100));

	// 筆畫14
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231815").s().p("AgJLDIgiguQh1jngFl6QgCh1AKh3IAKhfQAlkaBHhjQAWgeAWgIQALgFAHACQgZAUggBwQgQA4gLA0ICKkpIAtAbQgFASARA3QAJAcAKAYIANCHQAEAPgNFHQgHCjgICgIgBFwQAlBdgpA+QgVAegdAMQg1gGgrgug");
	this.shape_13.setTransform(296.2965,435.95);
	this.shape_13._off = true;

	var maskedShapeInstanceList = [this.shape_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(45).to({_off:false},0).wait(105));

	// 遮色片 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_51 = new cjs.Graphics().p("AhWDuQg2gTgngoQgmgmgTg0QgUg0AEg1QAEg7Afg1QAfg1AyggQAyggA9gGQA8gHA4AWQA3AVAqAuQApAtAQA5QAOA2gJA3QgKA5ggAuQgfAtgyAdQgxAdg4AFIgWABQgrAAgrgQg");
	var mask_6_graphics_52 = new cjs.Graphics().p("AkPEqQg2gUgngnQgmgmgUg1QgTg0ADg1QAEg6Afg1QAfg1AyghQAzggA9gGQA9gGA3AVQAZAJAVAOQAHgRAJgQQAfg1AxggQAyggA9gGQA9gHA3AVQA4AVApAuQAqAtAQA5QAPA1gJA5QgKA3gfAuQggAugxAdQgxAdg3AFQg4AFg2gTQgbgKgXgPQgLAbgQAXQgfAugxAdQgyAcg3AFIgXABQgsAAgqgPg");
	var mask_6_graphics_53 = new cjs.Graphics().p("Am1EqQg2gUgngnQgmgmgTg1QgUg0AEg1QAEg6Afg1QAfg1AyghQAyggA9gGQA9gGA4AVQAYAJAWAOQAGgRAKgQQAfg1AyggQAyggA9gGQA8gHA3AVQA3AVAqAuQASATAOAXQAngUAugEQA9gHA3AVQA4AVApAtQAqAtAQA5QAPA1gJA4QgJA5gfAuQggAugxAdQgxAdg4AFQg3AGg2gUQg2gTgognQgXgYgRgcQgqAUguAFQg2AFg2gTQgbgKgYgPQgKAbgRAXQgfAugyAdQgxAcg4AFIgWABQgsAAgrgPg");
	var mask_6_graphics_54 = new cjs.Graphics().p("AETGnQg2gTgngnQgmgmgUg1QgTg0ADg2QAEg2AagwQgIgMgHgMQgqAVguAEQg3AFg2gTQgbgKgXgOQgLAagQAXQggAugxAdQgyAcg3AFQg4AFg1gTQg2gUgngnQgmgmgUg1QgTgzADg1QAEg7Afg1QAfg1AyghQAzggA9gGQA9gGA3AVQAYAKAWAOQAHgRAJgRQAfg1AyggQAyggA9gGQA8gHA3AVQA4AVApAuQATAUANAWQAogTAugFQA9gHA3AVQA3AVAqAtQAqAtAQA5QAPA2gJA4QgIAsgTAkQAcAlANAtQAOA2gJA4QgKA5gfAuQggAtgxAdQgyAdg3AFIgWABQgsAAgrgQg");
	var mask_6_graphics_55 = new cjs.Graphics().p("AEiI4Qg2gUgngnQgmgmgUg0QgUg0AEg2QADg4AcgyQgcgigQgrQgUg0AEg2QADg1AbgxQgJgLgHgMQgqAUguAFQg2AFg2gTQgbgKgYgPQgKAbgRAXQgfAugyAcQgxAcg4AFQg3AFg2gTQg2gUgngmQgmgmgTg1QgUg0AEg1QAEg7Afg1QAfg1AyghQAyggA9gGQA9gGA4AVQAYAKAVANQAHgQAKgRQAfg1AyggQAyggA9gGQA8gHA3AVQA3AVAqAuQASAUANAWQAogTAugFQA9gHA3AVQA4AVApAtQAqAtAQA5QAPA2gJA4QgHAsgUAkQAdAmAMAtQAPA1gKA4QgHAtgVAlQAlArAPA2QAPA1gKA5QgJA4ggAuQgfAtgxAdQgyAdg3AFIgYABQgrAAgqgPg");
	var mask_6_graphics_56 = new cjs.Graphics().p("AD9K3Qg2gUgognQgngngTg1QgUg0AEg3QAEg7Agg1QAJgPAKgNIgBgFQgUg0AEg2QADg4AcgyQgcgigQgrQgUg0AEg2QADg1AbgxQgJgLgHgNQgqAVguAEQg2AGg2gUQgbgJgYgPQgKAagRAYQgfAtgyAdQgxAdg4AFQg3AFg2gUQg2gTgngoQgmgmgTg0QgUg0AEg2QAEg7Afg1QAfg1AyggQAyggA9gGQA9gHA4AWQAYAJAVAOQAHgRAKgQQAfg1AyggQAyggA9gHQA8gGA3AVQA3AVAqAtQASAUANAXQAogUAugFQA9gGA3AVQA4AUApAuQAqAtAQA5QAPA1gJA5QgHArgUAlQAdAmAMAtQAPA1gKA5QgHArgVAmQAlArAPA1QAPA2gKA4QgJA4ggAuIgKAOQAFANAEAOQAQA2gKA4QgJA5ggAuQgfAugyAdQgxAdg4AFIgWABQgsAAgrgPg");
	var mask_6_graphics_57 = new cjs.Graphics().p("AF1MnQhBgBg4ggQgugaghgrQghgsgLg0QgMg0ALg2QgRgagLgdQgUg1AEg3QAEg7Agg0QAJgQALgNIgCgFQgUg0AEg2QAEg4AcgxQgdghgQgsQgUg0AEg2QAEg2AagxQgIgLgIgMQgqAVguAEQg2AFg2gTQgbgKgYgOQgKAagRAXQgfAugyAdQgxAcg4AFQg3AFg2gTQg2gUgngnQgmgmgTg1QgUg0AEg1QAEg7Afg1QAfg1AyghQAyggA9gGQA9gGA4AVQAYAKAWAOQAHgRAJgRQAfg1AyggQAyggA9gGQA8gHA3AVQA3AVAqAuQASAUAOAWQAngTAugFQA9gHA3AVQA4AVApAtQAqAtAQA5QAPA2gJA4QgHAsgUAlQAdAlAMAtQAPA2gKA4QgHAtgVAlQAlArAPA1QAPA1gKA5QgJA4ggAuIgKAOQAGANADAOQAQA1gKA5IgCAKQANASAJAVQAZA5gEBAQgFBBghA1QgjA2g7AgQg5Agg/AAIgEAAg");
	var mask_6_graphics_58 = new cjs.Graphics().p("AC6NeQgzgUgmgmQgmgmgTg0QgUg0AEg2QAEg9Ahg3QAagpAkgcQgOgWgJgZQgUg0AEg3QAEg7Agg1QAJgPALgOIgCgEQgUg0AEg2QAEg3AcgzQgdghgQgrQgUg1AEg2QAEg2AagwQgIgMgIgMQgqAVguAEQg2AGg2gUQgbgKgYgOQgKAagRAYQgfAtgyAdQgxAdg4AFQg3AFg2gUQg2gTgngoQgmgmgTg0QgUg0AEg2QAEg7Afg1QAfg1AyggQAyggA9gGQA9gHA4AWQAYAJAWAOQAHgRAJgQQAfg1AyggQAyggA9gHQA8gGA3AVQA3AVAqAtQASAUAOAWQAngTAugFQA9gGA3AVQA4AUApAuQAqAtAQA5QAPA1gJA5QgHArgUAlQAdAlAMAuQAPA1gKA5QgHAsgVAmQAlArAPA1QAPA1gKA4QgJA4ggAuIgKAOQAGANADAOQAQA2gKA4IgCAKQANATAJAUQAZA5gEBBQgFBAghA1QgbAqgpAdIAAABQgOA1giAqQghApgxAaQgxAZg1ACIgOAAQguAAgtgQg");
	var mask_6_graphics_59 = new cjs.Graphics().p("AC6NeQgzgUgmgmQgmgmgTg0QgJgYgEgZQg+gEg3giQg6gkgfg5QgTglgHgoQgKg0AOg2QANg2AigqQAogzA+gZQA+gaBAAIQAUADATAFIAHgMQAJgPALgOIgCgEQgUg0AEg2QAEg3AcgzQgdghgQgrQgUg1AEg2QAEg2AagwQgIgMgIgMQgqAVguAEQg2AGg2gUQgbgKgYgOQgKAagRAYQgfAtgyAdQgxAdg4AFQg3AFg2gUQg2gTgngoQgmgmgTg0QgUg0AEg2QAEg7Afg1QAfg1AyggQAyggA9gGQA9gHA4AWQAYAJAWAOQAHgRAJgQQAfg1AyggQAyggA9gHQA8gGA3AVQA3AVAqAtQASAUAOAWQAngTAugFQA9gGA3AVQA4AUApAuQAqAtAQA5QAPA1gJA5QgHArgUAlQAdAlAMAuQAPA1gKA5QgHAsgVAmQAlArAPA1QAPA1gKA4QgJA4ggAuIgKAOQAGANADAOQAQA2gKA4IgCAKQANATAJAUQAZA5gEBBQgFBAghA1QgbAqgpAdIAAABQgOA1giAqQghApgxAaQgxAZg1ACIgOAAQguAAgtgQg");
	var mask_6_graphics_60 = new cjs.Graphics().p("AC6NeQgzgUgmgmQgmgmgTg0QgJgYgEgZQg+gEg3giQg6gkgfg5QgTglgHgoQgKg0AOg2QANg2AigqQAogzA+gZQA+gaBAAIQAUADATAFIAHgMQAJgPALgOIgCgEQgUg0AEg2QAEg3AcgzQgdghgQgrQgUg1AEg2QAEg2AagwQgIgMgIgMQgqAVguAEQg2AGg2gUQgbgKgYgOQgKAagRAYQgfAtgyAdQgxAdg4AFQg3AFg2gUQg2gTgngoQgmgmgTg0QgUg0AEg2QAEg7Afg1QAfg1AyggQAyggA9gGQA9gHA4AWQAYAJAWAOQAHgRAJgQQAfg1AyggQAyggA9gHQA8gGA3AVQA3AVAqAtQASAUAOAWQAngTAugFQA9gGA3AVQA4AUApAuQAqAtAQA5QAPA1gJA5QgHArgUAlQAdAlAMAuQAPA1gKA5QgHAsgVAmQAlArAPA1QAPA1gKA4QgJA4ggAuIgKAOQAGANADAOQAQA2gKA4IgCAKQANATAJAUQAZA5gEBBQgFBAghA1QgbAqgpAdIAAABQgOA1giAqQghApgxAaQgxAZg1ACIgOAAQguAAgtgQg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(51).to({graphics:mask_6_graphics_51,x:318.6114,y:379.8256}).wait(1).to({graphics:mask_6_graphics_52,x:337.1671,y:373.8992}).wait(1).to({graphics:mask_6_graphics_53,x:353.7171,y:373.8992}).wait(1).to({graphics:mask_6_graphics_54,x:354.6864,y:386.4742}).wait(1).to({graphics:mask_6_graphics_55,x:356.1326,y:400.8837}).wait(1).to({graphics:mask_6_graphics_56,x:356.1326,y:413.6242}).wait(1).to({graphics:mask_6_graphics_57,x:356.2071,y:423.2747}).wait(1).to({graphics:mask_6_graphics_58,x:356.2071,y:430.4432}).wait(1).to({graphics:mask_6_graphics_59,x:356.2071,y:430.4432}).wait(1).to({graphics:mask_6_graphics_60,x:356.2071,y:430.4432}).wait(90));

	// 筆畫15
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231815").s().p("ABKKXIjVkKIDaAmIAsviQgHgUhRABQigAElxBwIgRiZIANAAIBhgvQB4g1BygdQFqheCiCvIAZAfQAfArAYBAQBPDMgEFKIgBBdQgDBzgPBnQgwFMiOBiQgYAagpACIgFAAQhQAAhPhzg");
	this.shape_14.setTransform(362.3621,435.0641);
	this.shape_14._off = true;

	var maskedShapeInstanceList = [this.shape_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(51).to({_off:false},0).wait(99));

	// 遮色片 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_61 = new cjs.Graphics().p("AgIC8Qg+gDguglQgegXgSgiQgTgigEglQgDgkALglQALglAYgdQAdgjArgSQArgSAsADQA7AFAvAoQAwAoAOA5QAPA4gXA6QgXA6gyAgQgtAdg3AAIgKAAg");
	var mask_7_graphics_62 = new cjs.Graphics().p("AhnDkQg+gDguglQgegXgSgiQgTgigEglQgDglALgkQALglAYgdQAdgjArgSQArgSAtADIASADIALgPQAdgjArgSQArgSAtADQA7AFAvAoQAwAoAOA5QAPA5gXA5QgXA6gxAgQgyAgg+gDIgZgDQgVAhghAVQgsAdg3AAIgLAAg");
	var mask_7_graphics_63 = new cjs.Graphics().p("AjuECQg+gDguglQgegXgSgiQgTgigEglQgDglALglQALgkAYgdQAdgjArgSQArgSAtADIASADIALgPQAdgjAsgSQArgSAtADQAxAEAqAeQAHgOALgMQAdgjArgSQArgSAtADQA7AFAvAoQAwAoAOA5QAPA5gXA6QgXA5gyAgQgxAgg+gDQg4gDgrgeQgWAoglAYQgyAgg9gDIgZgDQgVAhghAVQgtAdg3AAIgLAAg");
	var mask_7_graphics_64 = new cjs.Graphics().p("ACiFNQg/gDgtglQgegXgSgiQgSgigEglQgDggAHggQgRADgTgBIgZgDQgVAhghAVQgxAgg+gDQg+gDguglQgegXgSgiQgTgigEglQgDgkALglQALglAYgdQAdgjArgSQArgSAtADIASADIALgPQAdgjAsgSQArgSAtADQAxAEAqAeQAHgOALgMQAdgjArgSQArgSAtADQA7AFAvAoQAwAoAOA5QAPA5gXA6QgXA6gyAfIgRAKQAdAhAKAqQAPA5gXA6QgXA6gyAgQgtAdg4AAIgKAAg");
	var mask_7_graphics_65 = new cjs.Graphics().p("AgRGTQg+gDguglQgdgXgTgiQgSgigEglQgEglALglQAKgiAVgbQglAPgsgCQg+gDguglQgegXgSgiQgTghgEglQgDglALglQALglAYgdQAdgjArgSQArgSAtADIASADIALgPQAdgjAsgSQArgSAtADQAxAEAqAeQAHgOALgMQAdgjArgSQArgSAtADQA7AFAvAoQAwAoAOA5QAPA5gXA6QgXA6gyAgIgRAKQAdAhAKApQAPA5gXA6QgXA6gyAgQgsAdg4AAIgHAVQgXA6gxAgQguAdg2AAIgLAAgAhQApQANgFAOgEIgUgCIgHALg");
	var mask_7_graphics_66 = new cjs.Graphics().p("Aj4G7Qg/gDgtglQgegXgSgiQgTgigEglQgDglALglQALglAYgdQAdgjArgSQAYgKAagEQgqgJgggaQgegXgSghQgTgigEglQgDglALglQALglAYgdQAdgjArgSQArgSAtADIASADIALgPQAdgjAsgSQArgSAtADQAxAEAqAeQAHgOALgMQAdgjArgSQArgSAtADQA7AFAvAoQAwAoAOA5QAPA5gXA6QgXA6gyAgIgRAKQAdAhAKAqQAPA4gXA6QgXA6gyAgQgsAdg4ABIgHAUQgXA6gxAgQgyAgg9gDQglgCgfgNQgXApgnAZQgtAdg4AAIgKAAgAjEBIQARAEAQAIQAHgNAJgLQgXAJgaADgAhGACQANgFAOgDIgUgDIgHALg");
	var mask_7_graphics_67 = new cjs.Graphics().p("Aj4G7Qg/gDgtglQgegXgSgiQgTgigEglQgDglALglQALglAYgdQAdgjArgSQAYgKAagEQgqgJgggaQgegXgSghQgTgigEglQgDglALglQALglAYgdQAdgjArgSQArgSAtADIASADIALgPQAdgjAsgSQArgSAtADQAxAEAqAeQAHgOALgMQAdgjArgSQArgSAtADQA7AFAvAoQAwAoAOA5QAPA5gXA6QgXA6gyAgIgRAKQAdAhAKAqQAPA4gXA6QgXA6gyAgQgsAdg4ABIgHAUQgXA6gxAgQgyAgg9gDQglgCgfgNQgXApgnAZQgtAdg4AAIgKAAgAjEBIQARAEAQAIQAHgNAJgLQgXAJgaADgAhGACQANgFAOgDIgUgDIgHALg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(61).to({graphics:mask_7_graphics_61,x:316.9381,y:425.9096}).wait(1).to({graphics:mask_7_graphics_62,x:326.4381,y:421.9096}).wait(1).to({graphics:mask_7_graphics_63,x:339.9381,y:418.9096}).wait(1).to({graphics:mask_7_graphics_64,x:339.9381,y:426.4344}).wait(1).to({graphics:mask_7_graphics_65,x:339.9381,y:433.4344}).wait(1).to({graphics:mask_7_graphics_66,x:338.9381,y:437.4096}).wait(1).to({graphics:mask_7_graphics_67,x:338.9381,y:437.4096}).wait(83));

	// 筆畫16
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231815").s().p("Ak+EYQgPgZAPgsQBNgUBGgmQCHhLBaiEQg9AYhFAOQiKAagig3QgUgFgMgcQgWg4Awh1IgBAJQABAJALAFQAjASB4geICngoQCqgmAKAOIAWABQAYAEAMARQAlA1hnChIlJFPQhWAnhEADIgKAAQg5AAgTgdg");
	this.shape_15.setTransform(342.3933,434.2341);
	this.shape_15._off = true;

	var maskedShapeInstanceList = [this.shape_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(61).to({_off:false},0).wait(89));

	// 筆畫17
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231815").s().p("AheAcQgSAAgQgIQgigOAFgiIAVAMQAcAOAiAGQBrAYB+guQgYANgsAMQhLAWhTAAIgbgBg");
	this.shape_16.setTransform(329.0367,434.1026);
	this.shape_16._off = true;

	var maskedShapeInstanceList = [this.shape_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(61).to({_off:false},0).wait(89));

	// 筆畫19
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhVAAIA9AEQBFABApgPQgSAKgfAGQgZAFgXAAQglAAglgLg");
	this.shape_17.setTransform(323.675,491.597);
	this.shape_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(67).to({_off:false},0).wait(83));

	// 遮色片 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_67 = new cjs.Graphics().p("AgjEoQhbgLhDg5QhCg4gahYQgahXAahTQAWhGA2g2QA2g2BHgVQBGgVBKAPQBLAQA4AvQA5AvAcBGQAdBHgIBIQgIBLgsBAQgtBAhDAhQg9AehFAAQgSAAgUgCg");
	var mask_8_graphics_68 = new cjs.Graphics().p("AjNFEQhbgLhCg4QhDg5gZhXQgahZAahSQAVhGA2g2QA3g2BGgVQBGgVBLAQQAlAIAgAPIAFgFQA2g0BHgUQBHgTBKARQBLAQA3AxQA4AwAbBHQAbBHgJBIQgKBJgsA+QgsA/hCAgQgtAXg0AGQg0AHgygMQgggHgegPQgjAjgqAVQg8AehFAAQgUAAgUgDg");
	var mask_8_graphics_69 = new cjs.Graphics().p("AkxFYQhbgLhCg4QhDg5gZhXQgahZAahSQAVhGA2g2QA3g2BGgVQBGgVBLAQQAlAIAgAPIAFgFQA3g0BHgUQA7gQA/AKQAmgXAtgLQBXgWBRAbQBRAbA4BFQA4BGAJBVQAKBUgoBQQgoBQhJAsQhJAshagDQgRAAgRgDIgYANQgtAXg0AGQg0AHgygMQgfgHgegPQgiAjgsAVQg8AehFAAQgTAAgVgDg");
	var mask_8_graphics_70 = new cjs.Graphics().p("AkxFYQhbgLhCg4QhDg5gZhXQgahZAahSQAVhGA2g2QA3g2BGgVQBGgVBLAQQAlAIAgAPIAFgFQA3g0BHgUQA7gQA/AKQAmgXAtgLQBXgWBRAbQBRAbA4BFQA4BGAJBVQAKBUgoBQQgoBQhJAsQhJAshagDQgRAAgRgDIgYANQgtAXg0AGQg0AHgygMQgfgHgegPQgiAjgsAVQg8AehFAAQgTAAgVgDg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(67).to({graphics:mask_8_graphics_67,x:316.0865,y:477.6181}).wait(1).to({graphics:mask_8_graphics_68,x:333.022,y:474.7513}).wait(1).to({graphics:mask_8_graphics_69,x:343.0162,y:472.7533}).wait(1).to({graphics:mask_8_graphics_70,x:343.0162,y:472.7533}).wait(80));

	// 筆畫18
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#231815").s().p("Ak6DBIAAkqIBTgFQBlgHBagKQEegiBFg1IABGFQiVATiYALQh4AKhNAAQh2AAgOgWg");
	this.shape_18.setTransform(341.95,472.8141);
	this.shape_18._off = true;

	var maskedShapeInstanceList = [this.shape_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(67).to({_off:false},0).wait(83));

	// 遮色片 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_70 = new cjs.Graphics().p("AgmCUQgugMgegiQgeghgHgwQgGguATgoQAUgpApgZQAogYAsACQAfACAcANQAcAOAVAXQAUAXAKAeQALAdgDAeQgDAtgdAlQgdAmgrAPQgXAIgYAAQgUAAgUgGg");
	var mask_9_graphics_71 = new cjs.Graphics().p("AhbCnQghgFgbgRQgcgRgSgbQgTgbgGggQgKg5Ajg1QAkg2A6gNQAngIAmAMQAJgHALgHQAngYAtACQAfACAcANQAcAOAVAXQAUAXAKAeQALAdgDAfQgDAsgdAlQgdAmgrAPQgqAOgugMIgGgCQgYAVgeAJQgVAGgVAAIgVgBg");
	var mask_9_graphics_72 = new cjs.Graphics().p("AiNDeQgsgIgiggQghgggLgrQgIgfAFggQAEghARgaQARgcAagSQANgJAOgHQAHgYAPgXQAkg2A6gNQAngIAlAMQAJgHALgHQAogYAtACQAfACAcANQAcAOAVAXQAUAXAKAeQALAdgDAfQgDAtgdAkQgdAmgrAPQgqAOgugMIgGgCQgPAOgTAIQgEAUgJASQgPAfgYAWQgaAVghAJQgUAFgUAAQgNAAgNgCg");
	var mask_9_graphics_73 = new cjs.Graphics().p("AjDESQgqgCgigVQghgWgUgkQgTglABgoQABgoAXgkQAWgkAkgSQAigSAoABQAFgSAKgRQARgbAbgTQANgJAOgGQAGgYAQgYQAkg2A4gMQAngJAmANQAJgIALgGQApgYAtACQAeABAdAOQAcANAUAXQAVAXAKAeQAKAegCAeQgDAtgdAmQgdAlgrAOQgrAPgugMIgGgCQgPAOgTAIQgDATgJATQgPAegaAWQgZAWghAIQgWAGgVgBQgGAQgKAPQgXAjgjATQggAQglAAIgIAAg");
	var mask_9_graphics_74 = new cjs.Graphics().p("AjDESQgqgCgigVQghgWgUgkQgTglABgoQABgoAXgkQAWgkAkgSQAigSAoABQAFgSAKgRQARgbAbgTQANgJAOgGQAGgYAQgYQAkg2A4gMQAngJAmANQAJgIALgGQApgYAtACQAeABAdAOQAcANAUAXQAVAXAKAeQAKAegCAeQgDAtgdAmQgdAlgrAOQgrAPgugMIgGgCQgPAOgTAIQgDATgJATQgPAegaAWQgZAWghAIQgWAGgVgBQgGAQgKAPQgXAjgjATQggAQglAAIgIAAg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(70).to({graphics:mask_9_graphics_70,x:349.9928,y:493.914}).wait(1).to({graphics:mask_9_graphics_71,x:342.8542,y:495.3313}).wait(1).to({graphics:mask_9_graphics_72,x:338.4529,y:500.9373}).wait(1).to({graphics:mask_9_graphics_73,x:331.0216,y:505.9771}).wait(1).to({graphics:mask_9_graphics_74,x:331.0216,y:505.9771}).wait(76));

	// 筆畫20
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#231815").s().p("AiMglQAdgjAigfIAdgXQBvhiBoAfQAsANAbAaQgOgKgYAEIggAKQiCA4iWCZQhMBNgxBBQAEh9Bdhxg");
	this.shape_19.setTransform(336.3875,505.763);
	this.shape_19._off = true;

	var maskedShapeInstanceList = [this.shape_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(70).to({_off:false},0).wait(80));

	// 背景
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(1.55,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(150));

	// 小燈籠
	this.instance_1 = new lib.小燈籠();
	this.instance_1.setTransform(90.05,88.4,0.4545,0.3626,0,0,0,-111.9,-37.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(150));

	// 中燈籠
	this.instance_2 = new lib.中燈籠();
	this.instance_2.setTransform(276.75,108.45,0.5509,0.4452,0,0,0,-111.8,-37.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(150));

	// 大燈籠
	this.instance_3 = new lib.大燈籠();
	this.instance_3.setTransform(164.1,195.1,0.8014,0.8035,0,0,0,-111.8,-37.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(150));

	// 底稿顏色
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F5F3F2").s().p("EgruAs5MAAAhZxMBXdAAAMAAABZxg");
	this.shape_20.setTransform(279.925,288.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(150));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(279.5,287.5,280.6,287.9);
// library properties:
lib.properties = {
	id: 'B7620D085B813B44B05DE0F156147363',
	width: 559,
	height: 575,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/B4A12 鄭微珊_燈籠__atlas_1.png", id:"B4A12 鄭微珊_燈籠__atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['B7620D085B813B44B05DE0F156147363'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;