import React from 'react';
import './SignUp.css';
import {useForm} from 'react-hook-form';
import {Link} from "react-router-dom";
import Messages from "../Messages";

const SignUp = (props) => {
    const {register, handleSubmit, formState: {errors}, setError} = useForm();
    const [loading, setLoading] = React.useState(false)
    const [success, setSuccess] = React.useState(undefined)
    const onSubmit = data => {
        setLoading(true)
        setSuccess(undefined)
        setTimeout(() => {
            console.log(data);
            setLoading(false)
            setSuccess('signed up link sent to activate account')
            //if error from backend
            // setError('backend',{type:'failed'})
        }, 2000)
    }

    return (
        <div className="SignUp">
            <fieldset>
                <legend>sign up</legend>
                {success ?
                    <div>{success}</div> :
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input disabled={loading}
                               type="text"
                               placeholder="firstname"
                               {...register("firstname", {required: true})}
                        />
                        <input disabled={loading}
                               type="text"
                               placeholder="lastname"
                               {...register("lastname", {required: true})}
                        />
                        <input disabled={loading}
                               type="email"
                               placeholder="email"
                               {...register("email", {required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/i})}
                        />
                        <input disabled={loading}
                               type="tel"
                               placeholder="tel"
                               {...register("tel", {required: true, pattern: /^\+?[0-9]{3}-?[0-9]{6,12}$/i})}
                        />
                        <input disabled={loading}
                               type="password"
                               placeholder="password"
                               {...register("password", {required: true})}
                        />
                        <input disabled={loading}
                               type="submit"
                               value={loading ? " loading " : " submit "}
                        />
                    </form>
                }
                <Messages errors={errors}/>
            </fieldset>
            <div>
                <Link to={'/auth/signin'}>sign in</Link>
                <Link to={'/auth/resetpass'}>reset password</Link>
            </div>
        </div>
    );
};

export default SignUp;