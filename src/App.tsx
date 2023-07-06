
import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscaar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import { Status } from './components/Status';
import { CustomButton } from './components/html/Button';
import { Toast } from './components/templateliterals/Toast';
import { Test } from './components/polymorphic/Test';
import { Box } from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { UserContextProvider } from './components/context/UserContext';
import { User } from './components/states/User';
import { Counter } from './components/class/Counter';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { RandomNumber } from './components/Restriction/RandomNumber';
import { List } from './components/generic/List';

function App() {
  //creating an obj 
  const personName ={
    first:'Aka',
    second:'mundel'
  }

  //creating obj of arrylist
  const nameList =[
    {
      first: 'Abhi',
      last:'sharma'
    },
    {
      first: 'Aryan',
      last:'sharma'
    },
    {
      first: 'sorabh',
      last:'sharma'
    }
  ]
  return (
    <div className="App">
     <Greet name='aka' msgCnt={20} isLoggedIn={false}/>
        <Person name={personName}/> 
        <h6>
          creating the arrylist for the person with the name passing as this.props.first
        </h6>
        <PersonList names={nameList}/>

        {/* <Status status='loadinggukk' /> */} errors come 
        <Status status='error' />

        <h6>child props</h6>

        <Heading children='PLACEHOLDER'/>
        <Heading>Second way of writing </Heading>

        <Oscar>
          <Heading>Oscar is copment and passing as child props</Heading>
        </Oscar>

        {/* //button :event props */}
        <Button handleClick={(event,id)=>{console.log('button clicked',event,id)}} />
 
       <h6>onchange event on input element </h6>
       <Input value='' handleChange={(event)=>console.log(event)} />

        
       <Container styles={{border: '1px solid,black' , padding:'1rem'}} />


       <h6>toast </h6>
       <Toast position='left-center'/>

       {/* custom comp */}
       <CustomButton variant='primary' onClick={()=>console.log('clicked')}>
        Primary Button
        </CustomButton>


        <h5>polymorphic camp
        </h5>
        <Test as='h1' size='lg' >Heading</Test>
        <Test as='p' size ='md'>Paragraph</Test>
        <Test  as='label' htmlFor ='someId' size='sm' color='secondary'>Label</Test>

        <h6>usecontext hook</h6>
        <ThemeContextProvider>
          <Box/>
        </ThemeContextProvider>


   <h6>USECONTEXT FUTURE value</h6>
   <UserContextProvider>
    <User />
   </UserContextProvider>


   <h5>class comp </h5>
   <Counter message='the count value is ' />


   <Private isLoggedIn={true} component = {Profile}/>


   <h6>randomisation</h6>
   <RandomNumber value={10} isPositive={true} />
   {/* //not possible to pass isNegativeIsPositive iszero  */}


   {/* <List
        items={['Batman', 'Superman', 'Wonder Woman']}
        onClick={item => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={item => console.log(item)} /> */}
     
      <List
        items={[
          {
            id: 1,
            first: 'Bruce',
            last: 'Wayne'
          },
          {
            id: 2,
            first: 'Clark',
            last: 'Kent'
          },
          {
            id: 3,
            first: 'Princess',
            last: 'Diana'
          }
        ]}
        onClick={item => console.log(item)}
      />
           </div>


  );
}

export default App;


//props
// :string
// number
// boolean 
// object
//array
//status 
//child props 
//reactnamode
//optional props
//events props  - click event on btn and chnge ele in input arry
//style prors : css.properties -> type 


//destructing props
//export import type 
//resudisnf the type 