input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
})
radio.setGroup(1)
music.play(music.stringPlayable("- - - - - - - - ", 98), music.PlaybackMode.InBackground)
radio.setGroup(randint(0, 3))
basic.forever(function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.LoopingInBackground)
    music.play(music.tonePlayable(220, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Double))
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
    }
})
