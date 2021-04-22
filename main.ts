namespace SpriteKind {
    export const ghost = SpriteKind.create()
    export const friend = SpriteKind.create()
    export const goldenMushroomORbrick = SpriteKind.create()
    export const door = SpriteKind.create()
    export const newdoor = SpriteKind.create()
    export const newfriend = SpriteKind.create()
    export const phantom = SpriteKind.create()
    export const newestdoor = SpriteKind.create()
    export const dodoor = SpriteKind.create()
    export const King = SpriteKind.create()
    export const hide = SpriteKind.create()
    export const villager = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -150
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.newdoor, function (sprite, otherSprite) {
    if (info.score() == 26) {
        game.splash("Level 3")
        game.splash("collect 10 souls and reach the door to deliver the mushrooms")
        game.showLongText("You're halfway there Hero. All you need to do is defeat these troublesome ghosts.", DialogLayout.Bottom)
        game.showLongText("Hurry, the people of Shroom are slowly losing hope...", DialogLayout.Bottom)
        otherSprite.destroy()
        mySprite.destroy()
        tiles.setTilemap(tilemap`level11`)
        info.setLife(3)
        for (let value of tiles.getTilesByType(assets.tile`myTile17`)) {
            mySprite = sprites.create(img`
                . . . . . . . 2 2 . . . . . . . 
                . . . . . 2 2 2 2 1 2 . . . . . 
                . . . . 2 2 1 2 2 2 2 2 . . . . 
                . . . 2 1 2 2 2 1 2 2 1 2 . . . 
                . . . 2 2 2 2 2 2 2 2 2 2 . . . 
                . . 1 2 d d 2 1 2 2 d d 2 1 . . 
                . 2 2 b d f d d d d f d b 2 2 . 
                . . . 3 3 d d d d d d 3 3 . . . 
                . . . b d d d d d d d d b . . . 
                . . . . b d d d d d d b . . . . 
                . . . . . b d 1 1 d b . . . . . 
                . . . . . b d 1 1 d b . . . . . 
                . . . . . b d d d d b . . . . . 
                . . . . . b d d d d b . . . . . 
                . . . . . b d b b d b . . . . . 
                . . . . . b b . . b b . . . . . 
                `, SpriteKind.Player)
            tiles.placeOnTile(mySprite, value)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile22`)) {
            NextLevelDoor = sprites.create(assets.tile`myTile22`, SpriteKind.newestdoor)
            tiles.placeOnTile(NextLevelDoor, value)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
            souls = sprites.create(img`
                ........................
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .......f11111111f.......
                ......fd11111111df......
                ......fd11111111df......
                ......fddd1111dddf......
                ......fbdbfddfbdbf......
                ......fcdcf11fcdcf......
                .......fb111111ffff.....
                ......fffcdb1bc111cf....
                ....fc111cbfbf1b1b1f....
                ....f1b1b1ffffbfbfbf....
                ....fbfbfffffff.........
                .........fffff..........
                ..........fff...........
                ........................
                ........................
                ........................
                ........................
                `, SpriteKind.phantom)
            tiles.placeOnTile(souls, value)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.newestdoor, function (sprite, otherSprite) {
    if (info.score() == 36) {
        tiles.setTilemap(tilemap`level15`)
        game.splash("Level 4")
        game.splash("Help rebuild the homes of the citizens of Shroom")
        game.showLongText("Congratulations Hero, you've made it", DialogLayout.Bottom)
        game.showLongText("But there's still one more thing to do. Deliver the golden mushrooms and souls that you have collected to the Shroom King.", DialogLayout.Bottom)
        otherSprite.destroy()
        mySprite.destroy()
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile24`)) {
        mySprite = sprites.create(img`
            . . . . . . . 2 2 . . . . . . . 
            . . . . . 2 2 2 2 1 2 . . . . . 
            . . . . 2 2 1 2 2 2 2 2 . . . . 
            . . . 2 1 2 2 2 1 2 2 1 2 . . . 
            . . . 2 2 2 2 2 2 2 2 2 2 . . . 
            . . 1 2 d d 2 1 2 2 d d 2 1 . . 
            . 2 2 b d f d d d d f d b 2 2 . 
            . . . 3 3 d d d d d d 3 3 . . . 
            . . . b d d d d d d d d b . . . 
            . . . . b d d d d d d b . . . . 
            . . . . . b d 1 1 d b . . . . . 
            . . . . . b d 1 1 d b . . . . . 
            . . . . . b d d d d b . . . . . 
            . . . . . b d d d d b . . . . . 
            . . . . . b d b b d b . . . . . 
            . . . . . b b . . b b . . . . . 
            `, SpriteKind.Player)
        tiles.placeOnTile(mySprite, value)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile25`)) {
        KingShroom = sprites.create(assets.tile`myTile19`, SpriteKind.King)
        tiles.placeOnTile(KingShroom, value)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.phantom, function (sprite, otherSprite) {
    if (sprite.bottom < otherSprite.y) {
        otherSprite.destroy()
        music.beamUp.playUntilDone()
        info.changeScoreBy(1)
    } else {
        info.changeLifeBy(-1)
        mySprite.destroy()
        music.zapped.playUntilDone()
        for (let value of tiles.getTilesByType(assets.tile`myTile17`)) {
            mySprite = sprites.create(img`
                . . . . . . . 2 2 . . . . . . . 
                . . . . . 2 2 2 2 1 2 . . . . . 
                . . . . 2 2 1 2 2 2 2 2 . . . . 
                . . . 2 1 2 2 2 1 2 2 1 2 . . . 
                . . . 2 2 2 2 2 2 2 2 2 2 . . . 
                . . 1 2 d d 2 1 2 2 d d 2 1 . . 
                . 2 2 b d f d d d d f d b 2 2 . 
                . . . 3 3 d d d d d d 3 3 . . . 
                . . . b d d d d d d d d b . . . 
                . . . . b d d d d d d b . . . . 
                . . . . . b d 1 1 d b . . . . . 
                . . . . . b d 1 1 d b . . . . . 
                . . . . . b d d d d b . . . . . 
                . . . . . b d d d d b . . . . . 
                . . . . . b d b b d b . . . . . 
                . . . . . b b . . b b . . . . . 
                `, SpriteKind.Player)
            tiles.placeOnTile(mySprite, value)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.King, function (sprite, otherSprite) {
    tiles.setTilemap(tilemap`level16`)
    for (let value of tiles.getTilesByType(assets.tile`myTile26`)) {
        shoom = sprites.create(assets.tile`myTile27`, SpriteKind.villager)
        tiles.placeOnTile(shoom, value)
        animation.runImageAnimation(
        shoom,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 2 2 2 1 2 2 . . . . . 
            . . . . 2 1 2 2 2 2 2 2 . . . . 
            . . . 2 2 2 2 2 1 2 2 2 1 . . . 
            . . . 2 1 2 2 2 2 2 2 2 2 . . . 
            . . . 2 d f d 2 2 d f d 1 . . . 
            . . . . 3 3 d d d d 3 3 . . . . 
            . . . d . d d d d d d . d . . . 
            . . . d d . d d d d . d d . . . 
            . . . . d d d d d d d d . . . . 
            . . . . . d d 1 1 d d . . . . . 
            . . . . . . d d d d . . . . . . 
            . . . . . . d d d d . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 2 1 2 2 . . . . 
            . . . . . 2 1 2 2 2 2 2 2 . . . 
            . . . . 2 2 2 2 2 1 2 2 2 1 . . 
            . . . . 2 1 2 2 2 2 2 2 2 2 . . 
            . . . . 2 d f d 2 2 d f d 1 . . 
            . . . . . 3 3 d d d d 3 3 . . . 
            . . . . d . d d d d d d . d . . 
            . . . . d d . d d d d . d d . . 
            . . . . . d d d d d d d d . . . 
            . . . . . . d d 1 1 d d . . . . 
            . . . . . . . d d d d . . . . . 
            . . . . . . . d d d d . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 2 2 1 2 2 . . . 
            . . . . . . 2 1 2 2 2 2 2 2 . . 
            . . . . . 2 2 2 2 2 1 2 2 2 1 . 
            . . . . . 2 1 2 2 2 2 2 2 2 2 . 
            . . . . . 2 d f d 2 2 d f d 1 . 
            . . . . . . 3 3 d d d d 3 3 . . 
            . . . . . d . d d d d d d . d . 
            . . . . . d d . d d d d . d d . 
            . . . . . . d d d d d d d d . . 
            . . . . . . . d d 1 1 d d . . . 
            . . . . . . . . d d d d . . . . 
            . . . . . . . . d d d d . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 2 2 2 1 2 2 . . 
            . . . . . . . 2 1 2 2 2 2 2 2 . 
            . . . . . . 2 2 2 2 2 1 2 2 2 1 
            . . . . . . 2 1 2 2 2 2 2 2 2 2 
            . . . . . . 2 d f d 2 2 d f d 1 
            . . . . . . . 3 3 d d d d 3 3 . 
            . . . . . . d . d d d d d d . d 
            . . . . . . d d . d d d d . d d 
            . . . . . . . d d d d d d d d . 
            . . . . . . . . d d 1 1 d d . . 
            . . . . . . . . . d d d d . . . 
            . . . . . . . . . d d d d . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 2 2 1 2 2 . . . 
            . . . . . . 2 1 2 2 2 2 2 2 . . 
            . . . . . 2 2 2 2 2 1 2 2 2 1 . 
            . . . . . 2 1 2 2 2 2 2 2 2 2 . 
            . . . . . 2 d f d 2 2 d f d 1 . 
            . . . . . . 3 3 d d d d 3 3 . . 
            . . . . . d . d d d d d d . d . 
            . . . . . d d . d d d d . d d . 
            . . . . . . d d d d d d d d . . 
            . . . . . . . d d 1 1 d d . . . 
            . . . . . . . . d d d d . . . . 
            . . . . . . . . d d d d . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 2 1 2 2 . . . . 
            . . . . . 2 1 2 2 2 2 2 2 . . . 
            . . . . 2 2 2 2 2 1 2 2 2 1 . . 
            . . . . 2 1 2 2 2 2 2 2 2 2 . . 
            . . . . 2 d f d 2 2 d f d 1 . . 
            . . . . . 3 3 d d d d 3 3 . . . 
            . . . . d . d d d d d d . d . . 
            . . . . d d . d d d d . d d . . 
            . . . . . d d d d d d d d . . . 
            . . . . . . d d 1 1 d d . . . . 
            . . . . . . . d d d d . . . . . 
            . . . . . . . d d d d . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 2 2 2 1 2 2 . . . . . 
            . . . . 2 1 2 2 2 2 2 2 . . . . 
            . . . 2 2 2 2 2 1 2 2 2 1 . . . 
            . . . 2 1 2 2 2 2 2 2 2 2 . . . 
            . . . 2 d f d 2 2 d f d 1 . . . 
            . . . . 3 3 d d d d 3 3 . . . . 
            . . . d . d d d d d d . d . . . 
            . . . d d . d d d d . d d . . . 
            . . . . d d d d d d d d . . . . 
            . . . . . d d 1 1 d d . . . . . 
            . . . . . . d d d d . . . . . . 
            . . . . . . d d d d . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 2 2 2 1 2 2 . . . . . . 
            . . . 2 1 2 2 2 2 2 2 . . . . . 
            . . 2 2 2 2 2 1 2 2 2 1 . . . . 
            . . 2 1 2 2 2 2 2 2 2 2 . . . . 
            . . 2 d f d 2 2 d f d 1 . . . . 
            . . . 3 3 d d d d 3 3 . . . . . 
            . . d . d d d d d d . d . . . . 
            . . d d . d d d d . d d . . . . 
            . . . d d d d d d d d . . . . . 
            . . . . d d 1 1 d d . . . . . . 
            . . . . . d d d d . . . . . . . 
            . . . . . d d d d . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 2 2 2 1 2 2 . . . . . . . 
            . . 2 1 2 2 2 2 2 2 . . . . . . 
            . 2 2 2 2 2 1 2 2 2 1 . . . . . 
            . 2 1 2 2 2 2 2 2 2 2 . . . . . 
            . 2 d f d 2 2 d f d 1 . . . . . 
            . . 3 3 d d d d 3 3 . . . . . . 
            . d . d d d d d d . d . . . . . 
            . d d . d d d d . d d . . . . . 
            . . d d d d d d d d . . . . . . 
            . . . d d 1 1 d d . . . . . . . 
            . . . . d d d d . . . . . . . . 
            . . . . d d d d . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 2 2 2 1 2 2 . . . . . . . . 
            . 2 1 2 2 2 2 2 2 . . . . . . . 
            2 2 2 2 2 1 2 2 2 1 . . . . . . 
            2 1 2 2 2 2 2 2 2 2 . . . . . . 
            2 d f d 2 2 d f d 1 . . . . . . 
            . 3 3 d d d d 3 3 . . . . . . . 
            d . d d d d d d . d . . . . . . 
            d d . d d d d . d d . . . . . . 
            . d d d d d d d d . . . . . . . 
            . . d d 1 1 d d . . . . . . . . 
            . . . d d d d . . . . . . . . . 
            . . . d d d d . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 2 2 2 1 2 2 . . . . . . . 
            . . 2 1 2 2 2 2 2 2 . . . . . . 
            . 2 2 2 2 2 1 2 2 2 1 . . . . . 
            . 2 1 2 2 2 2 2 2 2 2 . . . . . 
            . 2 d f d 2 2 d f d 1 . . . . . 
            . . 3 3 d d d d 3 3 . . . . . . 
            . d . d d d d d d . d . . . . . 
            . d d . d d d d . d d . . . . . 
            . . d d d d d d d d . . . . . . 
            . . . d d 1 1 d d . . . . . . . 
            . . . . d d d d . . . . . . . . 
            . . . . d d d d . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 2 2 2 1 2 2 . . . . . . 
            . . . 2 1 2 2 2 2 2 2 . . . . . 
            . . 2 2 2 2 2 1 2 2 2 1 . . . . 
            . . 2 1 2 2 2 2 2 2 2 2 . . . . 
            . . 2 d f d 2 2 d f d 1 . . . . 
            . . . 3 3 d d d d 3 3 . . . . . 
            . . d . d d d d d d . d . . . . 
            . . d d . d d d d . d d . . . . 
            . . . d d d d d d d d . . . . . 
            . . . . d d 1 1 d d . . . . . . 
            . . . . . d d d d . . . . . . . 
            . . . . . d d d d . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 2 2 2 1 2 2 . . . . . 
            . . . . 2 1 2 2 2 2 2 2 . . . . 
            . . . 2 2 2 2 2 1 2 2 2 1 . . . 
            . . . 2 1 2 2 2 2 2 2 2 2 . . . 
            . . . 2 d f d 2 2 d f d 1 . . . 
            . . . . 3 3 d d d d 3 3 . . . . 
            . . . d . d d d d d d . d . . . 
            . . . d d . d d d d . d d . . . 
            . . . . d d d d d d d d . . . . 
            . . . . . d d 1 1 d d . . . . . 
            . . . . . . d d d d . . . . . . 
            . . . . . . d d d d . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 2 2 2 1 2 2 . . . . . 
            . . . . 2 1 2 2 2 2 2 2 . . . . 
            . . . 2 2 2 2 2 1 2 2 2 1 . . . 
            . . . 2 1 2 2 2 2 2 2 2 2 . . . 
            . . . 2 d f d 2 2 d f d 1 . . . 
            . . . . 3 3 d d d d 3 3 . . . . 
            . . . d . d d d d d d . d . . . 
            . . . d d . d d d d . d d . . . 
            . . . . d d d d d d d d . . . . 
            . . . . . d d 1 1 d d . . . . . 
            . . . . . . d d d d . . . . . . 
            . . . . . . d d d d . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 2 2 2 1 2 2 . . . . . 
            . . . . 2 1 2 2 2 2 2 2 . . . . 
            . . . 2 2 2 2 2 1 2 2 2 1 . . . 
            . . . 2 1 2 2 2 2 2 2 2 2 . . . 
            . . . 2 d f d 2 2 d f d 1 . . . 
            . . . . 3 3 d d d d 3 3 . . . . 
            . . . d . d d d d d d . d . . . 
            . . . d d . d d d d . d d . . . 
            . . . . d d d d d d d d . . . . 
            . . . . . d d 1 1 d d . . . . . 
            . . . . . . d d d d . . . . . . 
            . . . . . . d d d d . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . 2 2 2 1 2 2 . . . . . 
            . . . . 2 1 2 2 2 2 2 2 . . . . 
            . . . 2 2 2 2 2 1 2 2 2 1 . . . 
            . . . 2 1 2 2 2 2 2 2 2 2 . . . 
            . . . 2 d f d 2 2 d f d 1 . . . 
            . . . . 3 3 d d d d 3 3 . . . . 
            . . . d . d d d d d d . d . . . 
            . . . d d . d d d d . d d . . . 
            . . . . d d d d d d d d . . . . 
            . . . . . d d 1 1 d d . . . . . 
            . . . . . . d d d d . . . . . . 
            . . . . . . d d d d . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . 2 2 2 1 2 2 . . . . . 
            . . . . 2 1 2 2 2 2 2 2 . . . . 
            . . . 2 2 2 2 2 1 2 2 2 1 . . . 
            . . . 2 1 2 2 2 2 2 2 2 2 . . . 
            . . . 2 d f d 2 2 d f d 1 . . . 
            . . . . 3 3 d d d d 3 3 . . . . 
            . . . d . d d d d d d . d . . . 
            . . . d d . d d d d . d d . . . 
            . . . . d d d d d d d d . . . . 
            . . . . . d d 1 1 d d . . . . . 
            . . . . . . d d d d . . . . . . 
            . . . . . . d d d d . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . 2 2 2 1 2 2 . . . . . 
            . . . . 2 1 2 2 2 2 2 2 . . . . 
            . . . 2 2 2 2 2 1 2 2 2 1 . . . 
            . . . 2 1 2 2 2 2 2 2 2 2 . . . 
            . . . 2 d f d 2 2 d f d 1 . . . 
            . . . . 3 3 d d d d 3 3 . . . . 
            . . . d . d d d d d d . d . . . 
            . . . d d . d d d d . d d . . . 
            . . . . d d d d d d d d . . . . 
            . . . . . d d 1 1 d d . . . . . 
            . . . . . . d d d d . . . . . . 
            . . . . . . d d d d . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 2 2 2 1 2 2 . . . . . 
            . . . . 2 1 2 2 2 2 2 2 . . . . 
            . . . 2 2 2 2 2 1 2 2 2 1 . . . 
            . . . 2 1 2 2 2 2 2 2 2 2 . . . 
            . . . 2 d f d 2 2 d f d 1 . . . 
            . . . . 3 3 d d d d 3 3 . . . . 
            . . . d . d d d d d d . d . . . 
            . . . d d . d d d d . d d . . . 
            . . . . d d d d d d d d . . . . 
            . . . . . d d 1 1 d d . . . . . 
            . . . . . . d d d d . . . . . . 
            . . . . . . d d d d . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 2 2 2 1 2 2 . . . . . 
            . . . . 2 1 2 2 2 2 2 2 . . . . 
            . . . 2 2 2 2 2 1 2 2 2 1 . . . 
            . . . 2 1 2 2 2 2 2 2 2 2 . . . 
            . . . 2 d f d 2 2 d f d 1 . . . 
            . . . . 3 3 d d d d 3 3 . . . . 
            . . . d . d d d d d d . d . . . 
            . . . d d . d d d d . d d . . . 
            . . . . d d d d d d d d . . . . 
            . . . . . d d 1 1 d d . . . . . 
            . . . . . . d d d d . . . . . . 
            . . . . . . d d d d . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 2 2 2 1 2 2 . . . . . 
            . . . . 2 1 2 2 2 2 2 2 . . . . 
            . . . 2 2 2 2 2 1 2 2 2 1 . . . 
            . . . 2 1 2 2 2 2 2 2 2 2 . . . 
            . . . 2 d f d 2 2 d f d 1 . . . 
            . . . . 3 3 d d d d 3 3 . . . . 
            . . . d . d d d d d d . d . . . 
            . . . d d . d d d d . d d . . . 
            . . . . d d d d d d d d . . . . 
            . . . . . d d 1 1 d d . . . . . 
            . . . . . . d d d d . . . . . . 
            . . . . . . d d d d . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 2 1 2 2 . . . . 
            . . . . . 2 1 2 2 2 2 2 2 . . . 
            . . . . 2 2 2 2 2 1 2 2 2 1 . . 
            . . . . 2 1 2 2 2 2 2 2 2 2 . . 
            . . . . 2 d f d 2 2 d f d 1 . . 
            . . . . . 3 3 d d d d 3 3 . . . 
            . . . . d . d d d d d d . d . . 
            . . . . d d . d d d d . d d . . 
            . . . . . d d d d d d d d . . . 
            . . . . . . d d 1 1 d d . . . . 
            . . . . . . . d d d d . . . . . 
            . . . . . . . d d d d . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 2 2 1 2 2 . . . 
            . . . . . . 2 1 2 2 2 2 2 2 . . 
            . . . . . 2 2 2 2 2 1 2 2 2 1 . 
            . . . . . 2 1 2 2 2 2 2 2 2 2 . 
            . . . . . 2 d f d 2 2 d f d 1 . 
            . . . . . . 3 3 d d d d 3 3 . . 
            . . . . . d . d d d d d d . d . 
            . . . . . d d . d d d d . d d . 
            . . . . . . d d d d d d d d . . 
            . . . . . . . d d 1 1 d d . . . 
            . . . . . . . . d d d d . . . . 
            . . . . . . . . d d d d . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 2 2 2 1 2 2 . . 
            . . . . . . . 2 1 2 2 2 2 2 2 . 
            . . . . . . 2 2 2 2 2 1 2 2 2 1 
            . . . . . . 2 1 2 2 2 2 2 2 2 2 
            . . . . . . 2 d f d 2 2 d f d 1 
            . . . . . . . 3 3 d d d d 3 3 . 
            . . . . . . d . d d d d d d . d 
            . . . . . . d d . d d d d . d d 
            . . . . . . . d d d d d d d d . 
            . . . . . . . . d d 1 1 d d . . 
            . . . . . . . . . d d d d . . . 
            . . . . . . . . . d d d d . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 2 2 2 1 2 2 . . 
            . . . . . . . 2 1 2 2 2 2 2 2 . 
            . . . . . . 2 2 2 2 2 1 2 2 2 1 
            . . . . . . 2 1 2 2 2 2 2 2 2 2 
            . . . . . . 2 d f d 2 2 d f d 1 
            . . . . . . . 3 3 d d d d 3 3 . 
            . . . . . . d . d d d d d d . d 
            . . . . . . d d . d d d d . d d 
            . . . . . . . d d d d d d d d . 
            . . . . . . . . d d 1 1 d d . . 
            . . . . . . . . . d d d d . . . 
            . . . . . . . . . d d d d . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 2 2 1 2 2 . . . 
            . . . . . . 2 1 2 2 2 2 2 2 . . 
            . . . . . 2 2 2 2 2 1 2 2 2 1 . 
            . . . . . 2 1 2 2 2 2 2 2 2 2 . 
            . . . . . 2 d f d 2 2 d f d 1 . 
            . . . . . . 3 3 d d d d 3 3 . . 
            . . . . . d . d d d d d d . d . 
            . . . . . d d . d d d d . d d . 
            . . . . . . d d d d d d d d . . 
            . . . . . . . d d 1 1 d d . . . 
            . . . . . . . . d d d d . . . . 
            . . . . . . . . d d d d . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 2 1 2 2 . . . . 
            . . . . . 2 1 2 2 2 2 2 2 . . . 
            . . . . 2 2 2 2 2 1 2 2 2 1 . . 
            . . . . 2 1 2 2 2 2 2 2 2 2 . . 
            . . . . 2 d f d 2 2 d f d 1 . . 
            . . . . . 3 3 d d d d 3 3 . . . 
            . . . . d . d d d d d d . d . . 
            . . . . d d . d d d d . d d . . 
            . . . . . d d d d d d d d . . . 
            . . . . . . d d 1 1 d d . . . . 
            . . . . . . . d d d d . . . . . 
            . . . . . . . d d d d . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . 2 2 2 1 2 2 . . . . . 
            . . . . 2 1 2 2 2 2 2 2 . . . . 
            . . . 2 2 2 2 2 1 2 2 2 1 . . . 
            . . . 2 1 2 2 2 2 2 2 2 2 . . . 
            . . . 2 d f d 2 2 d f d 1 . . . 
            . . . . 3 3 d d d d 3 3 . . . . 
            . . . d . d d d d d d . d . . . 
            . . . d d . d d d d . d d . . . 
            . . . . d d d d d d d d . . . . 
            . . . . . d d 1 1 d d . . . . . 
            . . . . . . d d d d . . . . . . 
            . . . . . . d d d d . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . 2 2 2 1 2 2 . . . . . . 
            . . . 2 1 2 2 2 2 2 2 . . . . . 
            . . 2 2 2 2 2 1 2 2 2 1 . . . . 
            . . 2 1 2 2 2 2 2 2 2 2 . . . . 
            . . 2 d f d 2 2 d f d 1 . . . . 
            . . . 3 3 d d d d 3 3 . . . . . 
            . . d . d d d d d d . d . . . . 
            . . d d . d d d d . d d . . . . 
            . . . d d d d d d d d . . . . . 
            . . . . d d 1 1 d d . . . . . . 
            . . . . . d d d d . . . . . . . 
            . . . . . d d d d . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 2 2 2 1 2 2 . . . . . . . 
            . . 2 1 2 2 2 2 2 2 . . . . . . 
            . 2 2 2 2 2 1 2 2 2 1 . . . . . 
            . 2 1 2 2 2 2 2 2 2 2 . . . . . 
            . 2 d f d 2 2 d f d 1 . . . . . 
            . . 3 3 d d d d 3 3 . . . . . . 
            . d . d d d d d d . d . . . . . 
            . d d . d d d d . d d . . . . . 
            . . d d d d d d d d . . . . . . 
            . . . d d 1 1 d d . . . . . . . 
            . . . . d d d d . . . . . . . . 
            . . . . d d d d . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 2 2 2 1 2 2 . . . . . . . . 
            . 2 1 2 2 2 2 2 2 . . . . . . . 
            2 2 2 2 2 1 2 2 2 1 . . . . . . 
            2 1 2 2 2 2 2 2 2 2 . . . . . . 
            2 d f d 2 2 d f d 1 . . . . . . 
            . 3 3 d d d d 3 3 . . . . . . . 
            d . d d d d d d . d . . . . . . 
            d d . d d d d . d d . . . . . . 
            . d d d d d d d d . . . . . . . 
            . . d d 1 1 d d . . . . . . . . 
            . . . d d d d . . . . . . . . . 
            . . . d d d d . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 2 2 2 1 2 2 . . . . . . . . 
            . 2 1 2 2 2 2 2 2 . . . . . . . 
            2 2 2 2 2 1 2 2 2 1 . . . . . . 
            2 1 2 2 2 2 2 2 2 2 . . . . . . 
            2 d f d 2 2 d f d 1 . . . . . . 
            . 3 3 d d d d 3 3 . . . . . . . 
            d . d d d d d d . d . . . . . . 
            d d . d d d d . d d . . . . . . 
            . d d d d d d d d . . . . . . . 
            . . d d 1 1 d d . . . . . . . . 
            . . . d d d d . . . . . . . . . 
            . . . d d d d . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 2 2 2 1 2 2 . . . . . . . 
            . . 2 1 2 2 2 2 2 2 . . . . . . 
            . 2 2 2 2 2 1 2 2 2 1 . . . . . 
            . 2 1 2 2 2 2 2 2 2 2 . . . . . 
            . 2 d f d 2 2 d f d 1 . . . . . 
            . . 3 3 d d d d 3 3 . . . . . . 
            . d . d d d d d d . d . . . . . 
            . d d . d d d d . d d . . . . . 
            . . d d d d d d d d . . . . . . 
            . . . d d 1 1 d d . . . . . . . 
            . . . . d d d d . . . . . . . . 
            . . . . d d d d . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 2 2 2 1 2 2 . . . . . . . 
            . . 2 1 2 2 2 2 2 2 . . . . . . 
            . 2 2 2 2 2 1 2 2 2 1 . . . . . 
            . 2 1 2 2 2 2 2 2 2 2 . . . . . 
            . 2 d f d 2 2 d f d 1 . . . . . 
            . . 3 3 d d d d 3 3 . . . . . . 
            . d . d d d d d d . d . . . . . 
            . d d . d d d d . d d . . . . . 
            . . d d d d d d d d . . . . . . 
            . . . d d 1 1 d d . . . . . . . 
            . . . . d d d d . . . . . . . . 
            . . . . d d d d . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 2 2 2 1 2 2 . . . . . . 
            . . . 2 1 2 2 2 2 2 2 . . . . . 
            . . 2 2 2 2 2 1 2 2 2 1 . . . . 
            . . 2 1 2 2 2 2 2 2 2 2 . . . . 
            . . 2 d f d 2 2 d f d 1 . . . . 
            . . . 3 3 d d d d 3 3 . . . . . 
            . . d . d d d d d d . d . . . . 
            . . d d . d d d d . d d . . . . 
            . . . d d d d d d d d . . . . . 
            . . . . d d 1 1 d d . . . . . . 
            . . . . . d d d d . . . . . . . 
            . . . . . d d d d . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . 2 2 2 1 2 2 . . . . . 
            . . . . 2 1 2 2 2 2 2 2 . . . . 
            . . . 2 2 2 2 2 1 2 2 2 1 . . . 
            . . . 2 1 2 2 2 2 2 2 2 2 . . . 
            . . . 2 d f d 2 2 d f d 1 . . . 
            . . . . 3 3 d d d d 3 3 . . . . 
            . . . d . d d d d d d . d . . . 
            . . . d d . d d d d . d d . . . 
            . . . . d d d d d d d d . . . . 
            . . . . . d d 1 1 d d . . . . . 
            . . . . . . d d d d . . . . . . 
            . . . . . . d d d d . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 2 2 2 1 2 2 . . . . . 
            . . . . 2 1 2 2 2 2 2 2 . . . . 
            . . . 2 2 2 2 2 1 2 2 2 1 . . . 
            . . . 2 1 2 2 2 2 2 2 2 2 . . . 
            . . . 2 d f d 2 2 d f d 1 . . . 
            . . . . 3 3 d d d d 3 3 . . . . 
            . . . d . d d d d d d . d . . . 
            . . . d d . d d d d . d d . . . 
            . . . . d d d d d d d d . . . . 
            . . . . . d d 1 1 d d . . . . . 
            . . . . . . d d d d . . . . . . 
            . . . . . . d d d d . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 2 2 2 1 2 2 . . . . . 
            . . . . 2 1 2 2 2 2 2 2 . . . . 
            . . . 2 2 2 2 2 1 2 2 2 1 . . . 
            . . . 2 1 2 2 2 2 2 2 2 2 . . . 
            . . . 2 d f d 2 2 d f d 1 . . . 
            . . . . 3 3 d d d d 3 3 . . . . 
            . . . d . d d d d d d . d . . . 
            . . . d d . d d d d . d d . . . 
            . . . . d d d d d d d d . . . . 
            . . . . . d d 1 1 d d . . . . . 
            . . . . . . d d d d . . . . . . 
            . . . . . . d d d d . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 2 2 2 1 2 2 . . . . . 
            . . . . 2 1 2 2 2 2 2 2 . . . . 
            . . . 2 2 2 2 2 1 2 2 2 1 . . . 
            . . . 2 1 2 2 2 2 2 2 2 2 . . . 
            . . . 2 d f d 2 2 d f d 1 . . . 
            . . . . 3 3 d d d d 3 3 . . . . 
            . . . d . d d d d d d . d . . . 
            . . . d d . d d d d . d d . . . 
            . . . . d d d d d d d d . . . . 
            . . . . . d d 1 1 d d . . . . . 
            . . . . . . d d d d . . . . . . 
            . . . . . . d d d d . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 2 2 2 1 2 2 . . . . . 
            . . . . 2 1 2 2 2 2 2 2 . . . . 
            . . . 2 2 2 2 2 1 2 2 2 1 . . . 
            . . . 2 1 2 2 2 2 2 2 2 2 . . . 
            . . . 2 d f d 2 2 d f d 1 . . . 
            . . . . 3 3 d d d d 3 3 . . . . 
            . . . d . d d d d d d . d . . . 
            . . . d d . d d d d . d d . . . 
            . . . . d d d d d d d d . . . . 
            . . . . . d d 1 1 d d . . . . . 
            . . . . . . d d d d . . . . . . 
            . . . . . . d d d d . . . . . . 
            `],
        100,
        true
        )
    }
    game.showLongText("\"Thank you Hero for saving us and helping us rebuild our city!\" ", DialogLayout.Bottom)
    game.showLongText("\"Oh and I see that you've brought some souls too. With these many souls, we can create an even more wonderful city than before. The shrooms have been complaining about their homes and how they were not big enough for them. Unfortunately, we were not able to fix them because we did not have the materials. But since you came to help, we can live happier than ever before!\"", DialogLayout.Bottom)
    game.showLongText("\"I am sure that other people need you to help them as well. As one of the 12 great heroes, you must go help other in need as well.\" ", DialogLayout.Bottom)
    game.showLongText("...", DialogLayout.Bottom)
    game.showLongText("\"WHAT!?!  You've never heard of the 12 great heroes?! Then let me tell you.\"", DialogLayout.Bottom)
    game.showLongText("\"Long ago, when all the kingdoms of Mooshroom were united and lived in harmony, 12 leaders rose. They called themselves, the 12 great heroes. Each of these 12 heroes focused on a goal to help improve the lives of their fellow shrooms. But disaster struck and the 12 heroes fell apart.\" ", DialogLayout.Bottom)
    game.showLongText("\"Not soon after the 12 disbanded, shrooms from all over began to encounter problems. In the environment, their homes, everywhere. Now that the 12 heroes have been reborn, everything will be fine.                    ...i hope\"", DialogLayout.Bottom)
    game.showLongText("\"What are the 12 goals you ask. Well, they are the 12 United Nations Sustainable Development Goals.\"", DialogLayout.Bottom)
    game.showLongText("\"Well.. I thank you again for saving our home. I wish you well and good luck on your future journeys...\"", DialogLayout.Bottom)
    KingShroom.destroy()
    game.showLongText("Go find all the villagers", DialogLayout.Bottom)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.villager, function (sprite, otherSprite) {
    mySprite.say(":)")
    info.changeScoreBy(1)
    otherSprite.destroy()
    if (info.score() == 46) {
        game.splash("To find out more about")
        game.splash("the 12 Development Goals")
        game.splash("go to:")
        game.splash("https://sdgs.un.org/goals")
        game.over(true)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.friend, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
    music.baDing.playUntilDone()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.door, function (sprite, otherSprite) {
    if (info.score() == 12) {
        game.splash("Level 2")
        game.splash("Collect 8 golden mushrooms and 6 souls")
        game.showLongText("You have made it so far, great Hero, but there is still a long way to go.", DialogLayout.Bottom)
        game.showLongText("The closer you get to Shroom city, the more ghosts will appear.", DialogLayout.Bottom)
        game.showLongText("To defeat the ghosts, simply jump on heir heads, but beware, one touch on the side and it could cost you your life", DialogLayout.Bottom)
        game.showLongText("After defeating a ghost, you will receive a soul...but", DialogLayout.Bottom)
        game.showLongText("Focus on collecting the golden mushrooms...you are the only hope left for the citizens of Shroom", DialogLayout.Bottom)
        mySprite.destroy()
        otherSprite.destroy()
        tiles.setTilemap(tilemap`level7`)
        for (let value of tiles.getTilesByType(assets.tile`myTile17`)) {
            mySprite = sprites.create(img`
                . . . . . . . 2 2 . . . . . . . 
                . . . . . 2 2 2 2 1 2 . . . . . 
                . . . . 2 2 1 2 2 2 2 2 . . . . 
                . . . 2 1 2 2 2 1 2 2 1 2 . . . 
                . . . 2 2 2 2 2 2 2 2 2 2 . . . 
                . . 1 2 d d 2 1 2 2 d d 2 1 . . 
                . 2 2 b d f d d d d f d b 2 2 . 
                . . . 3 3 d d d d d d 3 3 . . . 
                . . . b d d d d d d d d b . . . 
                . . . . b d d d d d d b . . . . 
                . . . . . b d 1 1 d b . . . . . 
                . . . . . b d 1 1 d b . . . . . 
                . . . . . b d d d d b . . . . . 
                . . . . . b d d d d b . . . . . 
                . . . . . b d b b d b . . . . . 
                . . . . . b b . . b b . . . . . 
                `, SpriteKind.Player)
            tiles.placeOnTile(mySprite, value)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile16`)) {
            newFriends = sprites.create(assets.tile`myTile10`, SpriteKind.friend)
            tiles.placeOnTile(newFriends, value)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile20`)) {
            NextLevelDoor = sprites.create(assets.tile`myTile20`, SpriteKind.newdoor)
            tiles.placeOnTile(NextLevelDoor, value)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
            souls = sprites.create(img`
                ........................
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .......f11111111f.......
                ......fd11111111df......
                ......fd11111111df......
                ......fddd1111dddf......
                ......fbdbfddfbdbf......
                ......fcdcf11fcdcf......
                .......fb111111ffff.....
                ......fffcdb1bc111cf....
                ....fc111cbfbf1b1b1f....
                ....f1b1b1ffffbfbfbf....
                ....fbfbfffffff.........
                .........fffff..........
                ..........fff...........
                ........................
                ........................
                ........................
                ........................
                `, SpriteKind.phantom)
            tiles.placeOnTile(souls, value)
        }
    }
})
let newFriends: Sprite = null
let shoom: Sprite = null
let KingShroom: Sprite = null
let souls: Sprite = null
let NextLevelDoor: Sprite = null
let Leveldoor: Sprite = null
let myFriend: Sprite = null
let mySprite: Sprite = null
game.splash("Level 1")
game.splash("Collect 12 golden mushrooms")
info.setLife(3)
tiles.setTilemap(tilemap`level2`)
game.showLongText("Years ago...", DialogLayout.Bottom)
game.showLongText("the legendary Shroom city was attacked by a pack of ghosts. Many skilled adventurers attempted to make the journey to Shroom to rebuild the city...", DialogLayout.Bottom)
game.showLongText("But none were able to complete the long and dangerous journey.", DialogLayout.Bottom)
game.showLongText("Legend has it that in the year XXXX, a great hero will rise, saving Shroom and the rest of the universe.", DialogLayout.Bottom)
game.showLongText("That legend is true, that time is now.", DialogLayout.Bottom)
game.showLongText("Great Hero, it is up to you to finish the quest and save all of Shroom...", DialogLayout.Bottom)
game.showLongText("Use the arrow keys to move left, right, and jump. After collecting 12 golden mushrooms, make your way to the top door to continue.", DialogLayout.Bottom)
for (let value of tiles.getTilesByType(assets.tile`myTile17`)) {
    mySprite = sprites.create(img`
        . . . . . . . 2 2 . . . . . . . 
        . . . . . 2 2 2 2 1 2 . . . . . 
        . . . . 2 2 1 2 2 2 2 2 . . . . 
        . . . 2 1 2 2 2 1 2 2 1 2 . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 1 2 d d 2 1 2 2 d d 2 1 . . 
        . 2 2 b d f d d d d f d b 2 2 . 
        . . . 3 3 d d d d d d 3 3 . . . 
        . . . b d d d d d d d d b . . . 
        . . . . b d d d d d d b . . . . 
        . . . . . b d 1 1 d b . . . . . 
        . . . . . b d 1 1 d b . . . . . 
        . . . . . b d d d d b . . . . . 
        . . . . . b d d d d b . . . . . 
        . . . . . b d b b d b . . . . . 
        . . . . . b b . . b b . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(mySprite, value)
}
for (let value of tiles.getTilesByType(assets.tile`myTile16`)) {
    myFriend = sprites.create(assets.tile`myTile10`, SpriteKind.friend)
    tiles.placeOnTile(myFriend, value)
}
for (let value of tiles.getTilesByType(assets.tile`myTile8`)) {
    Leveldoor = sprites.create(assets.tile`myTile8`, SpriteKind.door)
    tiles.placeOnTile(Leveldoor, value)
}
forever(function () {
    music.playMelody("F G D C5 A G F D ", 130)
    music.playMelody("C D B G E D C C5 ", 130)
})
forever(function () {
    scene.cameraFollowSprite(mySprite)
    mySprite.setStayInScreen(true)
    mySprite.ay = 250
    controller.moveSprite(mySprite, 100, 0)
})
