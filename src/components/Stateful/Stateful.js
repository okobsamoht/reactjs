import React, {useEffect, useState} from 'react';
import "./Stateful.css"
import {useDispatch, useSelector, shallowEqual} from "react-redux";
import * as actions from "../../redux/actions"
import {useTranslation} from "react-i18next";
import {LightTheme, DarkTheme, ThemeProvider} from 'baseui';
import {Button} from "baseui/button";

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
            <Button onClick={() => i18n.changeLanguage('fr')}>fr</Button>
            <Button onClick={() => i18n.changeLanguage('en')}>en</Button>
        </div>
        <hr/>
        <Button onClick={() => dispatch({type: 'DISPATCH', key: 'dispatch', payload: Math.random()})}>dispatch</Button>
        <hr/>
        <ThemeProvider theme={states.theme === 'light' ? LightTheme : DarkTheme}>
            <Button
                onClick={() =>
                    dispatch({type:"THEME",key:"theme",payload:states.theme === 'light' ? 'dark' : 'light'})
                }
            >
                Toggle light/dark theme!
            </Button>
        </ThemeProvider>
    </section>;
};

export default Stateful;
