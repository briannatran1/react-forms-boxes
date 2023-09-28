function Box({ width, height, backgroundColor }) {
  const boxStyle = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: backgroundColor
  };

  return (
    <div className="Box" style={boxStyle}></div>
  );
}

export default Box;