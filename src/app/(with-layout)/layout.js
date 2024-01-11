import Footer from "@/components/Footer";
import Header from "@/components/Home/Header";
import ResponsiveMenu from "@/components/Home/ResponsiveMenu";

const layout = ({children}) => {
    return (
        <div>
            <Header/>
            <ResponsiveMenu/>
            {children}
            <Footer/>
        </div>
    );
};

export default layout;