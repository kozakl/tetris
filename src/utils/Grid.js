/**
 * @author kozakluke@gmail.com
 */
class Grid
{
	constructor(columns, lines)
	{
		//args
		this.lines 	 = lines;
		this.columns = columns;
		//protected private
		this.fields  = null;
		
		this.create();
	}
	
	/**
     * @private
     */
	create() 
	{
		this.fields = new Array(this.lines);
		for (var i = 0; i < this.lines; i++) 
			this.fields[i] = new Array(this.columns);
	}
	
	setBlocks(blocks)
	{
		for (var i = 0; i < 4; ++i) {
			const block = blocks[i];
			if (block.x >= 0 && block.x < this.columns &&
				block.y >= 0 && block.y < this.lines)
				this.fields[block.y][block.x] = block;
		}
	}
	
	clearFullLines()
	{
		var lines  = 0,
			isFull = true;
		for (var i = 0; i < this.lines; i++) 
		{
			for (var j = 0; j < this.columns; j++) 
			{
				if (!this.fields[i][j]) {
					isFull = false;
					break;
				}
			}
			if (isFull) {
				this.fields.splice(i, 1);
				this.fields.unshift(new Array(this.columns));
				lines++;
			}
			isFull = true;
		}
		
		for (i = 0; i < this.lines; i++)
		{
			for (j = 0; j < this.columns; j++)
			{
				if (this.fields[i][j] != null) {
					this.fields[i][j].x = j;
					this.fields[i][j].y = i;
				}
			}
		}
		
		return lines > 0;
	}
	
	isBlock(x, y) 
	{
		if (y < 0) 
			return false;
		else if (x >= 0 && x < this.columns &&
				 x >= 0 && y < this.lines)
			return this.fields[y][x];
		else
			return true;
	}
	
	getBlock(x, y)
	{
		return this.fields[y][x];
	}
}
