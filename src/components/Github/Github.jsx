import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() {

    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/mohdfaizanrizvi')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])

  return (
    <div className=' bg-gray-500 text-white text-3xl p-4 m-4 text-center'>GitHub Bio: {data.bio} 
    <img src={data.avatar_url} alt="Github Pic" width={300}/>
    </div>
  )
}

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/mohdfaizanrizvi')
    return response.json()
}