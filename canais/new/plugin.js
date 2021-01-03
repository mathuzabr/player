var PlayerCast = Clappr.UIContainerPlugin.extend({
	name: 'player_cast',
	bindEvents: function() {
	  this.listenTo(this.container, Clappr.Events.CONTAINER_CLICK, this.clicks);
	  
	},
	clicks: function() {
	  	
	      if (this.container.isPlaying()) {
	        this.container.stop()
	      } else {
	        this.container.play()
	      }
	    
	}
});