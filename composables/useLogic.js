export const useLogic = () => {
    const declare = () =>    console.log('wiederverwendbarerer Code, Konvention sagt Benennung beginnt mit use');
    const sayHello = () => console.log('Hello');
    return {
        declare,
        sayHello
    };
};

// eingebaut in index.vue