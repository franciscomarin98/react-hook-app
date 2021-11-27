import React from 'react'

const Hijo = ({numero, incrementar}: any) => {

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="btn btn-primary mx-1"
            onClick={() => incrementar(numero)}
        >
            {numero}
        </button>
    )
}

export default React.memo(Hijo);
