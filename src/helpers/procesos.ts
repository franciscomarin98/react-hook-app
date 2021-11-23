export const procesoPesado = (iteraciones: number) => {
    for (let i = 0; i < iteraciones; i++) {
        console.log('Ejecutando...');
    }

    return `${iteraciones} iteraciones realizadas`;
}