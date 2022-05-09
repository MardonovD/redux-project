const TodosForm = () => {
  return (
    <form className="mb-3 d-flex justify-content-between align-items-center">
      <div>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="yoz.. "
        />
      </div>
      <button className="btn btn-success">Add</button>
    </form>
  );
};
export default TodosForm;
