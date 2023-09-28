import React, { useState } from "react";

/** Form for creating a new box to add to page.
 *
 * Has state for the height, width, backgroundColor of the box;
 * on submission,
 * sends {height, width, backgroundColor} to fn rec'd from parent.
 *
 * BoxList -> NewBoxForm -> Box
 */

function NewBoxForm({ addBox }) {
  const initialState = { height: '', width: '', backgroundColor: '' };
  const [formData, setFormData] = useState(initialState);

  /** Send {height, width, backgroundColor} to parent
   *    & clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    addBox(formData);
    setFormData(initialState);
  }

  /** Update local state w/curr state of input elem */
  function handleChange(evt) {
    const { name, value } = evt.target;

    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  /** renders form */
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="height">Height</label>
      <input
        type='number'
        id='height'
        name='height'
        value={formData.height}
        onChange={handleChange}
      />

      <label htmlFor="width">Width</label>
      <input
        type='number'
        id='width'
        name='width'
        value={formData.width}
        onChange={handleChange}
      />

      <label htmlFor="backgroundColor">Background Color</label>
      <input
        id='backgroundColor'
        name='backgroundColor'
        value={formData.backgroundColor}
        onChange={handleChange}
      />

      <button>Add a new box!</button>
    </form>
  );
}

export default NewBoxForm;