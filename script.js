class List extends React.Component {
  constructor(){
    super()
    this.changeHandler = this.changeHandler.bind( this );
    this.addToList = this.addToList.bind( this );
  }

  state = {
    list : [],
    word : "",
    error : ""
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
      // render the list with a map() here
      let printList = this.state.list.map((item, index) => {
        return <li key={index}>{item}</li>
      });

      return (
        <div className="list">
          <span className="error">{this.state.error}</span>
          <input type="text" onChange={this.changeHandler} value={this.state.word}/>
          <button onClick={this.addToList}>add item</button>
          <ul>
              {printList}
          </ul>
        </div>
      );
  }
}

ReactDOM.render(
    <List />,
    document.getElementById('root')
);