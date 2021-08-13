import React from 'react'
import ActivitiesImgs from './ActivitiesImgs'
import './activities.css'
import Footer from '../Footer'

const Activities = () => {
    return (
        <div>
            <div className='box2'>
                <h1 className='activities'>ACTIVIDADES</h1>
            </div>
            <ActivitiesImgs/>
            <Footer/>
        </div>
    )
}

export default Activities
