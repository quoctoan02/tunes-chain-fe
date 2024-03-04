import { InputNumber } from "@/libs/ui/input"
import { Form } from "antd"
import { FC } from "react"

interface FormExampleProps {}

const FormExample: FC<FormExampleProps> = () => {
  const [form] = Form.useForm()
  return (
    <div>
      <Form form={form}>
        <Form.Item
          name="amount"
          rules={[
            {
              async validator(rule, value) {
                if (value.includes("3")) throw new Error("Invalid amount")
              },
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
      </Form>
    </div>
  )
}

export default FormExample
