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
import presales_back from "images/presales_back.svg"
import stacking_back from "images/stacking_back.svg"
import token_back from "images/token_back.svg"
import airdrop_back from "images/airdrop_back.svg"
import flowcard_back from "images/flowcard_back.svg"
import flowcard_icon from "images/flowcard_icon.svg"
import generated_back from "images/generated_back.svg"
import generated_icon from "images/generated_icon.svg"
import unique_back from "images/unique_back.svg"
import unique_icon from "images/unique_icon.svg"
import funds_back from "images/funds_back.svg"
import funds_icon from "images/funds_icon.svg"
import tokero_icon from "images/tokero_icon.svg"
import rikkei_icon from "images/rikkei_icon.svg"
import elrond_icon from "images/elrond_icon.svg"
import codevix from "images/codevix_icon.svg"
import copper from "images/copper_icon.svg"

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
        upcarddata: [
            {
                id: 1,
                backsrc: presales_back,
                title: "Presales",
                description: "Browse The Best Upcoming Projects",
                submenu: [
                    {
                        id: 1,
                        color: "#F20CEC",
                        title: "Create Presales",
                    },
                    {
                        id: 2,
                        color: "#F20CEC",
                        title: "Browse Presale",
                    },
                ],
            },
            {
                id: 2,
                backsrc: stacking_back,
                title: "Staking",
                description: "Stake $TINA",
                submenu: [
                    {
                        id: 1,
                        color: "#E2815D",
                        title: "Stake TINA",
                    },
                    {
                        id: 2,
                        color: "#E2815D",
                        title: "Browse Presale",
                    },
                ],
            },
            {
                id: 3,
                backsrc: token_back,
                title: "Tokens",
                description: "Create your own Token with FREE Audit inlcuded",
                submenu: [
                    {
                        id: 1,
                        color: "#89B68E",
                        title: "Browse Presale",
                    },
                ],
            },
            {
                id: 4,
                backsrc: airdrop_back,
                title: "Airdropt",
                description: "free tool for airdrops",
                submenu: [
                    {
                        id: 1,
                        color: "#0C7FEA",
                        title: "Airdropt",
                    },
                ],
            },
        ],
        flowcarddata: [
            {
                id: 1,
                backsrc: flowcard_back,
                iconsrc: flowcard_icon,
                title: "Total Project",
                amount: "491",
                result: "+20%",
            },
            {
                id: 2,
                backsrc: generated_back,
                iconsrc: generated_icon,
                title: "Total Generated Tokens",
                amount: "45",
                result: "+10%",
            },
            {
                id: 3,
                backsrc: unique_back,
                iconsrc: unique_icon,
                title: "Total Unique Users",
                amount: "22,911",
                result: "+20%",
            },
            {
                id: 4,
                backsrc: funds_back,
                iconsrc: funds_icon,
                title: "Total Funds Raised",
                amount: "$18,429,936",
                result: "+40%",
            },
        ],
        partnerdata: [
            {
                id: 1,
                imgsrc: tokero_icon,
            },
            {
                id: 2,
                imgsrc: rikkei_icon,
            },
            {
                id: 3,
                imgsrc: elrond_icon,
            },
            {
                id: 4,
                imgsrc: codevix,
            },
            {
                id: 5,
                imgsrc: copper,
            },
        ],
    },
}