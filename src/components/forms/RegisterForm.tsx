import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  Button,
  InputContainer,
  InputField,
  InputLabel,
} from "../../utils/styles";
import styles from "./index.module.scss";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);
  const onSubmit = (data: any) => {
    console.log("123 : " + data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <InputLabel htmlFor="email">Email</InputLabel>
        <InputField
          type="email"
          id="email"
          {...register("email", {
            required: "Email is required",
          })}
        />
      </InputContainer>

      <section className={styles.nameFieldRow}>
        <InputContainer>
          <InputLabel htmlFor="firstName">First Name</InputLabel>
          <InputField
            type="text"
            id="firstName"
            {...register("firstName", {
              required: "First Name is required",
            })}
          />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="lastName">Last name</InputLabel>
          <InputField
            type="text"
            id="lastName"
            {...register("lastName", {
              required: "Last Name is required",
            })}
          />
        </InputContainer>
      </section>

      <InputContainer>
        <InputLabel htmlFor="password">Password</InputLabel>
        <InputField
          type="password"
          id="password"
          {...register("password", {
            required: "Password is required",
          })}
        />
      </InputContainer>

      <Button className={styles.button}> Create My account </Button>

      <div className={styles.footerText}>
        <span>Already have an account? </span>
        <Link to="/login">Login</Link>
      </div>
    </form>
  );
};
