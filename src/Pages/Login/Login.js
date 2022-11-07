import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
    const {logIn} = useContext(AuthContext)
    const handleSubmit = e =>{
     e.preventDefault()
     const form = e.target;
     const email = form.email.value;
     const password = form.password.value;
     logIn(email , password)
     .then(result =>{
        const user = result.user;
        console.log(user)
        toast.success("Login SuccessFull")
        form.reset()
        
     })
     .catch(error => console.error(error))
    }
    return (
        <div className="hero">
            <div className="hero-content flex-col justify-between gap-36 lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <h1 className="text-5xl text-center font-bold">Login</h1>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                            <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                        <p>New to Genius Car ? <Link className='text-orange-600 font-bold' to={'/sighUp'}>Sigh Up</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;