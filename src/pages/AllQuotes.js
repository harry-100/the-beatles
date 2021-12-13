import QuoteList from "../components/quotes/QuoteList";
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
const AllQuotes = () => {
    return( 
    <QuoteList quotes={DUMMY_QUOTES} />
    )
}

export default AllQuotes;