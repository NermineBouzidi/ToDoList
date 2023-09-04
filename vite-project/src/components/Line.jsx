import "./Line.css";
function Line(props) {
  return (
    <>
      <div className="input-group mb-3">
        <div className="input-group-text">
          <input
            className="form-check-input mt-0"
            type="checkbox"
            value=""
            aria-label="Checkbox for following text input"
          />
        </div>
        <input
          type="text"
          className="form-control"
          aria-label="Text input with checkbox"
          value={props.frm}
        />
      </div>
    </>
  );
}
export default Line;
