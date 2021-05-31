import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'PYRO',
    lpAddresses: {
      97: '',
      4: '0x489e754e3bc89A1911539b17A1b9c2D2E68F21EC',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
    harvestLockup: '2 Hours',
  },
  {
    pid: 4,
    lpSymbol: 'PYRO-ETH LP',
    lpAddresses: {
      97: '',
      4: '0x945e87dC0174c954fC6158cF101dB8442c0C8959',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
    harvestLockup: '2 Hours',
  },
  {
    pid: 5,
    lpSymbol: 'ETH-USDT LP',
    lpAddresses: {
      97: '',
      4: '0xb04804dfd1F4E4Ee3fc42D98B2f7C38AAF3BC4A8',
    },
    token: tokens.wbnb,
    quoteToken: tokens.busd,
    harvestLockup: '2 Hours',
  },

]

export default farms
