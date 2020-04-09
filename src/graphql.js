import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

const API_URL = process.env.LINK_BACKEND || 'http://localhost:4000/';

const httpLink =  createHttpLink({
    uri: API_URL
});

const authLink = setContext((_, {headers}) => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC50ZXN0IiwiZmlyc3RfbmFtZSI6Ikh1Z28iLCJpYXQiOjE1ODYzNjc0NDYsImV4cCI6MTU4NjQ1Mzg0Nn0.hQB5e0L7F-ycQy4KCcab7NZkny48WGNs9btFO5c0KwU' || sessionStorage.getItem('netflixToken')
    const context = {
        headers: {
            ...headers
        }
    };
    if(token) context.headers['authorization'] = `JWT ${token}`;
    return context;
});

export default new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});