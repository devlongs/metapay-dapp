import Link from 'next/link'
import styled from 'styled-components'
// import styles from '../styles/Welcome.module.css'


interface IProps {
   setInput: any;
   setCreateCampaign: any;
   contract: any;
   input: any;
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

const CoModal = ({ setInput, contract, setCreateCampaign, input } : IProps) => {

      const setHandler = (e) => {
        e.preventDefault();
        contract.createCampaign(e.target.setText.value)
      }

      // const submitCampaignHandler = (e) => {
      //  e.preventDefault();
      //   setCreateCampaign([
      //     ...contract, 
      //     { text: input, completed: false },
      //   ]);
      //   setInput("")
      // }
              
      // const getcreateCampaign = async () => {
      //   const createCampaign = await contract.createCampaign()
      //   setCreateCampaign(createCampaign);
      // }
     return (
         <Content>
           <form onSubmit={setHandler}>
                <Label>
                 <h3>Minimum Amount</h3> 
                <Input id='setText' type="text" placeholder="20 MATIC" />
                </Label>
                         
               <Label>
                   <h3>Address</h3>
                  <Input id='setText' type="text" placeholder="0x8f40926A042745b2e7E9713DC3CDaEa4b9F4f834" />
               </Label>
               
                  <Button type={"submit"}>Create</Button>
          </form>

            

{/*                         
                          <Label>
                            <h3>Wallet Address</h3>
                             <Input value={input} type="text" onChange={inputHandler}/>
                          </Label>
                         */}
                         {/* <Label>
                             <h3>Description of Campaign</h3>
                            <textarea className={styles.textarea} value=""
                            onChange={()=>{}}
                            >
                            </textarea>
                         </Label> */}
                        
                         {/* <div className={styles.select}>
                             <H3>Duration of Campaign</H3>
                             <select className={styles.selectStyle}>
                               <option value="all">6 days</option>
                               <option value="completed">1 week</option>
                               <option value="uncompleted">2 week</option>
                             </select>
                         </div> */}
                       </Content>
     )
}

export default CoModal
