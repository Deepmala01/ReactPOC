
import { useState } from 'react'
import './App.css';
import CourseGoal from './components/CourseGoal.tsx';
import goalImage from './assets/react.svg';
import Header from './components/Header.tsx';
import CourseGoalList from './components/CourseGoalList.tsx';
import NewGoal from './components/NewGoal.tsx';

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};
function App() {
 const [goals,setGoals]=useState<CourseGoal[]>([]);
 function handleAddGoal(goal:string, summary : string){
  setGoals(prevGoal => {
    const newGoal:CourseGoal={
      id: Math.random(),
      title: goal,
      description:summary,
    };
return[...prevGoal,newGoal]
  });
 } 
 
 function handleDeleteGoal(id:number){
  setGoals(prevGoal =>prevGoal.filter((goals)=> goals.id !== id ))
}
 
 const img = {src:goalImage, alt:'A list of goals'};
  return (
  <main>
    <Header image={img} > 
      <p>Your course goal</p>
    </Header>
    <NewGoal onAddGoal={handleAddGoal}/>
    {/* <button onClick={handleAddGoal}>Add Goal</button> */}
    <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal}/>
    {/* <CourseGoal title={'title'} onDelete={onDelete} >
    <p>Learn it from here</p>
    </CourseGoal> */}
  </main>
 );
 }
 
export default App