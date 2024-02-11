import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useTodos from "../../hooks/useTodos";
import AllTodos from "./AllTodos";


const TaskManagement = () => {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const [todos, refetch] = useTodos();
    console.log(todos);
    const { register, handleSubmit } = useForm();
    const inputWith = "col-md-10 col-lg-10 col-xl-8 "
    const handleNewTodos = (data) => {
        console.log(data);
        const newInfo = {
            userEmail: user?.email,
            title: data?.title,
            description: data?.description,
            createdDate: data?.createdDate,
            quality: data?.quality,
            image: data?.photoURL,
            status: data?.status
        }
        axiosPublic.post('/todos', newInfo)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: "Todo Created Successfully.",
                        icon: "success"
                    });
                    refetch()
                }
            })
    }
    return (
        <div className="bg-warning mt-32">
        <div className="my-10" style={{maxWidth: "1280px", marginLeft: "auto", marginRight: "auto"}}>
            <div className="py-5  text-center" style={{minHeight: "600px"}}>
                <h1 className="mb-5 text-">Create New TODO here!</h1>
                <form onSubmit={handleSubmit(handleNewTodos)} className="mx-4  col-md-12 col-lg-12 col-xl-12 ">
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
                        <input type="submit" className="bg-primary px-10 font-semibold text-white py-[8px] text-lg" />
                    </div>
                </form>
            </div>
        <AllTodos></AllTodos>
        </div>
    </div>
    );
};

export default TaskManagement;