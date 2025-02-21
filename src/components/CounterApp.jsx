import { useCounter } from "../hooks/useCounter"

export const CounterApp = () => {

    const { counter, increment, reset, decrement } = useCounter(100)

    return (
        <>
            <h1>Contador</h1>
            <h4>{counter}</h4>

            <button class="btn btn-secondary" onClick={() => increment()}>+1</button>
            <button class="btn btn-danger" onClick={() => reset()}>Reset</button>
            <button class="btn btn-primary" onClick={() => decrement(1,false)}>-1</button>
        </>
    )
}
