/*You are a game developer tasked with setting up some basic classes for a new game you are working on.  Create a class called 'Monster'.  
  In the constructor, you'll need to do some basic setup for Monster whenever they are created. 

  Initialize the Monster's health to 100.
  The constructor will be called with an 'options' object that has a 'name' property.  Assign the 'name' to the Monster

  class Monster {
  
}
*/

class Monster {
  constructor(options){
      this.health= 100;
      this.name = options.name;
  }
}

/*
  Now that you have a monster created, create a subclass of the Monster called Snake.  

  The Snake should have a 'bite' method.  The only argument to this method is another instance of a Snake.
  The instance of Snake that is passed in should have their health deducated by 10

    class Monster {
      constructor(options) {
        this.health = 100;
        this.name = options.name;
      }
    }

    class Snake {

    }
*/class Monster {
    constructor(options) {
      this.health = 100;
      this.name = options.name;
    }
  }

  class Snake extends Monster {
      contructor(options){
       super({name:'Snake'})
      this.health =10;
      }
      bite(options){
      
      }
  }