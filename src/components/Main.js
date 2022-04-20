import React from 'react'
import styled from 'styled-components';
import {BsCheckCircleFill} from 'react-icons/bs'

const Main = () => {
  return (
    <Container>
        
        <TitleForm>
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
        </TitleForm>
        
        <Details>
            <div className='detail'>
                <div className='title'>
                    <BsCheckCircleFill color='#F9CB17' size={25}/>
                    <h2>No headaches</h2>
                </div>
                <h3>You don't have to worry about<br/>
                going back and forth with the<br/>
                design team, because we'll get it<br/>
                right the first time.
                </h3>
            </div>
            <div className='detail'>
                <div className='title'>
                    <BsCheckCircleFill color='#F9CB17' size={25}/>
                    <h2>Detail-oriented</h2>
                </div>
                <h3>We adore pixels! We obsess over<br/>
                them and understand the effort it<br/>
                takes to make a website beautiful.
                </h3>
            </div>
            <div className='detail'>
                <div className='title'>
                    <BsCheckCircleFill color='#F9CB17' size={25}/>
                    <h2>Simple and accurate</h2>
                </div>
                <h3>We devote a lot of attention to<br/>
                design details, communication,<br/>
                timelines and project management.
                </h3>
            </div>
            <div className='detail'>
                <div className='title'>
                    <BsCheckCircleFill color='#F9CB17' size={25}/>
                    <h2>Fast delivery</h2>
                </div>
                <h3>We've been using Webflow for<br/>
                years and know how to build<br/>
                extremely complex and beautiful<br/>
                designs in record time.
                </h3>
            </div>
        </Details>

    </Container>
  )
}

const Details = styled.div`
    font-family: 'DM Sans', sans-serif;
    display: flex;
    gap:100px;

    div.title{
        display: flex;
        align-items: center;
        gap:20px;
        h2{
            font-weight: 500;
        }
    }
    h3{
        margin: -10px;
        font-weight: 400;
    }
`

const TitleForm = styled.div`
    display: flex;
    padding: 40px;
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

const Form = styled.div`
    font-family: 'DM Sans', sans-serif;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 500px;
    height: 720px;
    background-color: #fff;
    border-radius: 10px;
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

export default Main