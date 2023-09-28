/** Creates new box div
 *
 * Props:
 * - width
 * - height
 * - backgroundColor
 * - removeBox
 *
 * BoxList -> NewBoxForm -> Box
 */

function Box({ width, height, backgroundColor, removeBox }) {
  const boxStyle = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: backgroundColor
  };

  return (
    <div>
      <div className="Box"
        style={boxStyle}></div>
      <button
        className="Box-remove-button"
        onClick={removeBox}>Remove the box!</button>
    </div>

  );
}

export default Box;