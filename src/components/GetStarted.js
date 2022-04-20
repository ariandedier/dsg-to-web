import React from 'react'
import styled from 'styled-components'

const GetStarted = () => {
  return (
    <Container>

      <Title>
        <h1>Get Started</h1>
        <h3>Let's make something cool</h3>
      </Title>

      <Form>
            <div className='title'>
            <h1>Get started with a free quotation.</h1>
            <h3>If you would like an estimate, please fill in the form at the bottom. We would<br/>
            be happy to work with you.</h3>
            <h2>Pricing: $800 to $1500 per page depending on complexity of pages.</h2>
            </div>
            <div className='places'>
                <h3>Your Name*</h3>
                <input placeholder='Full Name'></input>
                <div className='line'></div>
            </div>
            <div className='places'>
                <h3>Company Name*</h3>
                <input placeholder='Company'></input>
                <div className='line'></div>
            </div>
            <div className='places'>
                <h3>Design file link</h3>
                <input placeholder='e.g your Figma file'></input>
                <div className='line'></div>
            </div>
            <div className='places'>
                <h3>Email Adress*</h3>
                <input placeholder='Your Email'></input>
                <div className='line'></div>
            </div>
            <div className='places'>
                <h3>Tell us about your project*</h3>
                <input placeholder='Deadline, functionalities and scope'></input>
                <div className='line'></div>
            </div>
            <Button>Submit your request</Button>
        </Form>

    </Container>
  )
}

const Container = styled.div`
    margin-top: 100px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-self: center;
    align-items: center;
    box-sizing: border-box;
    border-radius: 20px;
    width: 1600px;
    height: 1100px;
    background: rgb(226,240,249);
    background: linear-gradient(180deg, rgba(226,240,249,1) 0%, rgba(248,244,241,1) 70%);
`
const Title = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px;
    align-items: center;
    color: #272E41;

    h1{
        line-height: 50px;
        font-size: 50px;
    }
    h3{
        margin-top: -10px;
        font-family: 'DM Sans', sans-serif;
        font-weight: 400;
        
      }
    
`

const Form = styled.div`
    font-family: 'DM Sans', sans-serif;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 700px;
    height: 820px;
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    gap:10px;

    div.title{
        align-self: center;
        h1{
        font-size: 22px;
        }
        h3{
          font-weight: 400;
        }
        h2{
          font-size: 15px;
        }
    }

    div.places{
        display: flex;
        flex-direction: column;
        gap:10px;
        align-items: left;
        h3{
            font-size: 17px;
        }
        input{
            width: 100%;
            border: none;
            font-size: 15px;
        }
        div.line{
            display: block;
            width: 100%;
            height: 3px;
            background-color: #f3f3f3;
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
  transition: ease-out 0.7s;
  transition: 1s;
  margin-top: 10px;
  font-family : inherit;
  font-size: 1em;
  :hover{
    background: rgb(249,203,23);
background: linear-gradient(170deg, rgba(249,203,23,1) 0%, rgba(255,238,174,1) 70%);   }
`

export default GetStarted