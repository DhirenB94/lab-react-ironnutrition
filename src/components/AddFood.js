import React from 'react';

class AddFood extends React.Component{
    state = {
        name: "",
        image: "",
        calories: 0
    }
    
    handleChange = (event) => {
        let { name, value} = event.target
        this.setState({
            [name]: value
        })
    }
    handleFormSubmit = (event) => {
        event. preventDefault();
        this.props.addFoodP(this.state);

    }
    
    
    render () {
        const {name, image, calories} = this.state
        return(
            <>
                <form onSubmit={this.handleFormSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" onChange={this.handleChange} value={name}></input>

                    <label>Image</label>
                    <input type="text" name="image" onChange={this.handleChange} value={image}></input>

                    <label>Calories</label>
                    <input type="number" name="calories" onChange={this.handleChange} value={calories}></input>

                    <button type="submit">Create food</button>
                </form>
            </>
        )
    }
}

export default AddFood; 