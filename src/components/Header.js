import React from 'react'
import styled from 'styled-components';
import {GiMeshBall} from 'react-icons/gi'

const Header = () => {
  return (
    <Container>
      <Head>
        <div className='logo'>
        <GiMeshBall size={30}/>
        <h1>All to Webflow</h1>
        </div>

        <div className='links'>
          <h3>How it Works</h3>
          <h3>Pricing</h3>
          <h3>FAQ</h3>
          <Button>Get Started</Button>
        </div>
      </Head>
    </Container>
    )
}

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  font-family: 'DM Sans', sans-serif;
  min-width: 140vh;
`

const Head = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-between;
  align-items: center;
  color: #012622;

  div.logo{
    display: flex;
    align-items: center;
    gap:5px;
      h1{
        font-weight: 700;
      }
  }

  div.links{
    display: flex;
    gap:50px;
    align-items: center;
    text-align: center;
    align-content: center;
    h3{
      cursor: pointer;
      font-weight: 500;
      transition: ease-out 0.3s;
      padding: 7px;
      border-radius: 10px;
      :hover{
        background-color: #000;
        color: #fff;
      }
    }
  }
`

const Button = styled.button`
  cursor: pointer;
  height:10px;
  background-color: #F9CB17;
  border: none;
  border-radius: 10px;
  padding: 20px;
  font-weight: 700;
  line-height: 0px;
  transition: ease-out 0.3s;
  font-family : inherit;
  font-size: 1em;
  :hover{
    background-color: #FFE600;
  }
`

export default Header