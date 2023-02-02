import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { Main } from 'next/document'

const Home = () => {
    return (
        
        <PageContainer>

            <NavBar>
                <Link>
                   <Logo>
                        MKS
                   </Logo>
                </Link>
                <Link>
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
                    <Link>
                        <ButtonNav> Acesse </ButtonNav>
                    </Link>
                    <Link>
                       <ButtonNav> Saiba Mais </ButtonNav>
                    </Link>
                </MainActions>

            </Main>

        </PageContainer>
    )
}

export default Home