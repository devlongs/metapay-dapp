import { useRef, useEffect, useCallback } from 'react'
import { useSpring, animated } from 'react-spring'
import Link from 'next/link'
import styled from 'styled-components'
import { MdOutlineClose } from 'react-icons/md'
import styles from '../styles/Welcome.module.css'

interface IProps {
   showModal: any;
   setShowModal: any;
}

const Background = styled.div`
     width: 100%;
     height: 100%;
     background: linear-gradient(180deg, rgba(143, 0, 255, 0.5) 0%, rgba(56, 112, 255, 0.5) 100%);
     position: fixed;
     display: flex;
     justify-content: center;
     align-items: center;
     z-index: 1000;
`
const ModalWrapper = styled.div`
     border-radius: 20px;
     width: 600px;
     height: 650px;
     background: #fff;
     z-index: 10;
     
     @media (max-width: 547px) { 
       width: 352px;
       height: 650px;
     }
`
const ModalContent = styled.div`
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     line-height: 1.8;
   
     h1 {
        color: #3870FF;
        font-weight: 500;
        font-size: 35px;
        line-height: 130%;
        text-align: center;
        margin-top: 80px;

       @media (max-width: 547px) { 
        font-size: 25px;
      }
     }

     p {
       font-weight: 400;
       font-size: 20px;
       line-height: 130%;
       color: #3870FF;
       text-align: center;
       max-width: 400px;
       margin-top: 38px;


      @media (max-width: 547px) { 
        font-size: 16px;
        max-width: 290px;
      }

     }

     button {
          text-decoration: none;
          padding: 20px 50px;
          background: linear-gradient(180deg, rgba(143, 0, 255, 0.5) 0%, rgba(56, 112, 255, 0.5) 100%);
          border-radius: 20px;
          border: none;
          color: #fff;
          margin-top: 80px;
          font-weight: 500;
          font-size: 25px;
          line-height: 130%;
     }
`

const CloseModalButton = styled(MdOutlineClose)`
     cursor: pointer;
     position: relative;
     width: 25px;
     height: 25px;
     /* padding: 0; */
     margin-top: 20px;
     border-radius: 50%;
     color: #fff;
     background-color: #8F00FF;
     z-index: 10;
     margin-bottom: 5px;
`
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
`;

const H3 = styled.h3`
    font-weight: 400;
     font-size: 17px;
     line-height: 30px;
     color: #3870FF;
     margin-top: 10px;
` 
const Create = styled.span`
   background: #8F00FF;
   border-radius: 10px;
   margin-top: 40px;
   width: 100px;
   height: 40px;
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

const Modal = ( {showModal, setShowModal} : IProps) => {

      const modalRef = useRef();
      
      const animation = useSpring({
        config: {
          duration: 300
        }, 
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(100%)`
      })

      const closeModal = (e) => {
         if(modalRef.current === e.target) {
          setShowModal(false)
         }
      }

      const keyPress = useCallback(e => {
        if(e.key === 'Escape' && showModal) {
          setShowModal(false)
        }
      }, [setShowModal, showModal])

      useEffect(() => {
          document.addEventListener('keydown', keyPress);
          return () => document.removeEventListener('keydown', keyPress);
      }, [keyPress])


     return (
        <>
         {showModal ? (
            <Background ref={modalRef} onClick={closeModal}>
               {/* animating the whole container properties*/}
               <animated.div style={animation}>
               <ModalWrapper showModal={showModal}>
                    <ModalContent>
                           <CloseModalButton aria-label="Close Modal" 
                          onClick={() => setShowModal(prev => !prev)}
                           />
                           
                       <Content>
                         <Label>
                           <h3>Name of Campaign</h3> 
                          <Input type="text"/>
                         </Label>
                         
                         <Label>
                            <h3>Name of Campaign Organizer</h3>
                           <Input type="text"/>
                         </Label>
                        
                          <Label>
                            <h3>Wallet Address</h3>
                             <Input type="text"/>
                          </Label>
                        
                         <Label>
                             <h3>Description of Campaign</h3>
                            <Input type="text"/>
                         </Label>
                        
                         <div className={styles.select}>
                             <H3>Duration of Campaign</H3>
                             <select className={styles.selectStyle}>
                               <option value="1">6 days</option>
                               <option value="2">1 week</option>
                               <option value="3">2 week</option>
                             </select>
                         </div>
                         
                       </Content>

                         <Link href="/Create">
                         <Create onClick={()=> {}}><h2>Create</h2></Create>
                        </Link>
                     
                 
                    </ModalContent>
               </ModalWrapper>
               </animated.div>
            </Background>
         ): 
            null} 
        </>
     )
}

export default Modal
