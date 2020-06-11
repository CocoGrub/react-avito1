import React from "react";
import styles from './mainPage.module.css'
import Photos from '../components/gallery/gallery'
const MainPage=(props)=>{

return<div>
    <h1>Test App</h1>
    <div className={styles.main}>
    <div>
        <Photos/>
    </div>
</div>
</div>

}
export default MainPage