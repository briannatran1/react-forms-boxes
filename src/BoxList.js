import { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from 'uuid';

/** BoxList: manages boxes on page
 *
 * State:
 * - boxes: array like [ { id, height, width, backgroundColor }, ... ]
 *
 * BoxList -> NewBoxForm -> Box
 */

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  /** Adds a new box. */
  function addBox(box) {
    let newBox = { ...box, id: uuid() };
    setBoxes(boxes => [...boxes, newBox]);
  }

  /** Removes an existing box */
  function removeBox(boxId) {
    setBoxes(boxes => boxes.filter(box => box.id !== boxId));
  }

  return (
    <div>
      <NewBoxForm addBox={addBox} />
      <div className="Box-container">
        {boxes.map((box) => (
          <Box
            id={box.id}
            key={box.id}
            width={box.width}
            height={box.height}
            backgroundColor={box.backgroundColor}
            removeBox={removeBox}
          />)
        )}
      </div>
    </div>
  );
}

export default BoxList;