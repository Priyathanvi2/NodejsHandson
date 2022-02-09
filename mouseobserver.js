class MousePositionObservable {
    constructor() {
      this.subscriptions = [];
      window.addEventListener('mousemove',this.handleMouseMove);
    }
    handleMouseMove =  (e) => {
       this.subscriptions.forEach(sub => sub(e.clientX, e.clientY));
    }
    subscribe(callback) {
      this.subscriptions.push(callback);    
      
      return () => {
        this.subscriptions = this.subscriptions.filter(cb => cb !== callback);
      }
    }
  }