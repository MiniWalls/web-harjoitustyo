import axios from "axios";
import { useEffect, useState } from "react";

const API_URL = 'https://the-one-api.dev/v2';
const API_KEY = ''; //insert api key if calling other endpoints than "book"

export default function LotrBook({id,chap}){
    const [name, setName] = useState(0);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const addressTest = API_URL + '/book'
        + '/' + id
        + '/chapter';
        const address = API_URL + '/book';

        console.log(address);
        console.log(addressTest);
        console.log(API_KEY);

        axios.get(addressTest)
        .then((response) => {
            console.log(response.data);
            //setName(response.data.docs[1].name);
            setName(response.data.docs[chap].chapterName);
            setLoading(false);
        }).catch(error => {
            alert(error);
        });
    }, [])
    if(isLoading){
        return <p>Loading...</p>
    }
    else{
        return (
            <>
                <h3>The book</h3>
                <p>{name}</p>
            </>
        )
    }
}
    