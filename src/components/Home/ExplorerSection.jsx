import exploreImage from "@/assets/banner.webp";
import Image from 'next/image';

const imageStyle = {
    // borderRadius: '50%',
    border: '1px solid #fff',
    width: "50%",
    height: "auto"
}

const ExplorerSection = () => {
    return (
        <div className='max-w-7xl mx-auto p-6 lg:px-8'>
            <div className="flex gap-2">
                <Image alt='explore section bg' src={exploreImage} style={imageStyle} />
                <div className="">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis veniam aut, dicta nemo voluptatum fuga, error eveniet temporibus magni facilis soluta, quisquam architecto aspernatur. Sed consequatur, quia facilis quos reprehenderit cupiditate cum pariatur beatae eveniet sequi ex, excepturi neque, optio non accusantium tempora? Ex accusantium deleniti in fuga magnam dolorum, a quod eveniet minus! Itaque minus quidem nesciunt adipisci cupiditate alias nemo, unde similique voluptate dolorem porro voluptatibus vel quo ex quasi qui magni labore non autem rem nobis dicta? Molestiae perferendis accusamus laborum ipsum sed qui? Consequuntur tempore labore, minima rerum possimus temporibus fugit, consequatur nulla aspernatur obcaecati ullam!</p>
                </div>
            </div>
        </div>
    );
};

export default ExplorerSection;