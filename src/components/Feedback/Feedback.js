import { useState } from "react";

const Feedback = () => {
    const [email ,setEmail] = useState('');
    const [name , setName] = useState('');
    const [textarea , setTextarea] = useState('');
    const [feedback , setFeedback] = useState([]);
    const array = []


const feedbackHandler = (e) => {
e.preventDefault();

array.push({email: email, name : name, textarea : textarea} )
setFeedback(array)
setEmail(' ')
setName(' ')
setTextarea(' ')
}




    return (
        <>
        <h1>Feedback</h1>
        <form className="form form-box form-primary " onSubmit={feedbackHandler}>
                <div className={"form-control "}>
                    <label for="email" className="input-label">Email</label>
                    <input type="text" placeholder="Enter your email" id="email" className="input" 
                       value={email}  onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className={"form-control "}>
                    <label for="name" className="input-label">Name</label>
                    <input type="text" value={name}
                     placeholder="Enter your Name" id="name" className="input" 
                     onChange={(e) => setName(e.target.value)} />
                </div>
                <div className={"form-control "}>
                <label for="textarea" class="input-label">Textarea</label>
                <textarea name="textarea" class="input-textarea" value={textarea}
                     placeholder="Enter your feedback" onChange={(e) => setTextarea(e.target.value)}>
                </textarea>
                </div>
                <div className="form-control">
                    <button  className="btn btn-primary-outline btn-large">Add Feedback</button>
                </div>
            </form>
            <div>{
                feedback.map(show => {
                    return (
                        <> 
                        <form class="form form-primary contra">
                            <label for="email" class="input-label">Name</label>
                            <h4  type="email" 
                                   class="input heading-thirtiary" >{show.name}</h4>
                            <label for="textarea" class="input-label">Feedback</label>
                            <p name="textarea" cols="30" rows="10" 
                            class="input-textarea">{show.textarea}</p>
                        </form>
                        </>
                    )
                })
                }
                
            </div>
        </>
    )
}

export default Feedback;