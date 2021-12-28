import React, { useState } from "react";
import { moviesUrl, moviesEPs } from "../config/config.json";
import movies from "../services/movies";
import Axios from "axios";
import "../css/form.css";
import {nanoid} from 'nanoid'

/*
  Using localStorage is similar to how we use
  dictionary.
  
  To set a variable call `localStorage.set("key", value)`
  To get a variable call `localStorage.get("key")`

  Local Storage persists through website refreshes so
  it is perfect for storing things we dont want to lose
  like a users session

  You must call `const localStorage = require("local-storage");`
  in any class that you want to use this in, it is the same
  local storage in the entire website regardless of where you call
  it as each website gets the same instance of the storage.

  So think of it as a global dictionary.
*/
const localStorage = require("local-storage");


//var movieList =[]
//var title = []
//var year = []
//var director = []



const Search = ({ history, location, match }) => {
    const email = localStorage.get("email")
    const session_id = localStorage.get("session")

    const [type, setType] = useState();
    const [input, setInput] = useState();
    const [movieList, setMovies] = useState([]);

    /**
     * Buttons have default behavior which will cause
     * the entire page to refresh, this isn't what
     * we want in React as everything updates according
     * to the state. So we prevent that action by
     * using "e.preventDefault();"
     *
     * @param e Event
     */
    const handleSubmit = (e) => {
        
        e.preventDefault();
        //alert("type is: " + type + " " + "input is " + input);
        localStorage.set("type", type)
        localStorage.set("input", input)

        movies.search(type, input)
            .then(response => {alert(JSON.stringify(response.data, null, 4))
                console.log(response.data?.movies)
                setMovies(response.data?.movies)

                
              /*
                for(var i = 0; i < response.data?.movies.length; i++){
                    movieList.push(response.data?.movies[i]);
                    title.push(response.data?.movies[i].title);
                    year.push(response.data?.movies[i].year);
                    director.push(response.data?.movies[i].director);
                }
              */
            
            }
            
            )
            .catch(error => alert(error));

            
       
    };

    
   
    //function makeTable(){
    const makeTable = () => {
      
       // console.log("hahahha" + movieList[0].title)
          
       /*
            Axios.get('http://localhost:12345/api/movies/search' + '/?' + type + '=' + input)
       .then(function (response) {
           // handle success
           console.log(response.data?.movies[0].title);
           console.log(response.data?.movies.length)

           for(var i = 0; i < response.data?.movies.length; i++){
               movieList.push(response.data?.movies[i]);
               title.push(response.data?.movies[i].title);
               year.push(response.data?.movies[i].year);
               director.push(response.data?.movies[i].director);
           }
           console.log(movieList[0].title)
           console.log(movieList.length)

           console.log(title[1])
           console.log(title.length)

           console.log(year[3])
           console.log(year.length)

           console.log(director[4])
           console.log(director.length)
           //title.push(response.data?.movies);
           //console.log(title)
           //console.log(title.length)
           
          
           
       })
       .catch(function (error) {
           // handle error
           console.log(error);
       })
       */
      
       
        return(
        
            1
           
        )
    
       
    };

    function printTable(movieList){
        if(movieList != null)
        {
            console.log("not null")
            return(
                <table className="form-table" >
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Year</th>
                        <th>Director</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                        movieList.map((item) => (
                            <tr key={nanoid()}>
                                <td>  {item.title}  </td> 
                                <td>  {item.year} </td>
                                <td> {item.director}</td>
                                <td/> 
                            </tr>
                            
                        ))
                        }
                </tbody>
            </table>
            )
        }
        else{
            return(
                
                <table className="form-table" >
                    <tbody>
                        <tr key={nanoid()}>
                            <td> </td> 
                            <td> </td>
                            <td> </td>
                            <td/> 
                        </tr>
                    </tbody>
                    </table>
         )
        }
    }
   
    return (
        <div className="form-box">
            <h1>Search</h1>
            <form onSubmit={handleSubmit}>
                    <label className="form-label">Search Bar:</label>
                    <input
                        className="form-input"
                        type="text"
                        onChange={(e) => setInput(e.target.value)}
                    /> 
                    
                    <label className="form-label"> Filter:</label>
                    <select name="movieFilter" id="movieFilter"  onChange={(e) => setType(e.target.value)}>
                        <option hidden value="choose">choose</option>
                        <option value="title">title</option>
                        <option value="year">year</option>
                        <option value="director">director</option>
                    </select>
                
                
                <button className ="form-button">Search</button>
                
                <div>{printTable(movieList)}</div>
            </form>     
        </div>      
    );
}

export default Search;





/*
  <tr dangerouslySetInnerHTML={makeTable()} />    

{__html: 
            '<td>' + movieList[0].title  + '</td>' +
            '<td>' + movieList[0].year + '</td>'+
            '<td>' + movieList[0].director + '</td>'+
            ' <td/>'  
        }
       
 '<td></td>' +
                        '<td>b</td>'+
                        '<td>c</td>'+
                        ' <td/>' 


'<td>' + item.title  + '</td>' +
                    '<td>' + item.year + '</td>'+
                    '<td>' + item.director + '</td>'+
                    ' <td/>' 



<tr key={movieList.id}>
                           
                        <td>{movieList[0].title}</td>
                            <td>{movieList[0].year}</td>
                            <td>{movieList[0].director}</td>
                            <td/>
                        </tr>



     const email = localStorage.get("email")
    const session_id = localStorage.get("session")

    const [type, setType] = useState();
    const [input, setInput] = useState();

    //console.log(email)
    //console.log(session_id)
    //console.log(type)
   // console.log(input)
    const [title, setTitle] = useState();
    const [year, setYear] = useState();
    const [director, setDirector] = useState();
    

   
    @param e Event

    
    
    //console.log(title)

    const handleSubmit = (e) => {
        e.preventDefault();

        if(type === "title"){
            console.log(title)
            movies.search(title)
            .then(response => {alert(JSON.stringify(response.data, null, 4))})
            .catch(error => alert(error));
        }
        else if(type === "year"){
            console.log(year)
            movies.search(year)
            .then(response => {alert(JSON.stringify(response.data, null, 4))})
            .catch(error => alert(error));
        }else if(type === "director"){
            console.log(director)
            movies.search(director)
            .then(response => {alert(JSON.stringify(response.data, null, 4))})
            .catch(error => alert(error));
        }
    };

    const handleType = (e) =>{
        e.preventDefault();
        console.log(type === "title")
        if(type === "title"){
            setTitle(e.target.value)
            console.log(title)
        }else if(type === "year"){
            setYear(e.target.value)
            console.log(year)
        }else if(type === "director"){
            setDirector(e.target.value)
            console.log(director)
        }

    }

    return (
        <div className="form-box">
            <h1>Search</h1>
            <form onSubmit={handleSubmit}>

                    <label className="form-label"> Filter:</label>
                    <select name="movieFilter" id="movieFilter"  onChange={(e) => setType(e.target.value)}>
                        <option hidden value="choose">choose</option>
                        <option value="title">title</option>
                        <option value="year">year</option>
                        <option value="director">director</option>
                    </select>
                
                    <label className="form-label">Search Bar:</label>
                    <input
                        className="form-input"
                        type="text"
                        onChange={handleType}
                    /> 
                    
                   
                   

               
                <button className ="form-button">Search</button>
            </form>

        </div>
    );
}

export default Search;
*/