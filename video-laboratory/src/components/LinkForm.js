import { useState } from "react"

const LinkForm = ({submitVideoLink}) => {
    const [link, setLink] = useState('https://www.youtube.com/watch?v=7Y9nX0QHqzA') //

    

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
            
            <div className="title-container">
                <h1 className="title">VideoLab.</h1>

                <p className="subtitle">Video coding simpified.</p> 
            </div>


            <div className='link-container'>
                <input 
                    className='link-input' 
                    type='text' 
                    value={link} 
                    onChange={(e) => setLink(e.target.value)}
                />
                <input 
                    className='link-submit' 
                    type='image' 
                    src="https://raw.githubusercontent.com/schulze-paul/Video-Laboratory/split_view/images/screenshots/logo_2_large.png"
                />
            </div>
        </form>
    )
}

export default LinkForm
