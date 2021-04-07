class Ninja { 
    constructor(ninja_name) {
        this.name = ninja_name
        this.health = 100
        this.speed = 3
        this.strength = 3
        this.wisdom = 10
    }
    sayName() {
        console.log("This Ninja's name is: " + this.name)
    }
    showStats() {
        console.log(this.name + "has the following stats: ")
        console.log("Health: " + this.health)
        console.log("Speed: " + this.speed)
        console.log("Strength: " + this.strength)
        console.log("Wisdom: " + this.wisdom)
    }
    drinkSake() {
        console.log("When " + this.name + " drank Sake, they gained +3 health")
        this.health += 3;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

/*
speakWisdom()
speakWisdom()
drinkSake()
*/