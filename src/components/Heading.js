import { ImCross } from "react-icons/im";

const Heading = () => {
  return (
    <>
      <div className="heading">
        <h4 className="chatsession">CHAT SESSIONS</h4>
        <div className="line"></div>
        <h4 className="chatdetail">CHAT DETAILS</h4>
        <div className="cross">
          <ImCross className="crossnested" />
        </div>
      </div>
    </>
  );
};
export default Heading;