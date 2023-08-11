import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Footer from "./components/Footer"
import data from "./data"

export default function App(){
    // Declaring Variable for .map()
    const TravelData = data.map(item => {
        return (
            <Main 
                key={item.key}
                item={item}
            />
        )
    })
    
    return (
        <div>
            <Navbar />
            {TravelData}
            <Footer />
        </div>
    )
}