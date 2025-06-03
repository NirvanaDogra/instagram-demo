import Carousel from "../carousel/Carousel";
import UserProfile from "../UserProfile/UserProfile";
import "./status.css";

const statusItemTemplate = (item) => {
    return <div className="p-status-handel" key={item}>
        <UserProfile size="l" />
        <p>{item}</p>
    </div>
};

const StatusBar = ({ }) => {
    const list = [
        "abc1",
        "abc2",
        "abc3",
        "abc4",
        "abc5",
        "abc6",
        "abc7",
        "abc8",
        "abc9",
        "abc3",
    ]
    return <div className="p-status">
        <Carousel list={list} initialValue={0} itemTemplate={statusItemTemplate} itemShowAtOnce={7}/>
    </div>

}

export default StatusBar