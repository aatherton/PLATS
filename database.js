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
const google = new provider("test provider", "@gmail.com");
//put in drivers. note that numbers are stored as strings
const JohnDoe = new driver("John Doe", "jonniesnumber", att);
//add drivers to the list as we make them
driverlist.push(JohnDoe);
const JaneDoe = new driver("Jane Doe", "janesnumber", verizon);
driverlist.push(JaneDoe);
const testdriver = new driver("test E-mail", "paladinneph", google);
driverlist.push(testdriver);
//put in routes
const routeJohn = new route("route John", JohnDoe);
//again, add routes as we make them
routelist.push(routeJohn);
const routeJane = new route("route Jane", JaneDoe);
routelist.push(routeJane);