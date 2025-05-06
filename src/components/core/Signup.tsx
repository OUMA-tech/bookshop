import { Button, Form, Input } from "antd"
import Layout from "./Layout"

function Signup() {
  return (
    <Layout title="ALBOOK" subTitle="Sign Up Now">
        <Form
            layout="horizontal"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}>
            <Form.Item name="name" label="Alias">
                <Input />
            </Form.Item>
            <Form.Item name="password" label="Password">
                <Input />
            </Form.Item>
            <Form.Item name="email" label="Email">
                <Input />
            </Form.Item>
            <Form.Item name="email">
                <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
        </Form>
    </Layout>
  )
}

export default Signup