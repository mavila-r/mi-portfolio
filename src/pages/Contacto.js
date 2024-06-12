import { Helmet } from 'react-helmet';
import whatsapp from '../assets/icons8-whatsapp-50 (1).png';
import gmail from '../assets/icons8-gmail-64.png'


const DisenoDesarrolloWeb = () => {
  return (
    <div>
      <Helmet>
        <title>Contacto - Tere Ávila</title>
        <meta name="description" content="Página de contacto" />
      </Helmet>
      <h1>¡CONTACTA CONMIGO!</h1>

      <div className='datosContacto'>
        <p>
          Si tienes cualquier pregunta, consulta o comentario, tienes los siguientes medios para contactar conmigo:<br />
        </p>
        <div className='ContactDirect'>
          <div className='ContactDetails'>
            <img src={whatsapp} alt="whatsapp" />
            <div className='ContactText'>
              <h3>Whatsapp</h3>
              <p>+34674766255</p>
            </div>
          </div>
          <div className='ContactDetails'>
            <img src={gmail} alt="gmail" />
            <div className='ContactText'>
              <h3>Gmail</h3>
              <p>tavilarey@gmail.com</p>
            </div>
          </div>
        </div>


      </div>

      <div className='PadreForm'>

        <div className='form'>
          <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contact" />
            <p style={{ display: "none" }}>
              <label>No llenar este campo: <input name="bot-field" /></label>
            </p>
            <div className='NomTel'>
              <div className='Nombre'>
                <label htmlFor="nombre">NOMBRE</label>
                <input placeholder='Tu nombre' type="text" id="nombre" name="nombre" required /><br />
              </div>
              <div className='Telefono'>
                <label htmlFor="telefono">TELÉFONO</label>
                <input placeholder='Tu teléfono' type="tel" id="telefono" name="telefono" /><br />
              </div>
              <div className='Email'>
                <label htmlFor="email">EMAIL</label>
                <input placeholder='Tu correo electrónico' type="email" id="email" name="email" required /><br />
              </div>
            </div>
            <br />
            <div className='Mensaje'>
              <label htmlFor="mensaje">MENSAJE</label>
              <textarea placeholder='Deja aquí tu mensaje' id="mensaje" name="mensaje" required></textarea><br />
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>


      </div>
      <br /><br />
      <div className='CVContacto'>
        <h2>¿QUIERES CONOCERME MEJOR?</h2>
        <br /><br />
        <a className='Curriculum' href="https://drive.google.com/file/d/1-nkKJkwEmOkiqKO2XIIFpC6sxTKvNOYO/view?usp=sharing" target='blank'>Aquí tienes mi Currículum</a>
      </div>
    </div>
  );
}

export default DisenoDesarrolloWeb;
