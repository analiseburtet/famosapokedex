import React from 'react'

class SearchBar extends React.Component {
    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(res => res.json())
        .then((data) => {
          this.setState({ value: data.abilities[0].ability.name })
        })
        .catch(console.log)
      }
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    render(){
        return (
            <div>
            <h1>Search here...</h1>
            <input 
                type="text" 
                className="input" 
                onChange={this.handleChange} 
                value={this.state.value}
                placeholder="Type something..." />
            </div>
        )
    }
}

export default SearchBar;