import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'PyroSwap',
  description:
    'The First Automatic Liquidity Acquisition Yield Farm & AMM on Arbitrum! Earn PYRO through yield farming or win it in the Lottery',
  image: 'https://pyroswap.com/images/pyro.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('PyroSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('PyroSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('PyroSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('PyroSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('PyroSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('PyroSwap')}`,
      }
    case '/referral':
      return {
        title: `${t('Referral')} | ${t('PyroSwap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('PyroSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('PyroSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('PyroSwap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('PyroSwap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('PyroSwap')}`,
      }
    default:
      return null
  }
}
