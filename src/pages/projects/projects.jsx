import React from 'react';
import s from './projects.module.css'

function Projects() {
    return (
        <div className={s.main_container}>
            <div className={s.site}>

                <a className={s.ref} href="https://github.com/bousenkeed/dzsah.git"><h1 className={s.text}>Мой первый сайт</h1></a>
                <div className={s.site_container}>
                <img className={s.image1   + ' ' + s.images} src={require("./images/img.jpg")} alt="1st-site" />
                </div>

                <a className={s.ref} href="https://github.com/bousenkeed/fotolab.git"><h1 className={s.text }>Сайт фотографа</h1></a>
                <div className={s.site_container2}>
                <img className={s.image2    + ' ' + s.images} src={require("./images/img2.jpg")} alt="1st-site" />
                <img className={s.image2    + ' ' + s.images} src={require("./images/img3.jpg")} alt="1st-site" />
                <img className={s.image2    + ' ' + s.images} src={require("./images/img4.jpg")} alt="1st-site" />
                </div>

                {/* <h1>Сайт портфолио</h1>
                <img className={s.image3} src={require("./images/img.jpg")} alt="1st-site" /> */}
            </div>
        </div>
    )
}

export default Projects;