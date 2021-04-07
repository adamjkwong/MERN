class Ninja { 
    constructor(ninja_name) {
        this.name = ninja_name
        this.health = 100
        this.speed = 3
        this.strength = 3
        this.wisdom = 10
    }
    sayName() {
        console.log("This Ninja's name is: " + ninja1.name)
    }
    showStats() {
        console.log(ninja1.name + "has the following stats: ")
        console.log("Health: " + ninja1.health)
        console.log("Speed: " + ninja1.speed)
        console.log("Strength: " + ninja1.strength)
        console.log("Wisdom: " + ninja1.wisdom)
    }
    drinkSake() {
        console.log("When " + ninja1.name + " drank Sake, they gained +3 health")
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