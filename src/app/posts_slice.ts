import { createSlice } from '@reduxjs/toolkit'
import { IPostType } from './redux_types'

const initialState: IPostType[] = [
    { id: 1, title: 'Title here', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque reprehenderit itaque ea nobis placeat est rem iste in id quos!' },
    { id: 2, title: 'Second title', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque reprehenderit itaque ea nobis placeat est rem iste in id quos!' },
    { id: 3, title: 'New posts', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque reprehenderit itaque ea nobis placeat est rem iste in id quos!' },
    { id: 4, title: 'Title number four here', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque reprehenderit itaque ea nobis placeat est rem iste in id quos!' },

]

const posts_slice = createSlice({
    name: 'posts',
    initialState,
    reducers: {

    }
})

export default posts_slice.reducer