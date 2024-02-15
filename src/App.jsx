import './App.css'
import NavButtons from './components/NavButtons'
import Images from './components/Images'
import OrderForm from './components/OrderForm'
import decoration from '/src/assets/decoration 1.svg'
import decoration2 from '/src/assets/decoration 2.svg'
import decoration3 from '/src/assets/decoration 3.svg'
import Info from './components/Info'
import Contact from './components/Contact'

function App() {
  

  return (
    <>
      <div className='homepage'>
        <h1>FullMetal Threadist</h1>
        <NavButtons />
        
        <div className='image1'>
          <Images source={decoration} alt='Alchmey Symbol' />
        </div>

        <OrderForm />
      </div>
      
      <div className='image2'>
        <Images source={decoration2} alt='Alchmey Symbol' />
      </div>

      <div className='image3'>
        <Images source={decoration3} alt='Alchmey Symbol' />
      </div>
      
      <Info />
      <Contact />
    </>
  )
}

export default App
