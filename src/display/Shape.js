/**
 * @author kozakluke@gmail.com
 */
class Shape extends PIXI.Container
{
	constructor()
	{
		super();
		//public
		this.type   = MathUtil.rndIntRange(1, 7);
		this.blocks = [];
	}
	
	addChildren(children)
	{
		const n = children.length;
		for (var i = 0; i < n; ++i)
			this.addChild(children[i]);
		
		return this;
	}
}
