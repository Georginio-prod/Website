import React, {Component} from "react";
import Header  from "../Common/Header";
import image from "../assets/img/header-bg.jpg";

//Re-usable components

import Services from "../Common/Services";
import Portfolio from "../Common/Portfolio";
import Team from "../Common/Team";

class Home extends Component{

    render() {
        return(

            <div>
              <Header
                title="Bienvenue dans notre Studio!"
                subtitle="C'est bien de vous retrouvez"
                buttonText="Tell me more"
                link="/services"
                showButton={true}
                image={image}
              />
                <Services />
                <Portfolio/>
                <Team/>
            </div>
        )
    }
}

export default Home;