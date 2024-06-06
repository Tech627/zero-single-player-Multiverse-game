let Milestones = {
    unlocked: false,
    Milestone1: {
        req: new Decimal(1000),
        done: false,
        activated: false,
        clicked: new Decimal(0),
    },
    Milestone2: {
        req: new Decimal(10000),
        done: false,
        activated: false,
        clicked: new Decimal(0),
    },
}

function FirstMilestone() {
    if(Milestones.Milestone1.activated === false) {
        Milestones.Milestone1.activated = true
        Milestones.Milestone1.clicked = new Decimal(1)
    }
    else {
        Milestones.Milestone1.activated = false
    }
}

function SecondMilestone() {
    if(Milestones.Milestone2.activated === false) {
        Milestones.Milestone2.activated = true
        Milestones.Milestone2.clicked = new Decimal(1)
    }
    else {
        Milestones.Milestone2.activated = false
    }
}