/* eslint-disable react/no-unescaped-entities */
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from "react-router-dom"
import { AuthContext } from "../../provider/AuthProvider"
import Swal from 'sweetalert2';
import { FcGoogle } from 'react-icons/fc';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const { logIn, logInWithGoogle } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic()
    const location = useLocation();
    const navigate = useNavigate()

    let from = location.state?.from?.pathname || "/";
    console.log('location in the login page', from);

    const onSubmit = (data) => {
        logIn(data.email, data.password)
            .then(result => {
                console.log(result.user);
                if (result.user) {
                    Swal.fire({
                        title: "Success!",
                        text: "User Logged In Successfully.",
                        icon: "success"
                    });
                    navigate(from, { replace: true })
                }
            })
            .catch(error => {
                console.log(error.message);
                Swal.fire({
                    title: "Oh!",
                    text: `${error.message}`,
                    icon: "error"
                });
            })
    }

    const handleLogInWithGoogle = () => {
        logInWithGoogle()
            .then(result => {
                console.log(result.user);
                if (result.user) {
                    Swal.fire({
                        title: "Success!",
                        text: "User Logged In Successfully.",
                        icon: "success"
                    });
                    navigate(from, { replace: true })
                    console.log(result.user?.displayName, result.user?.email);
                    const userInfo = {
                        name: result.user?.displayName,
                        email: result.user?.email,
                        Badge: "Bronze"
                    }
                    axiosPublic.post('/users', userInfo)
                        .then(res => {
                            console.log(res.data);
                        })
                }
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className='bg-warning'>
            <div className=' py-5 px-5' style={{ maxWidth: "500px", marginRight: "auto", marginLeft: "auto", minHeight: "600px" }}>
                <h1 className=''>Please Login!</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <p>
                        <input className=' px-3 py-1 mt-3 col-md-12 col-lg-12 col-xl-12' placeholder='Your Email' {...register('email', { required: true })} />
                    </p>
                    <div>
                        <p>
                            <input type='password' className='col-md-12 col-lg-12 col-xl-12 px-3 py-1' placeholder='Your Password' {...register('password', { required: true })} />
                        </p>
                    </div>
                    <div className=' text-center'>
                        <input  type="submit" />
                    </div>
                </form>
                <p className='mt-6 text-center'>Don't Have An Account? Please <Link to="/Register"><span className=' font-semibold '>Register</span></Link> </p>

                <div onClick={handleLogInWithGoogle} className='mt-3' style={{display: "flex", gap: "5px", textAlign: "center", justifyContent: "center", cursor: "pointer"}}>
                    <span className=''><FcGoogle></FcGoogle></span>
                    <p>Sign In With Google</p>
                </div>
            </div>
        </div>
    );
};

export default Login;