
import string from './css.js'
//const demo = document.querySelector('#demo')
//const demo2 = document.querySelector('#demo2')

const player = {
    n: 1,
    id: undefined,
    time: 100,
    ui: {
        demo: document.querySelector('#demo'),
        demo2: document.querySelector('#demo2')
    },

    events: {
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast'
    },
    // bindEvents: () => {
    //     document.querySelector('btnPause').onclick = () => {
    //         player.pause()
    //     }
    //     document.querySelector('btnPlay').onclick = () => {
    //         player.play()
    //     }
    //     document.querySelector('btnSlow').onclick = () => {
    //         player.Slow()
    //     }
    //     document.querySelector('btnNormal').onclick = () => {
    //         player.Normal()
    //     }
    //     document.querySelector('btnFast').onclick = () => {
    //         player.Fast()
    //     }
    // },
    //使用哈希表
    init: () => {
        player.ui.demo.innerText = string.substr(0, player.n)
        player.ui.demo2.innerHTML = string.substr(0, player.n)
        player.bindEvents()
        player.play()
    },
    bindEvents: () => {
        for (let key in player.events) {
            if (player.events.hasOwnProperty(key)) {
                const value = player.events[key] // pause / play / slow
                document.querySelector(key).onclick = player[value]
            }
        }

    },
    run: () => {
        player.n += 1
        if (player.n > string.length) {//超过字符串长度则移除定时器
            window.clearInterval(player.id)
            return
        }
        player.ui.demo.innerText = string.substr(0, player.n)
        player.ui.demo2.innerHTML = string.substr(0, player.n)
        player.ui.demo.scrollTop = player.ui.demo.scrollHeight
    },
    play: () => {
        window.clearInterval(player.id)
        player.id = setInterval(player.run, player.time)
    },
    pause: () => {
        window.clearInterval(player.id)
    },
    slow: () => {
        player.pause()
        player.time = 300
        player.play()
    },
    normal: () => {
        player.pause()
        player.time = 100
        player.play()
    },
    fast: () => {
        player.pause()
        player.time = 0
        player.play()
    }
}

player.init()