let Corruption = {
    points: new Decimal(0),
    req: new Decimal(10000000),
    unlocked: false,
}

function CorruptionReset() {
    if(player.points.gte(Corruption.req)) {
        player.points = player.points.sub(player.points)
        Corruption.points = Corruption.points.add(player.points.log(player.points.div(10000000)))
    }
}