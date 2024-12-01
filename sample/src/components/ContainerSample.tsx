const Container = (props: {title: string, children: React.ReactElement }) => {
    const { title, children } = props;

    return (
        <div style={{ background: 'red' }}>
            <span>{title}</span>
            <div>{children}</div>
        </div>
    )
}

const ContainerParent = () => {
    return (
        <Container title="Contener Sample">
            <>
            <p>ここがContainerのchildrenとして描画される。</p>
            <p>Container内に何個渡しても表示されるが、ルートは一つにする必要がある。</p>
            </>
        </Container>
    )
}

export default ContainerParent;