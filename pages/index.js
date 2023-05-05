import Head from 'next/head'
import Main from '../components/Main'
import NossaHistoria from '../components/NossaHistoria'
import FaleComRepresentante from '../components/FaleComRepresentante'
import Instagram from '../components/Instagram'
import QuemSomos from '../components/QuemSomos'
import HowCanWeHelp from '../components/HowCanWeHelp'
import Services from '../components/Services'


export default function Home() {
  return (
    <div>
      <Head>
        <title>VFX - Montagens Industriais</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>  
      <Main /> 
      <QuemSomos/>
      <HowCanWeHelp/>
      <Services />
      <NossaHistoria/>
      <FaleComRepresentante representante='TEMOS AS MELHORES CONDIÇÕES PARA REVENDEDORES' repmessage='Fale com um' repmessage1='representante'/> 
      <Instagram />  
    </div>
  )
}
