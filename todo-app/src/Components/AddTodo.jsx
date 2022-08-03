import { useState } from "react"
import { Button, Form } from "react-bootstrap"
import { v4 as uuidv4 } from "uuid"
import { FaPlus } from "react-icons/fa"

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()

    addTodo({
      text,
      id: uuidv4(),
      completed: false,
    })

    setText("")
  }

  return (
    <Form style={{ display: "flex" }} onSubmit={onSubmit}>
      <Form.Group style={{ width: "100%", marginBottom: 20 }}>
        <Form.Control
          type="text"
          placeholder="Add todo"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
      </Form.Group>
      <div style={{ marginLeft: 10 }}>
        <Button type="submit">
          <FaPlus />
        </Button>
      </div>
    </Form>
  )
}

export default AddTodo