import iconSuccess from '../../../assets/images/icon-success.svg'

const Confirmed = ({ setConfirmed }) => {
  return (
    <section className="confirmed">
      <div className="confirmed__content">
        <img src={iconSuccess} alt="icon success" className="icon-success" />
        <h2 className="title confirmed__title">Thanks for subscribing!</h2>
        <p className="text confirmed__text">A confirmation email has been sent to <b className="strong">ash@loremcompany.com</b>. Please open it and click the button inside to confirm your subscription</p>
        <button onClick={() => {setConfirmed(false)}} className="button confirmed__submit-btn">Dismiss message</button>
      </div>
    </section>
  )
}

export default Confirmed;