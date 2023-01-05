function Circle() {
	createjs.Shape.call(this);
	//创建三个不同的选项（类型）
	this.setCircleType = function(type){
		this._circleType = type;
		switch(type){
			case Circle.TYPE_UNSELECTED:
				this.setColor("#cccccc");
				break;
			case Circle.TYPE_SELECTED:
				this.setColor("#ff6600");
				break;
			case Circle.TYPE_CAT:
				this.setColor("#0000ff");
				break;
		}
	}
	
	this.setColor = function(colorString){
		this.graphics.beginFill(colorString);
		this.graphics.drawCircle(0,0,25);
		this.graphics.endFill();
	};
	
	//设置回调函数
	this.getCircleType = function(){
		return this._circleType;
	};
	//设置默认值
	this.setCircleType(1);
}
//赋值属性
Circle.prototype = new createjs.Shape();
//定义成公共类
//三种状态
Circle.TYPE_UNSELECTED = 1;//未选中状态
Circle.TYPE_SELECTED = 2;//选中状态
Circle.TYPE_CAT = 3;//猫状态
 