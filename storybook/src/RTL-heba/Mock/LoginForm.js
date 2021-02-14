import React,{useState} from 'react';


export function LoginForm({ handleSubmit }) {

    const [name, setName] = useState('');

    function handleChange(e) {
        setName(e.target.value)
    }

    return (
        <form data-testid="form" onSubmit={() => handleSubmit({ name })}>
             <input required data-testid="input" type="text" value={name} onChange={(e) => handleChange(e)}/>
             <button type="submit" data-testid="submit-button">Submit</button>
        </form>
    )
}

export default function LoginPage() {

   function handleSubmit(e) {
       // submit stuff
   }

   return <LoginForm handleSubmit={(e) => handleSubmit(e)}/>

}