enum RadioMessage {
    message1 = 49434
}
input.onButtonPressed(Button.A, function () {
    スプライト.move(-1)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(game.score())
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    control.waitMicros(500)
    basic.showLeds(`
        . . . . .
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    control.waitMicros(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        # # # # #
        # # # # #
        `)
    control.waitMicros(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        # # # # #
        `)
    control.waitMicros(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        `)
    control.waitMicros(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    game.setScore(0)
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    スプライト.move(1)
})
let スプライト: game.LedSprite = null
スプライト = game.createSprite(2, 2)
let お宝 = game.createSprite(randint(0, 4), 2)
お宝.set(LedSpriteProperty.Blink, 1)
basic.forever(function () {
    if (スプライト.isTouching(お宝)) {
        game.addScore(1)
        music.play(music.tonePlayable(740, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(784, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        お宝.delete()
        お宝 = game.createSprite(randint(0, 4), 2)
        お宝.set(LedSpriteProperty.Blink, 1)
    }
})
