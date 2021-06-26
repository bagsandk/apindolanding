import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../components/template/Footer";
import Header from "../components/template/Header";
import DetailUmkm from "../pages/DetailUmkm";
import Home from "../pages/Home";
import More from "../pages/More";
import PetaSebaran from "../pages/PetaSebaran";
import Mitra from "../pages/Mitra";
import DetailBerita from "../pages/DetailBerita";
import Profile from "../pages/Profile";
import Direksi from "../pages/Direksi";
import Kontak from "../pages/Kontak";
import Berita from "../pages/Berita";

export default () => {
    return (
        <>
            {/* <div className="px-24"> */}
            <Router>
                <Header />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/more' component={More} />
                    <Route exact path='/detail-umkm' component={DetailUmkm} />
                    <Route exact path='/peta-sebaran' component={PetaSebaran} />
                    <Route exact path='/mitra' component={Mitra} />
                    <Route exact path='/mitra' component={Mitra} />
                    <Route exact path='/detail-berita' component={DetailBerita} />
                    <Route exact path='/profile' component={Profile} />
                    <Route exact path='/profile' component={Profile} />
                    <Route exact path='/direksi' component={Direksi} />
                    <Route exact path='/direksi' component={Direksi} />
                    <Route exact path='/kontak' component={Kontak} />
                    <Route exact path='/kontak' component={Kontak} />
                    <Route exact path='/berita' component={Berita} />
                </Switch>
                <Footer />
            </Router>
            {/* </div> */}
        </>
    )
}