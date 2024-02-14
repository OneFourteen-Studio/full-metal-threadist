import './App.css'
import NavButtons from './components/NavButtons'
import Images from './components/Images'
import OrderForm from './components/OrderForm'
import decoration from '/src/assets/decoration 1.svg'
import decoration2 from '/src/assets/decoration 2.svg'
import decoration3 from '/src/assets/decoration 3.svg'
import Info from './components/Info'
function App() {
  

  return (
    <>
      <div className='homepage'>
        <h1>FullMetal Threadist</h1>
        <NavButtons />
        <Images source={decoration} alt='Alchmey Symbol' className='image1' />
        <OrderForm />
      </div>
      
      {/* <Images source={decoration2} alt='Alchmey Symbol' className='image2'/>
      <Images source={decoration3} alt='Alchmey Symbol' className='image3'/> */}
      <Info />
    </>
  )
}

export default App
