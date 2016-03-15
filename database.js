var driverlist = new Array();
var routelist = new Array();
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
document.writeln("routejohn added")
document.writeln(routeJohn.name);
document.writeln(routeJohn.email);
//again, add routes as we make them
routelist.push(routeJohn);
document.writeln("johnpushed")
document.writeln(routelist)
const routeJane = new route("route Jane", JaneDoe);
document.writeln("jane added")
document.writeln(routeJane.name);
document.writeln(routeJane.email);
routelist.push(routeJane);
document.writeln("jane pushed");
document.writeln(routelist);