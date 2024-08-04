import { toast, ToastContainer } from "react-toastify";
import "./style.scss";
import { Button, Form, Input } from "antd";
import FormItem from "antd/es/form/FormItem";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [load, setLoadi] = useState(false)
  const navigate = useNavigate()


  async function handleSubmit(values: any) {
    setLoadi(true)
    console.log(values);
    setTimeout(() => {
      setLoadi(false)
    }, 3000);
    toast.success("Login Successful!", {autoClose: 1500});
    setTimeout(() => {
      navigate('/dashboard')
    }, 2000);
  }

  return (
    <>
      <ToastContainer />

      <div className="login">
        <div className="login-form">
          <div className="login-title">
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/free-leetcode-3521542-2944960.png?f=webp"
              alt=""
            />
            <h1>Community</h1>
          </div>

          <div className="login-body">
            <Form onFinish={(values) => handleSubmit(values)}>
              <p>Email</p>
              <FormItem
                name="email"
                hasFeedback
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please input a valid email!",
                  },
                ]}
                
              >
                <Input prefix={<MailOutlined />} size="large" placeholder="Email" name="email" />
              </FormItem>
              
              <p>Password</p>
              <FormItem
                name="password"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please input a valid password",
                  },
                ]}
              >
                <Input.Password prefix={<LockOutlined/>} size="large" name="password" placeholder="password" />
              </FormItem>

              <FormItem>
                <Button loading={load} htmlType="submit" type="primary">
                  Submit
                </Button>
              </FormItem>

              <div className="login-tooltip"></div>

              <Link className="login-link" to={'/'}>
                  Register
              </Link>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
