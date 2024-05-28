import Channelbar from ".././components/ChannelBar";
import ContentContainer from ".././components/ContentContainer";
import SideBar from ".././components/SideBar";

function Main() {
    return (
        <div className="flex">
            <SideBar />
            <Channelbar />
            <ContentContainer />
        </div>
    );
}

export default Main;
