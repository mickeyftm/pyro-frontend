import { MenuEntry } from '@pyroswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    items: [
      {
        label: t('Exchange'),
        href: 'https://dex.pyroswap.com/#/swap',
      },
      {
        label: t('Liquidity'),
        href: 'https://dex.pyroswap.com/#/pool',
      },
    ],
  },
  {
    label: t('Farms'),
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: t('Pools'),
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: t('Lottery'),
    icon: 'TicketIcon',
    href: '/lottery',
  },
  {
    label: t('Referral'),
    icon: 'ReferralIcon',
    href: '/referral',
  },

  {
    label: t('Info'),
    icon: 'InfoIcon',
    items: [
      {
        label: t('Overview'),
        href: 'https://pyroswap.info',
      },
      {
        label: t('Tokens'),
        href: 'https://pyroswap.info/tokens',
      },
      {
        label: t('Pairs'),
        href: 'https://pyroswap.info/pairs',
      },
    ],
  },
  {
    label: t('IFO'),
    icon: 'IfoIcon',
    href: '/ifo',
  },
  {
    label: t('More'),
    icon: 'MoreIcon',
    items: [
      {
        label: t('Contact'),
        href: 'https://docs.pyroswap.com/contact-us',
      },
      {
        label: t('Voting'),
        href: 'https://voting.pyroswap.com',
      },
      {
        label: t('Github'),
        href: 'https://github.com/pyroswap',
      },
      {
        label: t('Docs'),
        href: 'https://docs.pyroswap.com',
      },
      {
        label: t('Blog'),
        href: 'https://pyroswap.medium.com',
      },
    ],
  },
]

export default config
