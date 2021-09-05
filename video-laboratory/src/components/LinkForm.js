import { useState } from "react"

const LinkForm = ({setVideoLink}) => {
    const [link, setLink] = useState('https://www.youtube.com/watch?v=w7ejDZ8SWv8&t=4788s')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!link) {
            alert('please')
            return
        }
        setVideoLink(link)
        setLink('')
    }

    return (
        <form className='link-form' onSubmit={onSubmit}>
            <label>Link:</label>
            <input type='text' value={link} onChange={(e) => setLink(e.target.value)}/>
            <input type='submit' value='Go'/>
        </form>
    )
}

export default LinkForm
