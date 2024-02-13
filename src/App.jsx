import './App.css'
import NavButtons from './components/NavButtons'
import Images from './components/Images'
import OrderForm from './components/OrderForm'
import decoration from '/src/assets/decoration 1.svg'
function App() {
  

  return (
    <>
      <h1>FullMetal Threadist</h1>
      <NavButtons />
      <Images source={decoration} alt='Alchmey Symbol' className='image1' />
      <OrderForm />
    </>
  )
}

export default App
