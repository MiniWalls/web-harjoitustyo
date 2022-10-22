import axios from "axios";
import { useEffect, useState } from "react";

const API_URL = 'https://the-one-api.dev/v2';
const API_KEY = ''; //insert api key if calling other endpoints than "book"

export default function LotrBook(){
    const [chapNumber, setChapNumber] = useState (null);
    const [name, setName] = useState(0);
    const [books, setBooks] = useState("");
    const [isLoading, setLoading] = useState(true);
    const [chapter, setChapter] = useState(null);
    const [bookId, setBookId] = useState(null);

    async function getChapter(id){
        const addressChapter = API_URL + '/book'
        + '/' + id
        + '/chapter';
        
        console.log(addressChapter);
        console.log("Chapter number requested is " + chapNumber);

        axios.get(addressChapter)
        .then((response) => {
            console.log(response.data);
            setChapter(response.data.docs[chapNumber].chapterName);
        }).catch(error => {
            alert(error);
        });
        console.log("CALLED CHAPTER API");
        console.log(chapter);
    }

    useEffect(() => {
/*         const addressTest = API_URL + '/book'
        + '/' + id
        + '/chapter'; */
        const address = API_URL + '/book';

        console.log(address);
/*         console.log(addressTest); */
        console.log(API_KEY);
        console.log("CALLED BOOK API");
        axios.get(address)
        .then((response) => {
            console.log(response.data);
            //setName(response.data.docs[1].name);
            //setName(response.data.docs[chap].chapterName);
            setBooks(response.data.docs);
            setLoading(false);
        }).catch(error => {
            alert(error);
        });
    }, [])
    if(isLoading){
        return "Loading..."
    }
    else{
        return (
            <>
                <h3>The books</h3>
                {/* <p>{name}</p> */}
                {/*Ordered list of all books, map them and then get name by ID */}
                <ol>
                    {books.map(book =>(
                        <li key={book._id}><button onClick={() => setBookId(book._id)}>{book.name}</button></li>
                    ))}
                </ol>
                <p>Click the book, that you want to search, enter the chapter number and hit "Search"</p>
                <input type="text" name="chap" onChange={e => setChapNumber(e.target.value)}/>
                <button onClick={() => getChapter(bookId)} disabled={chapNumber === null || bookId === null}>Search</button>
                <h3 disabled={chapter === null}>{chapter}</h3>
            </>
        )
    }
}
    