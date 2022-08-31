import { useRef, useEffect, useCallback } from 'react'
import { useSpring, animated } from 'react-spring'
import Link from 'next/link'
import styled from 'styled-components'
import { MdOutlineClose } from 'react-icons/md'

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
       width: 350px;
       height: 600px;
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
     padding: 0;
     margin-top: 20px;
     border-radius: 50%;
     color: #fff;
     background-color: #8F00FF;
     z-index: 10;
`
const Content = styled.div`
     display: grid;
     place-items: center;
     inline-size: 90%;
     margin-inline: auto;
     max-inline-size: 20rem;
`

const Label = styled.h3`
     margin-top: 30px;
     font-weight: 400;
     font-size: 18px;
     line-height: 30px;
     color: #3870FF;
     display: flex;
`

const Input = styled.input`
  margin-top: -15px;
  font-size: 16px;
  width: 100%;
  height: 40px;
  outline: none;
  border: 1px solid #8F00FF;
  color: #3870FF;
  border-radius: 10px;

`;

const WelcomeModal = ( {showModal, setShowModal} : IProps) => {

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
                         <Label>Name of Campaign</Label>
                         <Input type="text"/>
                         <Label>Name of Campaign Organizer</Label>
                         <Input type="text"/>
                          <Label>Wallet Address of Campaign Organizer</Label>
                         <Input type="text"/>
                         <Label>Description of Campaign</Label>
                         <Input type="text"/>
                         <Label>Duration</Label>
                         <Input type="text"/>
                       </Content>
                     
                     {/* <Link href="/Home">
                         <button>Proceed</button>
                    </Link> */}
                    </ModalContent>
               </ModalWrapper>
               </animated.div>
            </Background>
         ): 
         null} 
        </>
     )
}

export default WelcomeModal
