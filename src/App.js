import React, { Component } from 'react'
import './App.css';
import Title from './components/Title';
import './components/Stylesheet.css';
import Photoframe from './components/Photoframe';
import AddPhoto from './components/AddPhoto';
import {Route} from 'react-router-dom'

// import Photo from './components/Photo';



class App extends Component{
    constructor()
    {
        super()
        this.state = {
          allPhotos:  [{
            id: "0",
            description: "beautiful sea",
            imageLink: "https://picsum.photos/800/600?image=14"
            }, {
            id: "1",
            description: "Coffee cup",
            imageLink: "https://picsum.photos/800/600?image=30"
            }, {
            id: "2",
            description: "Freedom",
            imageLink: "https://picsum.photos/800/600?image=50"
            }, {
            id: "3",
            description: "Farm",
            imageLink: "https://picsum.photos/800/600?image=85"
            }]
        }
        this.removePhoto = this.removePhoto.bind(this)
    }
    removePhoto(photoRemoved)
    {
      console.log(photoRemoved.description)
      this.setState((state) => ({
      allPhotos: state.allPhotos.filter((photos) => photos !==photoRemoved)
      }))
    }
  render(){
    return(
        <div>
         
          <Route path="/" render={ () => (
            <div>
               <h1>Photoframe</h1>
               <Title Title={'Photoframe'} />
               <Photoframe PhotoBlock = {this.state.allPhotos} onRemovePhoto={this.removePhoto}/>
            </div>
          )} />
         <Route path="/AddPhoto" render = { () => (
            <div>
              <AddPhoto />
            </div>
         )} />
        </div>
      
    );
  }
}


export default App;
