import React from "react";
import Input from "./formComponents/input";
import styles from "./contato.module.css"
import TextArea from "./formComponents/textArea";
import Button from "./formComponents/button";
import emailjs from 'emailjs-com'

const Contato = () => {
  const [name, setName] = React.useState('')
  const [mensagem, setMensagem] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [error, setError] = React.useState(null)
  
  async function handleSubmit(event) {
    event.preventDefault()

    if (name && mensagem) {
      const templateParams = {
        from_name: "Luan Pacifico",
        name: name,
        email: email,
        menssagem: mensagem,
      };
  
      const response = await emailjs.send(
        "service_xal7uf9", // Replace with your EmailJS Service ID
        "template_czpkb5t", // Replace with your EmailJS Template ID
        templateParams,
        "2w_fhCjUCsj2fCz7d" // Replace with your EmailJS Public Key
      )
      console.log(response)
      
      if (!response.ok) {
        setError("Erro no envio do email")
      }

      setEmail("")
      setName("")
      setMensagem("")
      setError(null)
    }
  }

  return (
    <form 
      className={`${styles.form} animeLeft`}
      onSubmit={handleSubmit}
    >
      <h1 className="title">Contato</h1>  
      <div className={styles.formContainer}>
        <Input
          required
          label="Seu nome" 
          name="nome"
          placeholder="João"
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          required
          label="Seu email" 
          name="email"
          type="email"
          placeholder="joao@outlook.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextArea 
          required
          label="Sua menságem"
          placeholder="Escreva aqui."
          name="mensagem"
          rows={6}
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
        />
        <Button
          onClick={handleSubmit}
          type="submit"
          error={error}
        >
          Enviar
        </Button>
      </div>
    </form>
  )
}

export default Contato