import { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

function BoxList() {
  const [formData, setFormData] = useState({
    height: '',
    width: '',
    backgroundColor: ''
  });

  function handleChange(evt) {
    const { name, value } = evt.target;

    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  return (
    <div>

    </div>
  );
}

export default BoxList;