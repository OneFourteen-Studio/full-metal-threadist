import './App.css'
import NavButtons from './components/NavButtons'
import Images from './components/Images'
import OrderForm from './components/OrderForm'
function App() {
  

  return (
    <>
      <h1>FullMetal Threadist</h1>
      <NavButtons />
      <Images source="/src/assets/decoration 1.svg" alt='Alchmey Symbol' className='image1' />
      <OrderForm />
    </>
  )
}

export default App
