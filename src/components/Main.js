import React from 'react'
import styled from 'styled-components';

const Main = () => {
  return (
    <Container>

        <Text>
            <h1>We turn your design<br/>into a live webflow<br/>project</h1>
            <h3>You've invested time and money into your design fies.<br/>
            Now you can extend your investment by taking advantage of our turnkey<br/>
            webflow development services, without the hassle.
            </h3>
        </Text>

        <Form>
            <div className='title'>
            <h1>Get started with a free quotation.</h1>
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
  margin-top: 10px;
  font-family : inherit;
  font-size: 1em;
  :hover{
    background-color: #FFE600;
  }
`

const Form = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 500px;
    height: 720px;
    background-color: #fff;
    border-radius: 10px;
    font-family: 'DM Sans', sans-serif;
    padding: 20px;
    gap:10px;

    div.title{
        align-self: center;
        h1{
        font-size: 22px;
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

const Text = styled.div`
    display: flex;
    flex-direction: column;
    padding: 200px;
    color: #272E41;
    h1{
        line-height: 50px;
        font-size: 50px;
    }
    h3{
        font-family: 'DM Sans', sans-serif;
        font-weight: 400;
    }
`

const Container = styled.div`
    display: flex;
    align-self: center;
    align-items: center;
    box-sizing: border-box;
    border-radius: 20px;
    width: 1600px;
    height: 800px;
    background: rgb(226,240,249);
    background: linear-gradient(180deg, rgba(226,240,249,1) 0%, rgba(248,244,241,1) 70%);
`

export default Main