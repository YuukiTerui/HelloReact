import React, { useState, useRef } from 'react';
import { moveMessagePortToContext } from 'worker_threads';


const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const UPLOAD_DELAY = 3000;

export const ImageUploader = () => {
    const inputImageRef = useRef<HTMLInputElement | null>(null);
    const fileRef = useRef<File | null>(null);
    const [msg, setMsg] = useState<string | null>('');
    const onClickText = () => {
        console.log('onClickText');
        if (inputImageRef.current !== null) {
            inputImageRef.current.click();
        }
    }
    const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('onChangImage');
        const files = e.target.files;
        if (files !== null && files.length > 0) {
            fileRef.current = files[0];
        }
    }
    const onClickUpload = async () => {
        console.log('onClickUpload');
        if (fileRef.current !== null) {
            await sleep(UPLOAD_DELAY)
            setMsg(`${fileRef.current.name} has been successfully uploaded`);
        }
    }

    return (
        <div>
            <p style={{textDecoration: 'underline'}} onClick={onClickText}>
                画像アップロード
            </p>
            <input ref={inputImageRef} type='file' accept='image/*' onChange={onChangeImage} style={{ visibility: 'hidden'}} />
            <br />
            <button onClick={onClickUpload}>アップロードする</button>
            {msg !== null && <p>{msg}</p>}
        </div>
    )
}