import React from 'react';
import ReactDOM from 'react-dom';
import HeaderComponent from './component/header';
import Footer from './component/footer';
import SalaryCalculator from './component/salaryCalculator';
import WorkingWithProps from './component/WorkingWithProps';

function App() {
  var employeeArray = [{
                        name: 'Meha',
                        imgUrl: 'https://i.pinimg.com/originals/74/44/41/7444414d63f2f1400a7b590eff189efa.jpg',
                        designation: 'Developer',
                        empId: '001'
                      },{
                        name: 'Mayank',
                        imgUrl: 'https://i.pinimg.com/564x/ea/37/8e/ea378ec600081e6870fe7f424e349068.jpg',
                        designation: 'Senior Developer',
                        empId: '002'
                      },{
                        name: 'Nisha',
                        imgUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/d3e35d20790237.562f125cb7691.jpg',
                        designation: 'Tech Lead',
                        empId: '003'
                      },{
                        name: 'Chhavi',
                        imgUrl: 'https://freedesignfile.com/upload/2019/10/Girl-with-red-short-wavy-hair-to-her-shoulders-portrait-vector.jpg',
                        designation: 'Senior Analyst',
                        empId: '004'
                      },{
                        name: 'Kritika',
                        imgUrl: 'https://data.whicdn.com/images/300969204/original.jpg',
                        designation: 'Service Executive',
                        empId: '005'
                      },{
                        name: 'Aradhana',
                        imgUrl: 'https://i.pinimg.com/736x/a4/3f/b6/a43fb672274ede00cd534ea7b11bf2b4.jpg',
                        designation: 'HR Manager',
                        empId: '006'
                      }];
  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <h1>Welcome to Basic React Page Fellas...</h1>
      <SalaryCalculator></SalaryCalculator>
      <WorkingWithProps employeeArray={employeeArray}></WorkingWithProps>
      <Footer></Footer>
    </div>
  )
}

ReactDOM.render(<App></App>,
  document.getElementById('root')
);
