import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.cake,
    earningToken: tokens.cake,
    contractAddress: {
      97: '0x7e6dB6BA3ee86907C59fd4538e1040Cc7821Aa00',
      4: '0x7e6dB6BA3ee86907C59fd4538e1040Cc7821Aa00',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
  },

]

export default pools
