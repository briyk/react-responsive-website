
//importing Components
import {Blog,Features,Footer,Header,Possibility,WhatGPT} from './containers'
import {Navbar,Brand,Cta} from './components'

//importing general styles
import './App.css'

const App = () => {
  return (
    <div className='App'>
        <div className="gradient__bg">
            <Navbar/>
            <Header/>
        </div>
        <Brand/>
        <WhatGPT/>
        <Features/>
        <Possibility/>
        <Cta/>
        <Blog/>
        <Footer/>
    </div>
  )
};

export default App;
