import React from "react"
import './globalcss/main.css';
import './globalcss/bootstrap.min.css';
import Header from "./header"

export default ({ children }) => (
<div>
  	<div className="container">
  	<Header />
  	{children}
  	</div>
 </div>
)