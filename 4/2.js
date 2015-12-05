var car = {
	speedometer: 0
};
Object.defineProperty(car, "setSpeedometer", {
  set: function(value) {
	if((value >= 0)&&(value < 300000)) /* nothing move faster than light=) */
		this.speedometer = value;
}});
Object.defineProperty(car, "getSpeedometer", {get: function() {
	return this.speedometer;
}});
Object.defineProperty(car, "clearSpeedometer", {
	value: function() {
		this.speedometer = 0;
}});
//starting with empty object
console.log(car);
//changing speedometer to 60 km/h
car.setSpeedometer = 60;
//checking that object changed
console.log(car);
//checking proper work of getSpeedometer
console.log(car.getSpeedometer);
//clearing speedometer
car.clearSpeedometer();
//checking that speedometer was cleared
console.log(car.getSpeedometer);