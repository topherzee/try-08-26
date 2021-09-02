import React from 'react';

const Paragraph = props => 

    <>
        <p className="Paragraph" dangerouslySetInnerHTML={{ __html: props.richText }} />
        <br/>
        <div>{props.where}</div>
    </>;

export default Paragraph;
