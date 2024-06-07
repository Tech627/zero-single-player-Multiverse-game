function GameLoop() {
    let Corruption_gain = player.points.log(player.points.div(10000000))
    if(player.points.gte(player.Universe_limit)) {
        player.points = player.points.add(0)
    }
    else {
        player.points = player.points.add(player.points_persec.div(20))
    }

    if(player.points.gte(Planet_ups.Planet1.req)) {
        player.points = player.points.sub(player.points)
        Planet_ups.Planet1.amt = Planet_ups.Planet1.amt.add(1)
        Planet_ups.Planet1.effect = Planet_ups.Planet1.effect.add(1)
        Planet_ups.Planet1.req = Planet_ups.Planet1.req.mul(1.1)
        player.points_persec = player.points_persec.add(1)
    }

    if(Planet_ups.Planet1.amt.gte(Planet_ups.Planet2.req)) {
        Planet_ups.Planet1.amt = Planet_ups.Planet1.amt.sub(Planet_ups.Planet2.req)
        Planet_ups.Planet2.amt = Planet_ups.Planet2.amt.add(1)
        Planet_ups.Planet2.effect = Planet_ups.Planet2.effect.add(3)
        Planet_ups.Planet2.req = Planet_ups.Planet2.req.mul(1.05)
        player.points_persec = player.points_persec.add(3)
    }

    if(Planet_ups.Planet2.amt.gte(Planet_ups.Planet3.req)) {
        Planet_ups.Planet2.amt = Planet_ups.Planet2.amt.sub(Planet_ups.Planet3.req)
        Planet_ups.Planet3.amt = Planet_ups.Planet3.amt.add(1)
        Planet_ups.Planet3.effect = Planet_ups.Planet3.effect.add(3)
        Planet_ups.Planet3.req = Planet_ups.Planet3.req.mul(1.05)
        player.points_persec = player.points_persec.add(50)
    }

    if(player.points.gte(Upgrades.Upgrade1.req)) {
        player.points = player.points.sub(player.points)
        player.Universe_limit = player.Universe_limit.mul(Upgrades.Upgrade1.effect)
        Upgrades.Upgrade1.req = Upgrades.Upgrade1.req.mul(1.5)
    }

    if(player.points.gte(Upgrades.Upgrade2.req)) {
        player.points = player.points.sub(Upgrades.Upgrade2.req)
        player.points_persec = player.points_persec.mul(5)
        Upgrades.Upgrade2.req = Upgrades.Upgrade2.req.mul(2.5)
    }

    if(player.points.gte(Milestones.Milestone1.req)) {
        Milestones.Milestone1.done = true
    }

    if(Milestones.Milestone1.activated === true && Milestones.Milestone1.done === true) {
        if(Milestones.Milestone1.clicked.eq(1)) {
            player.points_persec = player.points_persec.mul(3)
            Milestones.Milestone1.clicked = new Decimal(0)
            document.getElementById("Milestone1-activated").textContent = "activated: [true]"
            document.getElementById("Milestone1").style.background = "limegreen"
        }
    }
    else {
        if(Milestones.Milestone1.clicked.eq(0) && Milestones.Milestone1.done === true) {
            player.points_persec = player.points_persec.div(3)
            Milestones.Milestone1.clicked = new Decimal(1)
            document.getElementById("Milestone1-activated").textContent = "activated: [false]"
            document.getElementById("Milestone1").style.background = "limegreen"
        }
    }

    if(player.points.gte(Milestones.Milestone2.req)) {
        Milestones.Milestone1.done = true
    }

    if(Milestones.Milestone2.activated === true && Milestones.Milestone2.done === true) {
        if(Milestones.Milestone2.clicked.eq(1)) {
            Upgrades.Upgrade1.effect = Upgrades.Upgrade1.effect.add(0.5)
            Milestones.Milestone2.clicked = new Decimal(0)
            document.getElementById("Milestone2-activated").textContent = "activated: [true]"
            document.getElementById("Milestone2").style.background = "limegreen"
        }
    }
    else {
        if(Milestones.Milestone2.clicked.eq(0) && Milestones.Milestone2.done === true) {
            Upgrades.Upgrade1.effect = Upgrades.Upgrade1.effect.sub(0.5)
            Milestones.Milestone2.clicked = new Decimal(1)
            document.getElementById("Milestone2-activated").textContent = "activated: [false]"
            document.getElementById("Milestone2").style.background = "limegreen"
        }
    }

    if(player.points.gte(Corruption.req)) {
        document.getElementById("Corruption-desc").textContent = "Reset for " + format(Corruption_gain, precision = 2) + " Corruption Prestige points"
    }
    else {
        document.getElementById("Corruption-desc").textContent = "Corrupt this Universe and become stronger to take down the Glyphs"
    }

    if(Planet_ups.Planet2.amt.gte(9)) {
        Planet_ups.Planet3.unlocked = true
    }
    if(Planet_ups.Planet3.unlocked === true) {
        document.getElementById("Planet3").style.visibility = "visible"
    }

    if(player.points.gte(100)) {
        Milestones.unlocked = true
    }
    if(Milestones.unlocked === true) {
        document.getElementById("Milestones").style.visibility = "visible"
        document.getElementById("Milestone1").style.visibility = "visible"
        document.getElementById("Milestone2").style.visibility = "visible"
    }

    if(Milestones.Milestone2.done === true) {
        document.getElementById("Upgrade2").style.visibility = "visible"
    }

    if(player.points.gte(10000000)) {
        Corruption.unlocked = true
    }

    if(Corruption.unlocked === true) {
        document.getElementById("Corrupted-prestige").style.visibility = "visible"
        document.getElementById("Corruption-reset").style.visibility = "visible"
    }
    document.getElementById("Points").textContent = formatWhole(player.points) + " Points"
    document.getElementById("Points-persec").textContent = "(+" + formatWhole(player.points_persec) + " Points/sec)"
    document.getElementById("Universe-limit").textContent = "Limit: " + formatWhole(player.Universe_limit)
    document.getElementById("Corrupted-prestige-points").textContent = "You have " + format(Corruption.points, precision = 2) + " Corrupted Prestige points"
    document.getElementById("Planet1-amt").textContent = "You have " + formatWhole(Planet_ups.Planet1.amt) + " Planet 1"
    document.getElementById("Planet1-benefit").textContent = "Planet 1 gets you +" + formatWhole(Planet_ups.Planet1.effect) + " Points/sec"
    document.getElementById("Planet1-req").textContent = "req: " + formatWhole(Planet_ups.Planet1.req) + " Points"
    document.getElementById("Planet2-amt").textContent = "You have " + formatWhole(Planet_ups.Planet2.amt) + " Planet 2"
    document.getElementById("Planet2-benefit").textContent = "Planet 2 gets you +" + formatWhole(Planet_ups.Planet2.effect) + " Points/sec"
    document.getElementById("Planet2-req").textContent = "req: " + formatWhole(Planet_ups.Planet2.req) + " Planet 1"
    document.getElementById("Planet3-amt").textContent = "You have " + formatWhole(Planet_ups.Planet3.amt) + " Planet 3"
    document.getElementById("Planet3-benefit").textContent = "Planet 2 gets you +" + formatWhole(Planet_ups.Planet3.effect) + " Points/sec"
    document.getElementById("Planet3-req").textContent = "req: " + formatWhole(Planet_ups.Planet3.req) + " Planet 2"
    document.getElementById("Upgrade1-desc").textContent = "Increase the limit by " + format(Upgrades.Upgrade1.effect, precision = 1) + " every time you get this"
    document.getElementById("Upgrade1-req").textContent = "req: " + formatWhole(Upgrades.Upgrade1.req) + " Points"
    document.getElementById("Upgrade2-req").textContent = "req: " + formatWhole(Upgrades.Upgrade2.req) + " Points"
}

setInterval(GameLoop, 1000/20)