//import {deleteTodoService,updateTodoService,findallTodosService, checkLogin, addNewUser, addWorkout} from '../Services/service.js'
import {checkLogin, addNewUser, addWorkout, updateWorkout, deleteWorkout, findallWorkout,deleteMeal,updateMeal,addMeal,findallMeals} from '../Services/service.js'


export const  allWorkouts= async(req,res)=>{
  console.log("PARAMS",req.params)
  try {
    const workout=await findallWorkout(req,res);
    console.log("PARAMS",req.params)
    console.log("GET AAAALL",workout)
    res.send(workout);
  } catch (error) {
    res.status(500).send(error);
  }
}



export const signup= async(req, res)=>{
    
    
try {
  const todos=await addNewUser(req)
    res.status(200).send(todos);
    console.log(todos)
  } catch (error) {
    res.status(500).send(error);
  }

}

export const login= async(req, res)=>{
  
try {
  const todos=await checkLogin(req)
  if(todos.loginstatus=="Sucessful"){
    res.status(200).send(todos);

  }
  else if(todos.loginstatus=="Failed"){
    res.status(401).send(todos)
  }
  else{
    res.status(404).send(todos)
  }
} catch (error) {
  res.status(500).send(error);
}

}


export const  workout= async(req,res)=>{

try {
  const resp=await addWorkout(req);
  res.status(200).send(resp);
} catch (error) {
  res.status(500).send(error);
}
}


export const patchWorkout= async(req,res)=>{
try {
  const resp=await updateWorkout(req);
  res.status(200).send(resp);
} catch (error) {
  res.status(500).send(error);
}
}


 export const deleteW= async(req, res)=>{
  try{
    deleteWorkout(req,res);
    res.status(200).send("Deleted Workout")   
  }
    catch(error){
      res.status(500).send(error);
    }


}

// ------------------------------------------------------

export const  allMeals= async(req,res)=>{
  console.log("PARAMS",req.params)
  try {
    const meal=await findallMeals(req,res);
    console.log("PARAMS",req.params)
    console.log("GET AAAALL",meal)
    res.send(meal);
  } catch (error) {
    res.status(500).send(error);
  }
}

export const deleteM= async(req, res)=>{
  try{
    deleteMeal(req,res);
    res.status(200).send("Deleted Meal")   
  }
    catch(error){
      res.status(500).send(error);
    }


}


export const patchMeal= async(req,res)=>{
  try {
    const resp=await updateMeal(req);
    res.status(200).send(resp);
  } catch (error) {
    res.status(500).send(error);
  }
  }


  export const  meal= async(req,res)=>{

    try {

      console.log("inside meal method")
      const resp=await addMeal(req);
      res.status(200).send(resp);
    } catch (error) {
      res.status(500).send(error);
    }
    }



        
    

//Remove the red text on change
//if daata not found on ,login throws error
//fields empty