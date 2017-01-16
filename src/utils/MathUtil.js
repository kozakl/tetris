/**
 * @author kozakluke@gmail.com
 */
class MathUtil
{
    static rndRange(min, max)
    {
        return min + (Math.random() * (max - min));
    }
    
    static rndIntRange(min, max)
    {
        return Math.round(MathUtil.rndRange(min, max));
    }
    
    static toRadians(degrees)
    {
        return degrees * MathUtil.RADIANS;
    }
    
    static toDegrees(radians)
    {
        return radians * MathUtil.DEGREES;
    }
    
    static clamp(value, min, max)
    {
        return Math.max(min, Math.min(value, max));
    }
    
    static hitTest(x1, y1, w1, h1,
                   x2, y2, w2, h2)
    {
        if (x1 + w1 > x2)
            if (x1 < x2 + w2)
                if (y1 + h1 > y2)
                    if (y1 < y2 + h2)
                        return true;
        return false;
    }
    
    static hitPoint(px, py, x, y, w, h)
    {
        return MathUtil.hitTest(px, py, 1, 1,
                                x,  y,  w, h);
    }
    
    static distancePoint(x1, y1,
                         x2, y2)
    {
        const dx = x1 - x2,
              dy = y1 - y2;
        return Math.sqrt(dx*dx + dy*dy) + 0.5 | 0;
    }
    
    static distancePoint2(x1, y1,
                          x2, y2)
    {
        const dx = x1 - x2,
              dy = y1 - y2;
        return dx*dx + dy*dy;
    }
    
    static orientPoint(x1, y1, x2, y2)
	{
		const dx = x2 - x1,
			  dy = y2 - y1;
		return Math.atan2(dy, dx);
	}
    
    static fabs(x)
    {
        return x < 0 ? -x : x;
    }
    
    static abs(x)
    {
        return (x + (x >> 31)) ^ (x >> 31);
    }
}

MathUtil.RADIANS = Math.PI / 180;
MathUtil.DEGREES = 180 / Math.PI;
