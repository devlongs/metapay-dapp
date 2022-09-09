import { useState, useEffect } from 'react';
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import CreateCampaign from '../components/createCampaign'
import { ethers } from 'ethers'
declare let window: any;
import contractABI from '../abi.json'

const PageContainer = styled.div`
  position: relative;
  min-height: 100vh;
  display: grid;
  place-items: center;
`
const ContentWrap = styled.div`
    padding-bottom: 2.5rem;
    width: 95vw;
    max-width: 481px;
    padding: 2rem;
    border-radius: 10px;
    background: #fff;

    /* @media (max-width: 1129px) {
    margin-top: 100px;
  }

   @media (max-width: 547px) {
     margin-top: 150px;
     width: 350px;
  } */
`
const ContainerContent = styled.div`
    
  button {
    margin-left: 25%;
    background: #ffff;
    text-decoration: none;
    padding: 5px 10px;
    outline: none;
    border-radius: 15px;
    border: 1px solid #3870FF;
    color: #3870FF;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    transition: all 0.5s ease-in-out;
    cursor: pointer;

         &:hover {
           background: lighten(#5182fc, 10%);
         }

        &:active {
          color: #ffff;
          background: #3870FF; 
          box-shadow: inset 0px 1px 1px fadeout(black, 90%); 
        }

         &:focus {
           outline: none;
         }

       @media (max-width: 547px) {
          font-size: 16px;
          font-weight: 400px;
          margin-left: 20%;
       }
    
  }

    p {
     font-weight: 300;
     font-size: 20px;
     line-height: 36px;
     color: #3870FF;
     text-align: center;
     margin-bottom: 10px;

     @media (max-width: 547px) {
       font-size: 18px;
     }
    }
`
const ContainerDetail = styled.div`
   display: flex;
   justify-content: center;
`
const Content = styled.div`
   margin-top: 10px;
    
   h2 {
    /* max-width: 350px; */
    font-weight: 400;
    font-size: 18px;
    line-height: 41px;
    color: #3870FF;

    
     @media (max-width: 547px) {
       font-size: 16px;
     }
  }

  button {
        margin-left: 10px;
        background: linear-gradient(180deg, rgba(143, 0, 255, 0.4) 0%, rgba(56, 112, 255, 0.4) 100%);
        border-radius: 10px;
        border: none;
        font-weight: 400;
        font-size: 17.3px;
        width: 150px;
        height: 40px;
        /* line-height: 24px; */
        color: #FFFFFF;
        cursor: pointer;
        margin-bottom: 15px;
     
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
const Button = styled.span`
    font-size: 16px;
    font-weight: 400px;
    padding: .75rem;
    border: 1px solid #3870FF;
    border-radius: 10px;
    color: #3870FF;
    text-align: center;
    margin-left: 25%;
    cursor: pointer;

       @media (max-width: 547px) {
          margin-left: 20%;
       }
`

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;    
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #3870FF;
  /* margin-top: 100px; */
  background: linear-gradient(180deg, rgba(143, 0, 255, 0.25) 0%, rgba(56, 112, 255, 0.25) 99.99%, rgba(217, 217, 217, 0) 100%);

`



const Home = () => {

    // const {ethereum} = window;
    const [date, setDate] = useState<any | null>();
    const [showModal, setShowModal] = useState(false);
    const [createcampaign, setCreateCampaign] = useState([]);
    // const [campaign, setCampaign] = useState([]);
    const [provider, setProvider] = useState<any | null>(null);
    const [signer, setSigner] = useState<any | null>(null);
    const [contract, setContract] = useState<any | null>(null);
    
    //@dev - check Polygon Mumbai for the smart contract and the Abi with this contractAddress
    const contractAddress = "0x8f40926A042745b2e7E9713DC3CDaEa4b9F4f834";

      const updateEthers = () => {
        const tempProvider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(tempProvider);

        //the signer of the contract
        const tempSigner = tempProvider.getSigner();
        setSigner(tempSigner);

        const tempContract = new ethers.Contract(contractAddress, contractABI, tempSigner);
        setContract(tempContract);
      }

    
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
              <CreateCampaign showModal={showModal} setShowModal={setShowModal}
               contract={contract} setCreateCampaign={setCreateCampaign} />
             <PageContainer>
              {/* {loading ? (
           <div className="">Loading...</div>
            ) : ( */}
               
               <ContentWrap>
                   <ContainerContent>
                    <Link href="" >
                      <button onClick={openModal}>CREATE A CAMPAIGN</button>
                    </Link>
                      
                       <p>All Campaigns</p>

                        <ContainerDetail>
                         <Content>
                           <h2>0x35643690....... <button onClick={()=>{}}>View Campaign</button></h2>
                      
                           <h2>0x35643690.......  <button onClick={()=>{}}>View Campaign</button></h2>
            
                           <h2>0x35643690....... <button onClick={()=>{}}>View Campaign</button></h2>

                          <Link href="/Campaigns">
                           <Button onclick={()=>{}}>View all Campaigns</Button>
                         </Link>
                         </Content>
                    </ContainerDetail>
                   </ContainerContent>
               </ContentWrap>
                  {/* )} */}
                  
                  <Footer> Metapay - &copy; {date} </Footer>  
             </PageContainer>            
          </div>
     )
}

export default Home
