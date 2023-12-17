import "./HeroStyles.css";

function Hero(props){
    return(
        <>
            <div className={props.cName}>
                <img alt="HeroImg" src={props.heroImg}/>
                <div className="hero-text">
                    <h1>{props.title}</h1>
                </div>
            </div>
        </>
    );
}

export default Hero;