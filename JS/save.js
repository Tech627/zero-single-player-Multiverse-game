function saveitems(name, location) { // this basically just removes the localstorage.setitem and json.stringify
    localStorage.setItem(name, JSON.stringify((location)));
}

function Save() {
    if (localStorage) {
        saveitems("firstload", false)
        saveitems("Points", player.points);
        saveitems("Universe-limit", player.Universe_limit)
        saveitems("Planet1-amt", Planet_ups.Planet1.amt)
        saveitems("Planet1-effect", Planet_ups.Planet1.effect)
        saveitems("Planet1-req", Planet_ups.Planet1.req)
        saveitems("Planet2-amt", Planet_ups.Planet2.amt)
        saveitems("Planet2-effect", Planet_ups.Planet2.effect)
        saveitems("Planet2-req", Planet_ups.Planet2.req)
        saveitems("Planet3-amt", Planet_ups.Planet3.amt)
        saveitems("Planet3-effect", Planet_ups.Planet3.effect)
        saveitems("Planet3-req", Planet_ups.Planet3.req)
        saveitems("Planet3-unl", Planet_ups.Planet3.unlocked)
        saveitems("Planet4-amt", Planet_ups.Planet4.amt)
        saveitems("Planet4-effect", Planet_ups.Planet4.effect)
        saveitems("Planet4-req", Planet_ups.Planet4.req)
        saveitems("Upgrade1-effect", Upgrades.Upgrade1.effect)
        saveitems("Upgrade1-req", Upgrades.Upgrade1.req)
        saveitems("Upgrade2-effect", Upgrades.Upgrade2.effect)
        saveitems("Upgrade2-req", Upgrades.Upgrade2.req)
        saveitems("Milestones-unl", Milestones.unlocked)
        saveitems("Milestone1-done", Milestones.Milestone1.done)
        saveitems("Milestone1-activated", Milestones.Milestone1.activated)
        saveitems("Milestone1-clicked", Milestones.Milestone1.clicked)
        saveitems("Milestone2-done", Milestones.Milestone2.done)
        saveitems("Milestone2-activated", Milestones.Milestone2.activated)
        saveitems("Milestone2-clicked", Milestones.Milestone2.clicked)
        saveitems("Corruption-unl", Corruption.unlocked)
    }
}

function GetItems(saved, newdecimal) { //removes json.parse and localstorage
    let location = "Error" // placeholder
    if (saved) {
        if (newdecimal) { // checks if the value your setting to needs to be in newdecimal or not
            location = new Decimal(JSON.parse(localStorage.getItem(saved)));
        } else {
            location = JSON.parse(localStorage.getItem(saved));
        }
    }
    return location;
}

function Get() {
    if (localStorage) {
    let firstload = GetItems("firstload", false)
    if (!firstload) {
    player.points = GetItems("Points", true);
    player.Universe_limit = GetItems("Universe-limit", true)
    Planet_ups.Planet1.amt = GetItems("Planet1-amt", true)
    Planet_ups.Planet1.effect = GetItems("Planet1-effect", true)
    Planet_ups.Planet1.req = GetItems("Planet1-req", true)
    Planet_ups.Planet2.amt = GetItems("Planet2-amt", true)
    Planet_ups.Planet2.effect = GetItems("Planet2-effect", true)
    Planet_ups.Planet2.req = GetItems("Planet2-req", true)
    Planet_ups.Planet3.amt = GetItems("Planet3-amt", true)
    Planet_ups.Planet3.effect = GetItems("Planet3-effect", true)
    Planet_ups.Planet3.req = GetItems("Planet3-req", true)
    Planet_ups.Planet3.unlocked = GetItems("Planet3-unl", true)
    Planet_ups.Planet4.amt = GetItems("Planet4-amt", true)
    Planet_ups.Planet4.effect = GetItems("Planet4-effect", true)
    Planet_ups.Planet4.req = GetItems("Planet4-req", true)
    Upgrades.Upgrade1.effect = GetItems("Upgrade1-effect", true)
    Upgrades.Upgrade1.req = GetItems("Upgrade1-req", true)
    Upgrades.Upgrade2.effect = GetItems("Upgrade2-effect", true)
    Upgrades.Upgrade2.req = GetItems("Upgrade2-req", true)
    Milestones.unlocked = GetItems("Milestones-unl", true)
    Milestones.Milestone1.done = GetItems("Milestone1-done", true)
    Milestones.Milestone1.activated = GetItems("Milestone1-activated", true)
    Milestones.Milestone1.clicked = GetItems("Milestone1-clicked", true)
    Milestones.Milestone2.done = GetItems("Milestone2-done", true)
    Milestones.Milestone2.activated = GetItems("Milestone2-activated", true)
    Milestones.Milestone2.clicked = GetItems("Milestone2-clicked", true)
    Corruption.unlocked = GetItems("Corruption-unl", true)
    }}
}

function HardReset() {
    localStorage.clear(); // wipe localstorage
    saveitems("firstload", true)
    location.reload(true)
}

setInterval(Save, 10000)