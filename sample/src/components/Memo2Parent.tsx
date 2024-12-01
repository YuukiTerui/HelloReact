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
    onClick: ()=>void
}

const Buzz = memo<BuzzProps>( (props) => {
    const { isBuzz, onClick } = props;
    console.log(`Buzzが再描画されました。 isBuzz=${isBuzz}`);
    return <span onClick={onClick}>{ isBuzz ? 'Buzz': ''}</span>
})

export const Memo2Parent = () => {
    const [cnt, setCount] = useState(1);
    const isFizz = cnt % 3 === 0;
    const isBuzz = cnt % 5 === 0;
    const onBuzzClick = () => {
        console.log(`Buzzがクリックされました。${isBuzz}`)
    }
    console.log(`Parentが再描画されたよ。count=${cnt}`);
    return (
        <div>
            <p>メモ化しているが、Parentの再描画のたびにpropsのonBuzzClickに新しい関数が流し込まれるため毎回再描画が発生する。<br/>{`現在のカウント: ${cnt}`}  <button onClick={ () => setCount((c) => c + 1)}>+1</button><Fizz isFizz={isFizz} /><Buzz isBuzz={isBuzz} onClick={onBuzzClick}/></p>
        </div>
    )
}