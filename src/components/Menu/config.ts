import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://falafelswap.com/'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://falafelswap.com/farms'
  },
  {
    label: 'Staking',
    icon: 'PoolIcon',
    href: 'https://falafelswap.com/pools',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x9c5D0C6a3be22B5dbd18275527CC17FB6327d696',
      },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x5824bbe60efd1b321abb3975f07388d898da5c9f',
      },
      /* {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/falafel-swap',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/falafel-swap/',
      },
       */
    ]
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/falafelswap/",
      },
      {
        label: "Docs",
        href: "https://falafelswap.gitbook.io/falafel-swap/",
      },
      {
        label: "Blog",
        href: "https://falafelswap.medium.com",
      },
    ],
  },
  /* {
    label: 'Audit by Hacken',
    icon: 'AuditIcon',
    href: 'https://falafelswap.com/files/hackenAudit.pdf',
  }, */
]

export default config
