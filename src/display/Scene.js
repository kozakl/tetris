/**
 * @author kozakluke@gmail.com
 */
class Scene extends PIXI.Container
{
	constructor()
	{
		super();
	}
	
	addChildren(children)
	{
		const n = children.length;
		for (var i = 0; i < n; ++i)
			this.addChild(children[i]);
		
		return this;
	}
}
