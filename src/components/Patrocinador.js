import React from 'react'
import Ellipse2 from '../assets/Ellipse 2.svg';
import Rectangle8 from '../assets/Rectangle 8.svg';
import Rectangle9 from '../assets/Rectangle 9.svg';


function Patrocinador() {
  return (
    <section className='lg:h-screen flex flex-col justify-center pt-[110px] lg:pt-[185px] items-center h-[100vh]'>
      <div className='flex flex-col justify-center items-center'>
        <img src={Rectangle8} className=' mr-[250px] w-[50px] lg:w-[80px]' />
        <h1 className='text-white text-2xl lg:text-3xl'>PATROCINADOR</h1>
        <img src={Rectangle9} className='ml-[250px] w-[50px] lg:w-[80px] ' />

        <div className='lg:flex flex-row mt-10 gap-[30px] lg:ml-[150px] patracinador '>
          <img src={Ellipse2} className='lg:ml-[5%]' />
          <p className='text-[#fff] text-center lg:text-left w-[30%] lg:w-[440px] float-right text-[14px] pt-[20px] lg:pt-10'>
              Presente no mercado desde 1940, a Eternit é líder de mercado no segmento de coberturas, com atuação nos segmentos de louças, metais sanitários e soluções construtivas. Conta com cerca de 2.500 colaboradores diretos e indiretos (em todas as unidades da Eternit e suas controladas), 8 fábricas próprias, 5 filiais de vendas, além de cerca de 15 mil revendedores por todo o Brasil. Saiba mais em <a href='www.eternit.com.br'>www.eternit.com.br</a> </p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <button className='text-white p-3 lg:mt-10 mt-10' id='btn'><a href='mailto:colecao@estourefugiado.org.br'> PRÉ VENDA </a></button>
          <button className='p-4 w-[700px] text-white lg:w-[500px] mb-0 btn1 mt-5  '> 2023 © estou refugiado ONG
            <br />Powered By: Tomorrow Byte
          </button>
        </div>

      </div>
    </section>
  )
}

export default Patrocinador;