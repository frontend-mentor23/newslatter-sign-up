import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools";

const Email = ({ setConfirmed }) => {
  const { register, handleSubmit, resetField, getValues, control, formState } = useForm();
  const { errors } = formState;
  const onSubmit = (data) => {
    setConfirmed(true);
    resetField("email");
  }
  return (
    <section className="email">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-control">
          <label htmlFor="email" className="email__label">Email address</label>
          <input type="text" {...register("email", {
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Valid email required"
            },
            required: "Email is required"
          })}
            placeholder="email@company.com"
            className={`email__input-field ${errors.email?.message && "input-error"}`}
          />
          <p className="error">{errors.email?.message}</p>
        </div>
        <button className="button email__submit-btn"
                disabled={!!errors.email?.message}
        >Subscribe to monthly newsletter
        </button>
      </form>
      <DevTool control={control} />
    </section>
  )
}

export default Email;