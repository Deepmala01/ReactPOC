import CourseGoal from "./CourseGoal.tsx";
import { type CourseGoal as CGoal } from "../App.tsx";
import InfoBox from "./InfoBox.tsx";
import { type ReactNode } from "react";
// import NewGoal from "./NewGoal.tsx";
type CourseGoalListProps={
    goals:CGoal[];
    onDeleteGoal : (id:number)=>void;
    // goals:{
    //     title: string;
    //     description: string;
    //     id: number;
    //   }[]
    
};


export default function CourseGoalList({goals,onDeleteGoal}:CourseGoalListProps){

  if(goals.length === 0){
    return <InfoBox mode="hint" severity="low">You have No course Start Adding Some. </InfoBox>
  }
  let WarningBox:ReactNode;
   if(goals.length >= 4){
 WarningBox = (<InfoBox mode="warning" severity="high">You are collected lots of goals.</InfoBox> )
    }
    return(
      <>
      {WarningBox}
        <ul>
        {goals.map((goals) => (
          <li key={goals.id}>
            <CourseGoal id={goals.id} title= {goals.title} onDelete = {onDeleteGoal}>
              <p>
                {goals.description}
              </p>
              </CourseGoal>
          </li>
        ))}
      </ul>
      </>
    );

}