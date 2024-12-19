import { Component } from 'react'
import { Link } from 'react-router-dom'

import './style.css'

export class Main extends Component {

    render() {
        return (
            <div className='main-page'>
                <h1>Главная страница</h1>

                <div className="button-container">
                    <Link to="/hello" className="custom-link">Hello, web</Link>
                    <Link to="/greeting" className="custom-link">Hello</Link>
                    <Link to="/counter" className="custom-link" >Count</Link>
                </div>

            </div>
        );
    }

}