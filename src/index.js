import React from 'react';
import ReactDOM from 'react-dom';
import HeaderComponent from './component/header';
import Footer from './component/footer';
import SalaryCalculator from './component/salaryCalculator';

function App() {
  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <h1>Welcome to Basic React Page Fellas...</h1>
      <SalaryCalculator></SalaryCalculator>
      <Footer></Footer>
    </div>
  )
}

ReactDOM.render(<App></App>,
  document.getElementById('root')
);
