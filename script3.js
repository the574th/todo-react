class Form extends React.Component {
    constructor(){
        super()
        this.changeHandler = this.changeHandler.bind( this );
        this.addToList = this.addToList.bind( this );
    }

    state = {
    list : [],
    word : "",
    error : "",
    }

    changeHandler(event){
        this.setState({word:event.target.value});
        console.log("change", event.target.value);

    if (event.target.value.length >= 10) {
        this.setState({error: "too much"})
        }
    }

    addToList(){
    this.state.list.push(this.state.word)
    this.setState({word: ""});
    console.log(this.state.list)
    }

    render() {
        return (
            <div className="form-wrapper">
                <div className="input-wrapper">
                    <div className="input" onChange={this.changeHandler} contentEditable="true" value={this.state.word}>
                        <div>
                        </div>
                    </div>
                    <div className="character-count">
                    </div>
                </div>
                <div className="submit-button">
                    <Button event={this.addToList}/>
                </div>
            </div>
            )
    }
};

class Button extends React.Component {
    constructor(){
        super()
    }

    render() {
        return(
            <button onClick={this.props.event}>
                <span>
                Submit
                </span>
            </button>
            )
    }
};

// class Count extends React.Component {
//     constructor(){
//         super()
//     }

//     render() {
//         return (

//             )
//     }
// }

ReactDOM.render(
    <Form />,
    document.getElementById('root')
);