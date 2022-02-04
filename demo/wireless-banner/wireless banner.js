(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"wireless banner_atlas_", frames: [[962,0,320,280],[1284,0,320,280],[1420,282,320,280],[1606,0,320,280],[1420,564,320,280],[0,670,320,280],[322,670,320,280],[644,846,320,280],[1257,282,105,79],[0,952,320,280],[322,952,320,280],[966,846,320,280],[1288,846,320,280],[1610,846,134,211],[1742,282,116,134],[0,402,1418,266],[0,0,960,400],[962,282,293,70]]}
];


// symbols:



(lib.Dark_core_1 = function() {
	this.spriteSheet = ss["wireless banner_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Dark_core_2 = function() {
	this.spriteSheet = ss["wireless banner_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Dark_core_3 = function() {
	this.spriteSheet = ss["wireless banner_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Dark_core_4 = function() {
	this.spriteSheet = ss["wireless banner_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.K63_1 = function() {
	this.spriteSheet = ss["wireless banner_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.K63_2 = function() {
	this.spriteSheet = ss["wireless banner_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.K63_3 = function() {
	this.spriteSheet = ss["wireless banner_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.K63_4 = function() {
	this.spriteSheet = ss["wireless banner_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.LOGO_stacked_WHTai = function() {
	this.spriteSheet = ss["wireless banner_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.MM1000_1 = function() {
	this.spriteSheet = ss["wireless banner_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.MM1000_2 = function() {
	this.spriteSheet = ss["wireless banner_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.MM1000_3 = function() {
	this.spriteSheet = ss["wireless banner_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.MM1000_4 = function() {
	this.spriteSheet = ss["wireless banner_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Qi = function() {
	this.spriteSheet = ss["wireless banner_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib._switch = function() {
	this.spriteSheet = ss["wireless banner_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.unplug = function() {
	this.spriteSheet = ss["wireless banner_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Unplug_and_Play = function() {
	this.spriteSheet = ss["wireless banner_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.wireless_icon = function() {
	this.spriteSheet = ss["wireless banner_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.yellow_strip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// strip copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_5 = new cjs.Graphics().p("ADnmMQFxpSEhnNIARAXQyMc2qHQKQGOqXLiyhg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(5).to({graphics:mask_graphics_5,x:476.1,y:61.9}).wait(15));

	// mask copy
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(254,203,0,0)","#FECB00","rgba(254,203,0,0)"],[0.275,0.565,0.808],0,-168.5,0,168.5).s().p("EgYdAgFMAAAhAJMAw8AAAMAAABAJg");
	this.shape.setTransform(454.7,-285.5);
	this.shape._off = true;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(254,203,0,0)","#FECB00","rgba(254,203,0,0)"],[0.275,0.565,0.808],0,-168.5,0,168.5).s().p("EgYeAgFMAAAhAJMAw8AAAMAAABAJg");
	this.shape_1.setTransform(452.1,-225.9);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(254,203,0,0)","#FECB00","rgba(254,203,0,0)"],[0.275,0.565,0.808],0,-168.5,0,168.5).s().p("EgYeAgFMAAAhAJMAw9AAAMAAABAJg");
	this.shape_2.setTransform(444.2,-47.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(254,203,0,0)","#FECB00","rgba(254,203,0,0)"],[0.275,0.565,0.808],0,-168.5,0,168.5).s().p("EgYdAgFMAAAhAJMAw7AAAMAAABAJg");
	this.shape_3.setTransform(425.8,369.5);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},5).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_2,p:{x:444.2,y:-47.3}}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2,p:{x:428.4,y:309.9}}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(5).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,x:446.8,y:-106.9},0).to({_off:true},1).wait(1).to({_off:false,x:441.6,y:12.2},0).to({_off:true},1).wait(2).to({_off:false,x:433.7,y:190.8},0).to({_off:true},1).wait(3).to({_off:false,x:423.1,y:429},0).wait(1).to({x:420.5,y:488.5},0).to({_off:true},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(6).to({_off:false},0).wait(1).to({x:449.5,y:-166.4},0).to({_off:true},1).wait(3).to({_off:false,x:438.9,y:71.8},0).wait(1).to({x:436.3,y:131.3},0).to({_off:true},1).wait(1).to({_off:false,x:431,y:250.4},0).to({_off:true},1).wait(4).to({_off:false,x:417.9,y:548.1},0).wait(1));

	// strip (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AF+ZsUgIEgg6gEhgSgUAE7ASsAIUAgxg");
	mask_1.setTransform(41.8,164.7);

	// mask
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(254,203,0,0)","#FECB00","rgba(254,203,0,0)"],[0.275,0.565,0.808],0,-168.5,0,168.5).s().p("EgYeAgFMAAAhAJMAw8AAAMAAABAJg");
	this.shape_4.setTransform(57.4,534.8);

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1).to({y:476.1},0).wait(1).to({y:417.4},0).wait(1).to({y:358.8},0).wait(1).to({y:300.1},0).wait(1).to({y:241.4},0).wait(1).to({y:182.7},0).wait(1).to({y:124.1},0).wait(1).to({y:65.4},0).wait(1).to({y:6.7},0).wait(1).to({y:-52},0).wait(1).to({y:-110.7},0).wait(1).to({y:-169.3},0).wait(1).to({y:-228},0).wait(1).to({y:-286.7},0).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.6,329.5,84.8,0);


(lib.RGB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag0A/IAAh9IA4AAQAWAAALALQAJAJAAAMIAAABQgBASgRAJQAZAIAAAWIAAAAQAAARgNAJQgMAJgWAAgAgeArIAkAAQAZAAgBgRIAAgBQAAgQgaAAIgiAAgAgegJIAeAAQAYAAgBgRIAAgBQAAgHgFgEQgGgFgLAAIgfAAg");
	this.shape.setTransform(37.7,12);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgoAuQgSgSAAgcIAAAAQAAgaATgTQASgTAbAAQAdAAATARIgNARQgQgOgUAAQgQAAgMAOQgMANAAARIAAAAQAAATAMANQAMANASAAQASAAAMgKIAAgXIgfAAIAAgTIA1AAIAAA0QgXAUgeAAQgbAAgTgTg");
	this.shape_1.setTransform(23.7,12);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAbA/IgegsIgbAAIAAAsIgXAAIAAh9IA4AAQAXAAANANQAKAKAAARQAAAcgdAKIAiAvgAgeAAIAfAAQAMAAAHgFQAHgGAAgJIAAgBQAAgKgHgGQgHgFgMAAIgfAAg");
	this.shape_2.setTransform(10.7,12);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().ls(["#FF0000","#FFFF00","#00FF00","#00FFFF","#0000FF","#FF00FF","#FF0000"],[0,0.165,0.365,0.498,0.667,0.831,1],-18.2,-16.7,18.2,16.7).ss(1,1,1).p("AjphwIHTAAIAADhInTAAg");
	this.shape_3.setTransform(23.4,11.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,48.9,24.9);


(lib.MM10004 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.MM1000_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,280);


(lib.MM10003 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.MM1000_2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,280);


(lib.MM10002 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.MM1000_3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,280);


(lib.mm10001 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.MM1000_4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.88,0.88);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,281.6,246.4);


(lib.K634 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.K63_4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,280);


(lib.K633 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.K63_3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.88,0.88);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,281.6,246.4);


(lib.K632 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.K63_2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,280);


(lib.K631 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.K63_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.89,0.89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,284.8,249.2);


(lib.dark4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Dark_core_4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,192,168);


(lib.dark3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Dark_core_3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,192,168);


(lib.dark2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Dark_core_2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,192,168);


(lib.dark1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Dark_core_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,192,168);


(lib.MM1000 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// item
	this.instance = new lib.MM10004("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(13,90,1,1,0,0,0,160,140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(87));

	// item2
	this.instance_1 = new lib.MM10003("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(13,90,1,1,0,0,0,160,140);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).wait(29).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(58));

	// item3
	this.instance_2 = new lib.MM10002("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(13,90,1,1,0,0,0,160,140);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(58).to({_off:false},0).wait(29).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(29));

	// item4
	this.instance_3 = new lib.mm10001("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(12.8,90.2,1,1,0,0,0,140.8,123.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(87).to({_off:false},0).wait(29).to({startPosition:0},0).to({alpha:0},5).wait(1));

	// item copy
	this.instance_4 = new lib.MM10004("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(13,90,1,1,0,0,0,160,140);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(116).to({_off:false},0).wait(6));

	// product name
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVAUIAGgHQAJAHAIAAQAEAAADgCQADgCAAgDQAAgDgDgCQgCgCgHgCQgKgCgEgDQgFgDAAgIQAAgGAGgFQAFgFAIAAQALAAAJAHIgFAHQgIgFgHAAQgEAAgCACQgDABAAADQAAAEADACIAKADQAJADAEADQAFADAAAHQAAAIgGAEQgGAFgIAAQgNAAgKgJg");
	this.shape.setTransform(58.2,238.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAMAcIgNgTIgMAAIAAATIgKAAIAAg3IAYAAQALAAAFAFQAFAFAAAHIAAABQAAAMgOAEIAQAVgAgNAAIANAAQAGAAADgCQADgCAAgEIAAgBQAAgEgDgCQgDgDgGAAIgNAAg");
	this.shape_1.setTransform(53,238.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUAcIAAg3IApAAIAAAJIgfAAIAAAOIAbAAIAAAIIgbAAIAAAPIAfAAIAAAJg");
	this.shape_2.setTransform(47.4,238.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgEAcIAAguIgSAAIAAgJIAtAAIAAAJIgSAAIAAAug");
	this.shape_3.setTransform(42,238.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVAcIAAg3IAWAAQAJAAAGAFQAGAFAAAJIAAAAQAAAIgHAFQgGAFgJAAIgLAAIAAASgAgLABIALAAQAFAAAEgCQADgDAAgEQAAgFgDgCQgEgDgFAAIgLAAg");
	this.shape_4.setTransform(37,238.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AATAcIgGgNIgaAAIgFANIgKAAIAYg3IAIAAIAZA3gAAJAGIgJgVIgJAVIASAAg");
	this.shape_5.setTransform(31,238.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYAcIAAg3IAVAAQALAAAJAIQAJAIgBALQABAMgJAIQgJAIgLAAgAgOATIALAAQAHAAAGgGQAFgEAAgJQAAgIgFgFQgGgFgHAAIgLAAg");
	this.shape_6.setTransform(25.2,238.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AATAcIgGgNIgaAAIgFANIgKAAIAYg3IAIAAIAZA3gAAJAGIgJgVIgJAVIASAAg");
	this.shape_7.setTransform(18.8,238.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRAVQgIgJAAgMQAAgLAIgJQAIgIAMAAQAMAAAJAHIgGAIQgHgGgJAAQgGAAgGAGQgFAFAAAIQAAAJAGAFQAFAGAHAAQAIAAAGgEIAAgLIgOAAIAAgIIAXAAIAAAXQgKAJgNAAQgMAAgIgIg");
	this.shape_8.setTransform(10.1,238.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAQAcIgdgnIAAAnIgKAAIAAg3IAJAAIAdAmIAAgmIAJAAIAAA3g");
	this.shape_9.setTransform(3.9,238.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgEAcIAAg3IAJAAIAAA3g");
	this.shape_10.setTransform(-0.5,238.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgRAVQgIgJAAgMQAAgLAIgJQAIgIAMAAQAMAAAJAHIgGAIQgHgGgJAAQgGAAgGAGQgFAFAAAIQAAAJAGAFQAFAGAHAAQAIAAAGgEIAAgLIgOAAIAAgIIAXAAIAAAXQgKAJgNAAQgMAAgIgIg");
	this.shape_11.setTransform(-5,238.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAMAcIgNgTIgMAAIAAATIgKAAIAAg3IAYAAQAKAAAHAFQAEAFAAAHIAAABQAAAMgNAEIAPAVgAgNAAIAOAAQAFAAADgCQADgCAAgEIAAgBQAAgEgDgCQgDgDgFAAIgOAAg");
	this.shape_12.setTransform(-10.7,238.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AATAcIgGgNIgaAAIgFANIgKAAIAYg3IAIAAIAZA3gAAJAGIgJgVIgJAVIASAAg");
	this.shape_13.setTransform(-16.9,238.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAOAcIAAgYIgaAAIAAAYIgKAAIAAg3IAKAAIAAAXIAaAAIAAgXIAJAAIAAA3g");
	this.shape_14.setTransform(-23.1,238.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgQAVQgJgJAAgMQAAgLAJgJQAIgIALAAQANAAAJAJIgGAHQgIgHgIAAQgHAAgFAGQgFAFAAAIQAAAIAFAGQAFAGAHAAQAJAAAHgIIAHAHQgFAFgFADQgGACgHAAQgLAAgIgIg");
	this.shape_15.setTransform(-29,238.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgGAGQgCgCAAgEQAAgDACgCQADgDADAAQAEAAADACQACADAAADQAAAEgCACQgDADgEAAQgDAAgDgDgAgFgFQgCADAAACQAAADACADQACACADAAQAEAAACgCQACgDAAgDQAAgCgCgDQgCgCgEAAQgDAAgCACgAACAEIgCgDIgBAAIAAADIgCAAIAAgIIADAAQAFAAAAADQAAABgBAAQAAAAAAAAQAAAAgBABQAAAAgBAAIADADgAgBAAIABAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAAAgBAAIgBAAg");
	this.shape_16.setTransform(-35.4,235.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgEAdIAAgpIAJAAIAAApgAgEgTIAAgJIAJAAIAAAJg");
	this.shape_17.setTransform(-37.5,238.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AARAXQgIAGgJAAQgMAAgIgJQgJgIAAgMQAAgLAJgJQAIgIAMAAQANAAAIAIQAIAJAAALQAAAJgGAIIAHAFIgHAHgAgNgNQgFAFAAAIQAAAIAFAGQAGAGAHAAQAFAAAFgDIgKgIIAGgHIAKAJQADgFAAgGQAAgIgGgFQgFgGgIAAQgIAAgFAGg");
	this.shape_18.setTransform(-42,238.2);

	this.instance_5 = new lib.Qi();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-64.3,227.3,0.12,0.12);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FECB00").s().p("AgYAcIAAg3IAVAAQALAAAJAIQAIAIAAALQAAAMgIAIQgJAIgLAAgAgOATIALAAQAIAAAEgFQAGgGAAgIQAAgIgGgEQgEgGgIAAIgLAAg");
	this.shape_19.setTransform(88.6,220.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FECB00").s().p("AATAcIgGgNIgaAAIgFANIgKAAIAYg3IAIAAIAZA3gAAJAGIgJgVIgJAVIASAAg");
	this.shape_20.setTransform(82.2,220.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FECB00").s().p("AgVAcIAAg3IAWAAQAJAAAGAFQAGAFAAAIIAAABQAAAIgHAFQgGAFgJAAIgLAAIAAASgAgLABIALAAQAFAAAEgBQADgDAAgFQAAgFgDgDQgEgCgFAAIgLAAg");
	this.shape_21.setTransform(77.1,220.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FECB00").s().p("AgUAcIAAg3IApAAIAAAJIgfAAIAAAPIAbAAIAAAHIgbAAIAAAPIAfAAIAAAJg");
	this.shape_22.setTransform(69.3,220.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FECB00").s().p("AgVAUIAGgHQAJAHAIAAQAEAAADgCQADgCAAgDQAAgDgDgCQgCgCgHgBQgKgDgEgCQgFgEAAgHQAAgHAGgGQAFgEAIAAQALAAAJAHIgFAHQgIgFgHAAQgEAAgCACQgDABAAAEQAAADADACIAKAEQAJACAEACQAFAEAAAHQAAAIgGAFQgGAEgIAAQgNAAgKgJg");
	this.shape_23.setTransform(63.9,220.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FECB00").s().p("AgRAWQgGgHAAgLIAAggIAKAAIAAAfQAAAIADAEQAEAEAGABQAGAAAEgFQAEgEAAgHIAAggIAKAAIAAAfQAAAMgHAHQgGAGgLABQgKgBgHgGg");
	this.shape_24.setTransform(58.4,220.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FECB00").s().p("AgUAUQgJgIAAgMQAAgLAJgIQAJgJALAAQANAAAIAJQAIAIAAALQAAAMgIAIQgJAJgMAAQgMAAgIgJgAgNgNQgFAFAAAIQAAAJAFAFQAGAGAHAAQAJAAAEgGQAGgFAAgJQAAgIgGgFQgFgGgIAAQgHAAgGAGg");
	this.shape_25.setTransform(52,220.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FECB00").s().p("AASAcIAAgnIgSAaIgQgaIAAAnIgKAAIAAg3IAKAAIAQAbIASgbIAKAAIAAA3g");
	this.shape_26.setTransform(45.1,220.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FECB00").s().p("AgRAUQgIgIAAgMQAAgLAIgIQAIgJAMAAQAMAAAJAIIgGAHQgHgGgJAAQgGAAgGAGQgFAFAAAIQAAAIAGAHQAFAFAHAAQAIAAAGgEIAAgKIgOAAIAAgIIAXAAIAAAWQgKAJgNAAQgMAAgIgJg");
	this.shape_27.setTransform(36.1,220.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FECB00").s().p("AARAcIgegnIAAAnIgLAAIAAg3IAKAAIAdAlIAAglIAKAAIAAA3g");
	this.shape_28.setTransform(29.9,220.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FECB00").s().p("AgEAcIAAg3IAJAAIAAA3g");
	this.shape_29.setTransform(25.5,220.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FECB00").s().p("AgRAUQgIgIAAgMQAAgLAIgIQAIgJAMAAQAMAAAJAIIgGAHQgHgGgJAAQgGAAgGAGQgFAFAAAIQAAAIAGAHQAFAFAHAAQAIAAAGgEIAAgKIgOAAIAAgIIAXAAIAAAWQgKAJgNAAQgMAAgIgJg");
	this.shape_30.setTransform(21,220.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FECB00").s().p("AAMAcIgNgUIgMAAIAAAUIgKAAIAAg3IAYAAQALAAAFAGQAFAEAAAIIAAAAQAAAMgOAEIAQAVgAgNAAIAOAAQAFAAADgCQADgDAAgEIAAAAQAAgEgDgDQgDgCgFAAIgOAAg");
	this.shape_31.setTransform(15.3,220.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FECB00").s().p("AATAcIgGgNIgaAAIgFANIgKAAIAYg3IAIAAIAZA3gAAJAGIgJgVIgJAVIASAAg");
	this.shape_32.setTransform(9.1,220.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FECB00").s().p("AAOAcIAAgXIgaAAIAAAXIgKAAIAAg3IAKAAIAAAYIAaAAIAAgYIAJAAIAAA3g");
	this.shape_33.setTransform(2.9,220.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FECB00").s().p("AgQAUQgJgIAAgMQAAgLAJgIQAIgJALAAQANAAAJAJIgGAHQgIgHgIAAQgHAAgFAGQgFAFAAAIQAAAJAFAFQAFAGAHAAQAJAAAHgIIAHAHQgFAFgFACQgGADgHAAQgLAAgIgJg");
	this.shape_34.setTransform(-3,220.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FECB00").s().p("AgVAUIAGgHQAJAHAIAAQAEAAADgCQADgCAAgDQAAgDgDgCQgCgCgHgBQgKgDgEgCQgFgEAAgHQAAgHAGgGQAFgEAIAAQALAAAJAHIgFAHQgIgFgHAAQgEAAgCACQgDABAAAEQAAADADACIAKAEQAJACAEACQAFAEAAAHQAAAIgGAFQgGAEgIAAQgNAAgKgJg");
	this.shape_35.setTransform(-11,220.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FECB00").s().p("AgVAUIAGgHQAJAHAIAAQAEAAADgCQADgCAAgDQAAgDgDgCQgCgCgHgBQgKgDgEgCQgFgEAAgHQAAgHAGgGQAFgEAIAAQALAAAJAHIgFAHQgIgFgHAAQgEAAgCACQgDABAAAEQAAADADACIAKAEQAJACAEACQAFAEAAAHQAAAIgGAFQgGAEgIAAQgNAAgKgJg");
	this.shape_36.setTransform(-16,220.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FECB00").s().p("AgUAcIAAg3IAoAAIAAAJIgeAAIAAAPIAbAAIAAAHIgbAAIAAAPIAfAAIAAAJg");
	this.shape_37.setTransform(-21.1,220.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FECB00").s().p("AgTAcIAAg3IAKAAIAAAuIAdAAIAAAJg");
	this.shape_38.setTransform(-26.2,220.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FECB00").s().p("AgUAcIAAg3IApAAIAAAJIgfAAIAAAPIAbAAIAAAHIgbAAIAAAPIAfAAIAAAJg");
	this.shape_39.setTransform(-31.4,220.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FECB00").s().p("AAMAcIgMgUIgNAAIAAAUIgKAAIAAg3IAYAAQAKAAAGAGQAFAEAAAIIAAAAQAAAMgOAEIAQAVgAgNAAIANAAQAFAAAEgCQADgDAAgEIAAAAQAAgEgDgDQgDgCgGAAIgNAAg");
	this.shape_40.setTransform(-36.8,220.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FECB00").s().p("AgEAcIAAg3IAJAAIAAA3g");
	this.shape_41.setTransform(-41.2,220.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FECB00").s().p("AAOAcIgOgnIgNAnIgIAAIgUg3IALAAIANAoIAOgoIAHAAIAOAoIANgoIALAAIgUA3g");
	this.shape_42.setTransform(-46.9,220.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FECB00").s().p("AgGAGQgCgCAAgEQAAgDACgCQADgDADAAQADAAADACQADADAAADQAAAEgDACQgDADgDAAQgDAAgDgDgAgFgFQgCADAAACQAAADACADQADACACAAQADAAACgCQADgDAAgDQAAgCgDgDQgCgCgDAAQgCAAgDACgAACAEIgCgDIAAAAIAAADIgDAAIAAgIIAEAAQABAAAAAAQABABAAAAQABAAAAABQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAgBABQAAAAgBAAIACADgAAAAAIABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAIgBAAg");
	this.shape_43.setTransform(-54.7,218.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FECB00").s().p("AgEAdIAAgpIAJAAIAAApgAgEgSIAAgKIAJAAIAAAKg");
	this.shape_44.setTransform(-56.8,220.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FECB00").s().p("AARAXQgIAGgJAAQgMAAgIgJQgJgIAAgMQAAgLAJgJQAIgIAMAAQANAAAIAIQAIAJAAALQAAAJgGAIIAHAFIgHAHgAgNgNQgFAFAAAIQAAAIAFAGQAGAGAHAAQAFAAAFgDIgKgIIAGgHIAKAJQADgFAAgGQAAgIgGgFQgFgGgIAAQgIAAgFAGg");
	this.shape_45.setTransform(-61.3,220.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgoAuQgPgSAAgcIAAAAQAAgbAPgSQAQgTAYAAQAZAAAQASQAPATAAAbIAAAAQAAAcgPASQgQATgZAAQgYAAgQgTgAgTgcQgIALAAARIAAAAQAAASAIAKQAIAMALAAQAMAAAIgLQAIgLAAgSIAAAAQAAgRgIgLQgIgLgMAAQgLAAgIALg");
	this.shape_46.setTransform(5.8,206.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgoAuQgPgSAAgcIAAAAQAAgbAPgSQAQgTAYAAQAZAAAQASQAPATAAAbIAAAAQAAAcgPASQgQATgZAAQgYAAgQgTgAgTgcQgIALAAARIAAAAQAAASAIAKQAIAMALAAQAMAAAIgLQAIgLAAgSIAAAAQAAgRgIgLQgIgLgMAAQgLAAgIALg");
	this.shape_47.setTransform(-7.3,206.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgoAuQgPgSAAgcIAAAAQAAgbAPgSQAQgTAYAAQAZAAAQASQAPATAAAbIAAAAQAAAcgPASQgQATgZAAQgYAAgQgTgAgTgcQgIALAAARIAAAAQAAASAIAKQAIAMALAAQAMAAAIgLQAIgLAAgSIAAAAQAAgRgIgLQgIgLgMAAQgLAAgIALg");
	this.shape_48.setTransform(-20.4,206.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAABAIAAhiIgVAFIgGgWIAjgLIATAAIAAB+g");
	this.shape_49.setTransform(-31.3,206.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAkA/IAAhSIgkA1IAAAAIgjg0IAABRIgbAAIAAh9IAeAAIAgA1IAig1IAdAAIAAB9g");
	this.shape_50.setTransform(-42.3,206.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAkA/IAAhSIgkA1IAAAAIgig0IAABRIgcAAIAAh9IAeAAIAgA1IAhg1IAeAAIAAB9g");
	this.shape_51.setTransform(-57.9,206.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.instance_5},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(122));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147,-50,320,302.6);


(lib.k63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// item
	this.instance = new lib.K631("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(89.4,98.6,1,1,0,0,0,142.4,124.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({startPosition:0},0).to({alpha:0},6).to({_off:true},1).wait(87));

	// item2
	this.instance_1 = new lib.K632("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(89,99,1,1,0,0,0,160,140);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).wait(29).to({startPosition:0},0).to({alpha:0},6).to({_off:true},1).wait(58));

	// item3
	this.instance_2 = new lib.K633("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(88.8,99.2,1,1,0,0,0,140.8,123.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(58).to({_off:false},0).wait(29).to({startPosition:0},0).to({alpha:0},6).to({_off:true},1).wait(29));

	// item4
	this.instance_3 = new lib.K634("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(89,99,1,1,0,0,0,160,140);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(87).to({_off:false},0).wait(29).to({startPosition:0},0).to({alpha:0},6).wait(1));

	// item copy
	this.instance_4 = new lib.K631("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(89.4,98.6,1,1,0,0,0,142.4,124.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(116).to({_off:false},0).wait(7));

	// product name
	this.instance_5 = new lib._switch();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-5.2,198,0.3,0.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FECB00").s().p("AgYAcIAAg3IAVAAQALAAAJAIQAIAIAAALQAAAMgIAIQgJAIgLAAgAgOATIALAAQAIAAAEgFQAGgGAAgIQAAgIgGgEQgEgGgIAAIgLAAg");
	this.shape.setTransform(178.1,227);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FECB00").s().p("AAMAcIgMgUIgNAAIAAAUIgKAAIAAg3IAYAAQAKAAAHAGQAEAEAAAHIAAABQAAAMgNAEIAPAVgAgNAAIAOAAQAEAAAEgCQADgDAAgEIAAAAQAAgEgDgDQgDgCgFAAIgOAAg");
	this.shape_1.setTransform(172.2,227);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FECB00").s().p("AATAcIgGgNIgaAAIgFANIgKAAIAYg3IAIAAIAZA3gAAJAGIgJgVIgJAVIASAAg");
	this.shape_2.setTransform(166,226.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FECB00").s().p("AgUAUQgIgIAAgMQAAgLAIgIQAJgJALAAQANAAAIAJQAJAIgBALQABAMgJAIQgJAJgMAAQgMAAgIgJgAgMgNQgGAGAAAHQAAAIAGAGQAFAGAHAAQAIAAAGgGQAFgGAAgIQAAgHgFgGQgGgGgIAAQgIAAgEAGg");
	this.shape_3.setTransform(159.8,227);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FECB00").s().p("AgWAcIAAg3IAYAAQAKAAAEAFQAEADAAAGIAAABQAAAHgIAFQAMADAAAKQAAAHgHAEQgFAEgJAAgAgMATIAPAAQAKAAABgIQAAgHgMAAIgOAAgAgMgDIAMAAQALAAgBgIQAAgEgCgCQgDgBgFAAIgMAAg");
	this.shape_4.setTransform(153.7,227);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FECB00").s().p("AgEAcIAAgWIgWghIALAAIAPAZIAQgZIALAAIgWAhIAAAWg");
	this.shape_5.setTransform(147.8,227);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FECB00").s().p("AgUAcIAAg3IAoAAIAAAJIgeAAIAAAPIAbAAIAAAHIgbAAIAAAPIAfAAIAAAJg");
	this.shape_6.setTransform(142.4,227);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FECB00").s().p("AANAcIgTgZIgIAJIAAAQIgKAAIAAg3IAKAAIAAAbIAZgbIANAAIgXAYIAYAfg");
	this.shape_7.setTransform(137,227);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FECB00").s().p("AgRAUQgIgHAAgNQAAgLAIgIQAIgJAMAAQAMAAAJAIIgGAHQgHgGgJAAQgGAAgGAGQgFAGAAAHQAAAIAGAHQAFAFAHAAQAIAAAGgEIAAgKIgOAAIAAgIIAXAAIAAAWQgKAJgNAAQgMAAgIgJg");
	this.shape_8.setTransform(128.2,227);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FECB00").s().p("AARAcIgfgnIAAAnIgKAAIAAg3IAKAAIAdAlIAAglIAKAAIAAA3g");
	this.shape_9.setTransform(122,227);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FECB00").s().p("AgEAcIAAg3IAJAAIAAA3g");
	this.shape_10.setTransform(117.6,227);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FECB00").s().p("AASAcIAAgnIgSAaIgQgaIAAAnIgKAAIAAg3IAKAAIAQAbIASgbIAKAAIAAA3g");
	this.shape_11.setTransform(112.9,227);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FECB00").s().p("AATAcIgGgNIgaAAIgFANIgKAAIAYg3IAIAAIAZA3gAAJAGIgJgVIgJAVIASAAg");
	this.shape_12.setTransform(106.3,226.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FECB00").s().p("AgRAUQgIgHAAgNQAAgLAIgIQAIgJAMAAQAMAAAJAIIgGAHQgHgGgJAAQgGAAgGAGQgFAGAAAHQAAAIAGAHQAFAFAHAAQAIAAAGgEIAAgKIgOAAIAAgIIAXAAIAAAWQgKAJgNAAQgMAAgIgJg");
	this.shape_13.setTransform(100,227);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FECB00").s().p("AgTAcIAAg3IAKAAIAAAuIAdAAIAAAJg");
	this.shape_14.setTransform(92.2,227);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FECB00").s().p("AATAcIgGgNIgaAAIgFANIgKAAIAYg3IAIAAIAZA3gAAJAGIgJgVIgJAVIASAAg");
	this.shape_15.setTransform(86.4,226.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FECB00").s().p("AgQAUQgJgHAAgNQAAgLAJgIQAIgJALAAQANAAAJAJIgGAHQgIgHgIAAQgHAAgFAGQgFAGAAAHQAAAIAFAGQAFAGAHAAQAJAAAHgHIAHAGQgFAFgFACQgGADgHAAQgLAAgIgJg");
	this.shape_16.setTransform(80.4,227);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FECB00").s().p("AgEAcIAAg3IAJAAIAAA3g");
	this.shape_17.setTransform(76.1,227);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FECB00").s().p("AAQAcIgdgnIAAAnIgLAAIAAg3IAKAAIAdAlIAAglIAKAAIAAA3g");
	this.shape_18.setTransform(71.7,227);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FECB00").s().p("AATAcIgGgNIgaAAIgFANIgKAAIAYg3IAIAAIAZA3gAAJAGIgJgVIgJAVIASAAg");
	this.shape_19.setTransform(65.4,226.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FECB00").s().p("AAOAcIAAgXIgaAAIAAAXIgKAAIAAg3IAKAAIAAAYIAaAAIAAgYIAJAAIAAA3g");
	this.shape_20.setTransform(59.2,227);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FECB00").s().p("AgQAUQgJgHAAgNQAAgLAJgIQAIgJALAAQANAAAJAJIgGAHQgIgHgIAAQgHAAgFAGQgFAGAAAHQAAAIAFAGQAFAGAHAAQAJAAAHgHIAHAGQgFAFgFACQgGADgHAAQgLAAgIgJg");
	this.shape_21.setTransform(53.3,227);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FECB00").s().p("AgUAcIAAg3IAoAAIAAAJIgeAAIAAAPIAbAAIAAAHIgbAAIAAAPIAfAAIAAAJg");
	this.shape_22.setTransform(47.8,227);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FECB00").s().p("AASAcIAAgnIgSAaIgQgaIAAAnIgKAAIAAg3IAKAAIAQAbIASgbIAKAAIAAA3g");
	this.shape_23.setTransform(41.5,227);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AguAqIATgSQANAQAQAAQAIAAAFgFQAFgEAAgHIAAAAQAAgQgYgBIgLAAIgFgQIAdgeIgwAAIAAgYIBUAAIAAAVIggAfQAiAFAAAdIAAAAQAAASgMALQgNAMgUAAQgeAAgSgWg");
	this.shape_24.setTransform(67.7,213.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgiA0QgOgPAAghIAAAAQAAgeAMgTQAQgTAaAAQAVAAASANIgPAWQgNgKgMAAQgMAAgHALQgFAHgBALQAMgIAOAAQATAAAMAKQANAKAAAUQAAATgOAMQgOAMgVAAQgVAAgOgNgAgPAJQgGAFABAJQAAAIAFAFQAGAFAJABQAKgBAHgFQAFgFAAgIIAAAAQAAgIgGgGQgGgFgKAAQgJAAgGAFg");
	this.shape_25.setTransform(56.3,213);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAYA/Igmg2IgOAQIAAAmIgcAAIAAh9IAcAAIAAA3IAxg3IAiAAIg0A1IA2BIg");
	this.shape_26.setTransform(44.5,213);

	this.instance_6 = new lib.wireless_icon();
	this.instance_6.parent = this;
	this.instance_6.setTransform(76.1,205.2,0.21,0.21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_5}]}).wait(123));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53,-26,284.8,264.2);


(lib.dark_core_SE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// item1
	this.instance = new lib.dark1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(51,67,1,1,0,0,0,96,84);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(87));

	// item2
	this.instance_1 = new lib.dark2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(51,67,1,1,0,0,0,96,84);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).wait(29).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(58));

	// item3
	this.instance_2 = new lib.dark3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(51,67,1,1,0,0,0,96,84);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(58).to({_off:false},0).wait(29).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(29));

	// item4
	this.instance_3 = new lib.dark4("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(51,67,1,1,0,0,0,96,84);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(87).to({_off:false},0).wait(29).to({startPosition:0},0).to({alpha:0},5).wait(1));

	// item1 copy
	this.instance_4 = new lib.dark1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(51,67,1,1,0,0,0,96,84);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(116).to({_off:false},0).wait(6));

	// product name
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVAUIAGgHQAJAHAIAAQAEAAADgCQADgCAAgDQAAgDgDgCQgCgCgHgCQgKgCgEgCQgFgEAAgIQAAgHAGgFQAFgEAIAAQALAAAJAHIgFAHQgIgFgHAAQgEAAgCACQgDABAAADQAAAEADACIAKADQAJADAEACQAFAEAAAHQAAAIgGAFQgGAEgIAAQgNAAgKgJg");
	this.shape.setTransform(91.5,207.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAMAcIgMgTIgNAAIAAATIgKAAIAAg3IAYAAQAKAAAHAFQAEAGAAAHIAAAAQAAAMgNAEIAPAVgAgNAAIAOAAQAEAAAEgCQADgCAAgEIAAgBQAAgEgDgDQgDgCgFAAIgOAAg");
	this.shape_1.setTransform(86.4,207.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUAcIAAg3IAoAAIAAAJIgeAAIAAAOIAbAAIAAAIIgbAAIAAAPIAfAAIAAAJg");
	this.shape_2.setTransform(80.7,207.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgEAcIAAguIgSAAIAAgJIAtAAIAAAJIgSAAIAAAug");
	this.shape_3.setTransform(75.3,207.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVAcIAAg3IAWAAQAJAAAGAFQAGAFAAAJIAAAAQAAAIgHAFQgGAFgJAAIgLAAIAAASgAgLABIALAAQAFAAAEgBQADgEAAgEQAAgFgDgDQgEgCgFAAIgLAAg");
	this.shape_4.setTransform(70.3,207.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AATAcIgGgNIgaAAIgFANIgKAAIAYg3IAIAAIAZA3gAAJAGIgJgVIgJAVIASAAg");
	this.shape_5.setTransform(64.3,207.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZAcIAAg3IAWAAQAMAAAIAIQAJAIAAALQAAAMgJAIQgIAIgMAAgAgPATIAMAAQAHAAAFgGQAGgEAAgJQAAgHgGgGQgFgFgHAAIgMAAg");
	this.shape_6.setTransform(58.6,207.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AATAcIgGgNIgaAAIgFANIgKAAIAYg3IAIAAIAZA3gAAJAGIgJgVIgJAVIASAAg");
	this.shape_7.setTransform(52.2,207.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRAUQgIgHAAgNQAAgLAIgIQAIgJAMAAQAMAAAJAHIgGAIQgHgGgJAAQgGAAgGAGQgFAGAAAHQAAAJAGAFQAFAGAHAAQAIAAAGgEIAAgLIgOAAIAAgIIAXAAIAAAXQgKAJgNAAQgMAAgIgJg");
	this.shape_8.setTransform(43.4,207.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AARAcIgfgnIAAAnIgKAAIAAg3IAKAAIAdAlIAAglIAKAAIAAA3g");
	this.shape_9.setTransform(37.2,207.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgEAcIAAg3IAJAAIAAA3g");
	this.shape_10.setTransform(32.8,207.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgRAUQgIgHAAgNQAAgLAIgIQAIgJAMAAQAMAAAJAHIgGAIQgHgGgJAAQgGAAgGAGQgFAGAAAHQAAAJAGAFQAFAGAHAAQAIAAAGgEIAAgLIgOAAIAAgIIAXAAIAAAXQgKAJgNAAQgMAAgIgJg");
	this.shape_11.setTransform(28.4,207.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAMAcIgMgTIgNAAIAAATIgKAAIAAg3IAYAAQALAAAFAFQAFAGAAAHIAAAAQAAAMgOAEIAQAVgAgNAAIANAAQAFAAAEgCQADgCAAgEIAAgBQAAgEgDgDQgDgCgGAAIgNAAg");
	this.shape_12.setTransform(22.7,207.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AATAcIgGgNIgaAAIgFANIgKAAIAYg3IAIAAIAZA3gAAJAGIgJgVIgJAVIASAAg");
	this.shape_13.setTransform(16.4,207.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAOAcIAAgYIgaAAIAAAYIgKAAIAAg3IAKAAIAAAXIAaAAIAAgXIAJAAIAAA3g");
	this.shape_14.setTransform(10.2,207.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgQAUQgJgHAAgNQAAgLAJgIQAIgJALAAQANAAAJAJIgGAHQgIgHgIAAQgHAAgFAGQgFAGAAAHQAAAIAFAGQAFAGAHAAQAJAAAHgIIAHAHQgFAFgFADQgGACgHAAQgLAAgIgJg");
	this.shape_15.setTransform(4.3,207.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgGAGQgCgCAAgEQAAgDACgCQADgDADAAQADAAADACQADADAAADQAAAEgDACQgDADgDAAQgDAAgDgDgAgFgFQgCADAAACQAAADACADQADACACAAQADAAACgCQADgDAAgDQAAgCgDgDQgCgCgDAAQgCAAgDACgAACAEIgCgDIAAAAIAAADIgDAAIAAgIIAEAAQADAAAAADQAAABAAAAQAAAAAAAAQAAAAgBABQAAAAgBAAIACADgAAAAAIABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAIgBAAg");
	this.shape_16.setTransform(-2,205.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgEAdIAAgpIAJAAIAAApgAgEgSIAAgKIAJAAIAAAKg");
	this.shape_17.setTransform(-4.1,207.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AARAXQgIAGgJAAQgMAAgIgJQgJgIAAgMQAAgLAJgJQAIgIAMAAQANAAAIAIQAIAJAAALQAAAJgGAIIAHAFIgHAHgAgNgNQgFAFAAAIQAAAIAFAGQAGAGAHAAQAFAAAFgDIgKgIIAGgHIAKAJQADgFAAgGQAAgIgGgFQgFgGgIAAQgIAAgFAGg");
	this.shape_18.setTransform(-8.7,207.3);

	this.instance_5 = new lib.Qi();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-31,196.4,0.12,0.12);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FECB00").s().p("AgUAcIAAg3IApAAIAAAJIgfAAIAAAPIAbAAIAAAHIgbAAIAAAPIAfAAIAAAJg");
	this.shape_19.setTransform(183.1,189.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FECB00").s().p("AgVAUIAGgHQAJAHAIAAQAEAAADgCQADgCAAgDQAAgDgDgCQgCgCgHgBQgKgDgEgDQgFgDAAgHQAAgIAGgEQAFgFAIAAQALAAAJAHIgFAIQgIgGgHAAQgEAAgCACQgDACAAADQAAADADACIAKAEQAJACAEACQAFAEAAAHQAAAIgGAEQgGAFgIAAQgNAAgKgJg");
	this.shape_20.setTransform(177.7,189.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FECB00").s().p("AgRAWQgGgHAAgLIAAgfIAKAAIAAAeQAAAIADAEQAEAEAGAAQAGABAEgEQAEgFAAgHIAAgfIAKAAIAAAeQAAAMgHAHQgGAGgLAAQgKAAgHgGg");
	this.shape_21.setTransform(172.2,189.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FECB00").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAIgIAMAAQANAAAIAIQAJAJAAALQAAAMgJAJQgIAIgNAAQgMAAgIgIgAgNgNQgFAGAAAHQAAAIAFAGQAGAGAHAAQAJAAAEgGQAGgGAAgIQAAgHgGgGQgFgGgIAAQgIAAgFAGg");
	this.shape_22.setTransform(165.7,189.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FECB00").s().p("AASAcIAAgnIgSAaIgQgaIAAAnIgLAAIAAg3IALAAIAQAaIARgaIALAAIAAA3g");
	this.shape_23.setTransform(158.9,189.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FECB00").s().p("AgRAVQgIgIAAgNQAAgLAIgJQAIgIAMAAQAMAAAJAIIgGAHQgHgGgJAAQgGAAgGAGQgFAGAAAHQAAAIAGAHQAFAFAHAAQAIAAAGgEIAAgKIgOAAIAAgIIAXAAIAAAWQgKAJgNAAQgMAAgIgIg");
	this.shape_24.setTransform(149.8,189.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FECB00").s().p("AARAcIgfgnIAAAnIgKAAIAAg3IAKAAIAdAlIAAglIAKAAIAAA3g");
	this.shape_25.setTransform(143.6,189.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FECB00").s().p("AgEAcIAAg3IAJAAIAAA3g");
	this.shape_26.setTransform(139.2,189.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FECB00").s().p("AASAcIAAgnIgSAaIgRgaIAAAnIgJAAIAAg3IAKAAIAQAaIASgaIAKAAIAAA3g");
	this.shape_27.setTransform(134.5,189.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FECB00").s().p("AATAcIgGgNIgaAAIgFANIgKAAIAYg3IAIAAIAZA3gAAJAGIgJgVIgJAVIASAAg");
	this.shape_28.setTransform(127.9,189.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FECB00").s().p("AgRAVQgIgIAAgNQAAgLAIgJQAIgIAMAAQAMAAAJAIIgGAHQgHgGgJAAQgGAAgGAGQgFAGAAAHQAAAIAGAHQAFAFAHAAQAIAAAGgEIAAgKIgOAAIAAgIIAXAAIAAAWQgKAJgNAAQgMAAgIgIg");
	this.shape_29.setTransform(121.6,189.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FECB00").s().p("AgVAUIAGgHQAJAHAIAAQAEAAADgCQADgCAAgDQAAgDgDgCQgCgCgHgBQgKgDgEgDQgFgDAAgHQAAgIAGgEQAFgFAIAAQALAAAJAHIgFAIQgIgGgHAAQgEAAgCACQgDACAAADQAAADADACIAKAEQAJACAEACQAFAEAAAHQAAAIgGAEQgGAFgIAAQgNAAgKgJg");
	this.shape_30.setTransform(113.5,189.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FECB00").s().p("AgVAUIAGgHQAJAHAIAAQAEAAADgCQADgCAAgDQAAgDgDgCQgCgCgHgBQgKgDgEgDQgFgDAAgHQAAgIAGgEQAFgFAIAAQALAAAJAHIgFAIQgIgGgHAAQgEAAgCACQgDACAAADQAAADADACIAKAEQAJACAEACQAFAEAAAHQAAAIgGAEQgGAFgIAAQgNAAgKgJg");
	this.shape_31.setTransform(108.5,189.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FECB00").s().p("AgUAcIAAg3IAoAAIAAAJIgeAAIAAAPIAbAAIAAAHIgbAAIAAAPIAfAAIAAAJg");
	this.shape_32.setTransform(103.5,189.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FECB00").s().p("AgTAcIAAg3IAKAAIAAAuIAdAAIAAAJg");
	this.shape_33.setTransform(98.4,189.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FECB00").s().p("AgUAcIAAg3IApAAIAAAJIgfAAIAAAPIAbAAIAAAHIgbAAIAAAPIAfAAIAAAJg");
	this.shape_34.setTransform(93.2,189.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FECB00").s().p("AAMAcIgMgUIgNAAIAAAUIgKAAIAAg3IAYAAQAKAAAHAGQAEAFAAAGIAAABQAAAMgNAEIAPAVgAgNAAIAOAAQAEAAAEgCQADgCAAgFIAAAAQAAgEgDgDQgDgCgFAAIgOAAg");
	this.shape_35.setTransform(87.7,189.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FECB00").s().p("AgEAcIAAg3IAJAAIAAA3g");
	this.shape_36.setTransform(83.4,189.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FECB00").s().p("AAOAcIgOgnIgNAnIgIAAIgUg3IALAAIANAoIAOgoIAHAAIAOAoIANgoIALAAIgUA3g");
	this.shape_37.setTransform(77.7,189.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FECB00").s().p("AgVAlIAjhJIAIAAIgjBJg");
	this.shape_38.setTransform(68.7,189.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FECB00").s().p("AgZAcIAAg3IAWAAQAMAAAIAIQAJAIAAALQAAAMgJAIQgIAIgMAAgAgPATIAMAAQAHAAAFgFQAGgGAAgIQAAgIgGgEQgFgGgHAAIgMAAg");
	this.shape_39.setTransform(61.3,189.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FECB00").s().p("AgUAcIAAg3IApAAIAAAJIgfAAIAAAPIAbAAIAAAHIgbAAIAAAPIAfAAIAAAJg");
	this.shape_40.setTransform(55.5,189.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FECB00").s().p("AAMAcIgMgUIgNAAIAAAUIgKAAIAAg3IAYAAQAKAAAHAGQAEAFAAAGIAAABQAAAMgOAEIAQAVgAgNAAIANAAQAFAAAEgCQADgCAAgFIAAAAQAAgEgDgDQgDgCgGAAIgNAAg");
	this.shape_41.setTransform(50,189.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FECB00").s().p("AgEAcIAAg3IAJAAIAAA3g");
	this.shape_42.setTransform(45.7,189.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FECB00").s().p("AAOAcIgOgnIgNAnIgIAAIgUg3IALAAIANAoIAOgoIAHAAIAOAoIANgoIALAAIgUA3g");
	this.shape_43.setTransform(40,189.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FECB00").s().p("AgUAcIAAg3IAoAAIAAAJIgeAAIAAAPIAbAAIAAAHIgbAAIAAAPIAfAAIAAAJg");
	this.shape_44.setTransform(30.6,189.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FECB00").s().p("AgQAVQgJgIAAgNQAAgLAJgJQAIgIALAAQANAAAJAJIgGAHQgIgHgIAAQgHAAgFAGQgFAGAAAHQAAAIAFAGQAFAGAHAAQAJAAAHgHIAHAGQgFAFgFACQgGADgHAAQgLAAgIgIg");
	this.shape_45.setTransform(24.9,189.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FECB00").s().p("AAQAcIgdgnIAAAnIgKAAIAAg3IAJAAIAdAlIAAglIAJAAIAAA3g");
	this.shape_46.setTransform(18.7,189.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FECB00").s().p("AATAcIgGgNIgaAAIgFANIgKAAIAYg3IAIAAIAZA3gAAJAGIgJgVIgJAVIASAAg");
	this.shape_47.setTransform(12.4,189.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FECB00").s().p("AASAcIAAgnIgSAaIgRgaIAAAnIgJAAIAAg3IAKAAIAQAaIASgaIAKAAIAAA3g");
	this.shape_48.setTransform(5.8,189.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FECB00").s().p("AAMAcIgNgUIgMAAIAAAUIgKAAIAAg3IAYAAQALAAAFAGQAFAFAAAGIAAABQAAAMgOAEIAQAVgAgNAAIANAAQAFAAAEgCQADgCAAgFIAAAAQAAgEgDgDQgDgCgGAAIgNAAg");
	this.shape_49.setTransform(-0.3,189.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FECB00").s().p("AgUAVQgJgJABgMQgBgLAJgJQAJgIALAAQANAAAIAIQAIAJAAALQAAAMgIAJQgJAIgMAAQgMAAgIgIgAgNgNQgFAGAAAHQAAAIAFAGQAGAGAHAAQAJAAAEgGQAGgGAAgIQAAgHgGgGQgFgGgIAAQgHAAgGAGg");
	this.shape_50.setTransform(-6.8,189.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FECB00").s().p("AgUAcIAAg3IApAAIAAAJIgfAAIAAAPIAbAAIAAAIIgbAAIAAAXg");
	this.shape_51.setTransform(-12.6,189.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FECB00").s().p("AAMAcIgMgUIgNAAIAAAUIgKAAIAAg3IAYAAQAKAAAHAGQAEAFAAAGIAAABQAAAMgNAEIAPAVgAgNAAIANAAQAFAAAEgCQADgCAAgFIAAAAQAAgEgDgDQgDgCgGAAIgNAAg");
	this.shape_52.setTransform(-18,189.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FECB00").s().p("AgUAcIAAg3IAoAAIAAAJIgeAAIAAAPIAbAAIAAAHIgbAAIAAAPIAfAAIAAAJg");
	this.shape_53.setTransform(-23.7,189.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FECB00").s().p("AgVAcIAAg3IAWAAQAJAAAGAFQAGAFAAAIIAAABQAAAIgHAFQgGAFgJAAIgLAAIAAASgAgLABIALAAQAFAAAEgCQADgDAAgEQAAgFgDgDQgEgCgFAAIgLAAg");
	this.shape_54.setTransform(-28.9,189.7);

	this.instance_6 = new lib.RGB("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(96.4,175.7,0.576,0.574,0,0,0,23.9,12);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgvA/IAAh9IBeAAIAAAYIhCAAIAAAaIA6AAIAAAYIg6AAIAAAbIBDAAIAAAYg");
	this.shape_55.setTransform(129.8,175.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgxAsIARgTQASAQASAAQASgBAAgLIAAgBQAAgFgEgDQgGgEgOgEQgWgFgIgHQgMgIAAgSIAAAAQAAgRANgLQAMgKATAAQAaAAAUAQIgOAVQgSgMgOAAQgIAAgEADQgEADAAAEIAAABQAAAGAFADQAFADAQAEQAUAGAKAHQAKAJAAAPQAAATgNAKQgMALgVAAQgeAAgXgVg");
	this.shape_56.setTransform(117.6,175.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgvA/IAAh9IBeAAIAAAYIhDAAIAAAaIA7AAIAAAYIg7AAIAAAbIBEAAIAAAYg");
	this.shape_57.setTransform(73.8,175.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AAWA/IgagoIgWAAIAAAoIgcAAIAAh9IA5AAQAYAAANANQALALAAARIAAABQgBAcgaAKIAeAtgAgagBIAbAAQAKAAAGgEQAFgGABgIIAAAAQgBgSgVAAIgbAAg");
	this.shape_58.setTransform(61.5,175.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgvAuQgTgSAAgcIAAAAQAAgaATgTQATgTAcAAQAdAAATATQATASAAAbIAAAAQAAAbgTATQgUATgcAAQgcAAgTgTgAgbgbQgKALAAAQIAAAAQAAAQAKAMQALAMAQAAQAQAAALgMQALgLAAgRIAAAAQAAgPgLgMQgLgMgQAAQgQAAgLAMg");
	this.shape_59.setTransform(46.9,175.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgnAvQgSgUAAgbIAAAAQAAgbASgSQATgTAbAAQAeAAAUATIgRAVQgQgOgRgBQgOAAgLAMQgKALAAAQIAAAAQAAAQAKAMQAKAMAPAAQAKAAAJgFQAGgDAIgHIASARQgKAMgMAFQgMAGgSAAQgaAAgTgSg");
	this.shape_60.setTransform(33.1,175.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AAYA/Igmg2IgPAPIAAAnIgcAAIAAh9IAcAAIAAA3IAyg3IAiAAIg0A1IA2BIg");
	this.shape_61.setTransform(15.1,175.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAWA/IgagoIgWAAIAAAoIgbAAIAAh9IA4AAQAYAAANANQALALAAARIAAABQAAAcgbAKIAeAtgAgagBIAbAAQALAAAFgEQAGgGgBgIIAAAAQAAgSgVAAIgbAAg");
	this.shape_62.setTransform(1.8,175.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AAmBAIgMgdIg0AAIgMAdIgcAAIA2h+IAZAAIA2B+gAAQALIgQgoIgQAoIAgAAg");
	this.shape_63.setTransform(-12.3,175.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("Ag5A/IAAh9IAxAAQAdAAASASQATARAAAbIAAAAQAAAbgTASQgSASgdAAgAgdAmIAVAAQAQAAALgLQAKgKAAgRIAAAAQAAgQgKgLQgLgKgQAAIgVAAg");
	this.shape_64.setTransform(-25.2,175.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.instance_6},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.instance_5},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(122));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-17,232.8,238.7);


// stage content:
(lib.wirelessbanner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// tagline/logo
	this.instance = new lib.unplug();
	this.instance.parent = this;
	this.instance.setTransform(317,47,0.23,0.23);

	this.instance_1 = new lib.LOGO_stacked_WHTai();
	this.instance_1.parent = this;
	this.instance_1.setTransform(29,29);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/BJIAAhbIA9AAIAABLQAAAOgQAAIgQgBIgDgMQALACAIAAQADAAAAgGIAAgOIgjAAIAAAhgAgyAdIAjAAIAAgNIgjAAgAgyAGIAjAAIAAgMIgjAAgAAZBFQgOgBAAgMIAAg4IANAAIAAAZQAUgIASgKIAHALQgUAKgZAIIAAASQAAADAEABIAOAAQAKAAACgCQADgBABgFIACgLIANAHQgEASgGADQgBACgGAAIgOABIgRgBgAAZgGQgQgBAAgLIAAg0IANAAIAAAVQAUgGASgHIAHALQgVAHgYAGIAAARQAAAEAFAAIARAAQAIAAABgBQACgCABgFIACgLIAMAHQgDASgFADQgBACgFABIgMABQgMAAgHgCgAgHggQgbAFgkABIgCgMIANAAIAIgOIAIgUIANAEQgDAJgGAKIgGAKQAQAAAPgDIgJgMIAKgGQANAPAHARIgKAGg");
	this.shape.setTransform(921.5,97);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgvBIIAAiPIANAAIAACPgAgTBBIAAgMIApAAIAAgnIgjAAIAAgNIAjAAIAAggIgVAAIgBADQgFAPgGAMIgLgJIAIgOIgJAFQgEgNgGgMIALgFQAFAJAFAMIACgHQAGgPADgMIAKADIgEAQIARAAIAAgbIAOAAIAAAbIAhAAIAAAMIghAAIAAAgIAgAAIAAANIggAAIAAAnIAmAAIAAAMgAhJAAQAIgTACgXIAMACQgCAbgIASg");
	this.shape_1.setTransform(905.5,97.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAeBIIgDgMIAXABQACAAABgGIAAgrIhpAAIAAA9IgNAAIAAhJICCAAIAAA7QAAAOgPAAIgUgBgAgjA/IAAgqIBGAAIAAAiIg6AAIAAAIgAgXAsIAsAAIAAgNIgsAAgAgxgHIAAghIBhAAIAAAhgAgjgTIBHAAIAAgKIhHAAgAhGgwIAAgLIA/AAIAAgNIAOAAIAAANIBBAAIAAALg");
	this.shape_2.setTransform(889.6,97);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AACAuQAygHAAgrQAAgTgPgMQgNgLgRAAQgEAngIAbQgFAQgFAIQgHAKgJAAQgOAAgLgRQgKgPAAgQQAAgbATgTQAVgTAcAAQAcAAASAPQATAQABAYQAAAZgOAQQgOARgfAGQgDgJgEgFgAgmgcQgOAOgBATQAAAPAIALQAHAJAGAAQAFAAAIgYQAJgaADgjQgTADgMAOg");
	this.shape_3.setTransform(873.6,97.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVA8QgLgGAAgMQAAgLAKgGQAIgFAMAAQAMAAAOAEIgCgvIgMAAIgoAAIgBgOIATAAIAiAAIgBgcIAOAAIABAbIAZgCIABAOIgZACIABA2IAAAAQAPAIANAKIgHAMIgXgOQgDALgJAEQgIAFgQAAQgMAAgJgGgAgOAkQgEACAAAEQAAAEAEACQAFAEAJAAQALAAAFgDQAFgDACgGQgPgHgLAAQgHAAgEADgAhBAVIABgtIADgpIAOABQgEAfAAA4IABAqIgOABg");
	this.shape_4.setTransform(858.3,97);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgbAMQAAgOAJgQQAIgOAKgLIhBAFIgBgOICCgIIgBAPQgZAAgLABQgMACgPAWQgLAPAAARQAAARANAIQAPAJAfAAIgDAPQhIgCAAgvgAAcgdIAIgGQAKAKAGANIgIAGQgGgOgKgJgAArglIAIgGQAKAKAHANIgJAGQgGgOgKgJg");
	this.shape_5.setTransform(841.8,97.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgmBAIgDgQQAPADASAAQAvAAAAgXQAAgLgKgGQgIgFgNAAQgNAAgQAIQgOAHgGAIIgLgFQAGgTAGgqIANABQgCAVgFAWQAZgNASAAQARAAAMAHQAPAKAAARQAAAUgTAJQgQAIgaAAIgegBgAgHgtQgUgFgKgBIADgNIAfAGQAVAGAJAEIgFANQgKgEgTgGg");
	this.shape_6.setTransform(825.6,97.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVA/QgLgGAAgLQAAgKAGgGQAHgHAOAAQAMAAAOAEIgDgrIAOgBIADAwQARAGAQAKIgHANQgOgIgNgFQgCALgIAGQgHAEgQAAQgNAAgJgFgAgTAuQAAAIAUAAQAKAAAFgCQAEgDABgHQgPgFgKAAQgPAAAAAJgAhDAoQAOgaAOgqIgYAAIAAgOIAcAAIAGgZIAOADIgFAVIAbgCIAAANIggADQgOAvgQAdgAAPgpIAHgLQAVAJAXARIgIANQgQgPgbgNg");
	this.shape_7.setTransform(809.8,97);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAYA4IgagnIgZAAIAAAnIgUAAIAAhvIAyAAQAUAAALALQAKAKAAAOQAAAagbAHIAfArgAgbAAIAcAAQALAAAFgEQAHgFAAgJIAAgBQAAgIgGgFQgGgFgMAAIgbAAg");
	this.shape_8.setTransform(791.5,97.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgJA4IAAhvIATAAIAABvg");
	this.shape_9.setTransform(782.7,97.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAmA4IgMgbIg0AAIgLAbIgUAAIAxhvIARAAIAxBvgAATAMIgTgsIgTAsIAmAAg");
	this.shape_10.setTransform(773.9,97.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgqAoIAMgPQAQAPASAAQAJAAAFgEQAGgEAAgGQAAgHgFgDQgGgEgOgEQgTgEgIgGQgKgHAAgPQAAgOALgKQALgJAQAAQAWABASAOIgLAOQgPgLgOAAQgIAAgFADQgFAFAAAFIAAABQAAAGAFAEQAGAEAOADQATAEAIAHQAJAHAAAOQAAAPgLAKQgLAJgSAAQgZgBgUgRg");
	this.shape_11.setTransform(762.6,97.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAZA4IgbgnIgZAAIAAAnIgTAAIAAhvIAwAAQAVAAAMALQAJAKAAAOQAAAagaAHIAdArgAgbAAIAcAAQAKAAAHgEQAGgFAAgJIAAgBQAAgIgGgFQgGgFgLAAIgcAAg");
	this.shape_12.setTransform(752.3,97.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgpApQgRgRABgXIAAgBQAAgXAQgRQARgRAYAAQAZAAARARQARARAAAXIAAAAQAAAYgRARQgRARgZAAQgZAAgQgRgAgbgbQgKALAAAQIAAAAQAAAQALAMQALAMAPAAQARAAAKgMQALgLAAgQIAAgBQAAgPgLgMQgLgMgQAAQgPAAgMAMg");
	this.shape_13.setTransform(739.3,97.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgiApQgQgRAAgXIAAgBQAAgXAQgRQAQgRAYAAQAaAAASASIgMAOQgPgOgRAAQgOAAgLALQgLAMAAAQIAAAAQAAAQALAMQAKAMAPAAQARgBAPgOIANANQgJAKgKAEQgLAGgPAAQgYAAgQgRg");
	this.shape_14.setTransform(727.1,97.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhIA+QALgJAHgJQgKgMgGgWIALgDQAFAPAHALIAAgBQAIgQADgZIgOAAIgFAIIgNgEQAPgXAKgYIgbAAIAAgNIAuAAQgJAXgLAVIAWAAQgEAlgJATIgEAHIAFADQAOAKAsAAIAxgBIgFAPIgsAAQgvAAgRgMIgGgEQgHAKgKAJgAgZAoIAAgNIARAAIAAg+IAMAAIAAA+IARAAIAAhPIgfAFIgFgLQAXgDASgDQATgDAOgEIAJALIgiAGIAAAfIAdAAIAAANIgdAAIAAAlIAhAAIAAANg");
	this.shape_15.setTransform(889.1,73.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhJA5IAUgPIAAgoIgTAAIAAgLIAgAAIAAAxQAKALAMACQAKACAkAAQAbAAASgBIgFANIg0AAQgYAAgQgDQgKgEgLgLIgSAVIgKgNgAAUAzIAAgQIggAAIAAgLIAgAAIAAgKIgZAAIAAgKIAZAAIAAgJIgdAAIAAgKIAQAAIgIgKIAIgHQAHAHAFAHIgEADIATAAIADgGIAGgLIAMAFIgFAJIgEADIASAAIAAAKIgfAAIAAAJIAaAAIAAAKIgaAAIAAAKIAiAAIAAALIgiAAIAAAQgAgkAnQAGgQACgMQADgPgBgPIAAgxIBaAAIAAAjIhNAAIAAATQAAAQgDARQgCANgHAPgAgNgsIBBAAIAAgNIhBAAgAhEg8IAIgJQAPAIAMAJIgJALQgNgLgNgIg");
	this.shape_16.setTransform(873.2,73.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag2BJIAAhRIgLANIgHgMQAZgfAKgiIANADQgGAUgKATIAABngAgbBFIAAgMIA+AAIAAAMgAAqA5QgKgNgFgXIgFgaIgdAAIAAAmIAdgGIACALQgYAIgeAGIgEgOIAPgCIAAhfQAYgBATgCQARgBAMgDIAMAMQgNADgTACIAAAAIABAfIAjAAIAAANIgiAAIADASQAFASAGALQAEAJACAAQABAAAAAAQABAAAAAAQABAAAAgBQAAAAABAAQABgEAAgRIANAEQgCAYgGAFQgDAEgHAAQgHAAgGgJgAAVgSIgCgeIgaABIAAAdIAcAAg");
	this.shape_17.setTransform(857,72.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag8APQAAguAFghIANABQgEAjAAAoIABA0IgOABIgBgygAgHA1QgVgGAAgSQAAgNAJgPIANAGQgIANAAAHQAAAIAJAEQAHAEAWAAQALAAAagDIgBAPQgUACgOAAQgXAAgKgEgAgXguQAfgCAuAAIAAAOQgtAAggADg");
	this.shape_18.setTransform(841.5,73.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AACAuQAzgHAAgrQgBgTgPgMQgNgLgRAAQgEAngIAbQgFAQgFAIQgHAKgJAAQgOAAgLgRQgKgPAAgQQAAgbATgTQAVgTAcAAQAcAAASAPQATAQABAYQAAAZgOAQQgOARgfAGQgDgJgEgFgAgmgcQgOAOgBATQABAPAHALQAHAJAGAAQAFAAAIgYQAJgaADgjQgTADgMAOg");
	this.shape_19.setTransform(825,73.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgVA/QgLgGAAgLQAAgKAGgGQAHgHAOAAQAMAAAOAEIgDgrIAOgBIADAwQARAGAQAKIgHANQgOgIgNgFQgCALgIAGQgHAEgQAAQgNAAgJgFgAgTAuQAAAIAUAAQAKAAAFgCQAEgDABgHQgPgFgKAAQgPAAAAAJgAhDAoQAOgaAOgqIgYAAIAAgOIAcAAIAGgZIAOADIgFAVIAbgCIAAANIggADQgOAvgQAdgAAPgpIAHgLQAVAJAXARIgIANQgQgPgbgNg");
	this.shape_20.setTransform(809.2,73);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAHANQgWAdgpAUIgKgNQAjgRAUgVQAWgXALggIhGAAIAAgQIBMAAIAEgCQAMAJAAACQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAIgCACQgLAcgNASQAaAWAZAeIgMAKQgcghgUgRg");
	this.shape_21.setTransform(793,73.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag3A0IADgDIAAhyIAPAAIAABvQAvgPAkgvIAKAMQgpAyg1AQIgDACIgEACQgBAAgJgOg");
	this.shape_22.setTransform(778.2,73.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgggUIghADIgDgPIAhgDIgFgdIAOgCIAHAeIBHgGIADgDQAOAKAAACQgBAEgFACQgGAOgNANQgPAQgMAJIgKgKQAWgRAQgZIg+AGIARBVIgOAEg");
	this.shape_23.setTransform(761,73.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AADBDIAAhNQgYAQgcAOIgJgNQAdgNAcgSQAfgWARgUIANAKQgQARgaATIAABXg");
	this.shape_24.setTransform(744.5,73);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgfAwQAPgCAOgGQANgGAIgGQALgLAEgQQAGgPAAggIhQAAIAAAtIgQAAIAAg9IBxAAQgBArgFAVQgHAZgSAPQgPAMgiAJg");
	this.shape_25.setTransform(729,73.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// MM1000
	this.instance_2 = new lib.MM1000();
	this.instance_2.parent = this;
	this.instance_2.setTransform(839.3,222.6,1,1,0,0,0,103.5,92.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// k63
	this.instance_3 = new lib.k63();
	this.instance_3.parent = this;
	this.instance_3.setTransform(531,229.9,1,1,0,0,0,154,106);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// dark core se
	this.instance_4 = new lib.dark_core_SE();
	this.instance_4.parent = this;
	this.instance_4.setTransform(187.1,234,1,1,0,0,0,47,73);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// strip
	this.instance_5 = new lib.yellow_strip();
	this.instance_5.parent = this;
	this.instance_5.setTransform(256.1,73.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// bg
	this.instance_6 = new lib.Unplug_and_Play();
	this.instance_6.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(480,200,960,813.9);
// library properties:
lib.properties = {
	id: 'EC5016A32D0C44A6A5ADBBE9F8420DBC',
	width: 960,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/wireless banner_atlas_.png", id:"wireless banner_atlas_"}
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
an.compositions['EC5016A32D0C44A6A5ADBBE9F8420DBC'] = {
	getStage: function() { return exportRoot.getStage(); },
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;