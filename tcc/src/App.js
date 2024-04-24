import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bubbles from './componentes/Bubbles.js';
import './componentes/bubbles.css'
import Nav from './tags/nav'
import './tags/nav.css'
import BackHome from './componentes/back-home';
import './componentes/back-home.css'
import CardSimple from './componentes/CardSimple';
import './componentes/CardSimple.css';
import CardComplex 

function App() {

  return (
    <div className="App">
      <BackHome />
      <Nav />
      {/*  Fragmentar o main em 2(+) sections  */}
      <main>
        {/* Customizar a Class App-section-entrar */}
        <section className='w-full h-2/3  App-section-entrar'>
          <Bubbles />
          <p className="Subtexto">Bem-vindo!</p>
          <h2 >Olá, <input type="text" name="nome" id="nome" className="Input-nome" /></h2>

          <button className="btn-entrar">Entrar</button>
        </section>
        <section className="w-full h-2/3 App-section-sobre flex" id="sobre">
  
          {/* Dividir em cards (MAX 3) */}
          {/* <div className='rounded-lg py-4 px-2 bg-[aliceblue] text-justify	'>
            <img src='https://www.placeholder.com/260x280' alt='' />
            <h2 className='Subtexto text-center'>Luiz Gustavo</h2>
            <p>Front-End/Back-End/Full-Stack</p>

          </div> */}

          <CardSimple />

          {/* Fim card */}

          {/* Infos add */}
          <p className="ml-10 text-[aliceblue]">
            Front-End, Back-End, Full-Stack
          </p>
        </section>

        <section className="w-full h-2/3 App-section-projeto flex" id="projeto">

        </section>
      </main>
      <footer>

      </footer>
    </div>

  )
}


export default App;
