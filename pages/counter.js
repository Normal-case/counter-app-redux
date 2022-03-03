import { useCallback } from "react"
import { useSelector, useDispatch } from 'react-redux'
import counter, * as counterActions from '../store/modules/counter'
import Link from 'next/link'

export default function Test() {
    const dispatch = useDispatch()

    // useSelector is getting a value in store
    const value = useSelector(({counter}) => counter.value)
    
    const plus = useCallback(({value}) => {
        dispatch(counterActions.increment({value}))
    }, [dispatch])

    const minus = useCallback(({value}) => {
        dispatch(counterActions.decrement({value}))
    }, [dispatch])

    return (
        <div>
            <h1>Counter</h1>
            <button onClick={() => minus({value})}>-</button>
            <span>{value}</span>
            <button onClick={() => plus({value})}>+</button>
            <Link href='/other'>
                <a>다음 페이지</a>
            </Link>
        </div>
    )
}