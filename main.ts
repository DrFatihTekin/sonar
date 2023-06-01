let distance = 0
let y = 0
// Displays distance from sensor in cm on LED array such that:
// 100s of cm are represented at x=0
// 10s of cm are represented at x=1,2
// 1s of cm are represented at x=3,4
// Simulator is showing a representation of 86cm.
basic.forever(function () {
    if (sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    ) > 0) {
        distance = sonar.ping(
        DigitalPin.P0,
        DigitalPin.P1,
        PingUnit.Centimeters
        )
        basic.clearScreen()
        y = 0
        while (distance >= 100) {
            led.plot(0, y)
            distance += -100
            y += 1
        }
        y = 0
        while (distance >= 60) {
            led.plot(1, y)
            distance += -10
            y += 1
        }
        y = 0
        while (distance >= 10) {
            led.plot(2, y)
            distance += -10
            y += 1
        }
        y = 0
        while (distance >= 6) {
            led.plot(3, y)
            distance += -1
            y += 1
        }
        y = 0
        while (distance >= 1) {
            led.plot(4, y)
            distance += -1
            y += 1
        }
    } else {
        basic.showIcon(IconNames.No)
    }
})
