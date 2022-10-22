import axios from "axios";
import { useEffect, useState } from "react";

const API_URL = 'https://the-one-api.dev/v2';

export default function LotrBook(){
    const [chapNumber, setChapNumber] = useState (null);
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
            alert("Please give a different chapter number " + error);
        });
        console.log("CALLED CHAPTER API");
        console.log(chapter);
    }

    useEffect(() => {
        const address = API_URL + '/book';
        

        console.log(address);
        axios.get(address)
        .then((response) => {
            console.log(response.data);
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
                <div className="data">
                    {/*Ordered list of all books, map them and then get name by ID */}
                    <ul className="data-unordered-list">
                        {books.map(book =>(
                            <li key={book._id}><button onClick={() => setBookId(book._id)} className="data-button">{book.name}</button></li>
                        ))}
                    </ul>
                </div>
                <div className="search">
                    <h3 className="search-info-h3">Click the book that you want to search, enter the chapter number, and hit "Search"</h3>
                    <div className="search-display">
                        <input type="text" name="chap" onChange={e => setChapNumber(e.target.value)} className="search-input"/>
                        <button onClick={() => getChapter(bookId)} disabled={chapNumber === null || bookId === null}>Search</button>
                        <h3 disabled={chapter === null}>{chapter}</h3>
                    </div>
                </div>
            </>
        )
    }
}
    