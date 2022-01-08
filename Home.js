import React from "react";
import sublist from "./Sub";
import "./Home.css";
import Classcom from "./Classcom";
import Card from "./Card";
import Ccard from "./Ccard";
function Home() {
  return (
    <div className="Home container  ">
      <div className="left">
        <div className="upperhalf shadow-lg m-2">
          {/* <h1>left upperhalf</h1> */}
          <div className="upperhalfleft ">
            {/* <h2>left upperhalfleft</h2>
             */}
            <div className="image">
              <img
                src="https://drive.google.com/uc?id=1JntIBlhG2IQFcbXq8lMOy-7J4yPpcFEN"
                alt=""
              />
            </div>
          </div>
          <div className="upperhalfright">
            {/* <h2>left upperhalfright</h2>
             */}
            <div className="up m-2 w-100 d-flex  flex-row justify-content-between">
              <div>
                <h2 className="text-dark">Remus Lupin</h2>
                <h6 className="heading">JEE ASPIRANT</h6>
              </div>
              <div>
                <button className="btn  btn-white" padding-right="40px">EDIT PROFILE</button>
              </div>
            </div>
            <br />
            <div className="buttonlist">
              {sublist.map((sub, index) => {
                return <button className="btn feature m-1 p-1 btn-red">{sub}</button>;
              })}
            </div>
            <hr className="hori" />
            <br />
            <div className="p-2 ">
              The href attribute requ ires a valid value to be accessible. P
              rovide a valid, navigable address as t he href value. If you
              cannot provide a valid href, but still need the elemen t to
              resemble a link, use a button and change it with appropriate
              styles. Le arn more: https://github.com/jsx-eslin
              t/eslint-plugin-jsx-a11y/blob/HEAD/doc s/rules/anchor-is-valid.md
              jsx-a11y/a nchor-is-valid
            </div>
            </div>
            <div className="p-90">
          </div>
        </div>
        <div className="lowerhalf">
          {/* <h1>left lower half</h1>
           */}
           <div className="headings d-flex flex-row">
             <img className="headingimg" src="https://drive.google.com/uc?id=16qCV_Ui1-JpIlN-3E5gFNR_Iv3wFnuV3" alt="" />
              <h1 className="heading">Upcoming Classes</h1>
           </div>
           {/* <div classname="play" img src="https://drive.google.com/uc?id=16qCV_Ui1-JpIlN-3E5gFNR_Iv3wFnuV3" alt="" 
           height="50" width="50" /> */}
         

          <p className="date">TODAY</p>
          <Classcom
            islive="true" 
            image="https://drive.google.com/uc?id=1L8iWclB_aqTwlqn0hA8rujAhfHmOF52Y"
            heading="Lorem ipsum sit amet"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quisquam. lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quisquam."
            time="4.00-6.00 PM"
          />
          <Classcom
            islive="false"
            image="https://drive.google.com/uc?id=1AcSyrvo7FKgjg6ctzlZc7JT6bsOJvRCd"
            heading="Lorem ipsum sit amet"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quisquam. lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quisquam."
            time="8.00-9.00 PM"
          />
          <p className="date">16/09/21</p>
          <Classcom
            islive="false"
            image="https://drive.google.com/uc?id=1HLnldmqwBl9qiaz-5fy0YGAg2DK0DCsI"
            heading="Lorem ipsum sit amet"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quisquam. lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quisquam."
            time="4.00-6.00 PM"
          />
          <Classcom
            islive="false"
            image="https://drive.google.com/uc?id=1AcSyrvo7FKgjg6ctzlZc7JT6bsOJvRCd"
            heading="Lorem ipsum sit amet"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quisquam. lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quisquam."
            time="8.00-9.00 PM"
          />
          <Classcom
            islive="false"
            image="https://drive.google.com/uc?id=1HLnldmqwBl9qiaz-5fy0YGAg2DK0DCsI"
            heading="Lorem ipsum sit amet"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quisquam. lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quisquam."
            time="4.00-6.00 PM"
          />
          <Classcom
            islive="false"
            image="https://drive.google.com/uc?id=1AcSyrvo7FKgjg6ctzlZc7JT6bsOJvRCd"
            heading="Lorem ipsum sit amet"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quisquam. lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quisquam."
            time="8.00-9.00 PM"
          />
        </div>
      </div>
      <div className="right">
        <div className="rightupperhalf">
          {/* <h1>right upperhalf</h1>
           */}
          <Card />
        </div>
        <div className="rightlowerhalf">
          {/* <h1>right lower half</h1> */}
          <div className="headings d-flex flex-row">
             <img className="headingimg" src="https://drive.google.com/uc?id=https://drive.google.com/file/d/1S60THhY_xqYdzZTRvxudLAxTXUP0Z-tP" alt="" />
          <h4 className="heading">My Courses</h4>
          </div>
          <Ccard
            heading="Lorem ipsum sit a"
            image="https://drive.google.com/uc?id=11p6UGBS20SvwEaaPRyVMGbOLBz_v4y29"
          />
          <Ccard
            heading="Lorem ipsum sit a"
            image="https://drive.google.com/uc?id=1biG3ctMJY9Eg4krZE4HltiQnv9s4IXfc"
          />
          <Ccard
            heading="Lorem ipsum sit a"
            image="https://drive.google.com/uc?id=1xI9k1B_JqRfv0bg5x14u4Q4G96apGBKb"
          />
          <Ccard
            heading="Lorem ipsum sit a"
            image="https://drive.google.com/uc?id=1AcSyrvo7FKgjg6ctzlZc7JT6bsOJvRCd"
          />
          <Ccard
            heading="Lorem ipsum sit a"
            image="https://drive.google.com/uc?id=1HLnldmqwBl9qiaz-5fy0YGAg2DK0DCsI"
          />
        </div>
        <img className="headingimg" src="https://drive.google.com/uc?id=1-6tOwSIgcvZsMmQgWW3hK2qPd_KTAVl0" alt="" />
      </div>
    </div>
  );
}
export default Home;