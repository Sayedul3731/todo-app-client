/* eslint-disable react/no-unescaped-entities */
import useTodos from "../../hooks/useTodos";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useState } from "react";
import { useForm } from "react-hook-form";

const AllTodos = () => {
  const [todos, refetch] = useTodos();
  const axiosPublic = useAxiosPublic();
  const [currentId, setCurrentId] = useState('')
  const { register, handleSubmit } = useForm();
  console.log(todos);
  const inputWith = "col-md-10 col-lg-10 col-xl-8 "
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
  const handleUpdateModal = (id) => {
    setCurrentId(id)
  }
  const handleUpdate = (data) => {
    console.log('click update btn', data);
    const updateInfo = {
      title: data?.title,
      description: data?.description,
      createdDate: data?.createdDate,
      quality: data?.quality,
      image: data?.photoURL,
      status: data?.status
    }
    axiosPublic.patch(`/todos/${currentId}`, updateInfo)
      .then(res => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Todo Updated Successfully.",
            icon: "success"
          });
          refetch()
        }
      })

  }
  console.log(currentId);
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
              <span onClick={() => handleUpdateModal(todo._id)} type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat" style={{ fontSize: "30px", cursor: "pointer" }}><FaRegEdit></FaRegEdit></span>
              <span onClick={() => handleDelete(todo._id)} style={{ fontSize: "30px", cursor: "pointer" }}><MdDeleteOutline></MdDeleteOutline></span>
            </div>
          </div>)
        }
      </div>

      {/* modal here  */}
      <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">New message</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit(handleUpdate)} className="mx-4  col-md-12 col-lg-12 col-xl-12 ">
                <p>
                  <input type='text' className={`${inputWith} px-3 py-1`} placeholder='Title' {...register('title', { required: true })} />
                </p>
                <p>
                  <input type='text' className={`${inputWith} px-3 py-1`} placeholder='Description' {...register('description', { required: true })} />
                </p>
                <p>
                  <input type='text' className={`${inputWith} px-3 py-1`} placeholder='Project photoURL' {...register('photoURL', { required: false })} />
                </p>
                <p>
                  <input type='date' className={`${inputWith} px-3 py-1`} placeholder='CreatedDate' {...register('createdDate', { required: true })} />
                </p>
                <p>
                  <input type='text' className={`${inputWith} px-3 py-1`} placeholder='good/better/best' {...register('quality', { required: true })} />
                </p>
                <p>
                  <input type='text' className={`${inputWith} px-3 py-1`} placeholder='completed/incomplete' {...register('status', { required: true })} />
                </p>
                {/* <p>
                        <input type='text' className={`${inputWith} px-3 py-1`} placeholder='Total time (second)' {...register('time', { required: true })} />
                    </p> */}
                <div className=" flex justify-center">
                  <input type="submit" data-bs-dismiss="modal" className="btn btn-primary px-10 font-semibold text-white py-[8px] text-lg" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTodos;