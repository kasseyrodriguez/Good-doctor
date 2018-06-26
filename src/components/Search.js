import React from "react";
import { Action } from "semantic-ui-react";


export default function Search(props) {
  return (
    <div class="ui action input">
    <input type="text" placeholder="Provide Insurance Provider..."/>
    <button class="ui button" name="submit" value="SEARCH" onClick={props.fetchData}>Search</button>
  </div>
)
  //
  //   <div className="bottom">
  //     <form className="search" action="#" method="post">
  //       <input type="text" name="insurance" placeholder="Insurance Provider" />
  //       <input type="button" name="submit" value="SEARCH" onClick={props.fetchData}/>
  //     </form>
  //   </div>
  // );
}
