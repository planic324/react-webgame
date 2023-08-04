const React = require('react');
const { Component } = React;

class WordRelay extends Component {
    state = {
        word: '노은찬',
        value: '',
        result: '',
    };

    onSubmitForm = () => {
        e.preventDefault();
        if (this.state.word)
    }

    onChangeInput = () => {
        this.setState({ value: e.target.value})
    }

    input;

    onRefInput = () => {
        this.input = c;
    }

    render () {
        return (
            <>
                <div>{this.state.word}</div>
                <form onSubmit={this.onSubmitForm}>
                    <input 
                        ref={this.onRefInput}
                        value={this.state.value}
                        onChange={this.onChangeInput}
                    />
                    <button>입력</button>
                </form>
                <div>{this.state.result}</div>
            </>
        )
    };
};

module.exports = WordRelay;