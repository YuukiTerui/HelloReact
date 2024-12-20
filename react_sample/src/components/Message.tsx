const Text = (props: {content: string}) => {
    const { content } = props;
    return <p className="text">{content}</p>
}

const Message = (props: {}) => {
    const content1 = 'Parent Component';
    const content2 = 'Message uses Text Component';

    return (
        <div>
            <Text content={content1} />
            <Text content={content2} />
        </div>
    )
}

export default Message;