import React from "react";

function Header(){
    return  (   
    <>
        <header>
            <img src="/assets/images/logo.svg" alt="" />
             <nav>
                <ul>
                    <li>Features</li>
                    <li>Company</li>
                    <li>Careers</li>
                    <li>About</li>

                </ul>
            </nav>
            <section>
                <a href="">Login</a>
                <button className="login">Register</button>
            </section>
        

        </header>
    </>
    )
    
}

export default Header