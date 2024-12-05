import { useForm } from 'react-hook-form';
import './App.css';
type formField = {
  email: string;
  password: string;
};
function App() {
  const { register, handleSubmit, formState } = useForm<formField>();

  console.log(formState, 1111111);

  const onSubmit = async (data: formField) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };

  return (
    <>
      <form
        className="tutorial gap-2 bg-slate-800"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          {...register('email', {
            required: {
              value: true,
              message: 'Email is required',
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Invalid email format',
            },
          })}
          type="text"
          placeholder="Email"
        />
        {formState.errors.email && (
          <span className="text-red-500">{formState.errors.email.message}</span>
        )}
        <input
          {...register('password', {
            required: {
              value: true,
              message: 'Password is required',
            },
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters long',
            },
          })}
          type="password"
          placeholder="Password"
        />
        {formState.errors.password && (
          <span className="text-red-500">
            {formState.errors.password.message}
          </span>
        )}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
