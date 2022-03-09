// Your code here
class PartyPlanner{
	constructor(guestList){
		this.guestList = !guestList ? [] : guestList;
	}
	addToGuestList(name){
		this.guestList.push(name)
	}
	throwParty(partyStr = "Welcome to the party "){
		if(this.guestList.length === 0){
			return  "gotta add people to the guest list";
		}
		this.guestList.map((currentGuest, guestIndex) => {
			partyStr += currentGuest;
			if(guestIndex !== this.guestList.length - 1)
				partyStr += " and "

		});
		return partyStr;
	}
}
const party = new PartyPlanner();

console.log(party.throwParty()); // prints "Gotta add people to the guest list"

party.addToGuestList("James");
console.log(party.throwParty()); // prints "Welcome to the party James"

party.addToGuestList("Alvin");
console.log(party.throwParty()); // prints "Welcome to the party James and Alvin"

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = PartyPlanner;
} catch {
	module.exports = null;
}
