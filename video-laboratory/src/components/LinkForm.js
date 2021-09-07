import { useState } from "react"

const LinkForm = ({submitVideoLink}) => {
    const [link, setLink] = useState('https://www.youtube.com/watch?v=mzg4RIRbS3E')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!link) {
            alert('please')
            return
        }
        submitVideoLink(link)
        setLink('')
    }

    return (
        <form className='link-form' onSubmit={onSubmit}>
            <label>Link:</label>
            <input 
                className='link-input' 
                type='text' 
                value={link} 
                onChange={(e) => setLink(e.target.value)}
            />
            <input 
                className='link-submit' 
                type='submit' 
                value='Go'
            />
        </form>
    )
}

export default LinkForm
