import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Hello from './components/Hello';
import Name from './components/Name';
import Message from './components/Message';
import ContainerParent from './components/ContainerSample';
import ContainerParent2 from './components/ContainerSample2';
import Page from './components/ContextSample';
import Counter from './components/StateSample';
import ReducerSample from './components/ReducerSample';
import { MemoParent } from './components/MemoParent';
import { Memo2Parent } from './components/Memo2Parent';
import { CallbackSample } from './components/CallbackSample';
import { UseMemoSample } from './components/MemoSample';
import { Clock } from './components/Clock';
import { ContextParent } from './components/ContextParent';
import { ImageUploader } from './components/RefSample';
import { ImperativeHndleSample } from './components/ImperativeHandleSample';
import { InputSample } from './components/InputSample';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Hello />
    <Name />
    <Message />
    <ContainerParent />
    <ContainerParent2 />
    <Page />
    <Counter initialValue={0}/>
    <ReducerSample initValue={0} />
    <MemoParent />
    <Memo2Parent />
    <CallbackSample />
    <UseMemoSample />
    <Clock />
    <ContextParent />
    <ImageUploader />
    <ImperativeHndleSample />
    <InputSample />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
