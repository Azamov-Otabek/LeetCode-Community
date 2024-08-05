import { toast, ToastContainer } from "react-toastify";
import { Button, Form, Input } from "antd";
import FormItem from "antd/es/form/FormItem";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [load, setLoadi] = useState(false)
  const navigate = useNavigate()


  async function handleSubmit(values: any) {
    setLoadi(true)
    console.log(values);

    const response = await axios.post('https://leetcode.ulgur.uz/auth/register', values)
    console.log(response);

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
        <div className="login-form" style={{marginTop: 80}}>
          <div className="login-title">
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/free-leetcode-3521542-2944960.png?f=webp"
              alt=""
            />
            <h1>Community</h1>
          </div>

          <div className="login-body">
            <Form onFinish={(values) => handleSubmit(values)}>
              <p>Full Name</p>
              <FormItem
                name="full_name"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please input a valid Full Name!",
                  },
                ]}
                
              >
                <Input size="large" placeholder="John Doe" name="full_name" />
              </FormItem>
              
              <p>Leetcode username</p>
              <FormItem
                name="leetcode_username"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please input a valid leetcode username!",
                  },
                ]}
                
              >
                <Input size="large" placeholder="@JohnDoe" name="leetcode_username" />
              </FormItem>

              <p>Telegram username</p>
              <FormItem
                name="telegram_username"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please input a valid Telegram username!",
                  },
                ]}
                
              >
                <Input size="large" placeholder="@JohnDoe" name="telegram_username" />
              </FormItem>

              <p>Group info</p>
              <FormItem
                name="group_info"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please input a valid Group info!",
                  },
                ]}
                
              >
                <Input size="large" placeholder="go Backed" name=" group_info" />
              </FormItem>
              
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
                <Input size="large" placeholder="ID" name="id" />
              </FormItem>
              
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontWeight: 600}}>
                <p>Password</p>
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
                <Input.Password size="large" name="password" placeholder="password" />
              </FormItem>

              <FormItem>
                <Button loading={load} htmlType="submit" type="primary">
                  Submit
                </Button>
              </FormItem>

              <div className="login-tooltip"></div>

              <Link className="login-link" to={'/'}>
                  Login
              </Link>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
