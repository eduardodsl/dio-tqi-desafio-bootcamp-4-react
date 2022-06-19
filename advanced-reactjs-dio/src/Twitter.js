import React, { useEffect, useState } from 'react';

const areEqual = (prevProps, nextProps) => {
    return prevProps.loading === nextProps.loading;
};

function Twitter(props){

    const { loading } = props;
    const [tweet, setTweet] = useState();

    // componentDidMount
    useEffect(()=>{
        const { posts, loading } = props;
        console.log('componentDidMount', posts);
        console.log('componentDidMount.loading', loading);
    }, []);

    useEffect(() => {
        console.log('componentDidUpdate', loading);
    }, [loading]);

    useEffect(()=>{
        console.log('componentWillUnmount: fui removido :(');
    }, []);

    const handleTweet = () => {
        setTweet('tweet atualizado');
    }

    const { posts } = props;
    console.log('render', posts);

    console.log('Tweet atualizado');

    return (
        <div>
            <button onClick={handleTweet}>Re-render</button>
            { posts[0].title }
        </div>
    );
    

}

export default Twitter