import React, {useEffect, useState} from 'react';
import "./Stateful.css"
import {useDispatch, useSelector, shallowEqual} from "react-redux";
import * as actions from "../../redux/actions"
import {useTranslation} from "react-i18next";

const Stateful = (props) => {

    const {t, i18n} = useTranslation();
    const dispatch = useDispatch();
    const states = useSelector(state => state, shallowEqual);

    const [localState, setLocalState] = useState(null);

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
            <div>{t('msg', {lorem: 'lorem ipsum'})}</div>
            <button class="button" onClick={() => i18n.changeLanguage('fr')}>fr</button>
            <button class="button" onClick={() => i18n.changeLanguage('en')}>en</button>
        </div>
        <hr/>
        <button class="button" onClick={() => dispatch({type: 'DISPATCH', key: 'dispatch', payload: Math.random()})}>dispatch</button>
    </section>;
};

export default Stateful;
