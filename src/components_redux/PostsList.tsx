import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { IReduxState } from '../app/redux_types'
import './posts.css'

const PostsList = () => {

    const posts = useSelector((state: IReduxState )=> state.posts)

    return (
        <section className='posts-list'>
            <h2>Posts</h2>
            <ul>
                { posts.map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.content.substring(0,100)}</p>
                    </li>
                ))}
            </ul>

        </section>
    )
}

export default PostsList