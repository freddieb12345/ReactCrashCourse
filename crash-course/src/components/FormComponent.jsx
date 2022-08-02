function FormComponent(props) {
    return(
        <main>
            <form onSubmit={props.handleSubmit}>
                <input 
                    placeholder="First name" 
                    type="text"
                    name='firstName'
                    value={props.data.firstName}
                    onChange={props.handleChange}
                /> 
                <br />
                <input 
                    placeholder="Last name"
                    name='lastName'
                    value={props.data.lastName} 
                    onChange={props.handleChange}
                /> 
                <br />
                <input 
                    placeholder="Age"
                    name='age'
                    value={props.data.age} 
                    onChange={props.handleChange}
                /> 
                <br />
                <label>
                    <input 
                        type="radio" 
                        name= "gender"
                        checked = {props.data.gender === "male"}
                        value = "male"
                        onChange={props.handleChange}
                 /> Male
                </label>
                <label>
                    <input 
                        type="radio" 
                        name= "gender"
                        value= "female"
                        checked = {props.data.gender === "female"}
                        onChange={props.handleChange}
                 /> Female
                </label>
                <br />
                <label>
                    <select 
                        name="location"
                        value={props.data.location}
                        onChange={props.handleChange}
                    >
                        <option value="">---Please select your location---</option>
                        <option value="england">England</option>
                        <option value="america">America</option>
                        <option value="france">France</option>
                        <option value="spain">Spain</option>
                        <option value="portugal">Portugal</option>
                        <option value="germany">Germany</option>
                    </select>
                </label>
                <br />
                <button>Submit</button>
            </form>
            <h1>Your name is {props.data.firstName} {props.data.lastName}</h1>
            <h2>You are {props.data.age} years old</h2>
            <h3>You are {props.data.gender}</h3>
            <h4>You live in {props.data.location}</h4>
        </main>
    )
}

export default FormComponent