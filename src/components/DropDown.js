import React from 'react';

class DropDown extends React.Component {
    handleChange = (event) => {
        const { value } = event.target;
        this.props.onChange(value, this.props.id)
    }
    render(){
        const options = this.props.options.map((option) => {
            return(<option
                key={option.id}
                value={option.id}
                >{option.name}</option>)

        })
        return (
            <select value={this.props.selectedValue} onChange={this.handleChange} className="dropdown">
                {options}
            </select>
        );
    }
}

export default DropDown;