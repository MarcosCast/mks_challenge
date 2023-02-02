import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Home = () => {
    return (
        
        <PageContainer>
            <NavBar>
                <Link href='/'>
                   <Logo>
                        MKS
                   </Logo>
                   <SubLogo>
                        Sistemas
                   </SubLogo>
                </Link>
                <Link href='/'>
                  <ButtonNav>

                  </ButtonNav>
                </Link>
            </NavBar>

            <Main>
                <Headline>
                    Produtos
                </Headline>
                <SubHeadLine>
                    EM BREVE!
                </SubHeadLine>

                <MainActions>
                </MainActions>
            </Main>
        </PageContainer>
    )
}

export default Home

export const PageContainer = styled.div``
export const NavBar = styled.div`

        height: 101px;
        width: 1440px;
        left: 0px;
        top: 0px;
        border-radius: 0px;

        background: #0F52BA;


`
export const Logo = styled.p`
        height: 44px;
        width: 128px;
        left: 65px;
        top: 28px;
        border-radius: nullpx;

        font-family: 'Montserrat', sans-serif;
        font-size: 40px;
        font-weight: 600;
        line-height: 19px;
        letter-spacing: 0px;
        text-align: left;


`

export const SubLogo = styled.p``

export const Main = styled.main``
export const Headline = styled.h1``
export const SubHeadLine = styled.h2``
export const MainActions = styled.div``
export const Button = styled.button``
export const ButtonNav = styled(Button)``
export const ButtonActions = styled(Button)``

