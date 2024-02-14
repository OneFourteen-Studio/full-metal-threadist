import './App.css'
import NavButtons from './components/NavButtons'
import Images from './components/Images'
import OrderForm from './components/OrderForm'
import decoration from '/src/assets/decoration 1.svg'
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
    
      <Info />
    </>
  )
}

export default App
