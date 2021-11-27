import React from "react";

const ShowIncrement = React.memo((props: any) => {
    console.log('Me volví a generar');
    return (
        <button className={'btn btn-primary'} onClick={() => props.increment(5)}>
            Incrementar
        </button>
    );
});

export default ShowIncrement;
