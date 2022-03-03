import React from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'

export default function Test2() {
    const value = useSelector(({counter}) => counter.value)
    return (
        <>
            <h1>Other Page</h1>
            <span>{value}</span>
            <Link href='/counter'>
                <a>이전 페이지</a>
            </Link>
        </>
    )
}