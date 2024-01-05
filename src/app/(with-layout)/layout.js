import Footer from "@/components/Footer";
import Header from "@/components/Home/Header";

const layout = ({children}) => {
    return (
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    );
};

export default layout;