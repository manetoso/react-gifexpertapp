import React, { useState } from 'react'
import { AddCategory } from './Components/AddCategory'
import { GifGrid } from './Components/GifGrid'

export const GifExpertApp = () => {
    // const categories = ['Call of Duty Zombies', 'Pokemon', 'Zelda Breath of the Wild', 'Super Smash Bros Ultimate']
    const [categories, setCategories] = useState([
        'Pokemon', 
        // 'Zelda Breath of the Wild', 
        // 'Super Smash Bros Ultimate'
        // 'Call of Duty Zombies', 
    ]);

    // const handleAdd = () => {
    //     // setCategories( [...categories, 'Soy una categoría'] )
    //     setCategories( cats => [...cats, 'Nueva categoría'] )
    // }

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>

            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key={ category }
                            category={ category } 
                        />
                    ))
                }
            </ol>
        </div>
    )
}
