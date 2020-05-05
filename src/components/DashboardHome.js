import React, {useState, Fragment} from 'react'

const DashboardHome = ()=>{
    return(
        <Fragment>
            <div class="welcome">
					<div class="container-fluid">
						<div class="row">
							<div class="col-md-12">
								<div class="content">
									<h2>Welcome to Dashboard</h2>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<section class="statistics">
					<div class="container-fluid">
						<div class="row">
							<div class="col-md-4">
								<div class="box">
									<i class="fa fa-envelope fa-fw bg-primary" />
									<div class="info">
										<h3>1,245</h3> <span>Emails</span>
										<p>Lorem ipsum dolor sit amet</p>
									</div>
								</div>
							</div>
							<div class="col-md-4">
								<div class="box">
									<i class="fa fa-file fa-fw danger" />
									<div class="info">
										<h3>34</h3> <span>Projects</span>
										<p>Lorem ipsum dolor sit amet</p>
									</div>
								</div>
							</div>
							<div class="col-md-4">
								<div class="box">
									<i class="fa fa-users fa-fw success" />
									<div class="info">
										<h3>5,245</h3> <span>Users</span>
										<p>Lorem ipsum dolor sit amet</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
        </Fragment>
    )
}

export default DashboardHome