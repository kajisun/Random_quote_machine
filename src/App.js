import React from 'react';
import 'typeface-roboto';
import QuoteMachine from './components/QuoteMachine';
import { Grid, withStyles } from '@material-ui/core';

const styles = {
    container: {
        alignItems: "center",
        display: "flex",
        height: "100vh",
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quotes: [],
            selectedQuoteIndex: null,
        }
        this.generateNewQuoteIndex = this.generateNewQuoteIndex.bind(this);
        this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
    }

    componentDidMount() {
        fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
            .then(data => data.json())
            .then(quotes => this.setState({ quotes }, this.assignNewQuoteIndex));
    }

    get selectedQuote() {
        if (!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)) {
            return undefined;
        }
        return this.state.quotes[this.state.selectedQuoteIndex];
    }

    generateNewQuoteIndex() {
        const len = this.state.quotes.length;
        return len ? Math.floor(Math.random() * len) : undefined;
    }

    assignNewQuoteIndex() {
        this.setState({selectedQuoteIndex: this.generateNewQuoteIndex()})
    }
    
    nextQuoteClickHandler() {
        alert("hi")
        console.log("hi")
    }

    render() {  
        console.log(this.state.quotes[1])
        return (
            <Grid className={this.props.classes.container} id="quote-box" justify="center" container>
                <Grid xs={11} lg={8} item>
                    {
                        this.selectedQuote ?
                            <QuoteMachine selectedQuote={this.selectedQuote} assignNewQuoteIndex={ this.assignNewQuoteIndex } />
                         : null
                    }
                </Grid>
            </Grid>
        );
    }
}


export default withStyles(styles)(App);
