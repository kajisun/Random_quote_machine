import React from 'react';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardAction from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const QuoteMachine = ({ assignNewQuoteIndex, selectedQuote }) => (
    <Card>
        <CardContent>
            <Typography id="text">
                {selectedQuote.quote} - <span id="author">{selectedQuote.author}</span>
            </Typography>
        </CardContent>
        <CardAction>
            <Button id="new-quote" size="small" onClick={assignNewQuoteIndex}>"Next quote"</Button>
            <IconButton
                id="tweet-quote"
                target="_blank"
                href={`https://twitter.com/intent/tweet?text=${selectedQuote.quote}&hashtags=thewebdevcoach`}
            >
                <FontAwesomeIcon icon={faTwitter} size="md"></FontAwesomeIcon>
            </IconButton>
        </CardAction>
    </Card>
);

export default QuoteMachine
