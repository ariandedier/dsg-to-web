import React from 'react'
import styled from 'styled-components';

const HowWorks = () => {
  return (
    <Container>
        <Text>
            <h1>How it Works</h1>
            <h3>We'll turn your Figma, XD or Sketch file into a pixel perfect<br/>
            Webflow Project ready to publish!</h3>
        </Text>

        <Cards>
            <div className='card'>
                <div className='title'>
                    <h2>1</h2><h3>Costs and timeline</h3>
                </div>
                <h1>Share your designs</h1>
                <h3>We'll review your design in detail<br/>
                and give you a full price<br/>
                breakdown with timeline.
                </h3>
            </div>
            <div className='card'>
                <div className='title'>
                    <h2>2</h2><h3>Building on Webflow</h3>
                </div>
                <h1>Development</h1>
                <h3>If you're happy with the cost, <br/>
                we'll start work right now, by<br/>
                building each page across<br/>
                mobile, tablet and desktop.
                </h3>
            </div>
            <div className='card'>
                <div className='title'>
                    <h2>3</h2><h3>Final polish</h3>
                </div>
                <h1>Provide feedback</h1>
                <h3>Once we're 90% of the way<br/>
                through the construction of<br/>
                your website, you will review the<br/>
                site on our staging and provide<br/>
                feedback.
                </h3>
            </div>
            <div className='card'>
                <div className='title'>
                    <h2>4</h2><h3>Release</h3>
                </div>
                <h1>Launch new website</h1>
                <h3>Once we have finished putting<br/>
                the website through final<br/>
                testing, we will transfer it to<br/>
                your Webflow account and<br/>
                launch.
                </h3>
            </div>
        </Cards>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Text = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    text-align: center;
    line-height: 30px;
    h1{
        font-weight: 700;
        font-size: 45px;
    }
    h3{
        font-family: 'DM Sans', sans-serif;
        font-weight: 400;
    }
`

const Cards = styled.div`
    display: flex;
    gap: 25px;
    margin-top: 50px;

    div.card{
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: left;
        font-family: 'DM-Sans', sans-serif;
        box-sizing: border-box;
        width: 350px;
        height: 400px;
        padding: 30px;
        border: 2px solid #F9CB17;
        border-radius: 10px;
        line-height: 25px;
        -webkit-box-shadow: 0px 9px 15px -5px rgba(0,0,0,0.5); 
        box-shadow: 0px 9px 15px -5px rgba(0,0,0,0.5);
        transition: ease-out 0.3s;

        :hover{
            background: linear-gradient(326deg, rgba(255,225,107,1) 0%, rgba(255,249,227,1) 70%); 
        }

        h3{
            font-weight: 400;
        }
        h1{
            font-size: 28px;
        }

        div.title{
            display: flex;
            gap:20px;
            align-items: center;
            text-align: center;
            h2{
                width: 15px;
                height: 15px;
                padding: 15px;
                line-height: 15px;
                border-radius: 50%;
                background-color: #F9CB17;
            }
        }
    }
`

export default HowWorks