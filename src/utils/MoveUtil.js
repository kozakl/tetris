/**
 * @author kozakluke@gmail.com
 */
class MoveUtil
{
	static moveLeft(grid, shape)
	{
		const block1 = shape.blocks[0],
			  block2 = shape.blocks[1],
			  block3 = shape.blocks[2],
			  block4 = shape.blocks[3];
		if (block1.x > 0 && block2.x > 0 &&
			block3.x > 0 && block4.x > 0)
		{
			if (!grid.isBlock(block1.x - 1, block1.y) && !grid.isBlock(block2.x - 1, block2.y) && 
				!grid.isBlock(block3.x - 1, block3.y) && !grid.isBlock(block4.x - 1, block4.y)) {
				block1.x -= 1;
				block2.x -= 1;
				block3.x -= 1;
				block4.x -= 1;
				return true;
			}
			else
				return false;
		}
		else
			return false;
	}
	
	static moveRight(grid, shape) 
	{
		const block1 = shape.blocks[0],
			  block2 = shape.blocks[1],
			  block3 = shape.blocks[2],
			  block4 = shape.blocks[3];
		if (block1.x < grid.columns - 1 && block2.x < grid.columns - 1 && 
			block3.x < grid.columns - 1 && block4.x < grid.columns - 1)
		{
			if (!grid.isBlock(block1.x + 1, block1.y) && !grid.isBlock(block2.x + 1, block2.y) && 
				!grid.isBlock(block3.x + 1, block3.y) && !grid.isBlock(block4.x + 1, block4.y)) {
				block1.x += 1;
				block2.x += 1;
				block3.x += 1;
				block4.x += 1;
				return true;
			}
			else
				return false;
		}
		else
			return false;
	}
	
	static moveDown(grid, shape)
	{
		const block1 = shape.blocks[0],
			  block2 = shape.blocks[1],
			  block3 = shape.blocks[2],
			  block4 = shape.blocks[3];
		if (block1.y < grid.lines - 1 && block2.y < grid.lines - 1 &&
			block3.y < grid.lines - 1 && block4.y < grid.lines - 1)
		{
			if (!grid.isBlock(block1.x, block1.y + 1) && !grid.isBlock(block2.x, block2.y + 1) &&
				!grid.isBlock(block3.x, block3.y + 1) && !grid.isBlock(block4.x, block4.y + 1)) {
				block1.y += 1;
				block2.y += 1;
				block3.y += 1;
				block4.y += 1;
				return true;
			}
			else
				return false;
		}
		else
			return false;
	}
	
	static rotate(grid, shape, angle) 
	{
		if (shape.type != 4)
		{
			const block1 = shape.blocks[0],
				  block2 = shape.blocks[1],
				  block3 = shape.blocks[2],
				  block4 = shape.blocks[3];
			const d1 = MathUtil.distancePoint(block1.x, block1.y, block3.x, block3.y),
				  d2 = MathUtil.distancePoint(block2.x, block2.y, block3.x, block3.y),
				  d3 = MathUtil.distancePoint(block4.x, block4.y, block3.x, block3.y);
			const o1 = MathUtil.orientPoint(block1.x, block1.y, block3.x, block3.y) - angle * MathUtil.RADIANS,
				  o2 = MathUtil.orientPoint(block2.x, block2.y, block3.x, block3.y) - angle * MathUtil.RADIANS,
				  o3 = MathUtil.orientPoint(block4.x, block4.y, block3.x, block3.y) - angle * MathUtil.RADIANS; 
			const x1 = block3.x + Math.round(d1 * Math.cos(o1)),
				  y1 = block3.y + Math.round(d1 * Math.sin(o1)),
				  x2 = block3.x + Math.round(d2 * Math.cos(o2)),
				  y2 = block3.y + Math.round(d2 * Math.sin(o2)),
				  x3 = block3.x + Math.round(d3 * Math.cos(o3)),
				  y3 = block3.y + Math.round(d3 * Math.sin(o3));
			if (!grid.isBlock(x1, y1) && !grid.isBlock(x2, y2) && !grid.isBlock(x3, y3))
			{
				block1.x = x1;
				block1.y = y1;
				block2.x = x2;
				block2.y = y2;
				block4.x = x3;
				block4.y = y3;
				return true;
			}
			else
				return false;
		}
		else
			return false;
	}
}
