import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function Home(){
    return(
        <>
            <Navbar/>
            <Hero
            cName="hero"
            heroImg="https://img2.exportersindia.com/product_images/bc-full/2021/9/9233214/psyllium-husk-1632290433-6003910.jpeg"
            title="Good Quality Food Expoter from India"
            />
        </>
    );
}

export default Home;