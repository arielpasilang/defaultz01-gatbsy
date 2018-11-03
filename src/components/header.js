import React from "react"
import ReactNavbar from '../components/ReactNavbar'
import styles from "./header.module.css"


export default props =>(
	<div>
	<div className={styles.headertop}>
		<div className="row">
			<div className="col-5">0913258741</div>
			<div className="col-7 text-right">arielpasilang@gmail.com</div>
		</div>
	</div>
	<div className={styles.header}>
		<ReactNavbar />
	</div>
	</div>
	)