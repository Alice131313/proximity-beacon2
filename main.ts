radio.onReceivedNumber(function (receivedNumber) {
    number = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    led.plotBarGraph(
    Math.map(number, -95, -42, 0, 9),
    9
    )
})
let number = 0
radio.setGroup(1)
radio.setTransmitPower(5)
basic.forever(function () {
    radio.sendNumber(1)
})
