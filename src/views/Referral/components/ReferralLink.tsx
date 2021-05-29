import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Button } from '@pyroswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useWeb3React } from '@web3-react/core'
import { createReferral } from 'utils/referralHelpers';
import UnlockWalletCard from '../UnlockWalletCard'


const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
`

const ButtonWrapper = styled.div`
  left: 8px;
  display: inline;
  margin: 25px;
`

const ReferralLink = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()


  return (
    <StyledTotalValueLockedCard>
      <CardBody>
        <Heading scale="lg" mb="24px">
          {t('Your Referral Link')}

          <ButtonWrapper>
            <Button type="submit" scale="sm">
              {t('Copy')}
            </Button>
          </ButtonWrapper>

        </Heading>
          <>
          {!account ? <UnlockWalletCard /> : <Heading scale="md">{createReferral(account)}</Heading>}

          </>



      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default ReferralLink
