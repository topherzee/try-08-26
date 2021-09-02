import React from 'react';

const Paragraph = props => 

    <>
        <p className="Paragraph" dangerouslySetInnerHTML={{ __html: props.richText }} />
        <span> -- <b><i>{props.where}</i></b></span>
    </>;

export default Paragraph;
