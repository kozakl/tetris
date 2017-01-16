/**
 * @author kozakluke@gmail.com
 */
class ShapeFactory
{
	static create()
	{
		const shape = new Shape();
		switch (shape.type)
		{
			case 1 :
				shape.blocks.push(new Block(shape.type,-2, 0));
				shape.blocks.push(new Block(shape.type,-1, 0));
				shape.blocks.push(new Block(shape.type, 0, 0));
				shape.blocks.push(new Block(shape.type, 1, 0));
			break;
			
			case 2 :
				shape.blocks.push(new Block(shape.type,-1, 0));
				shape.blocks.push(new Block(shape.type,-1, 1));
				shape.blocks.push(new Block(shape.type, 0, 1));
				shape.blocks.push(new Block(shape.type, 1, 1));
			break;
			
			case 3 :
				shape.blocks.push(new Block(shape.type,-1, 1));
				shape.blocks.push(new Block(shape.type, 0, 1));
				shape.blocks.push(new Block(shape.type, 1, 0));
				shape.blocks.push(new Block(shape.type, 1, 1));
			break;
			
			case 4 :
				shape.blocks.push(new Block(shape.type,-1, 0));
				shape.blocks.push(new Block(shape.type,-1, 1));
				shape.blocks.push(new Block(shape.type, 0, 0));
				shape.blocks.push(new Block(shape.type, 0, 1));
			break;
			
			case 5 :
				shape.blocks.push(new Block(shape.type,-1, 1));
				shape.blocks.push(new Block(shape.type, 0, 0));
				shape.blocks.push(new Block(shape.type, 0, 1));
				shape.blocks.push(new Block(shape.type, 1, 0));
			break;
			
			case 6 :
				shape.blocks.push(new Block(shape.type,-1, 1));
				shape.blocks.push(new Block(shape.type, 0, 0));
				shape.blocks.push(new Block(shape.type, 0, 1));
				shape.blocks.push(new Block(shape.type, 1, 1));
			break;
			
			case 7 :
				shape.blocks.push(new Block(shape.type,-1, 0));
				shape.blocks.push(new Block(shape.type, 0, 0));
				shape.blocks.push(new Block(shape.type, 0, 1));
				shape.blocks.push(new Block(shape.type, 1, 1));
			break;
		}
		
		return shape.addChildren(shape.blocks);
	}
}
