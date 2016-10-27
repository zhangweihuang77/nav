function Nav(navID, i) {
	this.i = i;
	this.nav = document.getElementById(navID);
	this.focus = this.nav.querySelectorAll("h3")[this.i];
	this.ul = this.nav.querySelectorAll("ul")[this.i];
	this.ary = this.ul.offsetHeight;
	this.count = null;
	this.t_1 = null;
	this.t_2 = null;
	this.judge = null;
	this.speed = 3;
	this.ul.style.height = 0 + "px";
	this.start = function() {
		var self = this;
		this.focus.onmouseover = function() {
			clearTimeout(self.t_2);
			self.judge = true;
			self.overOut();
		}
		this.focus.onmouseout = function() {
			clearTimeout(self.t_1);
			self.judge = false;
			self.overOut();
		}
		this.ul.onmouseover = function() {
			clearTimeout(self.t_2);
			self.judge = true;
			self.overOut();
		}
		this.ul.onmouseout = function() {
			clearTimeout(self.t_1);
			self.judge = false;
			self.overOut();
		}
	};
	this.overOut = function() {
		var self = this;
		if (this.judge == true) {
			(this.count < this.ary) ? this.count += this.speed: clearTimeout(this.t_1);
			this.ul.style.height = this.count + "px";
			this.t_1 = setTimeout(function() {
				self.overOut(self.i);
			}, 1);
		} else if (this.judge == false) {
			(this.count != 0) ? this.count -= this.speed: clearTimeout(this.t_2);
			this.ul.style.height = this.count + "px";
			this.t_2 = setTimeout(function() {
				self.overOut(self.i);
			}, 1);
		}
	}
	this.start();
}