import Form from 'react-bootstrap/Form';

export default function SwitchButton({marca}, isAtivo) {
    return (
        <Form>
      <Form.Check 
        type="switch"
        id="custom-switch"
        label={marca}
        />
    </Form>
  );
}
