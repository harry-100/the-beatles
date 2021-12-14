import { useParams, Route } from 'react-router-dom';
import { Fragment } from 'react';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

import Comments from '../components/comments/Comments';
const DUMMY_QUOTES = [
    {
        id: '1',
        text: 'I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best.',
        author: 'Marilyn Monroe'
    },
    {
        id: '2',
        text: 'Be yourself; everyone else is already taken.',
        author: 'Oscar Wilde'
    },
    {
        id: '3',
        text: 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.',
        author: 'Albert Einstein'
    },
]
const QuoteDetails = () => {
    const params = useParams();
    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);
    if(!quote) {
        return <h1>Quote not found</h1>
    };
    return( 
        <Fragment>
            <HighlightedQuote text={quote.text} author={quote.author} />
        <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
        </Route>     
        </Fragment>
        )
}

export default QuoteDetails;