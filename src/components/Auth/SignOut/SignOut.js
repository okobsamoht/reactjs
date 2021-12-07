import React from 'react';
import './SignOut.css';
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import Messages from "../Messages";
import {useDispatch} from "react-redux";

const SignOut = (props) => {
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
            dispatch({type: "SET", key: 'user', payload: undefined});
            setSuccess('signed out redirecting')
            //if error from backend
            // setError('backend', {type: 'failed'})
        }, 2000)
    }

    return (
        <div className="SignOut">
            <fieldset>
                <legend>sign out</legend>
                {success ?
                    <div>{success}</div> :
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            disabled={loading}
                            type="submit" value={loading ? " loading " : " submit "}
                        />
                    </form>
                }
                <Messages errors={errors}/>
            </fieldset>
            {/*<div>*/}
            {/*	<Link to={'/auth/signin'}>sign in</Link>*/}
            {/*	<Link to={'/auth/signup'}>sign up</Link>*/}
            {/*	<Link to={'/auth/resetpass'}>reset password</Link>*/}
            {/*</div>*/}
        </div>
    );
};

export default SignOut;