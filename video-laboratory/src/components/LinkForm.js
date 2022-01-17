import { useState } from "react"

const LinkForm = ({submitVideoLink}) => {
    const [link, setLink] = useState('https://www.youtube.com/watch?v=XXYlFuWEuKI') //

    

    const onSubmit = (e) => {
        e.preventDefault()

        if(!link) {
            return
        }
        submitVideoLink(link)
        setLink('')
    }

    return (
        <form className='link-form' onSubmit={onSubmit}>
            
            <img className="logo" src="https://raw.githubusercontent.com/schulze-paul/Video-Laboratory/split_view/images/screenshots/logo_2_large.png"/>

            <div className='link-container'>
                <input 
                    className='link-input' 
                    type='text' 
                    value={link} 
                    onChange={(e) => setLink(e.target.value)}
                />
                <input 
                    className='link-submit' 
                    type='submit' 
                    value='code video'
                />
            </div>
        </form>
    )
}

export default LinkForm
