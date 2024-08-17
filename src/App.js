import logo from './logo.svg';
import { ContractCard } from './components/ContractCard/ContractCard';
import './App.css';

function App() {
  const clauses1 = [
    { active: true, text: 'Sample Text Here' },
    { active: false, text: 'Other Text Title' },
    { active: true, text: 'Text Space Goes Here' },
    { active: false, text: 'Description Space' }
  ];
  const clauses2 = [
    { active: true, text: 'Sample Text Here' },
    { active: true, text: 'Other Text Title' },
    { active: true, text: 'Text Space Goes Here' },
    { active: false, text: 'Description Space' }
  ];
  const clauses3 = [
    { active: true, text: 'Sample Text Here' },
    { active: true, text: 'Other Text Title' },
    { active: true, text: 'Text Space Goes Here' },
    { active: true, text: 'Description Space' }
  ];
  return (
    <div>
      <div className='card-container'>
        <ContractCard title={'Basic'} price={'$0.99'} color={'#1C9A75'} clauses={clauses1}></ContractCard>
        <ContractCard title={'Standard'} price={'$2.99'} color={'#2C83C4'} clauses={clauses2}></ContractCard>
        <ContractCard title={'Basic'} price={'$5.99'} color={'#1B456C'} clauses={clauses3}></ContractCard>
      </div>
    </div>
  );
}

export default App;