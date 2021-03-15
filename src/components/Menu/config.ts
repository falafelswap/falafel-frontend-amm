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
        href: 'https://pancakeswap.info/token/0x1d54B2d7e2b8C6F2F3A84914E8720595a579ECe4',
      },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x35f4e1af8d76f33ce8b051b6c15050afab9e83e2',
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
        href: "https://docs.falafelswap.com/",
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
