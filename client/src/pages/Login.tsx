import { useForm, type SubmitHandler } from "react-hook-form";

interface IFormInput {
  fullNname: string;
  email: string;
  password: string;
}

const Login = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  return (
    <div className="flex h-screen p-2 gap-2">
      <div className="w-1/2  bg-gray-200 rounded-lg flex items-center justify-center text-4xl">
        Chat App
      </div>

      <div className="w-1/2  bg-gray-200 rounded-lg">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="h-full flex flex-col items-center justify-center gap-2"
        >
          <label>Email</label>
          <input
            {...register("email")}
            className="w-72 h-9 border border-black rounded-md px-2"
          />

          <label>Password</label>
          <input
            type="password"
            {...register("password")}
            className="w-72 h-9 border border-black rounded-md px-2"
          />

          <button
            type="submit"
            className="w-72 h-9 border bg-blue-500 rounded-md"
          >
            login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
