/* eslint-disable react/no-unescaped-entities */
import useTodos from "../../hooks/useTodos";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const AllTodos = () => {
  const [todos, refetch] = useTodos();
  const axiosPublic = useAxiosPublic();
  console.log(todos);

  const handleDelete = (id) => {
    console.log(id);
    axiosPublic.delete(`/todos/${id}`)
    .then(res => {
        console.log(res.data);
        if (res.data.deletedCount > 0) {
            Swal.fire({
                title: "Success!",
                text: "Todo Deleted Successfully.",
                icon: "success"
            });
            refetch()
        }
    })
  }
  return (
    <div>
      <h1 className="text-center mb-3">All Todo's</h1>
      <div className="row row-cols-3 pb-5" style={{ gap: "20px", textAlign: "center", justifyContent: 'center' }}>
        {
          todos?.map(todo => <div key={todo._id} className="card" style={{ width: "18rem" }}>
            <img src={todo.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{todo.title}</h5>
              <p className="card-text">{todo.description}</p>
              <a href="#" className={`${todo.status === "completed" ? "btn btn-success" : "btn btn-danger"}`}>{todo?.status}</a>
              <span style={{fontSize: "30px"}}><FaRegEdit></FaRegEdit></span>
              <span onClick={() => handleDelete (todo._id)} style={{fontSize: "30px", cursor: "pointer"}}><MdDeleteOutline></MdDeleteOutline></span>
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default AllTodos;