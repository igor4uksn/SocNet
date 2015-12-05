/**
 * Created by Igor on 25.11.2015.
 */
var car = {
    speedometer: 0
};
Object.defineProperty(car, "setSpeed", {
    value: function(value) {
        if((value >= 0)&&(value < 300000)) /* nothing move faster than light=) */
            this.speedometer = value;
        console.log("speed changed to ", value);
        return this;
    }});
Object.defineProperty(car, "getSpeed", {
    value: function() {
        console.log("speed === ", this.speedometer);
    return this;
}});
Object.defineProperty(car, "clearSpeed", {
    value: function() {
        this.speedometer = 0;
        console.log("speed was cleared");
        return this;
    }});
car.setSpeed(200).setSpeed(300).clearSpeed().getSpeed().setSpeed(60);