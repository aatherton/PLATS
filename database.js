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
const ATT = new provider("AT&T", "@txt.att.net");
const VERIZON = new provider("Verizon", "@vtext.com");
const SPRINT = new provider("Sprint", "@messaging.sprintpcs.com");
const TMOBILE = new provider("T-Mobile", "@tmomail.net");
const BOOST = new provider("Boost Mobile", "@sms.myboostmobile.com");
//put in drivers. note that numbers are stored as strings
const driver0 = new driver("KATHY PATE", "8165604353", VERIZON);
//add drivers to driverlist as we go
driverlist.push(driver0);

const driver1 = new driver("RHONDA HESS", "8168725773", ATT);

driverlist.push(driver1);

const driver2 = new driver("KATHY PATTE", "8168687386", VERIZON);

driverlist.push(driver2);

const driver3 = new driver("CYNTHIA STEVENS", "8169858605", ATT);

driverlist.push(driver3);

const driver4 = new driver("SEAN WINTHROP", "8169858683", ATT);

driverlist.push(driver4);

const driver5 = new driver("LORA SPENCER", "8169858918", ATT);

driverlist.push(driver5);

const driver6 = new driver("RAYMOND ATTAH", "8162566036", BOOST);

driverlist.push(driver6);

const driver7 = new driver("STEVE KINCAID", "8166945649", ATT);

driverlist.push(driver7);

const driver8 = new driver("MIKE MAY", "8169858957", ATT);

driverlist.push(driver8);

const driver9 = new driver("SHANNON HIXSON", "8168302246", ATT);

driverlist.push(driver9);

const driver10 = new driver("STEVE KINCAID", "8166945649", ATT);

driverlist.push(driver10);

const driver11 = new driver("POW JANITORIAL SERVICES", "9132076625", SPRINT);

driverlist.push(driver11);

const driver12 = new driver("MARNETTA DUNFEE", "8169858928", ATT);

driverlist.push(driver12);

const driver13 = new driver("POW JANITORIAL SERVICES", "8169858931", ATT);

driverlist.push(driver13);

const driver14 = new driver("DEBRA REDFERN", "8169858629", ATT);

driverlist.push(driver14);

const driver15 = new driver("RICHARD BROWN", "8169858953", ATT);

driverlist.push(driver15);

const driver16 = new driver("KATHY SMITH", "9139400834", ATT);

driverlist.push(driver16);

const driver17 = new driver("DAVID SOLOMON", "9136207792", ATT);

driverlist.push(driver17);

const driver18 = new driver("SHIRLEY BROOKS", "8169858669", ATT);

driverlist.push(driver18);

const driver19 = new driver("PAM HAM", "8169858927", ATT);

driverlist.push(driver19);

const driver20 = new driver("KELLEY MCKINLEY", "8169858916", ATT);

driverlist.push(driver20);

const driver21 = new driver("Dennis Nichols", "8165163567", VERIZON);

driverlist.push(driver21);

const driver22 = new driver("John Rodriguez", "9132236160", TMOBILE);

driverlist.push(driver22);

const driver23 = new driver("Adam Atherton", "9133138090", ATT);

driverlist.push(driver23);
//put in routes
const route0 = new route("KC300", driver0); 
//again, add routes as we make them
routelist.push(route0); 
const route1 = new route("KC400", driver1); 
routelist.push(route1); 
const route2 = new route("KC402", driver2); 
routelist.push(route2); 
const route3 = new route("KC410", driver3); 
routelist.push(route3); 
const route4 = new route("KC412", driver4); 
routelist.push(route4); 
const route5 = new route("KC500", driver5); 
routelist.push(route5); 
const route6 = new route("KC502", driver6); 
routelist.push(route6); 
const route7 = new route("KC600/603", driver7); 
routelist.push(route7); 
const route8 = new route("KC601/604", driver8); 
routelist.push(route8); 
const route9 = new route("KC602/606", driver9); 
routelist.push(route9); 
const route10 = new route("KC605", driver10); 
routelist.push(route10); 
const route11 = new route("KC700", driver11); 
routelist.push(route11); 
const route12 = new route("KC701", driver12); 
routelist.push(route12); 
const route13 = new route("KC702", driver13); 
routelist.push(route13); 
const route14 = new route("KC707", driver14); 
routelist.push(route14); 
const route15 = new route("KC710", driver15); 
routelist.push(route15); 
const route16 = new route("KC712", driver16); 
routelist.push(route16); 
const route17 = new route("KC801", driver17); 
routelist.push(route17); 
const route18 = new route("KC802", driver18); 
routelist.push(route18); 
const route19 = new route("KC810", driver19); 
routelist.push(route19); 
const route20 = new route("KC811", driver20); 
routelist.push(route20); 