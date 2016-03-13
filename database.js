//function buld_sel(list){
//	//make the select
//	var sel = document.createElement("select");
//	//make a loop
//	var index = 0;
//	var item = null;
//	do {
//		//make a new option
//		var ball = document.createElement("option");
//		//set the item
//		item = list[index];
//		//make the value the item
//		ball.value = item;
//		//make the text the name
//		ball.text = item.name;
//		//add the new option to the selection
//		sel.add(ball, null);
//		//increment index
//		index = index + 1;
//	} while (index < list.length);
//}
// put in lists to store all data
var driverlist = [];
var routelist = [];
// make the classes
class provider {
	//providers have string names and urls.
	constructor(name, url){
		this.name = name;
		this.url = url;
	}
}

class driver {
	//drivers are the main important class where most storage is done
	constructor(name, number, provider){
		this.name = name;
		this.number = number;
		this.provider = provider.name;
		this.email = number + provider.url;
	}
}
class route {
	//routes have a driver and that's it, but they mirror their driver's stats
	constructor(name, driver) {
		this.name = name;
		this.driver = driver.name;
		this.number = driver.number;
		this.provider = driver.provider;
		this.email = driver.email;
	}
}
//will put in the full database later, but let's just make a small test one for now
//put in the providers. this must be done in order, or it'll crash due to dependancies
const att = new provider("att", "@att.url");
const verizon = new provider("verizon", "@verizon.url");
//put in drivers. note that numbers are stored as strings
const JohnDoe = new driver("John Doe", "jonniesnumber", att);
//add drivers to the list as we make them
driverlist.push(JohnDoe);
const JaneDoe = new driver("Jane Doe", "janesnumber", verizon);
driverlist.push(JaneDoe);
//put in routes
const routeJohn = new route("route John", John);
//again, add routes as we make them
routelist.push(routeJohn);
const routeJane = new route("route Jane", JaneDoe);
routelist.push(routeJane)