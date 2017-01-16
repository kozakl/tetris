/**
 * @author kozakluke@gmail.com
 */
class Main
{
    constructor()
    {
        //protected private
        this.stage         = null;
        this.renderer      = null;
        this.content       = null;
        this.updateHandler = null;
        
        window.onload = this.onLoad.bind(this);
    }
    
    /**
     * @private
     */
    onLoad()
    {
        PIXI.utils._saidHello = true;
        const stage = this.stage = new PIXI.Container();
        const renderer = this.renderer = PIXI.autoDetectRenderer(924, 726);
        document.body.appendChild(renderer.view);
        renderer.backgroundColor = 0x00000;
        
        const loader = new PIXI.loaders.Loader();
        loader.add('assets/graphics/atlas.json');
        loader.load(this.onLoadAssets.bind(this));
        
        document.addEventListener('visibilitychange', this.onVisibility.bind(this));
        
        (this.updateHandler = function update()
        {
            Main.animationId = requestAnimationFrame(update);
            
            renderer.render(stage);
            Input.clear();
        })(performance.now());
    }
    
    /**
     * @private
     */
    onLoadAssets()
    {
        const content = this.content = new Content();
        this.stage.addChild(content);
        
        this.renderer.view.addEventListener('click', this.onClickStart =
                                                     this.onClickStart.bind(this));
        Input.init();
    }
    
    /**
     * @private
     */
    onClickStart()
    {
        this.renderer.view.removeEventListener('click', this.onClickStart);
        
        this.content.start();
    }
    
    /**
     * @private
     */
    onVisibility()
    {
        if (document['visibilityState'] == 'hidden')
            cancelAnimationFrame(Main.animationId);
        else if (document['visibilityState'] == 'visible')
            this.updateHandler(Main.last = performance.now());
    }
}

Main.instance    = new Main();
Main.animationId = null;
