import { toast, ToastContainer } from "react-toastify";
import "./style.scss";
import { Button, Form, Input } from "antd";
import FormItem from "antd/es/form/FormItem";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
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
              <p>ID</p>
              <FormItem
                name="id"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please input a valid id!",
                  },
                ]}
                
              >
                <Input prefix={<UserOutlined />} size="large" placeholder="ID" name="id" />
              </FormItem>
              
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontWeight: 600}}>
                <p>Password</p>
                <a href="https://checkered-scarf-9d2.notion.site/Leetcode-Community-1c7c56f5618c41e8ae5d95d6fa7c48f7" target="_blank">Qo'shimcha ma'lumot</a>
              </div>
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

              <Link className="login-link" to={'/register'}>
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
