// import "./styles.css";
// import WheelComponent from "react-wheel-of-prizes";
import { useContext, useEffect, useState } from 'react'
import '../Styles/style.css'
import { useParams } from 'react-router-dom';
import { WheelDataContext } from '../context';


const WheelPage = () => {
    // const segments = [
    //     "better luck next time",
    //     "won 70",
    //     "won 10",
    //     "better luck next time",
    //     "won 2",
    //     "won uber pass"
    //   ];
    //   const segColors = ["#EE4040", "#F0CF50", "#815CD1", "#3DA5E0", "#34A24F"];
    //   const onFinished = (winner) => {
    //     console.log(winner);
    //   };
    // useState

    const NextPageComponent = () => {
      const { data } = useParams();
      // Use 'data' in your component
      console.log(NextPageComponent);
      // return <div>Data received: {data}</div>;
      return (
        <div>
          <h2>Data received:</h2>
          <p>{data}</p>
        </div>
      );
    };    

  const [wheelStyle, setWheelStyle] = useState("circle")
  const {wheelData, setWheelData} = useContext(WheelDataContext);


  useEffect(() => {
    console.log("Wheel data:", wheelData);
  }, [])

  const startRotation = () => {
    setWheelStyle("circle start-rotate");

    setTimeout(() => {
      setWheelStyle("circle start-rotate stop-rotate");
    }, Math.floor(Math.random() * 10000) + 1);
  }

    return (
        <div>
          <div className = "arrow"></div>
          <ul className = {wheelStyle}>
            <li>
              <div className = "text"
                contentEditable="true"
                spellCheck="false">1
              </div>
            </li>
            <li>
              <div className = "text"
                contentEditable="true"
                spellCheck="false">2
              </div>
            </li>
            <li>
              <div className = "text"
                contentEditable="true"
                spellCheck="false">3
              </div>
            </li>
            <li>
              <div className = "text"
                contentEditable="true"
                spellCheck="false">4
              </div>
            </li>
            <li>
              <div className = "text"
                contentEditable="true"
                spellCheck="false">5
              </div>
            </li>
            <li>
              <div className = "text"
                contentEditable="true"
                spellCheck="false">6
              </div>
            </li>
            <li>
              <div className = "text"
                contentEditable="true"
                spellCheck="false">7
              </div>
            </li>
            <li>
              <div className = "text"
                contentEditable="true"
                spellCheck="false">8
              </div>
            </li>
            <li>
              <div className = "text"
                contentEditable="true"
                spellCheck="false">9
              </div>
            </li>
            <li>
              <div className = "text"
                contentEditable="true"
                spellCheck="false">10
              </div>
            </li>
            <li>
              <div className = "text"
                contentEditable="true"
                spellCheck="false">11
              </div>
            </li>
            <li>
              <div className = "text"
                contentEditable="true"
                spellCheck="false">12
              </div>
            </li>
          </ul>
          
          <button className= "spin-button" onClick={startRotation}>
            SPIN
          </button>
        </div>
        
    )
}

export default WheelPage;