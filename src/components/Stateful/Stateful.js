import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector, shallowEqual} from "react-redux";
import * as actions from "../../redux/actions"
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

        // return () => {
        //     console.log('component unmount');
        // }
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
        <hr/>
        <button onClick={()=>dispatch({type:'foo',key:'foo',payload:'lorem'})}>foo</button>
        <button onClick={()=>dispatch({type:'bar',key:'bar',payload:{id:3,label:'labl'}})}>bar</button>
        <button onClick={()=>dispatch({type:'baz',key:'baz',payload:["r",4,[5,'r']]})}>baz</button>
    </section>;
};

export default Stateful;
