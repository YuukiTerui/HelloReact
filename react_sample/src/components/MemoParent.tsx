import React, {memo, useState} from "react";

type FizzProps = {
    isFizz: boolean
}

const Fizz = (props: FizzProps) => {
    const { isFizz } = props;
    console.log(`Fizzが再描画されました。 isFizz=${isFizz}`);
    return <span>{isFizz ? 'Fizz' : ''}</span>
}


type BuzzProps = {
    isBuzz: boolean
}

const Buzz = memo<BuzzProps>( (props) => {
    const { isBuzz } = props;
    console.log(`Buzzが再描画されました。 isBuzz=${isBuzz}`);
    return <span>{ isBuzz ? 'Buzz': ''}</span>
})

export const MemoParent = () => {
    const [cnt, setCount] = useState(1);
    const isFizz = cnt % 3 === 0;
    const isBuzz = cnt % 5 === 0;
    console.log(`Parentが再描画されたよ。count=${cnt}`);
    return (
        <div>
            <p>Buzzはメモ化したため、再描画が起きるタイミングはpropsのisBuzzの値が書き換わった場合のみ。<br />
                {`現在のカウント: ${cnt}`}  <button onClick={ () => setCount((c) => c + 1)}>+1</button><Fizz isFizz={isFizz} /><Buzz isBuzz={isBuzz} /></p>
        </div>
    )
}