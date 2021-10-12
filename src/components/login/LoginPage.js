import LoginForm from "./LoginForm";

import FormContainer from "../../styles/login/LoginPage";

const LoginPage = (props) => {
  return (
    <FormContainer>
      <div>
        <LoginForm />
        <div>
          <p>
            Don't have an account? <a href="/register">Register</a>.
          </p>
        </div>
      </div>
    </FormContainer>
  );
};

export default LoginPage;
