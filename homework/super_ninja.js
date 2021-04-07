class Ninja { 
    constructor(ninja_name) {
        this.name = ninja_name
        this.health = 100
        this.speed = 3
        this.strength = 3
        this.wisdom = 0
    }
    sayName() {
        console.log("This Ninja's name is: " + this.name)
    }
    showStats() {
        console.log(this.name + " has the following stats: ")
        console.log("Health: " + this.health + ", Speed: " + this.speed + ", Strength: " + this.strength)
    }
    drinkSake() {
        console.log("When " + this.name + " drank Sake, they gained +3 health")
        this.health += 3;
    }
}

class Sensei extends Ninja{
    constructor(ninja_name) {
        super(ninja_name);
        //custom behavior
        this.health = 200
        this.speed = 10
        this.strength = 10
        this.wisdom = 10
    }
    showStats() {
        super.showStats();
        console.log("Sensei also has Wisdom: " + this.wisdom)
    }
    speakWisdom() {
        const power_up = super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months. This is a statement of wisdom from Sensei: " + this.name)
    }}


const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"

/*
speakWisdom()
speakWisdom()
drinkSake()
*/