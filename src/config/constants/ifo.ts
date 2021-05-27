import { Ifo } from './types'

const ifos: Ifo[] = [
  {
    id: 'pyro',
    address: '0x55344b55C71Ad8834C397E6e08dF5195cF84fe6d',
    isActive: true,
    name: 'TokenName (TOKEN)',
    subTitle: 'Project short description',
    description:
      'Project long description',
    launchDate: 'June. 4',
    launchTime: '5PM UTC',
    saleAmount: '10,000,000 TOKEN',
    raiseAmount: '$800,000',
    cakeToBurn: '$400,000',
    projectSiteUrl: 'https://pyroswap.com/',
    currency: 'PYRO-ETH LP',
    currencyAddress: '0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6',
    tokenDecimals: 18,
    tokenSymbol: 'TOKEN',
    releaseBlockNumber: 5294924,
    campaignId: '511070000',
  },
]

export default ifos
