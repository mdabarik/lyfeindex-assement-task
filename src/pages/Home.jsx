import Body from "../components/Body/Body";
import FloatingCard from "../components/FloatingCard/FloatingCard";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Home = () => {
    return (
        <div className="w-full relative">
            <div className="w-[100vw] h-[100vh] absolute top-0 left-0">
                <img className="w-full h-full" src={"https://lyfeindex.com/wp-content/themes/main_website/background.png"} alt="bg task" />
            </div>
            <div className="relative">
                <Header></Header>
                <div className="py-14 flex flex-col items-center justify-center">
                    <Body></Body>
                    <FloatingCard></FloatingCard>
                </div>
                <Footer></Footer>
            </div>
            
        </div>
    );
};

export default Home;