import { useState, useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import logo from '../assets/metapay-logo.svg';
import styles from '../styles/Welcome.module.css'
// declare let window: any;
import ConnectionButton from "../components/ConnectionButton";

const Nav = styled.nav`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FFFF;
  z-index: 1000;
  padding: 30px 10%;
  height: 80px;
  box-shadow: 0px 2px 20px #3870FF;
  top: 0;
`
const Button  = styled.button`
  cursor: pointer;
  /* padding: 10px 35px; */
  background: linear-gradient(180deg, rgba(143, 0, 255, 0.7) 0%, rgba(56, 112, 255, 0.7) 100%);
  border: none;
  border-radius: 15px;
  width: 160px;
  height: 50px;
  transition: all 0.3s ease 0s;
  color: #fff;
  font-weight: 600;
  font-size: 17px;
  line-height: 28px;

  &:hover {
     background-color: rgba(56, 112, 255, 0.7);
  }

   @media (max-width: 547px) {
       font-size: 14px;
   }
`

const Navbar = () => {
    
    // const [errorMessage, setErrorMessage] = useState<any | null>(null)
    // const [defaultAccount, setDefaultAccount] = useState<any | null>(null)
    // const [connButtonText, setConnButtonText] = useState('Connect Wallet')

    //   const connectWallet = () => {
    //     if (window.ethereum) {
    //         window.ethereum.request({ method: 'eth_requestAccounts'})
    //         .then(result => {
    //           accountChangedHandler(result[0]);
    //           setConnButtonText('Wallet Connected')
    //         })
    //     } else {
    //       //@dev - this message will be print out on the broswer if you have not install MetaMask
    //       setErrorMessage(alert('Need to install MetaMask to continue with MetaPay!'))
    //     }
    //   }

    //   const accountChangedHandler = (newAccount) => {
    //     setDefaultAccount(newAccount);
    //   }

     
     return (

     <Nav>
       <Head>
        <title>MetaPay</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
               <Link href="/">
                <div className={styles.logo2}>
                <Image src={logo} alt="metapay logo" />
                </div>
               </Link>
               {/* Wagmi Connection Button */}
               <ConnectionButton />

               {/* <Button onClick={connectWallet}>{connButtonText}</Button> */}
               {/* @dev - error message that will be printed on the browser */}
               {/* {errorMessage} */}
          </Nav>
     )
}

export default Navbar
