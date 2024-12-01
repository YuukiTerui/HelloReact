import React from "react";

type ContainerProps = {
    title: string,
    children: React.ReactNode,
}

const Container = (props: ContainerProps): JSX.Element => {
    const { title, children } = props;
    return (
        <div style={{background: 'green'}}>
            <span>{title}</span>
            <div>{children}</div>
        </div>
    )
}

const ContainerParent2 = (): JSX.Element => {
return (
    <Container title="Container Sample2">
        <p>ここがコンテナ2</p>
    </Container>
)
}

export default ContainerParent2;