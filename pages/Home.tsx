import { useState, useEffect } from 'react';
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Modal from '../components/Modal'


const Wrapper = styled.span`
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 0;
   height: 100vh;
   width: 100%;
   overflow: hidden;
`
const Container = styled.div`
  background: #ffff;
  border-radius: 10px;
  width: 550px;
  height: 600px;
  margin-top: 70px;

  @media (max-width: 1129px) {
    margin-top: 100px;
  }

   @media (max-width: 547px) {
     margin-top: 150px;
     width: 350px;
  }
`
const ContainerContent = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    h1 {
     font-weight: 500;
     font-size: 30px;
     line-height: 41px;
     color: #3870FF;
     margin-top: 70px;

    @media (max-width: 547px) {
      font-size: 25px;
    }
    
    }

  button {
    background: #ffff;
    text-decoration: none;
    padding: 5px 10px;
    outline: none;
    border-radius: 10px;
    border: 1px solid #8F00FF;
    color: #8F00FF;
    font-weight: 300;
    font-size: 15px;
    line-height: 24px;
    transition: all 0.5s ease-in-out;
    cursor: pointer;

         &:hover {
           background: lighten(#b53ef5, 10%);
         }

        &:active {
          color: #ffff;
          background: #8F00dd; 
          box-shadow: inset 0px 1px 1px fadeout(black, 90%); 
        }

         &:focus {
           outline: none;
         }
  }

    p {
     font-weight: 300;
     font-size: 20px;
     line-height: 36px;
     color: #3870FF;
     margin-bottom: 10px;

     @media (max-width: 547px) {
       font-size: 20px;
     }
    }
`
const ContainerDetail = styled.div`
   display: flex;
   justify-content: center;
`
const Content = styled.div`
   margin-top: 20px;
    
   h2 {
    /* text-align: center; */
    max-width: 350px;
    font-weight: 400;
    font-size: 20px;
    line-height: 41px;
    color: #3870FF;

    
     @media (max-width: 547px) {
       font-size: 18px;
     }
  }

  button {
        margin-left: 20px;
        background: linear-gradient(180deg, rgba(143, 0, 255, 0.4) 0%, rgba(56, 112, 255, 0.4) 100%);
        border-radius: 10px;
        border: none;
        font-weight: 400;
        font-size: 18px;
        width: 80px;
        height: 40px;
        line-height: 24px;
        color: #FFFFFF;
        cursor: pointer;
       
          
    &:hover {
      background: lighten(#b53ef5, 10%);
    }
    &:active {
      color: #ffff;
      background: #8F00dd; 
      box-shadow: inset 0px 1px 1px fadeout(black, 90%); 
    }

    &:focus {
      outline: none;
    }
  }

`
// const Button = styled.button`

// `

const Footer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #3870FF;
  margin-top: -50px;


   @media (max-width: 1129px) {
     margin-top: 50px;
  }
`

const Home = () => {

    const [date, setDate] = useState<any | null>();
    const [showModal, setShowModal] = useState(false);
    
      const openModal = () => {
        setShowModal(prev => !prev)
      }

    const getYear = () => {
      setDate(new Date().getFullYear())
    } 

    useEffect(() => {
        getYear();
    }, [])

     return (
             <div>
              {/* @dev - Navbar component is here */}
              <Navbar />
              {/* @dev - Modal display component is here */}
              <Modal showModal={showModal} setShowModal={setShowModal} />
             <Wrapper>
               <Container>
                   <ContainerContent>
                      <h1>CREATE A CAMPAIGN</h1>
                      <button onClick={openModal}>Create</button>
                       <p>list of campaigns available on MetaPay</p>
                   </ContainerContent>


                    <ContainerDetail>
                         <Content>
                           <h2>Poverty Eradication <button onClick={()=>{}}>Donate</button></h2>
                      
                           <h2>Flood Victims Support  <button onClick={()=>{}}>Donate</button></h2>
            
                           <h2>Fire Outbreak Support <button onClick={()=>{}}>Donate</button></h2>
                         </Content>
                    </ContainerDetail>
               </Container>
             </Wrapper>

                <Footer> Metapay - &copy; {date} </Footer>
          </div>
     )
}

export default Home
