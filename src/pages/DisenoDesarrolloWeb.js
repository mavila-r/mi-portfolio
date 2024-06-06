import { Helmet } from 'react-helmet';
import html from '../assets/logos apps/html.png'
import css from '../assets/logos apps/css.png'
import js from '../assets/logos apps/js.png'
import react from '../assets/logos apps/react.png'
import ts from '../assets/logos apps/ts.png'
import figma from '../assets/logos apps/figma.png'


const DisenoDesarrolloWeb = () => {
  return (
    <div>
      <Helmet>
        <title>Diseño y Desarrollo Web - Tere Ávila</title>
        <meta name="description" content="Ejemplos y trabajos de diseño y desarrollo web." />
      </Helmet>
      <h2>Diseño y Desarrollo Web</h2>
      <h3 className='h3centered'>Skills</h3>
      <div className='Skills'>
      <div className='SkillsImg'><img src={html} alt='logo'/></div>
      <div className='SkillsImg'><img src={css} alt='logo'/></div>
      <div className='SkillsImg'><img src={js} alt='logo'/></div>
      <div className='SkillsImg'><img src={react} alt='logo'/></div>
      <div className='SkillsImg'><img src={ts} alt='logo'/></div>
      <div className='SkillsImg'><img src={figma} alt='logo'/></div>

      </div>
      <br/>

      <h3 className='h3centered'>Proyectos</h3>
      <p>
      Tutorial <br />
      Aplicación <br />
      Agencia Colocación? <br />
      Proyectos Ficticios <br />
      La mariquita roja Baby <br />

      </p>
    </div>
  );
}

export default DisenoDesarrolloWeb;
