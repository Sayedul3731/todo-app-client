/* eslint-disable react/prop-types */
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useTodos from "../../hooks/useTodos";
import { useState } from "react";
import { useForm } from "react-hook-form";


const Todo = ({ todo }) => {
    const [, refetch] = useTodos();
    const [currentId, setCurrentId] = useState('');
    const { register, handleSubmit } = useForm();
    const axiosPublic = useAxiosPublic();

    // task delete function here 
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
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
        });
    }
    // task update function here 
    const handleUpdate = (data) => {
        console.log('click update btn', data);
        const updateInfo = {
            title: data?.title,
            description: data?.description,
            createdDate: data?.createdDate,
            priority: data?.priority,
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
    // task completed function here 
    const handleCompleted = (id) => {
        console.log(id);
        const newInfo = {
            status: "completed"
        }
        axiosPublic.patch(`/todos/todo/${id}`, newInfo)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch()
                }
            })
    }

    // general style here 
    const inputWith = "col-md-10 col-lg-10 col-xl-10"
    
    return (
        <div>
            <div key={todo._id} className={`${todo?.priority === "high" ? "bg-primary text-white" : todo?.priority === "medium" ? "bg-info" : "bg-secondary text-white"} col-md-12 col-lg-12 col-xl-12 px-3`} style={{ marginBottom: "1px" }}>

                <div className=" pt-3" style={{ display: 'flex', justifyContent: "space-between", justifyItems: "center", gap: "10px" }}>

                    <div style={{ display: "flex", gap: "10px" }}>
                        <h5 className=" pr-3">{todo.title}</h5>
                        <p className="">{todo.description}</p>
                    </div>

                    <div style={{ display: "flex", justifyContent: "center", justifyItems: "center", gap: "8px" }} className=" text-end">
                        <p href="#" className={`${todo.status === "completed" ? "bg-success" : "bg-danger"} px-2 pt-2 text-white`} style={{ textDecoration: "none", display: "flex", justifyContent: "center", justifyItems: "center" }}>{todo?.status}</p>

                        <p onClick={() => setCurrentId(todo._id)} type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat" style={{ fontSize: "30px", cursor: "pointer", backgroundColor: "white", borderRadius: "3px", color: "#0BFF33" }} className="px-2"><FaRegEdit></FaRegEdit></p>

                        <p onClick={() => handleDelete(todo._id)} style={{ fontSize: "30px", cursor: "pointer", color: "#e63946", textAlign: "end", backgroundColor: "white", borderRadius: "3px" }} className="px-2 "><MdDeleteOutline></MdDeleteOutline></p>

                        {todo?.status === "completed" ? <p style={{ fontSize: "30px", cursor: "pointer", color: "#0BFF33", textAlign: "end", backgroundColor: "white", borderRadius: "3px" }} className="px-2 "><MdOutlineCheckBox></MdOutlineCheckBox></p> : <p onClick={() => handleCompleted(todo?._id)} style={{ fontSize: "30px", cursor: "pointer", color: "#e63946", textAlign: "end", backgroundColor: "white", borderRadius: "3px" }} className="px-2 "><MdOutlineCheckBoxOutlineBlank></MdOutlineCheckBoxOutlineBlank></p>}


                    </div>
                </div>
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
                                    <input type='date' className={`${inputWith} px-3 py-1`} placeholder='CreatedDate' {...register('createdDate', { required: true })} />
                                </p>
                                <p>
                                    <input type='text' className={`${inputWith} px-3 py-1`} placeholder='low/medium/high' {...register('priority', { required: true })} />
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

export default Todo;