import { useState } from "react";

function ToDo(props) {
  const [frm, setfrm] = useState("");
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.newInf(frm);
        }}
      >
        <h1 className="text-center fw-bolder mt-1 ">To Do List</h1>
        <div className="input-group mb-3 ">
          <input
            className="form-control"
            type="text"
            onChange={(e) => {
              setfrm(e.target.value);
            }}
          />
          <button class="btn btn-info">Add</button>
        </div>
      </form>
    </>
  );
}
export default ToDo;
