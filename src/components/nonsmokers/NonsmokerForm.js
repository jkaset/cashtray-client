// import React, { useContext, useRef, useEffect, useState } from "react"
// import {NonsmokerContext} from "./NonsmokerProvider"
// import { useHistory } from "react-router-dom"

// export const NonsmokerForm=(props)=>{
//   const {addNonsmokers, updateNonsmoker}=useContext(NonsmokerContext)
  
//   const [nonsmoker, setNonsmoker]=useState({})
  
//   const history = useHistory()
  
//   const changeNonsmokerState = (domEvent) => {
//     const newNonsmokerState = Object.assign({}, nonsmoker)
//     nonsmoker[domEvent.target.name] = domEvent.target.value
//     setNonsmoker(nonsmoker)
//   }

  


//   return(
//     <>
//       <h2>Welcome Future Nonsmoker</h2>
//       <p>Let's get a few details</p>
//       <form className="intakeForm">

//         <fieldset>
//           <label>Quit Date:</label> 
//           <input type="datetime-local" name="quit_date" required autoFocus className="form-control"
//                         value={nonsmoker.quit_date}
//                         onChange={changeNonsmokerState}
//                     />
//         </fieldset>

//         <fieldset>
//           <label>How many did/do you smoke per day:</label> 
//           <input type="text" pattern="[0-9]*" name="cigs_per_day" required autoFocus className="form-control"
//                         value={nonsmoker.cigs_per_day}
//                         onChange={changeNonsmokerState}
//                     />
//         </fieldset>

//         <fieldset>
//           <label>How many smokes are in a pack:</label> 
//           <input type="text" pattern="[0-9]*" name="cigs_per_pack" required autoFocus className="form-control"
//                         value={nonsmoker.cigs_per_pack}
//                         onChange={changeNonsmokerState}
//                     />
//         </fieldset>

//         <fieldset>
//           <label>Cost of one pack:</label> 
//           <input type="text" pattern="[0-9]*" name="price_per_pack" required autoFocus className="form-control"
//                         value={nonsmoker.price_per_pack}
//                         onChange={changeNonsmokerState}
//                     />
//         </fieldset>

//         <fieldset>
//           <label>When did you start smoking?</label> 
//           <input type="date" name="start_smoking_year" required autoFocus className="form-control"
//                         value={nonsmoker.start_smoking_year}
//                         onChange={changeNonsmokerState}
//                     />
//         </fieldset>


//         <button type="submit"
//           onClick={evt => {
//             evt.preventDefault()

//             const nonsmokerUser = {
                
//             quit_date: nonsmoker.quit_date,
//             cigs_per_day: nonsmoker.cigs_per_day,
//             cigs_per_pack: nonsmoker.cigs_per_pack,
//             price_per_pack: nonsmoker.price_per_pack,
//             start_smoking_year: nonsmoker.start_smoking_year
//             }
//             updateNonsmoker(nonsmokerUser)
//                 .then(() => history.push("/"))
//               }}
//                 className="btn btn-primary">Create Profile</button>

//       </form>
//     </>
//   )
// }



// // user = models.OneToOneField(User, on_delete=models.CASCADE)
// // quit_date = models.DateTimeField(auto_now=False, auto_now_add=False, null=True)
// // cigs_per_day = models.IntegerField(null=True)
// // price_per_pack = models.FloatField(null=True)
// // cigs_per_pack = models.IntegerField(null=True)
// // start_smoking_year = models.DateField(auto_now=False, auto_now_add=False, null=True)