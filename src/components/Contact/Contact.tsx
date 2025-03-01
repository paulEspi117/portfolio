import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Vous souhaitez me contacter ?</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:paul.espi04@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:paul.espi04@gmail.com">paul.espi04@gmail.com</a>
        </div>
        <div>
        <a href="tel:+33783552230"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+33783552230">(+33) 783552230</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}