import { CounterApp } from "./components/CounterApp"
import { FetchApp } from "./components/FetchApp"
import { FormsApp } from "./components/FormsApp"

export const HooksApp = () => {
    return (
        <>
            <FetchApp />
            <hr />
            <FormsApp />
            <hr />
            <CounterApp />
        </>
    )
}
