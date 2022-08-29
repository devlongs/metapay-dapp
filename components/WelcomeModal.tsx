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
     background: linear-gradient(180deg, rgba(143, 0, 255, 0.7) 0%, rgba(56, 112, 255, 0.7) 100%);
     position: fixed;
     display: flex;
     justify-content: center;
     align-items: center;
     z-index: 10;
`
const ModalWrapper = styled.div`
     border-radius: 30px;
     width: 600px;
     height: 600px;
     background: #fff;
     z-index: 10;
     
     @media (max-width: 547px) { 
       width: 500px;
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
        font-size: 30px;
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
        font-size: 18px;
        max-width: 350px;
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

const WelcomeModal = ( {showModal, setShowModal} : IProps) => {

      const modalRef = useRef();
      
      const animation = useSpring({
        config: {
          duration: 250
        }, 
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
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
                           
                         <h1>Welcome to MetaPay</h1>

                         <p>You will need a crypto wallet like MetaMask to interact with MetaPay. 
                              Please if you don’t have it, we require you to install it 
                              in your available devices. If you have one please proceed 
                              and click the button below. Thanks!</p>
                     <Link href="/Home">
                         <button>Proceed</button>
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

export default WelcomeModal
