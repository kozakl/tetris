/**
 * @author kozakluke@gmail.com
 */
class Content extends PIXI.Container
{
	constructor()
    {
		super();
		//protected private
		this.grid	  = new Grid(12, 11);
		this.velocity = 25;
		this.count    = 0;
		this.scene    = null;
		this.info	  = null;
		this.shape	  = null;
		this.playing  = null;
		
		const scene = this.scene = new Scene();
		this.addChild(scene);
		scene.position.x = Block.SIZE;
		
		const info = this.info = new PIXI.Text('', {font: '120px Arial', fill: 'gray', align: 'center'});
		this.addChild(info);
		info.text = 'CLICK TO\nSTART';
		info.anchor.x = 0.5;
		info.position.x = this.grid.columns * Block.SIZE * 0.5 +
											  Block.SIZE;
		info.position.y = 220;
		
		this.createWall();
	}
	
	start()
	{
		this.playing = true;
		
		this.removeChild(this.info);
		this.createShape();
	}
	
	/**
	 * @private
	 */
	createShape()
	{
		const shape = this.shape = ShapeFactory.create();
		this.addChild(shape);
		shape.blocks[0].x += 6;
		shape.blocks[1].x += 6;
		shape.blocks[2].x += 6;
		shape.blocks[3].x += 6;
		shape.blocks[0].y +=-2;
		shape.blocks[1].y +=-2;
		shape.blocks[2].y +=-2;
		shape.blocks[3].y +=-2;
		shape.position.x = Block.SIZE;
	}
	
	/**
	 * @private
	 */
	createWall() 
	{
		const n = this.grid.lines;
		for (var i = 0; i < n; ++i)
		{
			const blockLeft = new PIXI.Sprite(TextureUtil.fromFrame('blocks/0'));
			this.addChild(blockLeft);
			blockLeft.position.x = 0;
			blockLeft.position.y = i * Block.SIZE;
			
			const blockRight = new PIXI.Sprite(TextureUtil.fromFrame('blocks/0'));
			this.addChild(blockRight);
			blockRight.position.x = (this.grid.columns + 1) * Block.SIZE;
			blockRight.position.y = i * Block.SIZE;
		}
	}
	
	/**
	 * @private
	 */
	land() 
	{
		this.shape.removeChildren(0, this.shape.children.length);
		this.scene.addChildren(this.shape.blocks);
		
		if (this.shape.blocks[0].y > -1 && this.shape.blocks[1].y > -1 && 
			this.shape.blocks[2].y > -1 && this.shape.blocks[3].y > -1) {
			this.grid.setBlocks(this.shape.blocks);
			this.clearFullLines();
		}
		else
			return false;
		return true
	}
	
	/**
	 * @private
	 */
	clearFullLines() 
	{
		if (this.grid.clearFullLines())
		{
			this.scene.removeChildren(0, this.scene.children.length);
			
			for (var i = 0; i < this.grid.lines; i++) {
				for (var j = 0; j < this.grid.columns; j++) {
					if (this.grid.isBlock(j, i))
						this.scene.addChild(this.grid.getBlock(j, i));
				}
			}
		}
	}
	
	/**
	 * @private
	 */
	updateTransform()
	{
		this.count++;
		if (this.playing)
		{
			if (this.count % this.velocity == 0)
			{
				if (!MoveUtil.moveDown(this.grid, this.shape))
				{
					this.playing = this.land();
					if (!this.playing)
					{
						this.scene.alpha = 0.35;
						
						const info = this.info;
						this.addChild(info);
						info.text = 'GAME\nOVER';
					}
					else
						this.createShape();
				}
			}
			
			if (Input.isDown(37))
				MoveUtil.moveLeft(this.grid, this.shape);
			else if (Input.isDown(39))
				MoveUtil.moveRight(this.grid, this.shape);
			else if (Input.isDown(38))
				MoveUtil.rotate(this.grid, this.shape, 90);
			if (Input.isPress(40))
				this.velocity = 5;
			else
				this.velocity = 25;
		}
		
		this.containerUpdateTransform();
	}
}
