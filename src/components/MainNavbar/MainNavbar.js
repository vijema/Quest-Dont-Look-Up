import { useState } from "react";
import styles from "./MainNavbar.module.css";
import { NavLink } from "react-router-dom";
import Logo from "../../img/logo-white-fat-frame.png";

const MainNavbar = (props) => {
    const [headerOpen, setHeaderOpen] = useState(false);

    return (
        <>
            <div className={styles.imgLogo} onClick={() => setHeaderOpen(true)}>
                <img src={Logo} className="w-12 h-12" alt="logo" />
            </div>

            <div onClick={() => setHeaderOpen(false)} className={`${styles.overlay} ${styles.animated} ${headerOpen ? `${styles.show}` : ""}`}>
                <div className={styles.modal}>
                    <MainNavbarContent clearKeys={props.clearKeys} />
                </div>
            </div>
        </>
    );
};

const MainNavbarContent = (props) => {
    return (
        <nav className={styles.nav}>
            <div className="nav-row">
                <NavLink to="/" className="flex gap-4 items-center">
                    <img src={Logo} className="w-12 h-12" alt="logo" />
                    <div className="logo">
                        <strong>DON'T LOOK UP!</strong>
                    </div>
                </NavLink>
                <ul className="nav-list">
                    <NavLink to="/" className={({ isActive }) => (isActive ? `${styles.itemactive}` : `${styles.item}`)}>
                        All quests
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? `${styles.itemactive}` : `${styles.item}`)}>
                        About
                    </NavLink>
                    <NavLink className="btn" onClick={props.clearKeys}>
                        Restart game
                    </NavLink>
                </ul>
            </div>
        </nav>
    );
};

export default MainNavbar;
