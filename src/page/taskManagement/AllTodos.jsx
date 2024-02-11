/* eslint-disable react/no-unescaped-entities */
import useTodos from "../../hooks/useTodos";


const AllTodos = () => {
  const [todos] = useTodos();
  console.log(todos);
  return (
    <div>
      <h1 className="text-center mb-3">All Todo's</h1>
      <div className="row row-cols-3 pb-5" style={{ gap: "20px", textAlign: "center", justifyContent: 'center' }}>
        {
          todos.map(todo => <div key={todo._id} className="card" style={{ width: "18rem" }}>
            <img src={todo.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{todo.title}</h5>
              <p className="card-text">{todo.description}</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default AllTodos;