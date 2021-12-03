import React, {useEffect, useState} from 'react';
import "./Stateful.css"
import {useDispatch, useSelector, shallowEqual} from "react-redux";
import * as actions from "../../redux/actions"
import {useTranslation} from "react-i18next";
import {toast} from "react-toastify";

const Stateful = (props) => {

    const {i18n} = useTranslation();
    const dispatch = useDispatch();
    const states = useSelector(state => state, shallowEqual);

    const [localState, setLocalState] = useState(null);

    const notify = () => toast("Wow so easy!");
    useEffect(() => {
        console.log('component mounted');
        return () => {
            console.log('component unmount');
        }
    }, [])

    useEffect(() => {
        setLocalState("Local State")
        dispatch({type: "SET", key: 'sharedState', payload: "Shared State"});
        dispatch(actions.getRemoteData())
    }, [dispatch])


    return <section id={'Stateful'} className={'Stateful'}>
        <h2>Stateful Component</h2>
        <div>{localState}</div>
        <div>{states.sharedState}</div>
        <div>{states.remoteData?.length}</div>
        <div>{states.dispatch}</div>

        <hr/>
        <div>
            <div>internationalisation | {i18n.language}</div>
            <div>{i18n.t('msg', {lorem: 'lorem ipsum'})}</div>
            <div>{i18n.t('untranslated')}</div>
            <button onClick={() => i18n.changeLanguage('fr')}>fr</button>
            <button onClick={() => i18n.changeLanguage('en')}>en</button>
        </div>
        <hr/>
        <button onClick={notify}>notify</button>
        <hr/>
        <button onClick={() => dispatch({type: 'DISPATCH', key: 'dispatch', payload: Math.random()})}>dispatch</button>
    </section>;
};

export default Stateful;
