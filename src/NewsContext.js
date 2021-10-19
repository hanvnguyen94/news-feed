import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const NewsContext = createContext()

export const NewsContextProvider = (props) => {
	const [data, setData] = useState()
	const apiKey = '8065e6fc7d33417790c5fc0cfec82af2'

	useEffect(() => {
		axios
			.get(
				`http://newsapi.org/v2/everything?q=rich&from=2021-09-19&sortBy=publishedAt&apiKey=${apiKey}`
			)
			.then((res) => setData(res.data))
			.catch((err) => console.log(err))
	}, [])

	return (
		<NewsContext.Provider value={{ data }}>
			{props.children}
		</NewsContext.Provider>
	)
}
