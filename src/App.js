import logo from './logo.svg';
import './App.css';

function App() {
  return (
  <div class="constructor">
    <div id="left">

    </div>
    <div id="center">
    <div id="top">
      Dashboard
    </div>
    <div id="main">
      <div id="user">
        <div id="box">
        </div>
      </div>
      <div id="user">
        <div id="box">
        </div>
      </div>
      <div id="user">
        <div id="box">
        </div>
      </div>
      <div id="user">
        <div id="box">
        </div>
      </div>
      <div id="user">
        <div id="box">
        </div>
      </div>
    </div>
    </div>
    <div id="right">
    <div class="month">
  <ul>
    <li class="prev">&#10094;</li>
    <li class="next">&#10095;</li>
    <li>August<br></br><span>2021</span></li>
  </ul>
</div>

<ul class="weekdays">
  <li>Mo</li>
  <li>Tu</li>
  <li>We</li>
  <li>Th</li>
  <li>Fr</li>
  <li>Sa</li>
  <li>Su</li>
</ul>

<ul class="days">
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  <li>6</li>
  <li>7</li>
  <li>8</li>
  <li>9</li>
  <li><span class="active">10</span></li>
  <li>11</li>
  ...etc
</ul>
      </div>
  </div>
  );
}

export default App;
