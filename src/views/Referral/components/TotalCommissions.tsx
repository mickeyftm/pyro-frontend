import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading } from '@pyroswap/uikit'
import { useTranslation } from 'contexts/Localization'

const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
`

const TotalCommissions = () => {
  const { t } = useTranslation()


  return (
    <StyledTotalValueLockedCard>
      <CardBody>
        <Heading scale="lg" mb="24px">
          {t('Total Referral Commissions')}
        </Heading>
          <>
            <Heading scale="xl">{t('0')}</Heading>
          </>
      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default TotalCommissions
