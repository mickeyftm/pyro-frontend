import React from 'react'
import styled from 'styled-components'
import { Heading, Text } from '@pyroswap/uikit'
import { useTranslation } from 'contexts/Localization'
import Container from 'components/layout/Container'

const Title = styled(Heading).attrs({ as: 'h1', scale: 'xl' })`
  color: #ffffff;
  margin-bottom: 24px;
  text-shadow: 2px 2px 2px #00000040;
`

const ComeBack = styled(Text)`
  background: -webkit-linear-gradient(#ffd800, #eb8c00);
  font-size: 24px;
  font-weight: 600;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const StyledHero = styled.div`
  background-image: linear-gradient(#bd3e3e, #822a2a);
  max-height: max-content;
  overflow: hidden;
  ${({ theme }) => theme.mediaQueries.sm} {
    max-height: 256px;
  }
`

const StyledContainer = styled(Container)`
  display: flex;

  flex-direction: column-reverse;

  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
  }
`

const LeftWrapper = styled.div`
  flex: 1;
  padding-right: 0;
  padding-bottom: 40px;
  padding-top: 40px;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-right: 24px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-right: 32px;
  }
`


const Hero = () => {
  const { t } = useTranslation()

  return (
    <StyledHero>
      <StyledContainer>
        <LeftWrapper>
          <Title>{t('PyroSwap Lottery!')}</Title>
          <ComeBack>{t('Buy lottery tickets with Pyro')}</ComeBack>
          <ComeBack>{t('Win if 2, 3 or 4 of your ticket numbers match!')}</ComeBack>

        </LeftWrapper>

      </StyledContainer>
    </StyledHero>
  )
}

export default Hero
