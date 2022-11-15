import Head from 'next/head'
import Main from '../components/Main'
import ComoComprar from '../components/ComoComprar'
import QuemSomos from '../components/QuemSomos'
import FaleComRepresentante from '../components/FaleComRepresentante'
import Instagram from '../components/Instagram'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Prado Calçados</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>  
      <Main /> 
      <QuemSomos />
      <ComoComprar />
      <FaleComRepresentante representante='TEMOS AS MELHORES CONDIÇÕES PARA REVENDEDORES' repmessage='Fale com um' repmessage1='representante'/> 
      <Instagram />
      
       
    </div>
  )
}
