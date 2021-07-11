import android from "./img/android.png";
import brokul from "./img/brokul.png";
import fish from "./img/fish.png";
import gluten from "./img/gluten.jpg";
import hantle from "./img/hantle.png";
import indyk from "./img/indyk.png";
import ios from "./img/ios.png";
import mieso from "./img/mieso.png";
import oliwia from "./img/oliwia.png";
import print from "./img/print.png";
import ser from "./img/ser.png";
import tickbox from "./img/tickbox.png";
import tickbox2 from "./img/tickbox2.png";
import weekprogress from "./img/weekprogress.png";
import arrowleft from "./img/arrow_left.png";
import arrowright from "./img/arrow_right.png";
import food from "./img/foot.png";
import week1 from "./img/week1.jpg";
import week2 from "./img/week2.jpg";
import week3 from "./img/week3.jpg";
import week4 from "./img/week4.jpg";
import { useState } from "react";

import "./App.css";

function CutFromMockup() {
  const images = [week1, week2, week3, week4];
  const [counter, setCounter] = useState(0);
  const isVisibleLeft = counter > 0;
  const isVisibleRight = counter < images.length;

  const leftBtn = () => {
    setCounter(counter - 1);
  };

  const rightBtn = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="App">
      <header>
        <div className="Menu">
          <ul>
            <li>
              <a href="#">dashboard </a>
            </li>

            <li>
              <a href="#">recipies</a>
            </li>

            <li>
              {" "}
              <a href="#">challenge </a>
            </li>
          </ul>
        </div>
        <div className="Users">
          <p>
            <img src={oliwia} alt="Oliwia" /> Oliwia Wilde
          </p>
        </div>
      </header>

      <div className="WeekWrapper">
        <div className="WeekProgress">
          <img src={weekprogress} alt="weekprogress" />
        </div>
        <div className="WeekPicture">
          <div onClick={leftBtn} className="arrows">
            {isVisibleLeft ? <img src={arrowleft} alt="arrowleft" /> : null}
          </div>
          <div className="arrows">WEEK {counter}</div>

          <div onClick={rightBtn} className="arrows">
            {isVisibleRight ? <img src={arrowright} alt="arrowright" /> : null}
          </div>
        </div>
        <div className="FoodPictures">
          <ul>
            <li>
              <img src={brokul} alt="foods" />
            </li>
            <li>
              <img src={ser} alt="chease" />
            </li>
            <li>
              <img src={mieso} alt="meat" />
            </li>
            <li>
              <img src={fish} alt="fish" />
            </li>
            <li>
              <img src={indyk} alt="turkey" />
            </li>
          </ul>
        </div>
      </div>
      <div className="MainTable">
        <table>
          <tbody>
            <tr className="DaysColor">
              <td className="Hours"></td>
              <td>
                <p>DAY 64</p>
              </td>
              <td>
                <div className="Day65">DAY 65 </div>
              </td>
              <td>
                <p>DAY 66</p>
              </td>
              <td>
                <p>DAY 67</p>
              </td>
              <td>
                <p>DAY 68</p>
              </td>
              <td>
                <p>DAY 69</p>
              </td>
              <td>
                <p>DAY 70</p>
              </td>
            </tr>
            <tr>
              <td className="Hours">
                <span>6:00 am</span>
              </td>
              <td>
                <span>
                  Bod-e-Shake
                  <img src={tickbox} alt="tickbox" />
                  <br />
                  <img src={food} alt="food" />
                </span>
              </td>
              <td>
                <span>
                  Bod-e-Shake
                  <br />
                  <img src={food} alt="food" />
                </span>
              </td>
              <td>
                <span>
                  Bod-e-Shake
                  <br />
                  <img src={food} alt="food" />
                </span>
              </td>
              <td>
                <span>
                  Bod-e-Shake
                  <br />
                  <img src={food} alt="food" />
                </span>
              </td>
              <td>
                <span>
                  Bod-e-Shake
                  <br />
                  <img src={food} alt="food" />
                </span>
              </td>
              <td>
                <span>
                  Bod-e-Shake
                  <br />
                  <img src={food} alt="food" />
                </span>
              </td>
              <td rowspan="5">
                <img src={gluten} alt="guiltfree" />
              </td>
            </tr>
            <tr>
              <td className="Hours">
                <span>09:00 am</span>
              </td>
              <td>
                <span>
                  Ham and Swiss Roll Ups <img src={tickbox} alt="tickbox" />
                </span>
              </td>
              <td>
                <span>Ham and Swiss Roll Ups</span>
              </td>
              <td>
                <span>Ham and Swiss Roll Ups</span>
              </td>
              <td>
                <span>Ham and Swiss Roll Ups</span>
              </td>
              <td>
                <span>Ham and Swiss Roll Ups</span>
              </td>
              <td>
                <span>Ham and Swiss Roll Ups</span>
              </td>
            </tr>
            <tr>
              <td className="Hours">
                <span>12:00 pm</span>
              </td>
              <td>
                <span>
                  Turkey Melt <img src={tickbox} alt="tickbox" />
                </span>
              </td>
              <td>
                <span>Turkey Melt</span>
              </td>
              <td>
                <span>
                  Turkey Melt
                  <br />
                  <img src={food} alt="food" />
                </span>
              </td>
              <td>
                <span>Turkey Melt</span>
              </td>
              <td>
                <span>
                  Turkey Melt <br />
                  <img src={food} alt="food" />
                </span>
              </td>
              <td>
                <span>
                  Turkey Melt <br />
                  <img src={food} alt="food" />
                </span>
              </td>
            </tr>
            <tr>
              <td className="Hours">
                <span>03:00 pm</span>
              </td>
              <td>
                <span>
                  Bod-e-Burn with Mozzarella and Tomato Slices{" "}
                  <img src={tickbox} alt="tickbox" />
                </span>
              </td>
              <td>
                <span>Bod-e-Burn with Mozzarella and Tomato Slices</span>
              </td>
              <td>
                <span>Bod-e-Burn with Mozzarella and Tomato Slices</span>
              </td>
              <td>
                <span>Bod-e-Burn with Mozzarella and Tomato Slices</span>
              </td>
              <td>
                <span>Bod-e-Burn with Mozzarella and Tomato Slices</span>
              </td>
              <td>
                <span>Bod-e-Burn with Mozzarella and Tomato Slices</span>
              </td>
            </tr>
            <tr>
              <td className="Hours">
                <span>06:pm </span>
              </td>
              <td>
                <span>
                  Turkey Melt <img src={tickbox} alt="tickbox" />
                </span>
              </td>
              <td>
                <span>Turkey Melt</span>
              </td>
              <td>
                <span>Turkey Melt</span>
              </td>
              <td>
                <span>Turkey Melt</span>
              </td>
              <td>
                <span>Turkey Melt</span>
              </td>
              <td>
                <span>Turkey Melt</span>
              </td>
            </tr>
            <tr className="Hours">
              <td className="Hours">
                <span>workout</span>
              </td>
              <td>
                LOW - CARB
                <br />
                <img src={hantle} alt="weekprogress" />
              </td>
              <td>
                LOW - CARB
                <br />
                <img src={hantle} alt="weekprogress" />
              </td>
              <td>
                HIGH-CARB
                <br />
                <img src={hantle} alt="weekprogress" />
              </td>
              <td>
                LOW-CARB
                <br />
                <img src={hantle} alt="weekprogress" />
              </td>
              <td>
                LOW-CARB
                <br />
                <img src={hantle} alt="weekprogress" />
              </td>
              <td>
                HIGH-CARB
                <br />
                <img src={hantle} alt="weekprogress" />
              </td>
              <td>
                <br />
                <img src={print} alt="print" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="footer">
        <h3>Running out of products ? </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <img src={ios} alt="ios" />
      </div>
      <div className="footer">
        <h3>Bod-e Trainer in your pocket</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <img src={ios} alt="ios" />
        <img src={android} alt="android" />
      </div>
      <div className="footer">
        <h3>Frequently Asked Questions</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <img src={ios} alt="ios" />
      </div>
    </div>
  );
}

export default CutFromMockup;
