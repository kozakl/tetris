/**
 * @author kozakluke@gmail.com
 */
class Block extends PIXI.Sprite
{
	constructor(type, x, y)
	{
		super(TextureUtil.fromFrame('blocks/' + type));
		//args
		this.type = type;
		
		this.x = x;
		this.y = y;
	}
	
	set x(value) {
		this._x = value;
		this.position.x = this._x * Block.SIZE;
	}
	get x() { 
		return this._x;
	}
	
	set y(value) {
		this._y = value;
		this.position.y = this._y * Block.SIZE;
	}
	get y() {
		return this._y;
	}
}

Block.SIZE = 66;
