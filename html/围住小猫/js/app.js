var stage = new createjs.Stage("gameView");//创建一个舞台对象，通过获取ID将画布  布置在舞台上
 
//设置帧,30帧
createjs.Ticker.setFPS(30);
//设置监听器
createjs.Ticker.addEventListener("tick",stage);
 
//设置容器
var gameView = new createjs.Container();
//调整容器
gameView.x = 30;
gameView.y = 30;
 
stage.addChild(gameView);
 
 
//绘制，用数组承载每一个点、
var circleArr = [[],[],[],[],[],[],[],[],[]];
//当前猫对象
var currentCat ;//= new Circle();
//定义七种状态
var MOVE_NONE=-1,MOVE_LEFT=0,MOVE_UP_LEFT=1,MOVE_UP_RIGHT=2,MOVE_RIGHT=3,MOVE_DOWN_RIGHT=4,MOVE_DOWN_LEFT=5;
 
function getMoveDir(cat){
	
	var distaanceMap=[];//记录还可以移动的距离
	//left判定
	var can = true;//作为判定条件
	for (var x = cat.indexX;x>=0;x--) {
		if(circleArr[x][cat.indexY].getCircleType()==Circle.TYPE_SELECTED){
			can=false;
			distaanceMap[MOVE_LEFT]=cat.indexX-x;
			break;
		}
	}
	if(can){
		return MOVE_LEFT;
	}
	//right判定
	can = true;//作为判定条件
	for (var x = cat.indexX;x<9;x++) {
		if(circleArr[x][cat.indexY].getCircleType()==Circle.TYPE_SELECTED){
			can=false;
			distaanceMap[MOVE_RIGHT]=x-cat.indexX;
			break;
		}
	}
	if(can){
		return MOVE_RIGHT;
	}
	
	//left top
	can=true;
//	for (var y = cat.indexY;y>0;y--) {
//		if(circleArr[cat.indexX-1][y].getCircleType()==Circle.TYPE_SELECTED){
//			can=false;
//			distaanceMap[MOVE_UP_LEFT]=cat.indexY-y;
//			break;
//		}
//	}
	var x=cat.indexX,y=cat.indexY;
	while(true){
		if(circleArr[x][y].getCircleType()==Circle.TYPE_SELECTED){
			can = false;
			distaanceMap[MOVE_UP_LEFT] = cat.indexY - y;
			break;
		}
		if(y%2==0){
			x--;
		}
		y--;
		if(y<0||x<0){
			break;
		}
	}
	if(can){
		return MOVE_UP_LEFT;
	}
	
	//right top
	can=true;
	var x=cat.indexX,y=cat.indexY;
	while(true){
		if(circleArr[x][y].getCircleType()==Circle.TYPE_SELECTED){
			can = false;
			distaanceMap[MOVE_UP_RIGHT] = cat.indexY - y;
			break;
		}
		if(y%2==1){//==0
			x++;
		}
		y--;
		if(y<0||x>8){
			break;
		}
	}
	if(can){
		return MOVE_UP_RIGHT;
	}
	
	//left bottom
	can=true;
	var x=cat.indexX,y=cat.indexY;
	while(true){
		if(circleArr[x][y].getCircleType()==Circle.TYPE_SELECTED){
			can = false;
			distaanceMap[MOVE_DOWN_LEFT] = y - cat.indexY;
			break;
		}
		if(y%2==0){
			x--;
		}
		y++;
		if(y>8||x<0){
			break;
		}
	}
	if(can){
		return MOVE_DOWN_LEFT;
	}
	//right bottom
	can=true;
	var x=cat.indexX,y=cat.indexY;
	while(true){
		if(circleArr[x][y].getCircleType()==Circle.TYPE_SELECTED){
			can = false;
			distaanceMap[MOVE_DOWN_RIGHT] = y - cat.indexY;
			break;
		}
		if(y%2==1){
			x++;
		}
		y++;
		if(y>8||x>8){
			break;
		}
	}
	if(can){
		return MOVE_DOWN_RIGHT;
	}
	
	var maxDir = -1,maxValue = -1;
	for(var dir = 0;dir<distaanceMap.length;dir++){
		if(distaanceMap[dir]>maxValue){
			maxValue = distaanceMap[dir];
			maxDir = dir;
		}
	}
	if(maxValue>1){
		return maxDir;
	}else{
		return MOVE_NONE;
	}
}
 
 
function circleClicked(event){
	if(event.target.getCircleType() != Circle.TYPE_CAT){
		event.target.setCircleType(Circle.TYPE_SELECTED);
	}else{
		return;//程序不在运行，等待下一次点击
	}
	//边界判定c
	if(currentCat.indexX==0 || currentCat.indexY == 8 || currentCat.indexX == 0 || currentCat.indexY == 8){
		alert("游戏结束");
		return;//程序不在运行，等待下一次点击
	}
	
	var dir = getMoveDir(currentCat);
	switch(dir){
		case MOVE_LEFT:
			currentCat.setCircleType(Circle.TYPE_UNSELECTED);
			currentCat = circleArr[currentCat.indexX-1][currentCat.indexY];
			currentCat.setCircleType(Circle.TYPE_CAT);
			break;
		case MOVE_RIGHT:
			currentCat.setCircleType(Circle.TYPE_UNSELECTED);
			currentCat = circleArr[currentCat.indexX+1][currentCat.indexY];
			currentCat.setCircleType(Circle.TYPE_CAT);
			break;
		case MOVE_UP_LEFT:
			currentCat.setCircleType(Circle.TYPE_UNSELECTED);
			currentCat = circleArr[currentCat.indexY%2?currentCat.indexX:currentCat.indexX-1][currentCat.indexY-1];
			currentCat.setCircleType(Circle.TYPE_CAT);
			break;
		case MOVE_UP_RIGHT:
			currentCat.setCircleType(Circle.TYPE_UNSELECTED);
			currentCat = circleArr[currentCat.indexY%2?currentCat.indexX+1:currentCat.indexX][currentCat.indexY-1];
			currentCat.setCircleType(Circle.TYPE_CAT);
			break;
		case MOVE_DOWN_LEFT:
			currentCat.setCircleType(Circle.TYPE_UNSELECTED);
			currentCat = circleArr[currentCat.indexY%2?currentCat.indexX:currentCat.indexX-1][currentCat.indexY+1];
			currentCat.setCircleType(Circle.TYPE_CAT);
			break;
		case MOVE_DOWN_RIGHT:
			currentCat.setCircleType(Circle.TYPE_UNSELECTED);
			currentCat = circleArr[currentCat.indexY%2?currentCat.indexX+1:currentCat.indexX][currentCat.indexY+1];
			currentCat.setCircleType(Circle.TYPE_CAT);
			break;
		default:
			alert("游戏结束！");
	}
	//左移动
//	var leftCircle = circleArr[currentCat.indexX - 1][currentCat.indexY];
//	var rightCircle = circleArr[currentCat.indexX + 1][currentCat.indexY];
//	var lefttopCircle = circleArr[currentCat.indexX-1][currentCat.indexY - 1];
//	var righttopCircle = circleArr[currentCat.indexX ][currentCat.indexY - 1];
//	var leftbottomCircle = circleArr[currentCat.indexX-1][currentCat.indexY + 1];
//	var rightbottomCircle = circleArr[currentCat.indexX ][currentCat.indexY + 1];
//	if(leftCircle.getCircleType() == 1){
//		leftCircle.setCircleType(3);
//		currentCat.setCircleType(1);
//		currentCat = leftCircle;
//	}else if(rightCircle.getCircleType()==1){
//		rightCircle.setCircleType(3);
//		currentCat.setCircleType(1);
//		currentCat = rightCircle;
//	}else if(lefttopCircle.getCircleType()==1){
//		lefttopCircle.setCircleType(3);
//		currentCat.setCircleType(1);
//		currentCat = lefttopCircle;
//	}else if(righttopCircle.getCircleType()==1){
//		righttopCircle.setCircleType(3);
//		currentCat.setCircleType(1);
//		currentCat = righttopCircle;
//	}else if(leftbottomCircle.getCircleType()==1){
//		leftbottomCircle.setCircleType(3);
//		currentCat.setCircleType(1);
//		currentCat = leftbottomCircle;
//	}else if(rightbottomCircle.getCircleType()==1){
//		rightbottomCircle.setCircleType(3);
//		currentCat.setCircleType(1);
//		currentCat = rightbottomCircle;
//	}else{
//		alert("游戏结束！");
//	}
 
	
	
	
}
function addCircles(){
	for (var indexY=0;indexY<9;indexY++) {
		for (var indexX=0;indexX<9;indexX++) {
			var c = new Circle();
			gameView.addChild(c);
			circleArr[indexX][indexY] = c;
			c.indexX = indexX;
			c.indexY = indexY;
			
			c.x = indexY%2?indexX*55+25:indexX*55;//根据Y的单双数，使横向X错位
			c.y = indexY*55;
			
			
			//绘制猫
			if(indexX==4&&indexY==4){
				c.setCircleType(3);
				currentCat = c; 
			}else if(Math.random()<0.1){
				c.setCircleType(Circle.TYPE_SELECTED);
			}
			
			//添加监听器
			c.addEventListener("click",circleClicked);
		}
	}
}
addCircles();