import {useState, useEffect} from 'react'
import Link from 'next/link'
import styled from 'styled-components'
// import styles from '../styles/Welcome.module.css'
import { ethers } from 'ethers'
declare let window: any;
import contractABI from '../abi/abi.json'
import { METAPAY_CONTRACT_ADDRESS } from '../config'

interface IProps {
}

const Content = styled.div`
     display: grid;
     place-items: center;
     inline-size: 90%;
     margin-inline: auto;
     max-inline-size: 20rem;
`
const Label = styled.label`
     /* margin-top: 20px; */
     h3 {
      font-weight: 400;
     font-size: 17px;
     line-height: 30px;
     color: #3870FF;
      margin-bottom: 10px;
     }
`

const Input = styled.input`
  /* margin-top: -15px; */
  font-size: 16px;
  width: 20em;
  height: 3em;
  outline: none;
  border: 1px solid #8F00FF;
  color: #3870FF;
  border-radius: 10px;
  margin-bottom: 30px;

  &::placeholder {
    color: #3870FF;
    font-size: 13px;
  }
`;

const H3 = styled.h3`
    font-weight: 400;
     font-size: 17px;
     line-height: 30px;
     color: #3870FF;
     margin-top: 10px;
`
const Button = styled.span`
  position: relative;
   background: #8F00FF;
   color: #ffff;
   border-radius: 10px;
   margin-bottom: -40px;
   padding: 10px 20px;
   border: none;
   cursor: pointer;

   h2 {
    text-align: center;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: #FFFFFF;
   }
`

//  const initialFormData = Object.freeze({
//        amount: "",
//        address: ""
// });

const CoModal = () => {

    const [createcampaign, setCreateCampaign] = useState("");
    const [createcampaign2, setCreateCampaign2] = useState("");  
    const [amount, setAmount] = useState(0)

    const handleAmount = (e:any)=>{
    setAmount(e.target.value)
  }   
       
      const requestAccount = async () => {
       await window.ethereum.request({method : "eth_requestAccounts"});
      }

      const createThis = async () => {

        //if MetaMask exists
        if(typeof window.ethereum !== 'undefined') {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const contract = new ethers.Contract(METAPAY_CONTRACT_ADDRESS, contractABI, provider);
          try {
            //@dev - this will call contractABI.createCampaign()
            /* 
              function createCampaign(uint minimum) public {
              Campaign newCampaign = new Campaign(minimum, msg.sender);

               deployedCampaigns.push(newCampaign);
             }
            */
            const data = await contract.createCampaign();
            console.log("Data:", data);
          } catch(error) {
           console.log('Error: ', error);
          }
        }
      }

      const setCreate = async () => {
        if (!createcampaign) return;

        // If MetaMask exists
        if (typeof window.ethereum !== 'undefined') {

          await requestAccount();
          
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();

          //Create contract with signer
          const contract = new ethers.Contract(METAPAY_CONTRACT_ADDRESS, contractABI, signer);
          const transaction = await contract.createCampaign(createcampaign);
          const transaction2 = await contract.createCampaign(createcampaign2);
 
          setCreateCampaign("");
          setCreateCampaign2("");
          await transaction.wait();
          await transaction2.wait();
          createThis();
        }
      }


  // const [formData, updateFormData] = useState(initialFormData);

    
  // const handleChange = (e : any) => {
  //   updateFormData({
  //     ...formData,

  //     // Trimming any whitespace
  //     [e.target.name]: e.target.value.trim()
  //   });
  // };


      // const setHandler = async (e : any) => {
      //   e.preventDefault();
      //   console.log(formData)
      // }
   
      // const getcreateCampaign = async () => {
      //   const createCampaign = await contract.createCampaign()
      //   setCreateCampaign(createCampaign);
      // }
     return (
         <Content>
           <form>
                <Label>
                 <h3>Minimum Amount</h3> 
                 {/* name="amount" */}
                <Input
                 type="text" 
                 onChange={(e) => setCreateCampaign(e.target.value)}
                 value={createcampaign}
                  placeholder="10 MATIC" 
                 />
                </Label>
                         
               <Label>
                   <h3>Address</h3>
                   {/*  name="address" */}
                  <Input  
                  type="text"
                  onChange={(e) => setCreateCampaign2(e.target.value)}
                  value={createcampaign2}
                  placeholder="0x8f40926A042745b2e7E9713DC3CDaEa4b9F4f834"
                   />
               </Label>
               
                  <Button onClick={setCreate}>Create</Button>
          </form>

            </Content>
     )
}

export default CoModal
