/* eslint-disable react/no-unescaped-entities */
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../provider/AuthProvider"
import Swal from 'sweetalert2';
import { FcGoogle } from "react-icons/fc";
import useAxiosPublic from '../../hooks/useAxiosPublic';


const Register = () => {

    const { userCreate, userProfileUpdate, logInWithGoogle } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        userCreate(data.email, data.password)
            .then(result => {
                console.log(result.user);
                if (result.user) {
                    Swal.fire({
                        title: "Success!",
                        text: "User Created Successfully.",
                        icon: "success"
                    });
                    navigate('/')
                    userProfileUpdate(data.name, data.photoURL)
                        .then(() => {
                            console.log('profile updated');
                            const userInfo = {
                                name: data.name,
                                email: data.email,
                            }
                            axiosPublic.post('/users', userInfo)
                                .then(res => {
                                    console.log(res.data);
                                })
                            reset();
                        })
                        .catch(error => console.log(error))
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
                        text: "User Created Successfully.",
                        icon: "success"
                    });
                    navigate('/')
                    console.log(result.user?.displayName, result.user?.email);
                    const userInfo = {
                        name: result.user?.displayName,
                        email: result.user?.email,
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
                <h1 className=''>Please Register!</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <p>
                        <input type='text' className='px-3 py-1 mt-3 col-md-12 col-lg-12 col-xl-12' placeholder='Your Name' {...register('name', { required: true })} />
                    </p>
                    <p>
                        <input type='text' className='px-3 py-1 mt-3 col-md-12 col-lg-12 col-xl-12' placeholder='Your photoURL' {...register('photoURL', { required: false })} />
                    </p>
                    <p>
                        <input className=' px-3 py-1 mt-3 col-md-12 col-lg-12 col-xl-12' placeholder='Your Email' {...register('email', { required: true })} />
                    </p>
                    <div>
                    <p>
                            <input type="password" className='px-3 py-1 mt-3 col-md-12 col-lg-12 col-xl-12' placeholder='Your Password' {...register('password', {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6}/
                            })} />
                        </p>
                        {errors.password?.type === 'required' && <p style={{color: "red"}}>Password is required</p>}
                        {
                            errors.password?.type === 'minLength' && <p style={{color: "red"}}>Password must be 6 characters</p>
                        }
                        {
                            errors.password?.type === 'maxLength' && <p style={{color: "red"}}>Password must be less than 20 characters</p>
                        }
                        {
                            errors.password?.type === 'pattern' && <p style={{color: "red"}}>Password must have one capital letter, one special character, one digit and one small letter</p>
                        }
                    </div>
                    <div className=' text-center'>
                        <input type="submit" />
                    </div>
                </form>
                <p className='mt-6 text-center'>Already Have An Account? Please <Link to="/login"><span className=' font-semibold '>Login</span></Link> </p>

                <div onClick={handleLogInWithGoogle} className='mt-3' style={{ display: "flex", gap: "5px", textAlign: "center", justifyContent: "center", cursor: "pointer" }}>
                    <span className=''><FcGoogle></FcGoogle></span>
                    <p>Sign In With Google</p>
                </div>
            </div>
        </div>
    );
};

export default Register;