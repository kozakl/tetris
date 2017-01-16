/**
 * @author kozakluke@gmail.com
 */
class Input
{
    static init()
    {
        window.addEventListener('keydown', this.onDown);
        window.addEventListener('keyup', this.onUp);
    }
    
    /**
     * @private
     */
    static onDown(event)
    {
        if (!Input.press[event.keyCode]) {
            Input.press[event.keyCode] = true;
            Input.down[event.keyCode]  = true;
        }
    }
    
    /**
     * @private
     */
    static onUp(event)
    {
        Input.up[event.keyCode]    = true;
        Input.press[event.keyCode] = false;
    }
    
    static isDown(key)
    {
        return Input.down[key];
    }
    
    static isPress(key)
    {
        return Input.press[key];
    }
    
    static isUp(key)
    {
        return Input.up[key];
    }
    
    static clear()
    {
        for (var i = 0; i < 50; ++i) {
            Input.down[i] = false;
            Input.up[i]   = false;
        }
    }
    
    static destroy()
    {
        window.removeEventListener('keydown', this.onDown);
        window.removeEventListener('keyup', this.onUp);
    }
}

Input.STATE_DOWN  = 0x2;
Input.STATE_PRESS = 0x4;
Input.STATE_UP    = 0x8;
Input.down  = [];
Input.press = [];
Input.up    = [];
