import { useEffect, useState } from "react"
import {getGif} from '../Helpers/getGifs'

export const useFetchGifs = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    })
    useEffect( () => {
        getGif(category)
            .then(imgs => {
                setTimeout( () => {
                    setState({
                        data:imgs,
                        loading: false
                    })
                }, 500)
            })
    }, [category])
    return state // {data:[], loading: true}
}