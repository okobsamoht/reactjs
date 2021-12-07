import React from 'react';
import './ResetPass.css';
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import Messages from "../Messages";

const ResetPass = (props) => {
    const {register, handleSubmit, formState: {errors}, setError} = useForm();
    const [loading, setLoading] = React.useState(false)
    const [success, setSuccess] = React.useState(undefined)
    const onSubmit = data => {
        setLoading(true)
        setSuccess(undefined)
        setTimeout(() => {
            console.log(data);
            setLoading(false)
            setSuccess('link sent to reset pass')
            //if error from backend
            // setError('backend',{type:'failed'})
        }, 2000)
    }
    return (
        <div className="ResetPass">
            <fieldset>
                <legend>reset password</legend>
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
                            type="submit"
                            value={loading ? " loading " : " submit "}
                        />
                    </form>}
                <Messages errors={errors}/>
            </fieldset>
            <div>
                <Link to={'/auth/signin'}>sign in</Link>
                <Link to={'/auth/signup'}>sign up</Link>
            </div>
        </div>
    );
};

export default ResetPass;