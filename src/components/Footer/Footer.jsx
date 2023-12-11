import SelectLang from "./SelectLang";


const Footer = () => {

    return (
        <div className="flex flex-col space-y-3 items-center justify-center border-2 py-5">
            <div className="flex text-blue-500 items-center justify-center gap-4">
                <a className="hover:underline" href="#">Home</a>
                <a className="hover:underline" href="#">Contact Us</a>
                <a className="hover:underline" href="#">About Us</a>
                <a className="hover:underline" href="#">Terms</a>
                <a className="hover:underline" href="#">Privacy Policy</a>
            </div>
            <div>
                LyfeIndex &copy; 2023
            </div>
            <div>
                <SelectLang></SelectLang>
                <footer className="text-sm text-center">Powered by Google Translate</footer>
            </div>
        </div>
    );
};

export default Footer;