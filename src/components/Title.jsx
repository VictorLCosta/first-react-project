import { React } from 'react';

const Title = (props) => {
    const title = props.text

    return (
        <h1 className="title">{ title }</h1>
    )
}

export default Title