/** Creates new box div
 *
 * Props:
 * - width
 * - height
 * - backgroundColor
 * - removeBox
 * - id
 *
 * BoxList -> NewBoxForm -> Box
 */

function Box({ width, height, backgroundColor, removeBox, id }) {
  const boxStyle = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: backgroundColor
  };

  /** removes box using id when clicking remove button */
  function handleClick() {
    removeBox(id);
  }

  return (
    <div>
      <div className="Box"
        style={boxStyle}></div>
      <button
        className="Box-remove-button"
        onClick={handleClick}>Remove the box!</button>
    </div>

  );
}

export default Box;