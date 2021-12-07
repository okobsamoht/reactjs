import React from 'react';
import './SignIn.css';
import {useForm} from 'react-hook-form';
import {Link} from "react-router-dom";
import Messages from "../Messages";
import {useDispatch} from "react-redux";

const SignIn = (props) => {
    const dispatch = useDispatch();
    const {register, handleSubmit, formState: {errors}, setError} = useForm();
    const [loading, setLoading] = React.useState(false)
    const [success, setSuccess] = React.useState(undefined)
    const onSubmit = data => {
        setLoading(true)
        setSuccess(undefined)
        setTimeout(() => {
            console.log(data);
            setLoading(false)
            dispatch({type: "SET", key: 'user', payload: "Shared State"});
            setSuccess('signed in redirecting')
            //if error from backend
            // setError('backend',{type:'failed'})
        }, 2000)
    }

    return (
        <div className="SignIn">
            <fieldset>
                <legend>sign in</legend>
                {success ?
                    <div>{success}</div> :
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            disabled={loading}
                            type="email"
                            placeholder="email"
                            {...register("email", {required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/i})}
                        />
                        <input
                            disabled={loading}
                            type="password"
                            placeholder="password"
                            {...register("password", {required: true})}
                        />
                        <input
                            disabled={loading}
                            type="submit"
                            value={loading ? " loading " : " submit "}
                        />
                    </form>
                }
                <Messages errors={errors}/>
            </fieldset>
            <div hidden={success}>
                <Link to={'/auth/signup'}>sign up</Link>
                <Link to={'/auth/resetpass'}>reset password</Link>
            </div>
        </div>
    );
};

export default SignIn;