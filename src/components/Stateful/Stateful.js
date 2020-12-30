import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector, shallowEqual} from "react-redux";
import * as actions from "../../actions"
import {useTranslation} from "react-i18next";

const Stateful = (props) => {

    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();
    const states = useSelector(state=>state, shallowEqual);

    const [localState, setLocalState] = useState(null);

    useEffect(() => {
        setLocalState("Local State")
        dispatch({type: "SET", key: 'sharedState', payload: "Shared State"});
        dispatch(actions.getRemoteData())
    }, [])

    return <section id={'Stateful'} className={'Stateful'}>
        <h2>Stateful Component</h2>
        <div>{localState}</div>
        <div>{states.sharedState}</div>
        <div>{states.remoteData?.length}</div>

        <hr/>
        <div>
            <div>internationalisation | {i18n.language}</div>
            <div>{t('msg',{lorem:'lorem ipsum'})}</div>
            <button onClick={()=>i18n.changeLanguage('fr')}>fr</button>
            <button onClick={()=>i18n.changeLanguage('en')}>en</button>
        </div>
    </section>;
};

export default Stateful;
