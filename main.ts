namespace SpriteKind {
    export const star = SpriteKind.create()
    export const ship = SpriteKind.create()
    export const trktr = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    warp += -5
    if (0 > warp) {
        warp = 0
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    sprite.destroy(effects.fire, 500)
    scene.cameraShake(4, 500)
    music.knock.play()
    info.changeScoreBy(-10)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    tractor = sprites.create(assets.image`capture`, SpriteKind.trktr)
    tractor.setPosition(ex, ey)
    tractor.setFlag(SpriteFlag.AutoDestroy, true)
    tractor.setVelocity(0, -200)
    pause(1000)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    blast = sprites.create(assets.image`phaser`, SpriteKind.Projectile)
    blast.setPosition(ex, ey)
    blast.setFlag(SpriteFlag.AutoDestroy, true)
    blast.setVelocity(0, -300)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    ex += -5
    if (ex < 0) {
        ex = 0
    }
    Enterprise.setPosition(ex, ey)
    cx = ex
})
sprites.onOverlap(SpriteKind.ship, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    scene.cameraShake(4, 500)
    music.knock.play()
    info.changeLifeBy(-1)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    ex += 5
    if (ex > 160) {
        ex = 160
    }
    Enterprise.setPosition(ex, ey)
    cx = ex
})
sprites.onOverlap(SpriteKind.trktr, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.halo, 500)
    sprite.destroy(effects.halo, 500)
    scene.cameraShake(4, 500)
    music.knock.play()
    info.changeScoreBy(10)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    warp += 5
    if (200 < warp) {
        warp = 100
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    sprite.destroy(effects.fire, 500)
    scene.cameraShake(4, 500)
    music.knock.play()
    info.changeScoreBy(10)
})
let drum: Sprite = null
let villain: Sprite = null
let star: Sprite = null
let blast: Sprite = null
let tractor: Sprite = null
let warp = 0
let ey = 0
let Enterprise: Sprite = null
let ex = 0
let cx = 0
game.splash("Avoid (or destroy) enemies.", "Capture resource canisters!")
info.setLife(10)
let Enemies = [
assets.image`Klingon`,
assets.image`Klingon`,
assets.image`Romulan`,
assets.image`Romulan`
]
cx = 80
ex = 80
let cy = 40
Enterprise = sprites.create(assets.image`ship`, SpriteKind.ship)
ey = 99
animation.runImageAnimation(
Enterprise,
assets.animation`shipanim`,
400,
true
)
Enterprise.setPosition(ex, ey)
warp = 100
let stars = [
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 5 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
assets.image`myImage`,
assets.image`myImage`,
assets.image`myImage0`,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `
]
forever(function () {
    pause(warp)
    star = sprites.create(stars._pickRandom(), SpriteKind.star)
    star.setVelocity(randint(-75, 75), randint(-75, 75))
    star.setPosition(cx, cy)
    star.setFlag(SpriteFlag.AutoDestroy, true)
    if (58 < randint(0, 60)) {
        villain = sprites.create(Enemies._pickRandom(), SpriteKind.Enemy)
        villain.setPosition(cx, cy)
        villain.setVelocity(0, 50)
        villain.setFlag(SpriteFlag.AutoDestroy, true)
    }
    if (93 < randint(0, 100)) {
        drum = sprites.create(assets.image`resource`, SpriteKind.Food)
        animation.runImageAnimation(
        drum,
        assets.animation`myAnim0`,
        300,
        true
        )
        drum.setPosition(cx + randint(-40, 40), cy)
        drum.setVelocity(0, 50)
        drum.setFlag(SpriteFlag.AutoDestroy, true)
    }
})
