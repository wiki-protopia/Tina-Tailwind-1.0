import presales from 'images/presales.svg'
import launchpad from 'images/launchpad.svg'
import specialsales from 'images/specialsales.svg'
import lock from 'images/lock.svg'
import utilitytools from 'images/utilitytools.svg'
import alerts from 'images/alerts.svg'
import KYC from 'images/KYC.svg'
import Docs from 'images/Docs.svg'
import telegram from 'images/telegram.svg'
import bird from 'images/bird.svg'
import discord from 'images/discord.svg'
import facehair from 'images/facehair.svg'
import mamba_back from 'images/mamba_back.svg'
import mamba_main from 'images/mamba_main.svg'
import padcommon from 'images/padcommon.svg'
import swap_back from 'images/swap_back.svg'
import swap_main from 'images/swap_main.svg'
import ape_back from 'images/ape_back.svg'
import ape_main from 'images/ape_main.svg'
import game_back from 'images/game_back.svg'
import game_main from 'images/game_main.svg'
import chain_back from 'images/chain_back.svg'
import chain_main from 'images/chain_main.svg'

export const mockdata = {
    sidesection: {
        sideitemdata: [
            {
                id: 1,
                svgsrc: presales,
                title: "Presales",
                submenu: true,
            },
            {
                id: 2,
                svgsrc: launchpad,
                title: "LaunchPad",
                submenu: true,
            },
            {
                id: 3,
                svgsrc: specialsales,
                title: "Special Sales",
                submenu: true,
            },
            {
                id: 4,
                svgsrc: lock,
                title: "Lock",
                submenu: true,
            },
            {
                id: 5,
                svgsrc: utilitytools,
                title: "Utility & Tools",
                submenu: true,
            },
            {
                id: 6,
                svgsrc: alerts,
                title: "Presale Alerts",
            },
            {
                id: 7,
                svgsrc: KYC,
                title: "KYC & Audits",
            },
            {
                id: 8,
                svgsrc: Docs,
                title: "Docs",
            },
        ],
        sideicondata: [
            {
                id: 1,
                svgsrc: telegram,
            },
            {
                id: 2,
                svgsrc: bird,
            },
            {
                id: 3,
                svgsrc: discord,
            },
            {
                id: 4,
                svgsrc: facehair,
            },
        ],
    },
    mainsection: {
        padcommonsrc: padcommon,
        padcarddata: [
            {
                id: 1,
                backsrc: mamba_back,
                mainsrc: mamba_main,
                title: "Bitmamba",
                description: "Decentralised Exchange",
                amount: "X100",
            },
            {
                id: 2,
                backsrc: swap_back,
                mainsrc: swap_main,
                title: "StarCorn Swap",
                description: "Decentralised Exchange",
                amount: "X10",
            },
            {
                id: 3,
                backsrc: ape_back,
                mainsrc: ape_main,
                title: "Ape Legend",
                description: "NFT Platform",
                amount: "X85",
            },
            {
                id: 4,
                backsrc: game_back,
                mainsrc: game_main,
                title: "GamePad",
                description: "Launchpad",
                amount: "X1000",
            },
            {
                id: 5,
                backsrc: chain_back,
                mainsrc: chain_main,
                title: "PinkChain",
                description: "Blockchain Network",
                amount: "X100",
            },
        ],
    },
}