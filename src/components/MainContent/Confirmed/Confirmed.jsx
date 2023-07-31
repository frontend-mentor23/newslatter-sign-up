import iconSuccess from '../../../assets/images/icon-success.svg'

const Confirmed = ({ email, setEmail }) => {

  const handleClick = () => {
    setEmail(prevState => {
      return { ...prevState, isConfirmed: false }
    })
  }

  return (
    <section className="confirmed">
      <div className="confirmed__content">
        <img src={iconSuccess} alt="icon success" className="icon-success" />
        <h2 className="title confirmed__title">Thanks for subscribing!</h2>
        <p className="text confirmed__text">A confirmation email has been sent to <b className="strong">{email.address}</b>. Please open it and click the button inside to confirm your subscription</p>
        <button onClick={handleClick} className="button confirmed__submit-btn">Dismiss message</button>
      </div>
    </section>
  )
}

export default Confirmed;