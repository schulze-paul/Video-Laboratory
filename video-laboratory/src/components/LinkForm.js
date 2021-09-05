import { useState } from "react"

const LinkForm = (submitLink) => {
    const [link, setLink] = useState('')
    return (
        <form className='link-form'>
            <label>Link:</label>
            <input type='text' value={link} onChange={(e) => setLink(e.target.value)}/>
            <input type='submit' />
        </form>
    )
}

export default LinkForm
